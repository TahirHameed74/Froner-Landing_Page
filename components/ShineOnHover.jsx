import React from "react";

const ShineOnHover = ({ onClick, className, text }) => {
  return (
    <div onClick={onClick} className={`shine ${className} `}>
      {text}
    </div>
  );
};

export default ShineOnHover;
