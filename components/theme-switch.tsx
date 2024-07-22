"use client";

import React, { useState, useEffect } from "react";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] transform-gpu items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[1rem] transition-all hover:bg-gray-200 active:scale-110 dark:border-gray-950 dark:bg-gray-950 dark:hover:bg-opacity-40"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <HiSun className="h-[1.5rem] w-[1.5rem] text-primary" />
      ) : (
        <HiMoon className="h-[1.5rem] w-[1.5rem] text-purple-500" />
      )}
    </button>
  );
}
