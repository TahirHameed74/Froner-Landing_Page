import React from "react";

const BigVideo = ({ srcMob, srcDesk }) => {
  return (
    <div className="w-[100vw]  h-full">
      <video className="hidden lg:block" autoPlay loop muted playsInline>
        <source type="video/mp4" src={srcDesk} />
      </video>
      <video className="block  lg:hidden" autoPlay loop muted playsInline>
        <source type="video/mp4" src={srcMob} />
      </video>
    </div>
  );
};

export default BigVideo;
