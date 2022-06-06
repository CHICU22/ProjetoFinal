import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import SizeGuide from "./Pages/SizeGuide"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/sizeguide" element={<SizeGuide />}>
      </Route>
    </Routes>
  );
}

export default App;
