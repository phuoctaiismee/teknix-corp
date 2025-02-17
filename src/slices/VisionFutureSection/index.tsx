import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import VisionForFutureSection from "@/features/app/sections/vision";

/**
 * Props for `VisionFutureSection`.
 */
export type VisionFutureSectionProps =
  SliceComponentProps<Content.VisionFutureSectionSlice>;

/**
 * Component for "VisionFutureSection" Slices.
 */
const VisionFutureSection: FC<VisionFutureSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <VisionForFutureSection {...slice} />
    </section>
  );
};

export default VisionFutureSection;
