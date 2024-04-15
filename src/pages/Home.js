import Card from "../components/Card";
import Banner from "../components/Banner";
import data from "../appart.json";
import homeImg from "../asset/svg/cover.svg";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="home">
      <Menu />
      <Banner bannerImg={homeImg} bannerTxt="Chez vous, partout et ailleurs" />
      <div className="infocard">
        {data.map((appart) => (
          <Card key={appart.id} appart={appart}/>
        ))}
      </div>
    </div>
  );
}
