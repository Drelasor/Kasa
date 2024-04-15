import { NavLink } from "react-router-dom";
import logo from "../asset/svg/logo_red.svg";

export default function Menu() {
  return (
    <div className="menu">
      <div className="logo-menu">
        <img src={logo} alt="logo couleur rouge"></img>
      </div>
      <div className="nav-menu">
        <NavLink to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          A propos
        </NavLink>
      </div>
    </div>
  );
}
