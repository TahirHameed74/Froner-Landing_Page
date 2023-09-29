import React from "react";

const ProjectCard = ({ src, desc, video }) => {
  return (
    <div className="lg:h-[100vh] w-[100vw] md:h-[40vh] md:flex">
      <div className="flex-[1] p-4 lg:p-7 flex items-end ">
        <p className="lg:w-[75%]">{desc}</p>
      </div>
      <div className="flex-[1]">
        {src && (
          <img
            className="lg:min-w-full lg:min-h-full object-cover "
            src={src}
          />
        )}
        {video && (
          <div className="min-h-full object-cover min-w-full ">
            <video
              className="min-w-full min-h-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source type="video/mp4" src={video} />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
