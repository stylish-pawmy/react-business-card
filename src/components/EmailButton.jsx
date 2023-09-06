import "../App.css";
import { EnvelopeFill } from "react-bootstrap-icons";

export function EmailButton()
{
    return (
        <button className="email-button button">
            <EnvelopeFill />
            <span className="button-label">Email</span>
        </button>
    );
}

export default EmailButton;