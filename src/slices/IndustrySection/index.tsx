import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import IndustrySectionFeatures from "@/features/app/sections/industry";

/**
 * Props for `IndustrySection`.
 */
export type IndustrySectionProps =
  SliceComponentProps<Content.IndustrySectionSlice>;

/**
 * Component for "IndustrySection" Slices.
 */
const IndustrySection: FC<IndustrySectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <IndustrySectionFeatures {...slice} />
    </section>
  );
};

export default IndustrySection;
