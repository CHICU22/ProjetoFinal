import React from "react";
import background from "../img/Background_Home.png";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import container_bikini from "../img/Retângulo 116.png";
import {Link} from "react-router-dom";
import cart_icon from "../img/icons/icons8-shopping-bag-64.png"

export default function Home() {
    return (
        <>
            <header>
                <Link to="/loja">Loja</Link>
                <Link to="/sizeguide">Size Guide</Link>
                <Link to="/returns">Returns</Link>
                <Link to="/"><img class="logo" src={logo} href="home.js"></img></Link>
                <Link to="/sobrenos">Sobre Nós</Link>
                <img class="search-icon" src={search_icon}></img>
                <img class="cart-icon" src={cart_icon}></img>
            </header>
            <main>
                <h1 class="products-title">Escolha o seu modelo</h1>
                <div class="products-container">
                    <ul>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img class="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div class="choose-pattern">
                                <div class="fierce-pattern-products"></div>
                                <div class="nina-pattern-products"></div>
                                <div class="fly-high-pattern-products"></div>
                                <div class="meadow-pattern-products"></div>
                                <div class="wild-sky-pattern-products"></div>
                                <div class="mumu-pattern-products"></div>
                                <div class="milkshake-pattern-products"></div>
                                <div class="deep-ocean-pattern-products"></div>
                                <div class="dark-sunset-pattern-products"></div>
                                <div class="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <div class="last-product-center">
                            <li>
                                <img class="biki-img-container" src={container_bikini}></img>
                                <h3>Product Name</h3>
                                <p>10.00€</p>
                                <div class="choose-pattern">
                                    <div class="fierce-pattern-products"></div>
                                    <div class="nina-pattern-products"></div>
                                    <div class="fly-high-pattern-products"></div>
                                    <div class="meadow-pattern-products"></div>
                                    <div class="wild-sky-pattern-products"></div>
                                    <div class="mumu-pattern-products"></div>
                                    <div class="milkshake-pattern-products"></div>
                                    <div class="deep-ocean-pattern-products"></div>
                                    <div class="dark-sunset-pattern-products"></div>
                                    <div class="sweat-peach-pattern-products"></div>
                                </div>
                            </li>
                        </div>
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