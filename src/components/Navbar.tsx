import { Link } from 'react-router';
import '../styles/navbar.css';


export default function Navbar() {
    return (
        <nav>
        <div className="nav-container">
            <div className="logo">Prabashz</div>
            
            <ul className="nav-menu" id="navMenu">
                <Link className='nav-link' to={"/"}>Home</Link>
                <Link className='nav-link' to={"/about"}>About</Link>
                <Link className='nav-link' to={"/blog"}>Blog</Link>
                <li><a href="#services" className="nav-link">Services</a></li>
                <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
                <li><a href="#signup" className="nav-cta">Get Started</a></li>
            </ul>

            <div className="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    );
}