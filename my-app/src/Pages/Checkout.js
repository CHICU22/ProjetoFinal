import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Checkout(props) {
    const {cartItems, onAdd, onRemove} = props;
    return (
        <>
        <Header>
        </Header>
            <main>
                <section className="checkout-container">
                    <div className="checkout-grid">
                        <div className="small-img-container">
                            <div className="different-img-1"></div>
                            <div className="different-img-2"></div>
                            <div className="different-img-3"></div>
                            <div className="different-img-4"></div>
                        </div>
                        <div className="bikini-model-container">
                            {cartItems.length === 0 && <div> Carrinho vazio</div>}
                            {cartItems.map((item) => (
                                <div key={item.id} className="row">
                                    <div className="col-2">{item.name}</div>
                                    <div className="col-2">
                                        <button onClick={()=>onAdd(item)} className="add">+</button>
                                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                                    </div>
                                    <div className="col-2 text-right">
                                        {item.qty} x ${item.price.toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer>
            </Footer>
        </>
    );
}