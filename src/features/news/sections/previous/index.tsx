
import { Content } from "@prismicio/client";

import MainContentPreviousNews from "./components/main-content";

const PreviousNewsSectionFeatures = ({ primary }: Content.PreviousNewSlice) => {
 

  return (
    <div className="flex items-center justify-center py-12 lg:py-20 overflow-hidden">
        <MainContentPreviousNews {...primary}/>
    </div>
  );
};

export default PreviousNewsSectionFeatures;
