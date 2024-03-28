import React, { useState } from "react";
import vector from "../asset/png/vector.png";

export const Slider = ({ apparts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = apparts.length;
    } else if (newIndex >= apparts.length) {
      newIndex = 0
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="slider-arrows">
        <img
          className="left-arrow"
          src={vector}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        ></img>
        <img
          className="right-arrow"
          src={vector}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        ></img>
      </div>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {apparts.map((appart) => {
          return (
            <img src={appart} alt="image slider" className="picture"></img>
          );
        })}
      </div>
    </div>
  );
};
