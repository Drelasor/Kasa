import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <div className="menu">
                <img src="/logo.svg"></img>
                <a><NavLink to="/">Accueil</NavLink></a>
                <a><NavLink to="/about">A propos</NavLink></a>
        </div>
    )
}