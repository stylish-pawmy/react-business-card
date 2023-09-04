import React from "react";
import "../App.css";
import { Photo } from "./Photo.jsx";
import { Main } from "./Main.jsx";

export function Card() {
    return (
        <>
            <Photo />
            <Main />
        </>
    );
}

export default Card