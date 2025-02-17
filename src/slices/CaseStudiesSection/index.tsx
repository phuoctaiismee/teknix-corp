import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CaseStudiesSectionFeatures from "@/features/app/sections/case-studies";

/**
 * Props for `CaseStudiesSection`.
 */
export type CaseStudiesSectionProps =
  SliceComponentProps<Content.CaseStudiesSectionSlice>;

/**
 * Component for "CaseStudiesSection" Slices.
 */
const CaseStudiesSection: FC<CaseStudiesSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CaseStudiesSectionFeatures {...slice} />
    </section>
  );
};

export default CaseStudiesSection;
