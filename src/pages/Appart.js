import { useParams, useNavigate } from "react-router-dom";
import apparts from "../appart.json";
import Collapse from "../components/Collapse";
import { Slider } from "../components/Slider";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import { useEffect, useState } from "react";
import Menu from "../components/Menu"

export default function Appart() {
  const [appart, setAppart] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const pickedAppart = apparts.find((appart) => appart.id === id);

    if (!pickedAppart) {
      navigate("/error");
    } else {
      setAppart(pickedAppart);
    }
  }, [id]);

  return (
    <>
      {appart && (
        <div className="appart">
          <Menu />
          <Slider apparts={appart.pictures} />
          <div className="main">
            <div className="txt-section">
              <div className="left">
                <h1>{appart.title}</h1>
                <p className="localisation">{appart.location}</p>
                <div className="appart-tag">
                  {appart.tags.map((tag, index) => (
                    <Tag key={index} value={tag} />
                  ))}
                </div>
              </div>
              <div className="right">
                <div className="appart-host">
                  <p>{appart.host.name}</p>
                  <img
                    className="circle"
                    src={appart.host.picture}
                    alt="proprio"
                  ></img>
                </div>
                <Rating rating={appart.rating} />
              </div>
            </div>

            <div className="appart-collapse">
              <Collapse title={"Description"} width="50%">
                <p>{appart.description}</p>
              </Collapse>
              <Collapse title={"Equipement"} width="50%">
                <ul className="equipment-list">
                  {appart.equipments.map((elem, index) => (
                    <li key={index}>{elem}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
