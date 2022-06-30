import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
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
                            <div className="bikini-model"></div>
                        </div>
                        <div className="infos-bikini">
                            <h1>Hadar</h1>
                            <p>30.00€</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer>
            </Footer>
        </>
    );
}