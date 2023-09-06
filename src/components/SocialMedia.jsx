import { Facebook, Github, Instagram, Twitter } from "react-bootstrap-icons";
import "../App.css";

export function SocialMedia()
{
    return (
        <div className="social-media-container">
            <div>
                <a><Twitter /></a>
                <a><Facebook /></a>
                <a><Instagram /></a>
                <a><Github /></a>
            </div>
        </div>
    );
}

export default SocialMedia;