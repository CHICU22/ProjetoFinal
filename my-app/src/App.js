import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import SizeGuide from "./Pages/SizeGuide"
import Returns from "./Pages/TrocasDevolucoes"
import SobreNos from "./Pages/SobreNos"
import Loja from "./Pages/Products";
import Checkout from "./Pages/Checkout";
// import data from "./Components/Products-Comp";
import {useState} from "react";

function App() {
  // const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        ));
    } else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };
  return (

    <>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/sizeguide" element={<SizeGuide />}>
      </Route>
      <Route path="/returns" element={<Returns />}>
      </Route>
      <Route path="/sobrenos" element={<SobreNos />}>
      </Route>
      <Route path="/loja" element={<Loja onAdd={onAdd} />}>
      </Route>
      <Route path="/checkout" element={<Checkout onAdd={onAdd} cartItems={cartItems} />}>
      </Route>
    </Routes>
    </>
  );
}

export default App;
