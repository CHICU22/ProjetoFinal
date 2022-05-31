import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import altair_model from "../img/MASK-HADAR.png";
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
                    <div class="card">
                        <div class="hover-animation-lapki">
                        </div>
                        <p>Lapki</p>
                        <p>42€</p>
                    </div>
                    <div class="card">
                        <div class="hover-animation-antares">
                        </div>
                        <p>Antares</p>
                        <p>30€</p>
                    </div>
                    <div class="card">
                        <div class="hover-animation-altair">
                        </div>
                        <p>Altair</p>
                        <p>32€</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <h1 class="models-title">Modelos</h1>
            <p class="models-desc">Queremos sempre um biquíni único mas todos parecem sempre<br></br> um pouco “iguais”… Estes são criações 100% VIERU e o melhor é<br></br> que podes personalizar qualquer detalhe a teu gosto!</p>
            <div class="models-grid-container">
                <div class="rows">
                    <div class="row-1">
                        <img class="altair-model" src={altair_model}></img>
                    </div>
                    <div class="row-2">
                        <h1>Altair</h1>
                        <p>Altair é um nome de origem árabe que significa<br></br> “aquele que voa”. Altair é a estrela mais brilhante da constelação 
                            da Águia. Altair é a 12ª estrela mais brilhante no céu Noturno.</p>
                    </div>
                    <div class="row-3">
                        <h1>Altair</h1>
                        <p>Altair é um nome de origem árabe que significa<br></br> “aquele que voa”. Altair é a estrela mais brilhante da constelação 
                            da Águia. Altair é a 12ª estrela mais brilhante no céu Noturno.</p>
                    </div>
                    <div class="row-4">
                        <img class="altair-model" src={altair_model}></img>
                    </div>
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