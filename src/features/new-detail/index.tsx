import HeroNewSection from "@/components/common/sections/hero/hero-new";
import NewsContainer from "./components/container";
import { getPostBySlug } from "@/actions/news";

interface NewDetailFeaturesProps {
  slug: string;
  locale: string;
}
const NewDetailFeatures = async ({ slug, locale }: NewDetailFeaturesProps) => {
  const data = await getPostBySlug(slug);
  return (
    <div className="flex flex-col">
      <HeroNewSection />
      <NewsContainer {...data} />
    </div>
  );
};

export default NewDetailFeatures;
