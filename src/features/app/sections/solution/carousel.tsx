"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Content, isFilled } from "@prismicio/client";
import VideoPlayer from "./video-player";
import { MediaModal } from "@/components/custom/media/modal-media";

const CarouselSolution = ({
  carousel,
}: {
  carousel: Content.SolutionsGloballySectionSliceDefaultPrimaryCarouselItem[];
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCarousel = carousel.filter(
    (item) => item && isFilled.linkToMedia(item.media)
  );

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCarousel.length);
  };

  const carouselItems = filteredCarousel.map((item, index) => {
    const position =
      (index - currentIndex + filteredCarousel.length) %
      filteredCarousel.length;
    const scale = 1 - position * 0.1;
    const translateX = position * (isMobile ? 40 : 190);
    const isActive = position === 0;

    const video =
      isFilled.linkToMedia(item.media) && item.media.kind === "file"
        ? item.media
        : null;
    const image =
      isFilled.linkToMedia(item.media) && item.media.kind === "image"
        ? item.media
        : null;

    return (
      <div
        key={index}
        className="absolute top-0 left-0 w-[281px] md:w-[980px] h-[343px] md:h-[550px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          transform: `translateX(${translateX}px) scale(${scale})`,
          opacity: position > 2 ? 0 : 1,
          zIndex: filteredCarousel.length - position,
        }}
      >
        {video ? (
          <VideoPlayer
            video={video.url}
            isActive={isActive}
            isHidden={position > 2}
          />
        ) : image ? (
          <div className="relative w-full h-full overflow-hidden rounded-[8px]">
            <Image
              src={image.url}
              alt={image.text ?? ""}
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    );
  });

  return (
    <div className="relative w-full h-[343px] md:h-[550px] overflow-hidden">
      {carouselItems}
      <Button
        size="icon"
        variant="ghost"
        onClick={handleNextSlide}
        className="absolute top-1/2 -translate-y-1/2 z-10 size-[60px] rounded-full right-4 bg-gradient-to-r from-slate-200/0 via-slate-300/10 to-slate-500/30 backdrop-blur-[24px] [&_svg]:size-5 text-white"
      >
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
};

export default CarouselSolution;
