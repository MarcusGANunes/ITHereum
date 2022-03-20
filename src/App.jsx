import "./App.css";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Blockchains from "./pages/blockchains";
import NFTs from "./pages/nfts";
import SmartContracts from "./pages/smartcontracts";
import AboutUs from "./pages/aboutus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavbarComponent />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blockchains" element={<Blockchains />} />
            <Route path="/nfts" element={<NFTs />} />
            <Route path="/smart-contracts" element={<SmartContracts />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
