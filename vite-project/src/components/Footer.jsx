import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import LinkedInOutlineIcon from "../assets/LinkedInOutline.svg"
import InstagramOutlineIcon from "../assets/InstagramOutline.svg"
import FacebookOutlineIcon from "../assets/FacebookOutline.svg"
import XOutlineIcon from "../assets/XOutline.svg"

export default function Footer() {
    return (
        <>
            <footer className="bodyFooter">
                <div className="logo">
                    <img src={Logo} alt="Brand Logo" />
                </div>
                <div className="home">
                    <h2>Home</h2>
                    <ul>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="services">
                    <h2>Services</h2>
                    <ul>
                        <li>Event Mangement</li>
                        <li>Event Rental</li>
                        <li>Travel & Tour</li>
                    </ul>
                </div>
                <div className="socials">
                    <h2>Follow Us</h2>
                    <ul>
                        <li><img src={LinkedInOutlineIcon} alt="Icon" /></li>
                        <li><img src={InstagramOutlineIcon} alt="Icon" /></li>
                        <li><img src={FacebookOutlineIcon} alt="Icon" /></li>
                        <li><img src={XOutlineIcon} alt="Icon" /></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}