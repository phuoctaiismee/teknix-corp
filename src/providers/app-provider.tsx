import { IGlobalLayoutProps } from "@/types";
import StoreProvider from "./store-provider";
import { ThemeProvider } from "./theme-provider";
import LenisProvider from "./lenis-provider";
import AOSProvider from "./aos-provider";

export const AppProvider = ({ children }: IGlobalLayoutProps) => {
  return (
    <StoreProvider>
      <LenisProvider>
        <AOSProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        </AOSProvider>
      </LenisProvider>
    </StoreProvider>
  );
};
