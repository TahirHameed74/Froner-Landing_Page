import React from "react";

const SideBySide = ({ src1, src2, video }) => {
  return (
    <div className="w-full mt-4 mb-2 gap-4  flex">
      {video && (
        <div className="flex-[1]">
          <video
            className="w-full h-[200px] md:h-[270px] lg:h-[500px] object-cover  "
            autoPlay
            loop
            muted
            playsInline
          >
            <source type="video/mp4" src={video} />
          </video>
        </div>
      )}
      {src1 && (
        <div className="flex-[1]  ">
          <img
            className="w-full h-[200px] md:h-[270px] lg:h-[500px] object-cover  "
            src={src1}
          />
        </div>
      )}
      <div className="flex-[1]">
        <img
          className="w-full h-[200px] md:h-[270px] lg:h-[500px] object-cover "
          src={src2}
        />
      </div>
    </div>
  );
};

export default SideBySide;
