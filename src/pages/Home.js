import Card from "../components/Card";
import Banner from "../components/Banner";
import data from "../appart.json";
import homeImg from "../asset/svg/cover.svg";

export default function Home() {
  return (
    <div className="home">
      <Banner bannerImg={homeImg} bannerTxt="Chez vous, partout et ailleurs" />
      <div className="infocard">
        {data.map((appart) => (
          <Card key={appart.id} imgUrl={appart.cover} title={appart.title} />
        ))}
      </div>
    </div>
  );
}
