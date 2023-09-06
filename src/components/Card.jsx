import React from "react";
import "../App.css";
import { Photo } from "./Photo.jsx";
import { Main } from "./Main.jsx";

export function Card() {
    return (
        <div className="card">
            <Photo />
            <Main />
        </div>
    );
}

export default Card