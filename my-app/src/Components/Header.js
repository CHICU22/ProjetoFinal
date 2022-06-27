import React from "react";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import {Link} from "react-router-dom";
import cart_icon from "../img/icons/icons8-shopping-bag-64.png";

export default function header() {
    return (
        <>
            <header>
                <Link to="/loja">Loja</Link>
                <Link to="/sizeguide">Size Guide</Link>
                <Link to="/returns">Returns</Link>
                <Link to="/"><img className="logo" src={logo} href="home.js"></img></Link>
                <Link to="/sobrenos">Sobre Nós</Link>
                <img className="search-icon" src={search_icon} />
                <Link to="/checkout"><img className="cart-icon" src={cart_icon}></img></Link>
            </header>
        </>
    );
}