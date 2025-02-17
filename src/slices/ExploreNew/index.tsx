import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ExploreNewSectionFeatures from "@/features/news/sections/explore";

/**
 * Props for `ExploreNew`.
 */
export type ExploreNewProps = SliceComponentProps<Content.ExploreNewSlice>;

/**
 * Component for "ExploreNew" Slices.
 */
const ExploreNew: FC<ExploreNewProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ExploreNewSectionFeatures {...slice} />
    </section>
  );
};

export default ExploreNew;
