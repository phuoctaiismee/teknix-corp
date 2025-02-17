import Bounded from "../../containers/bounded";
import BreadcrumbNews from "@/features/app/sections/hero/breadcrumb";
import Heading from "../../typography/heading";
import { createClient } from "@/prismicio";
const HeroNewSection = async () => {
  const hero = await createClient().getByUID("page", "news", {
    graphQuery: `
     {
      page {
        slices {
          ... on hero_section {
            variation {
              ... on heroNews {
                primary {
              ...primaryFields
                }
              }
            }
          }
        }
      }
    }
  `,
  });

  const background =
    hero.data.slices[0]?.variation === "heroNews"
      ? hero.data.slices[0]?.primary.background.url
      : "";

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="h-[600px] md:h-[650px] bg-cover bg-no-repeat bg-center"
    >
      <Bounded className="flex items-center h-full">
        <div className="flex flex-col gap-2">
          <BreadcrumbNews />
          <Heading className="font-bold text-white leading-[37px] md:leading-[57px] text-[32px] md:text-5xl">
            Teknix News
          </Heading>
        </div>
      </Bounded>
    </div>
  );
};

export default HeroNewSection;
