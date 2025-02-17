import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import LatestNewsSectionFeatures from "@/features/news/sections/latest";

/**
 * Props for `LatestNews`.
 */
export type LatestNewsProps = SliceComponentProps<Content.LatestNewsSlice>;

/**
 * Component for "LatestNews" Slices.
 */
const LatestNews: FC<LatestNewsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <LatestNewsSectionFeatures {...slice} />
    </section>
  );
};

export default LatestNews;
