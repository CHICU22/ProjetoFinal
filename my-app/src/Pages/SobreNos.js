import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import foto1 from "../img/_DSC7423.png";
import foto2 from "../img/_DSC7172.png";
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
                <img className="cart-icon" src={cart_icon}></img>
            </header>
            <main>
            <h1 className="sobre-title">Sobre Nós</h1>
                <section className="sobrenos-container">
                            <div className="row-1-image-sobrenos">
                                <img className="foto1" src={foto1}></img>
                            </div>
                            <div className="row-2-desc-sobrenos">
                                <h1>Sentir-se Bem</h1>
                                <p>A Vieru Swimwear é uma extensão da marca Vieru, que nos 
                                relembra que todos merecemos sentir-nos bem na nossa 
                                própria pele e ter um toque nosso em cada peça que usamos. 
                                Somos quem somos, não devemos alterar-nos para agradar 
                                outrem a não ser nós próprios. Somos todos únicos à nossa 
                                maneira, e é isso que torna os bikinis da Vieru especiais, o 
                                poder que temos sob a nossa escolha.</p>
                            </div>
                            <div className="row-3-desc-sobrenos">
                                <h1>Sentir-se Confortável</h1>
                                <p>Todos são personalizados, reversíveis, feitos à mão, 
                                à medida e traduzem a essência das nossas 
                                personalidades. O tamanho da roupa que vestimos 
                                é apenas um número criado pela sociedade. Está na 
                                hora de não ligarmos tanto a estereótipos e darmos 
                                mais importância a nós próprios, ao nosso bem estar, 
                                e à nossa saúde mental.</p>
                            </div>
                            <div className="row-4-image-sobrenos">
                                <img className="foto2" src={foto2}></img>
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