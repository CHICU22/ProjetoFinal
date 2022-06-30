import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <>
            <Header>
            </Header>
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
            <Footer>
            </Footer>
        </>
    );
}