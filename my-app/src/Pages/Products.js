import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import container_bikini from "../img/Retângulo 116.png";
import {Link} from "react-router-dom";
// import cart_icon from "../img/icons/icons8-shopping-bag-64.png";

export default function Home() {
    return (
        <>
            <header>
                <Link to="/loja">Loja</Link>
                <Link to="/sizeguide">Size Guide</Link>
                <Link to="/"><img class="logo" src={logo} href="home.js"></img></Link>
                <Link to="/returns">Returns</Link>
                <Link to="/sobrenos">Sobre Nós</Link>
                <img class="search-icon" src={search_icon}></img>
                {/* <img class="cart-icon" src={cart_icon}></img> */}
            </header>
            <main>
                <div class="products-container">
                    <ul>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                        </li>
                    </ul>
                </div>
            </main>
            <footer>
                <Link to="/"><img class="logo-footer" src={logo}></img></Link>
                <div class="pages-ref">
                    <Link to="/sizeguide">Size Guide</Link>
                    <Link to="/returns">Returns</Link>
                    <Link to="/sobrenos">Sobre Nós</Link>
                </div>
                <div class="socials-container">
                    
                </div>
                <p>© 2021 Vieru Swimwear</p>
            </footer>
        </>
    );
}