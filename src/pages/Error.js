import { NavLink } from "react-router-dom";

export default function Error() {
    return(
        <div className="error">
           <h1>404</h1>
           <p>Oups la page que vous demandez n'existe pas</p>
           <NavLink to="/">retourner sur la page d'accueil</NavLink>
        </div>
    )
    }