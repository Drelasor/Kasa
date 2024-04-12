import { useParams } from "react-router-dom";
import apparts from "../appart.json";
import Collapse from "../components/Collapse";
import { Slider } from "../components/Slider";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import { useNavigate } from "react-router-dom";

export default function Appart() {
  const { id } = useParams();
  const appart = apparts.find((appart) => appart.id === id);

  const navigate = useNavigate()

    if (!appart){
       return navigate(window.origin + "/error")
    } 

  return (
    <div className="appart">
      <Slider apparts={appart.pictures} />
      <div className="appart-title">
        <h1>{appart.title}</h1>
        <div className="appart-host">
          <p>{appart.host.name}</p>
          <img className="circle" src={appart.host.picture} alt="proprio"></img>
        </div>
      </div>
      <p>{appart.location}</p>
      <div className="tag-rating">
        <div className="appart-tag">
          {appart.tags.map((tag, index) => (
            <Tag key={index} value={tag} />
          ))}
        </div>
        <div className="appart-rating">
          <Rating rating={appart.rating} />
        </div>
      </div>
      <div className="appart-collapse">
        <Collapse title={"Description"} content={appart.description} />
        <Collapse title={"Equipement"} content={appart.equipments} />
      </div>
    </div>
  );
}
