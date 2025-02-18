import ScrollProgressBar from "@/components/common/scrollbar/top-scrollbar";
import { AppProvider } from "@/providers/app-provider";
import { IGlobalLayoutProps } from "@/types";
import NextTopLoader from "nextjs-toploader";

const GlobalRootLayout = async ({ children }: IGlobalLayoutProps) => {
  return (
    <AppProvider>
      {children}
      <ScrollProgressBar color="#132163" type="bar" />
      <NextTopLoader showSpinner={false} />
    </AppProvider>
  );
};

export default GlobalRootLayout;
