"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
      ref={ref}
    >
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey I&apos;m Matt.</span> I&apos;m a{" "}
        <span className="font-bold">full-time student</span> studying{" "}
        <span className="font-bold">CompSci</span> at the{" "}
        <span className="font-bold">University of Connecticut</span>. I enjoy
        building <span className="italic">sites & apps</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          className="group flex cursor-pointer items-center gap-1.5 rounded-xl border-black/10 bg-primary bg-opacity-20 px-4 py-3 text-primary outline-none transition hover:scale-110 hover:bg-opacity-30 focus:scale-110 active:scale-105"
          href="/MatthewFriasResume.pdf"
          download
        >
          <HiDownload className="transition group-hover:-translate-x-[0.05rem]" />
          Resume
        </a>
        <a
          className="group flex cursor-pointer items-center gap-1.5 rounded-xl border-black/10 bg-[#0a66c2] bg-opacity-10 px-4 py-3 text-[#0a66c2] outline-none transition hover:scale-110 hover:bg-opacity-20 focus:scale-110 active:scale-105 dark:brightness-[1.5]"
          href="https://www.linkedin.com/in/mattfrias/"
          target="_blank"
        >
          <FaLinkedinIn className="text-[1.35rem] transition group-hover:-translate-x-[0.05rem]" />
          LinkedIn
        </a>
        <a
          className="group flex cursor-pointer items-center gap-1.5 rounded-xl border-black/10 bg-black bg-opacity-10 px-4 py-3 text-black outline-none transition hover:scale-110 hover:bg-opacity-20 focus:scale-110 active:scale-105 dark:bg-[#c6e2fd] dark:bg-opacity-10 dark:text-[#c6e2fd] dark:hover:bg-opacity-20"
          href="https://github.com/mattfrias"
          target="_blank"
        >
          <FaGithub className="text-[1.35rem] transition group-hover:-translate-x-[0.05rem]" />
          Github
        </a>
        <a
          className="group flex cursor-pointer items-center gap-1.5 rounded-xl border-black/10 bg-[#833ab4] bg-opacity-10 px-4 py-3 text-[#833ab4] outline-none transition hover:scale-110 hover:bg-opacity-20 focus:scale-110 active:scale-105 dark:brightness-[1.5]"
          href="https://instagram.com/mattfrias_"
          target="_blank"
        >
          <FaInstagram className="text-[1.35rem] transition group-hover:-translate-x-[0.05rem]" />
          Instagram
        </a>
      </motion.div>
    </section>
  );
}
