import { NavLink } from "react-router-dom";
import Menu from "../components/Menu";

export default function Error() {
    return(
        <div className="error">
            <Menu />
           <h1>404</h1>
           <p>Oups la page que vous demandez n'existe pas</p>
           <NavLink to="/">retourner sur la page d'accueil</NavLink>
        </div>
    )
    }