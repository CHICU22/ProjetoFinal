import React from "react";
import {data, patterns} from "../Components/Products-Comp";
import logo from "../img/logo-sem-fundo.png";
import search_icon from "../img/icons/icons8-search.svg";
import container_bikini from "../img/Retângulo 116.png";
import { Link } from "react-router-dom";
import cart_icon from "../img/icons/icons8-shopping-bag-64.png"

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
                <h1 className="products-title">Escolha o seu modelo</h1>
                <div className="products-container">
                    <ul>
                        {data.map((element) => {
                            
                            return <li>
                                <img className="biki-img-container" src={container_bikini}></img>
                                <h3>{element.name}</h3>
                                <p>{element.price}</p>
                                <div className="choose-pattern">
                                    {patterns.map((pattern) =>{
                                        return <div className={pattern}></div>
                                    })}
                                </div>
                                <Link to="/checkout"><button className="buy-btn" type="submit">COMPRAR</button></Link>
                            </li>
                        })}
                        {/* <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <li>
                            <img className="biki-img-container" src={container_bikini}></img>
                            <h3>Product Name</h3>
                            <p>10.00€</p>
                            <div className="choose-pattern">
                                <div className="fierce-pattern-products"></div>
                                <div className="nina-pattern-products"></div>
                                <div className="fly-high-pattern-products"></div>
                                <div className="meadow-pattern-products"></div>
                                <div className="wild-sky-pattern-products"></div>
                                <div className="mumu-pattern-products"></div>
                                <div className="milkshake-pattern-products"></div>
                                <div className="deep-ocean-pattern-products"></div>
                                <div className="dark-sunset-pattern-products"></div>
                                <div className="sweat-peach-pattern-products"></div>
                            </div>
                        </li>
                        <div className="last-product-center">
                            <li>
                                <img className="biki-img-container" src={container_bikini}></img>
                                <h3>Product Name</h3>
                                <p>10.00€</p>
                                <div className="choose-pattern">
                                    <div className="fierce-pattern-products"></div>
                                    <div className="nina-pattern-products"></div>
                                    <div className="fly-high-pattern-products"></div>
                                    <div className="meadow-pattern-products"></div>
                                    <div className="wild-sky-pattern-products"></div>
                                    <div className="mumu-pattern-products"></div>
                                    <div className="milkshake-pattern-products"></div>
                                    <div className="deep-ocean-pattern-products"></div>
                                    <div className="dark-sunset-pattern-products"></div>
                                    <div className="sweat-peach-pattern-products"></div>
                                </div>
                            </li> */}
                        {/* </div> */}
                    </ul>
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