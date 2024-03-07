import Card from "../components/Card";
import data from "../appart.json";

export default function Home() {
return(
    <div className="home">
        <h1>chez vous partout et ailleurs</h1>
        <div className="infocard">
      {data.map(appart => (
         <Card key={appart.id}  photoUrl={appart.cover} titre={appart.title}/>
      ))}
     </div>
    </div>
)
}