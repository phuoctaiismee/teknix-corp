import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import VolunteerSectionFeatures from "@/features/app/sections/volunteer";

/**
 * Props for `VolunteerSection`.
 */
export type VolunteerSectionProps =
  SliceComponentProps<Content.VolunteerSectionSlice>;

/**
 * Component for "VolunteerSection" Slices.
 */
const VolunteerSection: FC<VolunteerSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <VolunteerSectionFeatures {...slice} />
    </section>
  );
};

export default VolunteerSection;
