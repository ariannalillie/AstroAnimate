import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
    <footer className="footer-container" role="contentinfo">
        <div className="footer-container_arianna">
            <div className="icons">
                <SocialIcon className="icon" url="https://github.com/ariannalillie" />
                <SocialIcon className="icon" url="https://www.linkedin.com/in/arianna-johnson-92773859/" />
                <SocialIcon className="icon" url="mailto:ariannajohnson588@gmail.com" />
            </div>
        </div>
    </footer>
    )
}

export default Footer;
