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

            <div className="buttons-container">
                <EmailButton />
                <LinkedinButton />
            </div>

            <h5 className="body-header">About</h5>
            <p className="body-text">I am a frontend developer with a particular interest
                 in making things simple and automating daily tasks.
                  I try to keep up with security and best practices,
                 and am always looking for new things to learn.</p>

            <h5 className="body-header">Interests</h5>
            <p className="body-text">Food expert. Music scholar. Reader. Internet fanatic.
                 Bacon buff. Entrepreneur. Travel geek. Pop culture
                 ninja. Coffee fanatic.</p>
        </div>
    );
}

export default Main