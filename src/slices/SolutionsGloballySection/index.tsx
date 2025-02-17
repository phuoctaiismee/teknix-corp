import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SolutionSection from "@/features/app/sections/solution";

/**
 * Props for `SolutionsGloballySection`.
 */
export type SolutionsGloballySectionProps =
  SliceComponentProps<Content.SolutionsGloballySectionSlice>;

/**
 * Component for "SolutionsGloballySection" Slices.
 */
const SolutionsGloballySection: FC<SolutionsGloballySectionProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SolutionSection {...slice} />
    </section>
  );
};

export default SolutionsGloballySection;
