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
                <a>Size Guide</a>
                <img class="logo" src={logo} href="home.js"></img>
                <a>Returns</a>
                <a>About</a>
                <img class="search-icon" src={search_icon}></img>
                {/* <img class="cart-icon" src={cart_icon}></img> */}
            </header>
            <main>
                <div class="main-container">
                    <button type="submit">SHOP NOW</button>
                </div>
                <div class="feature">
                    <h3>Alguns Modelos</h3>
                    <section class="cardlist">
                    <div class="card">  
                            <div class="hover-animation-lapki">
                            </div>
                            <p class="bikini-name">Lapki</p>
                            <p>42€</p>
                        </div>
                        <div class="card">
                            <div class="hover-animation-antares">
                            </div>
                            <p class="bikini-name">Antares</p>
                            <p>30€</p>
                        </div>
                        <div class="card">
                            <div class="hover-animation-altair">
                            </div>
                            <p class="bikini-name">Altair</p>
                            <p>32€</p>
                        </div>
                    </section>
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
            </main>
            <footer>
                <div class="socials-container"></div>
            </footer>
        </>
    );
}