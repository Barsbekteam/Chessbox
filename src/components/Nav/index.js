import React from 'react';
import {NavLink} from "react-router-dom";
import './style.scss'
const Navigates = () => {
    return (
        <div className="navbar">
            <NavLink to={"/"}>Current competition</NavLink>
            <hr/>
            <NavLink to={"/current"}>Current</NavLink>
            <hr/>
            <NavLink to={"/achieve"}>Achieve</NavLink>
        </div>
    );
};

export default Navigates;