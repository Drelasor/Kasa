import Card from "../components/Card";
import Banner from "../components/Banner"
import data from "../appart.json";

export default function Home() {
return(
    <div className="home">
        <Banner/>
        <div className="infocard">
      {data.map(appart => (
         <Card key={appart.id}  imgUrl={appart.cover} title={appart.title}/>
      ))}
     </div>
    </div>
)
}