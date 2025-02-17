import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AboutSectionFeatures from "@/features/app/sections/about";

/**
 * Props for `AboutUsSection`.
 */
export type AboutUsSectionProps =
  SliceComponentProps<Content.AboutUsSectionSlice>;

/**
 * Component for "AboutUsSection" Slices.
 */
const AboutUsSection: FC<AboutUsSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutSectionFeatures {...slice} />
    </section>
  );
};

export default AboutUsSection;
