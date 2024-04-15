import {useState } from "react";
import vector from "../asset/png/vector.png";

export default function Collapse({ title, children, width, margin }) {
  const [close, setClose] = useState(true);

  const handleToggle = () => {
    setClose(!close);
  };


  return (
    <div className="collapse" style={{ width: width, margin: margin }}>
      <div className="collapse-button" >
        <h2>{title}</h2>
        <img
          src={vector}
          alt="fleche"
          className={`arrow ${close ? "close" : ""}`} onClick={handleToggle}
        ></img>
      </div>
      <div className={`content ${close ? "close" : ""}`}>
        <div className="text-content">{children}</div>
      </div>
    </div>
  );
}
