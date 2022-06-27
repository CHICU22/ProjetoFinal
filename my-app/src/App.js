import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import SizeGuide from "./Pages/SizeGuide"
import Returns from "./Pages/TrocasDevolucoes"
import SobreNos from "./Pages/SobreNos"
import Loja from "./Pages/Products";
import Checkout from "./Pages/Checkout";
import { ShopCartContext } from './Components/Context';

function App() {
  return (
    // <>
    //   <ShopCartContext>
        
    //   </ShopCartContext>
    // </>
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
      <Route path="/loja" element={<Loja />}>
      </Route>
      <Route path="/checkout" element={<Checkout />}>
      </Route>
    </Routes>
    </>
  );
}

export default App;
