/**
 * Here we are using the item array as a whole and then accessing data from it. 
 */
import React from "react"


export default function Card(props){
    let badgeText
    console.log(props.item.openSpots)
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    // console.log(props.item) 
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img src={process.env.PUBLIC_URL+ `/Images/${props.item.coverImg}`}className="card--image" alt="imgFace"/>
            <div className="card--stats">
                <img src={process.env.PUBLIC_URL+"/Images/Star1.png"} className="card--star" alt="star"/>
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}