import React, { useState } from "react";
import vector from "../asset/png/vector.png";

export const Slider = ({ apparts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    setActiveIndex((newIndex + apparts.length) % apparts.length);
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
        />
        <img
          className="right-arrow"
          src={vector}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {apparts.map((appart,index) => {
          return (
            <div key={index} className="picture">
              <img src={appart} alt="image slider" className="picture"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
