import React from "react";
import "./scroll.css";

const Scroll = ({ position }) => {
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const sPercentage =height>0? (position / height) * 100:0;
  return (
    <div className="scroll-container">
      <div className="scroll-bar" style={{ width: `${sPercentage}%` }}></div>
    </div>
  );
};

export default Scroll;
