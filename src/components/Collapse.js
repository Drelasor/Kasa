import { useState } from "react";
import vector from "../asset/png/vector.png";
export default function Collapse({ appart }) {
  const [active,setActive] = useState(false)

  const handleToggle = () =>{
   setActive(!active)
  }
  return (
     <div className={`accordion ${active && "active"}`}>
      <div className="title" onClick={handleToggle}>
        <h2>Description</h2>
        <img src={vector} alt="fleche" className="arrow"></img>
        </div>
      <div className="content">{appart.description}</div>
     </div>
  );
}
