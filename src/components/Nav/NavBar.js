import React from "react";
import { Link} from "react-router-dom";
import "./NavBar.css";


export const NavBar = (props) => {
    return (
        <div className="navbarCss">
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">Kandy Korner</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/locations">Locations</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/products">Products</Link>
                </li>
            </ul>
        </div>
    )
}
