"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const ImageService = ({ field }: { field: ImageField<never> }) => {
  return (
    <motion.div
      className="transition-transform w-full max-w-[570px] h-full max-h-[668px]"
      animate={{
        x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40],
        y: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <PrismicNextImage
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        field={field}
        className="object-cover"
      />
    </motion.div>
  );
};

export default ImageService;
