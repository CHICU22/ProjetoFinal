import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer"

export default function Home() {
    return (
        <>
        <Header>
        </Header>
            <main>
                <div className="sizeguide-container">
                    <h1>Size Guide</h1>
                    <div className="size-img"></div>                   
                </div>
            </main>
            <Footer>
            </Footer>
        </>
    );
}