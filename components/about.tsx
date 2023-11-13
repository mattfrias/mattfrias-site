"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        My passion for programming ignited in 2017, and since then, I&apos;ve
        been on a continuous quest to expand my knowledge. Initially, I honed my
        skills by creating a website for a local{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://bubblesngolaundry.com"
          target="_blank"
        >
          laundromat
        </a>{" "}
        using{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://wordpress.com"
          target="_blank"
        >
          WordPress
        </a>
        . However, I&apos;m now diving deep into the world of modern web
        development, with a focus on{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://react.dev"
          target="_blank"
        >
          React
        </a>{" "}
        and{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://nextjs.org"
          target="_blank"
        >
          Next.js
        </a>
        . The dynamic and interactive nature of these technologies has opened up
        exciting new possibilities for my projects.
      </p>
      <p>
        When I&apos;m not doing schoolwork, you&apos;ll find me tinkering away
        on my <span className="font-medium">Homelab</span> and working on
        various tech-related projects. It&apos;s a creative outlet where I
        experiment with new technologies and build things that spark my
        curiosity. Beyond the digital realm, I have a penchant for{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://instagram.com/frias.jpg"
          target="_blank"
        >
          photography
        </a>
        , capturing moments that tell stories. I&apos;m also an avid{" "}
        <a
          className="font-medium transition hover:text-primary"
          href="https://formula1.com"
          target="_blank"
        >
          Formula 1
        </a>{" "}
        fan and <span className="font-medium">car enthusiast</span>, reveling in
        the symphony of sounds that machines make. And, of course, I can&apos;t
        resist the thrill of <span className="font-medium">gaming</span> with
        the boys, just having a good time and making memories.
      </p>
    </motion.section>
  );
}
