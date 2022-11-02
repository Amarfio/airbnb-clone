import React from "react";
import firstImage from "../images/katie-zafere.png";
import starImage from "../images/starImage.png";

export default function Card(){
    return (
    <div className="card">
        <img src={firstImage} alt="first image" className ="card--image"/>
        <div className="card--stats">
            <img src={starImage} alt="starImage" className="card--star"/>
            <span>5.0</span>
            <span className="gray">(6) * </span>
            <span className="gray">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / person</p>
    </div>)
}