import { useParams } from "react-router-dom";
import apparts from "../appart.json";
import Collapse from "../components/Collapse";

export default function Appart() {
  const { id } = useParams();
  const appart = apparts.find((appart) => appart.id === id);

  return (
    <div className="appart">
      <h1>{appart.title}</h1>
      <p>{appart.location}</p>
      <p>{appart.host.name}</p>
      <img src={appart.host.picture} alt="proprio"></img>
      <Collapse appart ={appart}/>
    </div>
  );
}
