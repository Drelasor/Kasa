import Card from "../components/Card";
import data from "../appart.json";

export default function Home() {
return(
    <div className="home">
        <div className="text">
        <img></img>
        <h1>chez vous partout et ailleurs</h1>
        </div>
        <div className="infocard">
      {data.map(appart => (
         <Card key={appart.id}  imgUrl={appart.cover} title={appart.title}/>
      ))}
     </div>
    </div>
)
}