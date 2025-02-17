import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PreviousNewsSectionFeatures from "@/features/news/sections/previous";

/**
 * Props for `PreviousNew`.
 */
export type PreviousNewProps = SliceComponentProps<Content.PreviousNewSlice>;

/**
 * Component for "PreviousNew" Slices.
 */
const PreviousNew: FC<PreviousNewProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PreviousNewsSectionFeatures {...slice} />
    </section>
  );
};

export default PreviousNew;
