import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import altair_model from "../img/MASK-HADAR.png";
import {Link} from "react-router-dom";
import cart_icon from "../img/icons/icons8-shopping-bag-64.png";

export default function Home() {
    return (
        <>
            <header>
                <Link to="/loja">Loja</Link>
                <Link to="/sizeguide">Size Guide</Link>
                <Link to="/returns">Returns</Link>
                <Link to="/"><img className="logo" src={logo} href="home.js"></img></Link>
                <Link to="/sobrenos">Sobre Nós</Link>
                <img className="search-icon" src={search_icon}></img>
                <Link to="/checkout"><img className="cart-icon" src={cart_icon}></img></Link>
            </header>
            <main>
                <section className="checkout-container">
                    <div className="checkout-grid">
                        <div className="small-img-container">
                            <div className="different-img-1"></div>
                            <div className="different-img-2"></div>
                            <div className="different-img-3"></div>
                            <div className="different-img-4"></div>
                        </div>
                        <div className="bikini-model-container">
                            <div className="bikini-model"></div>
                        </div>
                        <div className="infos-bikini">
                            <h1>Hadar</h1>
                            <p>30.00€</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Link to="/"><img className="logo-footer" src={logo}></img></Link>
                <div className="pages-ref">
                    <Link to="/sizeguide">Size Guide</Link>
                    <Link to="/returns">Returns</Link>
                    <Link to="/sobrenos">Sobre Nós</Link>
                </div>
                <div className="socials-container">
                    
                </div>
                <p>© 2021 Vieru Swimwear</p>
            </footer>
        </>
    );
}