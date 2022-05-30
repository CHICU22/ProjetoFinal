import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo sem fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import lapki_model from "../img/LAPKI-MODEL.png";
// import cart_icon from "../img/icons/icons8-shopping-bag-64.png";

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
                {/* <img class="cart-icon" src={cart_icon}></img> */}
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
            <h1 class="somemodels-title">Alguns Modelos</h1>
            <div class="somemodels-grid-container">
                <div class="wrapper">
                    <div>
                        <img class="lapki-model" src={lapki_model}></img>
                        <p>Lapki</p>
                        <p>42€</p>
                    </div>
                    <div>
                        <img class="lapki-model" src={lapki_model}></img>
                        <p>Antares</p>
                        <p>30€</p>
                    </div>
                    <div>
                        <img class="lapki-model" src={lapki_model}></img>
                        <p>Altair</p>
                        <p>32€</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <h1 class="models-title">Modelos</h1>
            <p class="models-desc">Queremos sempre um biquíni único mas todos parecem sempre<br></br> um pouco “iguais”… Estes são criações 100% VIERU e o melhor é<br></br> que podes personalizar qualquer detalhe a teu gosto!</p>
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