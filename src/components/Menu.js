import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <div className="menu">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
        </div>
    )
}