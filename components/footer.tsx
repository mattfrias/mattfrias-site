import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Matthew Frias. All rights reserved.
      </small>
      <p className="text-xs">
        Built with{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://nextjs.org"
        >
          Next.js
        </a>
        ,{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://www.typescriptlang.org/"
        >
          TypeScript
        </a>
        ,{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://tailwindcss.com"
        >
          Tailwind CSS
        </a>
        , and{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://www.framer.com/motion/"
        >
          Framer Motion
        </a>
        . Coded in{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://code.visualstudio.com"
        >
          Visual Studio Code
        </a>{" "}
        and hosted on{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://docker.com"
        >
          Docker
        </a>
        .
      </p>
    </footer>
  );
}
