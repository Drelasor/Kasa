import { useParams, useNavigate } from "react-router-dom"
import apparts from "../appart.json"
import Collapse from "../components/Collapse"
import { Slider } from "../components/Slider"
import Rating from "../components/Rating"
import Tag from "../components/Tag"
import { useEffect, useState } from "react"

export default function Appart() {
  const [appart, setAppart] = useState(null)
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const pickedAppart = apparts.find((appart) => appart.id === id)

    if (!pickedAppart) {
      navigate("/error")
    } else {
      setAppart(pickedAppart)
    }
  }, [id])

  return (
    <>
      {appart && (
        <div className="appart">
          <Slider apparts={appart.pictures} />
          <div className="appart-title">
            <h1>{appart.title}</h1>
            <div className="appart-host">
              <p>{appart.host.name}</p>
              <img
                className="circle"
                src={appart.host.picture}
                alt="proprio"
              ></img>
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
      )}
    </>
  )
}