import { useState } from "react"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import navStyles from "../styles/Nav.module.css";


const Navigation = () => {

    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const toggleNav = () => {
        setToggle(!toggle);
    }

    const setActive = (value) => {
        setActiveLink(value)
    }
    
    
    return (
        <nav id="navbar" onClick={toggleNav} className={`${navStyles.navSidebar} ${toggle ? navStyles.showNav : ""}`}>
            <button onClick={toggleNav} className={navStyles.navbarToggler}>
                <FontAwesomeIcon icon={toggle ? faTimes : faBars} />
            </button>
            <div className={navStyles.navInner}>
                <div className={navStyles.navImage}>
                    <a>
                        <img src="https://picsum.photos/200/300" alt="Profile" />
                    </a>
                </div>
                <ul className={navStyles.navMenu}>
                    <li><Link exact href="/"><a className={activeLink === "home" ? `${navStyles.active}` : ""} onClick={() => setActive("home")}>Home</a></Link></li>
                    <li><Link exact href="/about"><a className={activeLink === "about" ? `${navStyles.active}` : ""} onClick={() => setActive("about")}>About</a></Link></li>
                    <li><Link exact href="/portfolio"><a className={activeLink === "portfolio" ? `${navStyles.active}` : ""} onClick={() => setActive("portfolio")}>Portfolio</a></Link></li>
                    <li><Link exact href="/blog"><a className={activeLink === "blog" ? `${navStyles.active}` : ""} onClick={() => setActive("blog")}>Blog</a></Link></li>
                    <li><Link exact href="/contact"><a className={activeLink === "contact" ? `${navStyles.active}` : ""} onClick={() => setActive("contact")}>Contact</a></Link></li>

                </ul>
                <p className={navStyles.navCopyright}>© 2022 <b><a target="_blank" href="/">Calvin Donaldson</a></b></p>
            </div>
        </nav>
    )
}




export default Navigation