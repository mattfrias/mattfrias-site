// app/emc/route.ts
import { createReadStream, existsSync, readFileSync } from "fs";
import { NextRequest } from "next/server";
import { join } from "path";
import { Readable } from "stream";

const VALID_TOKEN = process.env.EMC_DL_TOKEN;
const ATERA_URL = process.env.ATERA_URL;

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("tok");
  const isSplashtop = req.nextUrl.searchParams.get("splashtop") === "1";

  if (token !== VALID_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  const fileName = isSplashtop ? "splashtop.exe" : "emcsetup.ps1";
  const filePath = join(process.cwd(), "public", fileName);

  if (!existsSync(filePath)) {
    return new Response("File not found", { status: 404 });
  }

  // Serve binary for Splashtop
  if (isSplashtop) {
    const fileStream = createReadStream(filePath);
    return new Response(Readable.toWeb(fileStream) as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  }

  // Read PowerShell script and replace placeholders
  let script = readFileSync(filePath, "utf8");
  script = script
    .replace(/{{TOKEN}}/g, token!)
    .replace(/{{ATERA_URL}}/g, ATERA_URL ?? "");

  return new Response(script, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": `attachment; filename="emcsetup.ps1"`,
    },
  });
}
