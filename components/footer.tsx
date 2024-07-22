"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Footer() {
  const [commitHash, setCommitHash] = useState("");

  const fetchCommitHash = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/repos/mattfrias/mattfrias-site/commits/main"
      );
      setCommitHash(response.data.sha.substring(0, 7));
    } catch (error) {
      console.error("error fetching commit hash");
    }
  };

  useEffect(() => {
    fetchCommitHash();
  }, []);

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} All rights reserved. &mdash;{" "}
        <a
          href="https://github.com/mattfrias/mattfrias-site"
          className="font-medium transition hover:text-primary"
          target="_blank"
        >
          Matthew Frias (v2, {commitHash || "#######"})
        </a>
      </small>
      <p className="text-xs">
        Built with{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://nextjs.org"
          target="_blank"
        >
          Next.js
        </a>
        ,{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          TypeScript
        </a>
        ,{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://tailwindcss.com"
          target="_blank"
        >
          Tailwind CSS
        </a>
        , and{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://www.framer.com/motion/"
          target="_blank"
        >
          Framer Motion
        </a>
        . Coded in{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://code.visualstudio.com"
          target="_blank"
        >
          Visual Studio Code
        </a>{" "}
        and hosted on{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://docker.com"
          target="_blank"
        >
          Docker
        </a>
        .
      </p>
    </footer>
  );
}
