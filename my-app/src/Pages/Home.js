import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo sem fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import cart_icon from "../img/icons/icons8-shopping-bag-64.png";

export default function Home(){
return(
    <>
    <section>
        <header>  
            <div class="header-container">
                <a>Loja</a>
                <a>Size Guide</a>
                <img class="logo" src={logo} href="home.js"></img>
                <a>Returns</a>
                <a>About</a>
                <img class="search-icon" src={search_icon}></img>
                <img class="cart-icon" src={cart_icon}></img>
            </div>
        </header>
    </section>
    <section>
        <body>
            <div class="main-container">
            <img class="background-image" src={background}></img>
            <div class="centered">
                <button type="submit">SHOP NOW</button>
            </div>
            </div>
        </body>
    </section>
    <section>
        <footer>
            <div class="socials-container"></div>
        </footer>
    </section>
    </>
);
}