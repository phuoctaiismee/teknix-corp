import { useRef, useEffect } from "react";

const VideoPlayer = ({
  video,
  isActive,
  isHidden,
}: {
  video: string;
  isActive: boolean;
  isHidden: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset video khi không active
      }
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[8px]">
      <video
        ref={videoRef}
        src={video}
        muted
        autoPlay={isActive}
        playsInline
        loop
        className="w-full h-full object-cover"
        style={{ visibility: isHidden ? "hidden" : "visible" }}
      />
    </div>
  );
};

export default VideoPlayer;
