import { IGlobalLayoutProps } from "@/types";
import ReactLenis from "lenis/react";

const LenisProvider = ({ children }: IGlobalLayoutProps) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisProvider;
