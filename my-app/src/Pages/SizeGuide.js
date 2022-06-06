import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import altair_model from "../img/MASK-HADAR.png";
// import cart_icon from "../img/icons/icons8-shopping-bag-64.png";

export default function Home() {
    return (
        <>
            <header>
                <a>Loja</a>
                <a href="">Size Guide</a>
                <img class="logo" src={logo} href="home.js"></img>
                <a>Returns</a>
                <a>About</a>
                <img class="search-icon" src={search_icon}></img>
                {/* <img class="cart-icon" src={cart_icon}></img> */}
            </header>
            <main>
                <div class="main-container">
                    
                </div>
            </main>
            <footer>
                <div class="socials-container"></div>
            </footer>
        </>
    );
}