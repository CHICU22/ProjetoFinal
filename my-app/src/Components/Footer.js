import React from "react";
import logo from "../img/logo-sem-fundo.png";
import {Link} from "react-router-dom";
import insta_icon from "../img/icons/icons8-instagram.png"
import facebook_icon from "../img/icons/icons8-facebook.png"
import tiktok_icon from "../img/icons/icons8-tiktok.png"

export default function footer() {
    return (
        <>
            <footer>
                <section className="footer-container">    
                        <Link to="/"><img className="logo-footer" src={logo}></img></Link>
                        <div className="pages-ref">
                            <Link to="/sizeguide">Size Guide</Link>
                            <Link to="/returns">Returns</Link>
                            <Link to="/sobrenos">Sobre Nós</Link>
                        </div>
                        <div className="socials-container">
                            <img className="insta-icon" src={insta_icon} href="https://www.instagram.com/"></img>
                            <img className="facebook-icon" src={facebook_icon}></img>
                            <img className="tiktok-icon" src={tiktok_icon}></img>
                        </div> 
                </section>
            </footer>
        </>
    );
}