import React, { useState, useEffect } from "react";
import {data} from "../Components/Products-Comp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Product from "../Components/Product-Card"
import product_img_1 from "../img/products-imgs/1_1.jpg";
import { Link } from "react-router-dom";

export default function Products(props) {

    const {product, onAdd} = props;
    const [SelectedPatternId, setSelectedPatternId] = useState( 0 );

    const alerta = () =>{
        alert("Adicionado ao carrinho");
    }

     useEffect(()=>{console.log(SelectedPatternId)},[SelectedPatternId])

    return (
        <>
            <Header>
            </Header>
            <main>
                <h1 className="products-title">Padrões</h1>
                <div className="choose-pattern">
                                    {data.patterns.map((pattern) =>{
                                        return <div className={pattern.className} onClick={()=>{setSelectedPatternId(pattern.id)}}></div>
                                    })}
                </div>
                <div className="products-container">
            <ul>
                {data.products.map((product, index) => {
                    return <li>
                        <img className="biki-img-container" src={`../src/img/products-imgs/${product.id}_${SelectedPatternId}.jpg`}></img>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={alerta} className="buy-btn" type="submit">COMPRAR</button>
                    </li>
                })}
            </ul>
        </div>
            </main>
            <Footer>
            </Footer>
        </>
    );
}