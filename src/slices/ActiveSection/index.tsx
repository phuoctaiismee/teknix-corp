import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ActiveSectionFeatures from "@/features/app/sections/active";

/**
 * Props for `ActiveSection`.
 */
export type ActiveSectionProps =
  SliceComponentProps<Content.ActiveSectionSlice>;

/**
 * Component for "ActiveSection" Slices.
 */
const ActiveSection: FC<ActiveSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ActiveSectionFeatures {...slice} />
    </section>
  );
};

export default ActiveSection;
