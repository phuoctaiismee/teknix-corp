import Orb from "../background/hue-orb";
import Squares from "../background/square-move";

const GlobalLoading = () => {
  return (
    // <Squares
    //   speed={0.5}
    //   squareSize={40}
    //   direction="diagonal" // up, down, left, right, diagonal
    //   borderColor="#fff"
    //   hoverFillColor="#222"
    // />
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center max-w-sm">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
        <h2 className="text-white text-lg lg:text-xl font-bold">Loading...</h2>
      </div>
    </div>
  );
};

export default GlobalLoading;
