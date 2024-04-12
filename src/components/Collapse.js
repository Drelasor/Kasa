import { useMemo, useRef, useState } from "react";
import vector from "../asset/png/vector.png";
export default function Collapse({ title, content }) {
  const CollapseDiv = useRef(null);
  const [close, setClose] = useState(true);

  // change etat
  const handleToggle = () => {
    setClose(!close);
  };

  let CollapseDivOffsetHeight = useMemo(() => {
    return CollapseDiv.current?.scrollHeight ?? 0;
  }, [CollapseDiv.current]);

  return (
    <div className= "collapse">
      <div className="collapse_title" onClick={handleToggle}>
        <h2>{title}</h2>
        <img src={vector} alt="fleche" className={`arrow ${close ? "close" : ""}`}></img>
      </div>
      <div
        ref={CollapseDiv}
        className="content"
        style={{
          maxHeight: `${close ? 0 : CollapseDivOffsetHeight}px`,
        }}
      >
        {content}
      </div>
    </div>
  );
}

//<div className={`collapse ${close ? "close" : ""}`}>