"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import PhotoAlbum from "react-photo-album";
import NextImage from "@/components/next-image";
import { photosData } from "@/lib/data";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Photography() {
  const { ref } = useSectionInView("Photography", 0.3);
  const [index, setIndex] = useState(-1);

  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const photos = photosData.map((photo) => ({
    src: `/gallery/${photo.name}`,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: `gallery/${photo.name}`,
        width: breakpoint,
        height,
      };
    }),
  }));

  return (
    <section
      id="photography"
      ref={ref}
      className="mb-28 max-w-[1400px] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Photography</SectionHeading>

      <div className="mb-10 w-[400px] items-center justify-center sm:w-[600px] md:w-[800px] lg:w-[950px] xl:w-[1200px]">
        <PhotoAlbum
          layout="columns"
          columns={(containerWidth) => {
            if (containerWidth < 800) return 2;
            if (containerWidth < 1100) return 3;
            return 4;
          }}
          photos={photos}
          renderPhoto={NextImage}
          defaultContainerWidth={1200}
          onClick={({ index }) => setIndex(index)}
          sizes={{
            size: "calc(100vw - 40px)",
            sizes: [
              { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
              { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
              { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
            ],
          }}
        />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        />
      </div>

      <motion.div
        className="flex items-center justify-center px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          className="flex cursor-pointer items-center gap-1.5 rounded-xl border-black/10 bg-primary bg-opacity-20 px-4 py-3 text-primary outline-none transition hover:scale-110 hover:bg-opacity-30 focus:scale-110 active:scale-105"
          href="https://photos.app.goo.gl/7i8kQgyx1Yq88frv9"
          download
        >
          <HiArrowRight className="transition group-hover:-translate-x-[0.05rem]" />
          See More
        </a>
      </motion.div>
    </section>
  );
}
