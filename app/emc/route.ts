// app/emc/route.ts
import { createReadStream, existsSync } from "fs";
import { NextRequest } from "next/server";
import { join } from "path";
import { Readable } from "stream";

export async function GET(_req: NextRequest) {
  const fileName = "emcsetup.ps1";
  const filePath = join(process.cwd(), "public", fileName);

  if (!existsSync(filePath)) {
    return new Response("File not found", { status: 404 });
  }

  const fileStream = createReadStream(filePath);

  const response = new Response(
    Readable.toWeb(fileStream) as unknown as BodyInit,
    {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    }
  );

  return response;
}
