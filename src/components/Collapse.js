import { useMemo, useRef, useState } from "react";
import vector from "../asset/png/vector.png";
export default function Collapse({ appart }) {
  const CollapseDiv = useRef(null);
  const [close, setClose] = useState(true);

  const handleToggle = () => {
    setClose(!close);
  };

  let CollapseDivOffsetHeight = useMemo(() => {
    return CollapseDiv.current?.scrollHeight ?? 0;
  }, [CollapseDiv.current]);

  return (
    <div className={`collapse ${close ? "close" : ""}`}>
      <div className="collapse_title" onClick={handleToggle}>
        <h2>Description</h2>
        <img src={vector} alt="fleche" className="arrow"></img>
      </div>
      <div
        ref={CollapseDiv}
        className="content"
        style={{ maxHeight: `${CollapseDivOffsetHeight}px` }}
      >
        {appart.description}
      </div>
    </div>
  );
}
