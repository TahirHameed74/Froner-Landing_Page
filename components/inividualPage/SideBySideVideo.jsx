import React from "react";

const SideBySideVideo = ({ src1, src2 }) => {
  return (
    <div className="w-full mt-4 mb-4 gap-4  flex">
      <div className="flex-[1]">
        <video
          className="w-full h-[200px] md:h-[270px] lg:h-screen object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source type="video/mp4" src={src1} />
        </video>
      </div>
      <div className="flex-[1]">
        <video
          className="w-full h-[200px] md:h-[270px] lg:h-screen object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source type="video/mp4" src={src2} />
        </video>
      </div>
    </div>
  );
};

export default SideBySideVideo;
