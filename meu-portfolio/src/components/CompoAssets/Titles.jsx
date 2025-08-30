import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";

const Titles = ({ text }) => {
  return (
    <div className="Bio_Title">
      <h1>{text}</h1>
    </div>
  );
};
export default Titles;
