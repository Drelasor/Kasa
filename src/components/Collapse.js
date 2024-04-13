import { useState} from "react";
import vector from "../asset/png/vector.png";

export default function Collapse({ title, content }) {
  const [close, setClose] = useState(true);

  // change etat
  const handleToggle = () => {
    setClose(!close);
  };

  return (
    <div className="collapse">
      <div className="collapse-button" onClick={handleToggle}>
        <h2>{title}</h2>
        <img
          src={vector}
          alt="fleche"
          className={`arrow ${close ? "close" : ""}`}
        ></img>
      </div>
      <div className={`content ${close ? "close" : ""}`}>
        <p className="text-content">{content}</p>
      </div>
    </div>
  );
}
