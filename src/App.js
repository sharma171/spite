import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Home from "./component/home";
import Footer from "./component/Footer";

import PropDemo from "./component/propDemo";
import NationalSingle from "./component/national/nationalSingle";
import LatestSingle from "./component/national/latestSingle";
import TrendingSingle from "./component/national/trendingSingle";
import WorldSingle from "./component/national/worldSingle";
import PhotoSingle from "./component/national/photoSingle";
import TechnologySingle from "./component/national/technologySingle";
import NationalListing from "./component/categoryPage/national";
import PhotoListing from "./component/categoryPage/photolisting";
import TechnologyListing from "./component/categoryPage/Technologylisting";
import WorldListing from "./component/categoryPage/world";

const App = () => {
  return (
    <div className="Overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propdemo" element={<PropDemo />} />
          <Route path="/national/:slug/:id" element={<NationalSingle />} />
          <Route path="/latest/:slug" element={<LatestSingle />} />
          <Route path="/trending/:slug" element={<TrendingSingle />} />
          <Route path="/world/:slug" element={<WorldSingle />} />
          <Route path="/photo/:slug" element={<PhotoSingle />} />
          <Route path="/technology/:slug" element={<TechnologySingle />} />
          <Route path="/national/" element={<NationalListing />} />
          <Route path="/photo/" element={<PhotoListing />} />
          <Route path="/technology/" element={<TechnologyListing />} />
          <Route path="/world/" element={<WorldListing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
