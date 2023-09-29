import React from "react";

const Project = ({ index, title, setModal, number, width }) => {
  return (
    <div className={`w-[${width}] `}>
      <div
        className={`flex w-full justify-between  border border-black  items-center`}
      >
        <div>{number}</div>
        <div
          onMouseLeave={() => setModal({ active: false, index })}
          onMouseEnter={() => setModal({ active: true, index })}
          className="text-start text-6xl"
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Project;
