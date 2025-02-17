import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import NewAndMediaSectionFeatures from "@/features/app/sections/new-and-media";

/**
 * Props for `NewMediaSection`.
 */
export type NewMediaSectionProps =
  SliceComponentProps<Content.NewMediaSectionSlice>;

/**
 * Component for "NewMediaSection" Slices.
 */
const NewMediaSection: FC<NewMediaSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <NewAndMediaSectionFeatures {...slice} />
    </section>
  );
};

export default NewMediaSection;
