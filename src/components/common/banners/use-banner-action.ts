import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export const useBannerAction = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    // Kiểm tra trạng thái banner trong localStorage sau khi render trên client
    const bannerHidden = sessionStorage.getItem("bannerHidden");
    if (bannerHidden) {
      setIsBannerVisible(false);
    }
  }, []);
  useEffect(() => {
    const locale = sessionStorage.getItem("locale");
    const currentLocale =
      window.location.pathname.split("/")[1] === "vi" ? "vi" : "en";
    console.log("🚀 ~ useEffect ~ currentLocale:", currentLocale);
    if (locale !== currentLocale) {
      sessionStorage.setItem("locale", currentLocale);
    }
  }, [pathname]);
  const hideBanner = () => {
    setIsBannerVisible(false);
    sessionStorage.setItem("bannerHidden", "true");
  };

  return {
    isBannerVisible,
    hideBanner,
  };
};
