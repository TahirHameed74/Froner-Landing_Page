import React from "react";

const FooterShine = ({ text, className, onClick }) => {
  return (
    <div onClick={onClick} className={` ${className} `}>
      {text}
    </div>
  );
};

export default FooterShine;
