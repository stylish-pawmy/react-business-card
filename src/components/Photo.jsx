import React from "react";
import "../App.css";
import PersonPhoto from "../assets/photo.png";

export function Photo()
{
    return (
        <>
            <img className="person-photo" src= { PersonPhoto } />
        </> 
    )
}

export default Photo