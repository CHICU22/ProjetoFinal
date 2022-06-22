import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
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
                <Link to="/"><img className="logo" src={logo} href="home.js"></img></Link>
                <Link to="/sobrenos">Sobre Nós</Link>
                <img className="search-icon" src={search_icon}></img>
                <img className="cart-icon" src={cart_icon}></img>
            </header>
            <main>
                <div className="returns-container">
                    <div className="trocas-img"></div>
                    <div className="text-container">
                        <h1>Trocas e Devoluções</h1>
                        <p>Trocas: O Segundo envio é por responsabilidade da cliente.<br></br>
                        Devoluções: O cliente deverá enviar de volta o produto como o recebeu.<br></br> 
                        Assim que receber-mos o produto,  o reembolso será efetuado pelo mesmo<br></br> 
                        método de pagamento utilizado.</p>
                    </div>
                </div>
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