import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import insta_icon from "../img/icons/icons8-instagram.png"
import facebook_icon from "../img/icons/icons8-facebook.png"
import tiktok_icon from "../img/icons/icons8-tiktok.png"
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
                <Link to="/"><img class="logo" src={logo} href="home.js"></img></Link>
                <Link to="/sobrenos">Sobre Nós</Link>
                <img class="search-icon" src={search_icon} />
                <Link to="/checkout"><img class="cart-icon" src={cart_icon}></img></Link>
            </header>
            <main>
                <div class="main-container">
                <Link to="/loja"><button class="shopnow-btn" type="submit">SHOP NOW</button></Link>
                </div>
                <div class="feature">
                    <h3>Alguns Modelos</h3>
                    <section class="cardlist">
                    <div class="card">  
                            <div class="hover-animation-lapki">
                            </div>
                            <a class="bikini-name">Lapki</a>
                            <p>42€</p>
                        </div>
                        <div class="card">
                            <div class="hover-animation-antares">
                            </div>
                            <a class="bikini-name">Antares</a>
                            <p>30€</p>
                        </div>
                        <div class="card">
                            <div class="hover-animation-altair">
                            </div>
                            <a class="bikini-name">Altair</a>
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
                                <Link to="/loja"><button class="personalizar-btn" type="submit">Personalizar</button></Link>
                            </div>
                            <div class="row-3-desc">
                                <h1>Hadar</h1>
                                <p>Hadar é designada por Beta Centauri, que significa que<br></br> é a segunda estrela mais brilhante da constelação de<br></br> Centaruro.
                                <br></br>Hadar é uma estrela múltipla constituída por 3 elementos.</p>
                                <Link to="/loja"><button class="personalizar-btn" type="submit">Personalizar</button></Link>
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
                                <Link to="/loja"><button class="personalizar-btn" type="submit">Personalizar</button></Link>
                            </div>
                    </section>
                </div>
                <hr></hr>
                <div class="patterns-feature">
                    <h1>Alguns Padrões</h1>
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
                <section class="footer-container">    
                        <Link to="/"><img class="logo-footer" src={logo}></img></Link>
                        <div class="pages-ref">
                            <Link to="/sizeguide">Size Guide</Link>
                            <Link to="/returns">Returns</Link>
                            <Link to="/sobrenos">Sobre Nós</Link>
                        <div class="socials-container">
                            <img class="insta-icon" src={insta_icon}></img>
                            <img class="facebook-icon" src={facebook_icon}></img>
                            <img class="tiktok-icon" src={tiktok_icon}></img>
                            <p>© 2021 Vieru Swimwear</p>
                        </div>
                        </div>  
                </section>
            </footer>
        </>
    );
}