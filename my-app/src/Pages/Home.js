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
                <div class="models-feature">
                    <h1 class="models-title">Modelos</h1>
                    <p class="models-desc">Queremos sempre um biquíni único mas todos parecem sempre<br></br> um pouco “iguais”… Estes são criações 100% VIERU e o melhor é<br></br> que podes personalizar qualquer detalhe a teu gosto!</p>
                    <section class="models-grid-container">
                            <div class="row-1-image">
                                <img class="altair-model" src={altair_model}></img>
                            </div>
                            <div class="row-2-desc">
                                <h1>Altair</h1>
                                <p>Altair é um nome de origem árabe que significa<br></br> “aquele que voa”. Altair é a estrela mais brilhante da constelação
                                da Águia. Altair é a 12ª estrela mais brilhante no céu Noturno.</p>
                                <button type="submit">Personalizar</button>
                            </div>
                            <div class="row-3-desc">
                                <h1>Hadar</h1>
                                <p>Hadar é designada por Beta Centauri, que significa que<br></br> é a segunda estrela mais brilhante da constelação de<br></br> Centaruro.
                                <br></br>Hadar é uma estrela múltipla constituída por 3 elementos.</p>
                                <button type="submit">Personalizar</button>
                            </div>
                            <div class="row-4-image">
                                <img class="altair-model" src={altair_model}></img>
                            </div>
                            <div class="row-5-image">
                                <img class="altair-model" src={altair_model}></img>
                            </div>
                            <div class="row-6-desc">
                                <h1>Lapki</h1>
                                <p>Lapki é a alcunha de criança do meu pai.
                                <br></br>É umas das estrelas da minha vida.
                                <br></br>Lapki é símbolo de bondade e humildade.
                                <br></br>Ensina a ajudar o próximo.</p>
                                <button type="submit">Personalizar</button>
                            </div>
                    </section>
                </div>
                <hr></hr>
                <div class="patterns-feature">
                    <h1>Padrões</h1>
                    <p>Padrões únicos criados do 0 para combinar com as maiores
                    <br></br>Tendências deste verão!
                    <br></br>Personaliza o teu modelo favorito com o padrão que mais
                    <br></br>Combina contigo.</p>
                    <section class="patterns-grid-container">
                        <div class="pattern-card">
                            <div class="mumu-pattern"></div>
                            <p>MUMU</p>
                        </div>
                        <div class="pattern-card">
                            <div class="nina-pattern"></div>
                            <p>NINA</p>
                        </div>
                        <div class="pattern-card">
                            <div class="milkshake-pattern"></div>
                            <p>MILKSHAKE</p>
                        </div>
                    </section>
                </div>
            </main>
            <footer>
                <div class="socials-container"></div>
            </footer>
        </>
    );
}