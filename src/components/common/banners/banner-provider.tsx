"use client";
import { Content, PrismicDocument } from "@prismicio/client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface BannerContextProps {
  isBannerVisible: boolean;
  hideBanner: () => void;
  initialLocale: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name?: string;
  })[];
  language: string;
  settings: Content.SettingsDocument;
}

const BannerContext = createContext<BannerContextProps | undefined>(undefined);
const DEFAULT_BANNER_STATE = true;
export const BannerProvider: React.FC<{
  initialLocale: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name?: string;
  })[];
  children: React.ReactNode;
  language: string;
  settings: Content.SettingsDocument;
}> = ({ initialLocale, children, language, settings }) => {
  const [isBannerVisible, setIsBannerVisible] =
    useState<boolean>(DEFAULT_BANNER_STATE);

  useEffect(() => {
    if (!isBannerVisible) {
      sessionStorage.setItem("bannerDismissed", "true");
    }
  }, [isBannerVisible]);

  const hideBanner = () => setIsBannerVisible(false);

  return (
    <BannerContext.Provider
      value={{ isBannerVisible, hideBanner, initialLocale, language, settings }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export const useBanner = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner must be used within a BannerProvider");
  }
  return context;
};
