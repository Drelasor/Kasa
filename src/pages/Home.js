import Card from "../components/Card";
import Appartment from "../components/Appartment";
import data from "../appart.json";



export default function Home() {
return(
    <div className="home">
        <h1>chez vous partout et ailleurs</h1>
        <div className="infocard">
      {data.map(appart => (
         <Card key={appart.id}>
         <Appartment photoUrl={appart.cover} titre={appart.title}></Appartment>
       </Card>
      ))}
     </div>
    </div>
)
}