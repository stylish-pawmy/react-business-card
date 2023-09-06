import React from "react";
import "../App.css";
import { Photo } from "./Photo.jsx";
import { Main } from "./Main.jsx";
import { SocialMedia } from "./SocialMedia";

export function Card() {
    return (
        <div className="card">
            <Photo />
            <Main />
            <SocialMedia />
        </div>
    );
}

export default Card