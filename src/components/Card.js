import React from "react";
import firstImage from "../images/katie-zafere.png";
import starImage from "../images/starImage.png";

export default function Card(props){
    console.log(props)
    let badgeText

    if(props.openSpots ===0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
    <div className="card">
        {
            badgeText && <div className="card--badge">{badgeText}</div>
        }
        <img src={props.img} alt="first image" className ="card--image"/>
        <div className="card--stats">
            <img src={starImage} alt="starImage" className="card--star"/>
            <span>{props.status.rating}</span>
            <span className="gray">({props.status.reviewCount}) * </span>
            <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>)
}