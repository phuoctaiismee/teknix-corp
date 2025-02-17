import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import EventsSectionFeatures from "@/features/app/sections/events";

/**
 * Props for `EventSection`.
 */
export type EventSectionProps = SliceComponentProps<Content.EventSectionSlice>;

/**
 * Component for "EventSection" Slices.
 */
const EventSection: FC<EventSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <EventsSectionFeatures {...slice} />
    </section>
  );
};

export default EventSection;
