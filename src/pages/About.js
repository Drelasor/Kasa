import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import AboutImg from "../asset/svg/cover-about.svg"
export default function About() {
    return(
        <div className="about">
            <Banner bannerImg={AboutImg} bannerTxt="" />
            <Collapse title={"Fiabilité"} content={"test"} />
            <Collapse title={"Respect"} content={"test"} />
            <Collapse title={"Service"} content={"test"} />
            <Collapse title={"Sécurité"} content={"test"} />
        </div>
    )
    }