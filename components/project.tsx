"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[21rem] sm:pr-8 sm:group-even:pl-8">
        <a href={link}>
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-black/[0.8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute right-0 top-0 hidden w-[20rem] drop-shadow-2xl transition
            group-even:left-0 
            group-even:right-[initial]
            sm:block"
          />
        </a>
      </section>
    </motion.div>
  );
}
