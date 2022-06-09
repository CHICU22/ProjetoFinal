import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import SizeGuide from "./Pages/SizeGuide"
import Returns from "./Pages/TrocasDevolucoes"
import SobreNos from "./Pages/SobreNos"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/sizeguide" element={<SizeGuide />}>
      </Route>
      <Route path="/returns" element={<Returns />}>
      </Route>
      <Route path="/sobrenos" element={<SobreNos />}>
      </Route>
    </Routes>
  );
}

export default App;
