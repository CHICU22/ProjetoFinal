import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";

import altair_model from "../img/MASK-HADAR.png";
import {Link} from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <>
        <Header>
        </Header>
            <main>
                <div className="main-container">
                <Link to="/loja"><button className="shopnow-btn" type="submit">COMPRAR AGORA</button></Link>
                </div>
                <div className="feature">
                    <h3>Alguns Modelos</h3>
                    <section className="cardlist">
                    <div className="card">  
                            <div className="hover-animation-lapki">
                            </div>
                            <a>Lapki</a>
                            <p>42€</p>
                            <Link to="/loja"><button className="buy-btn" type="submit">COMPRAR</button></Link>
                        </div>
                        <div className="card">
                            <div className="hover-animation-antares">
                            </div>
                            <a>Antares</a>
                            <p>30€</p>
                            <Link to="/loja"><button className="buy-btn" type="submit">COMPRAR</button></Link>
                        </div>
                        <div className="card">
                            <div className="hover-animation-altair">
                            </div>
                            <a>Altair</a>
                            <p>32€</p>
                            <Link to="/loja"><button className="buy-btn" type="submit">COMPRAR</button></Link>
                        </div>
                    </section>
                </div>
                <hr></hr>
                <div className="models-feature">
                    <h1 className="models-title">Modelos</h1>
                    <p className="models-desc">Queremos sempre um biquíni único mas todos parecem sempre<br></br> um pouco “iguais”… Estes são criações 100% VIERU e o melhor é<br></br> que podes personalizar qualquer detalhe a teu gosto!</p>
                    <section className="models-grid-container">
                            <div className="row-1-image">
                                <img className="altair-model" src={altair_model}></img>
                            </div>
                            <div className="row-2-desc">
                                <h1>Altair</h1>
                                <p>Altair é um nome de origem árabe que significa<br></br> “aquele que voa”. Altair é a estrela mais brilhante da constelação
                                da Águia. Altair é a 12ª estrela mais brilhante no céu Noturno.</p>
                                <Link to="/loja"><button className="personalizar-btn" type="submit">Personalizar</button></Link>
                            </div>
                            <div className="row-3-desc">
                                <h1>Hadar</h1>
                                <p>Hadar é designada por Beta Centauri, que significa que<br></br> é a segunda estrela mais brilhante da constelação de<br></br> Centaruro.
                                <br></br>Hadar é uma estrela múltipla constituída por 3 elementos.</p>
                                <Link to="/loja"><button className="personalizar-btn" type="submit">Personalizar</button></Link>
                            </div>
                            <div className="row-4-image">
                                <img className="altair-model" src={altair_model}></img>
                            </div>
                            <div className="row-5-image">
                                <img className="altair-model" src={altair_model}></img>
                            </div>
                            <div className="row-6-desc">
                                <h1>Lapki</h1>
                                <p>Lapki é a alcunha de criança do meu pai.
                                <br></br>É umas das estrelas da minha vida.
                                <br></br>Lapki é símbolo de bondade e humildade.
                                <br></br>Ensina a ajudar o próximo.</p>
                                <Link to="/loja"><button className="personalizar-btn" type="submit">Personalizar</button></Link>
                            </div>
                    </section>
                </div>
                <hr></hr>
                <div className="patterns-feature">
                    <h1>Alguns Padrões</h1>
                    <p>Padrões únicos criados do 0 para combinar com as maiores
                    <br></br>Tendências deste verão!
                    <br></br>Personaliza o teu modelo favorito com o padrão que mais
                    <br></br>Combina contigo.</p>
                    <section className="patterns-grid-container">
                        <div className="pattern-card">
                            <div className="mumu-pattern"></div>
                            <p>MUMU</p>
                        </div>
                        <div className="pattern-card">
                            <div className="nina-pattern"></div>
                            <p>NINA</p>
                        </div>
                        <div className="pattern-card">
                            <div className="milkshake-pattern"></div>
                            <p>MILKSHAKE</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer>
            </Footer>
        </>
    );
}