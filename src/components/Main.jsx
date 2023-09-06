import React from "react";
import { EmailButton } from "./EmailButton.jsx";
import "../App.css";
import LinkedinButton from "./LinkedinButton.jsx";

export function Main() {
    return (
        <div className="main-content">
            <h1 className="full-name">Laura Smith</h1>
            <h4 className="occupation">Frontend Developer</h4>
            <p className="website-link">laurasmith.website</p>
            <EmailButton />
            <LinkedinButton />
        </div>
    );
}

export default Main