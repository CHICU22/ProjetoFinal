import React, { EventHandler } from "react";
import { useShoppingCart } from "./Context"

const products=[
    {
        id:"1",
        name:"Fierce",
        price:"10.00€",
        img:"./src/img/padroes/Fierce.PNG",
    },
    {
        id:"2",
        name:"Nina",
        price:"10.00€",
        img:"./src/img/padroes/Nina.PNG",
    },
    {
        id:"3",
        name:"Fly High",
        price:"10.00€",
        img:"./src/img/padroes/Fly\ High.PNG",
    },
    {
        id:"4",
        name:"Meadow",
        price:"10.00€",
        img:"./src/img/padroes/Meadow.PNG",
    },
    {
        id:"5",
        name:"Wild Sky",
        price:"10.00€",
        img:"./src/img/padroes/Wild\ Sky.PNG",
    },
    {
        id:"6",
        name:"Mumu",
        price:"10.00€",
        img:"./src/img/padroes/Mumu.PNG",
    },
    {
        id:"7",
        name:"Milkshake",
        price:"10.00€",
        img:"./src/img/padroes/Milkshake.PNG",
    },
    {
        id:"8",
        name:"Deep Ocean",
        price:"10.00€",
        img:"./src/img/padroes/Deep\ Ocean.PNG",
    },
    {
        id:"9",
        name:"Dark Sunset",
        price:"10.00€",
        img:"./src/img/padroes/Dark\ Sunset.PNG",
    },
    {
        id:"10",
        name:"Sweet Peach",
        price:"10.00€",
        img:"./src/img/padroes/Sweet\ Peach.PNG",
    }
]

export function Catalog(){
    let shoppingCart = useShoppingCart();
    return (
        <div>
            {products.map((product)=>
                <div className="productCard">
                    <p>{product.name} ({product.price})</p>
                    {/* <input type="number" name="quantity" id={`${product.id}-quantity`} /> */}
                    <button onClick={()=> shoppingCart.addProduct({
                        id: product.id,
                        name:product.name,
                        price: product.price,
                        quantity: 1
                    })}>🛒</button>
                </div>
            )}
        </div>
    )

}