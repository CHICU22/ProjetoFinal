import React, { useState, useEffect } from "react";
import {data} from "../Components/Products-Comp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {

    const [SelectedPatternId, setSelectedPatternId] = useState( 0 )

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
                        {data.products.map((product) => {
                            
                            return <li>
                                <img className="biki-img-container" src={`../src/img/products-imgs/${product.id}_${SelectedPatternId}.jpeg`}></img>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <Link to="/checkout"><button className="buy-btn" type="submit">COMPRAR</button></Link>
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