import React from "react";
import data from "../data.json";
import {Link} from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img src={data.site.logoImage}/></Link>
            <h1>{data.site.title}</h1>
            <Link className="profile" to="/profile"><p>Welcome {data.profile.firstName}</p></Link>
        </div>
    )
}

export default Header;