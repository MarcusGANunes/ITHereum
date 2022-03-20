import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/home";
import Blockchains from "./pages/blockchains";
import NFTs from "./pages/nfts";
import SmartContracts from "./pages/smartcontracts";
import AboutUs from "./pages/aboutus";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/blockchains" component={Blockchains} />
      <Route path="/nfts" component={NFTs} />
      <Route path="/smart-contracts" component={SmartContracts} />
      <Route path="/aboutus" component={AboutUs} />
    </BrowserRouter>
  );
}
