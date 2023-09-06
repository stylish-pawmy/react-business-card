import "../App.css";
import { Linkedin } from "react-bootstrap-icons";

export function LinkedinButton ()
{
    return (
        <button className="linkedin-button button">
            <Linkedin />
            <span className="button-label">Linkedin</span>
        </button>
    );
}

export default LinkedinButton;