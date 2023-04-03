import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CapPage from "./Components/CapPage";
import Chatbot from "./Components/Chatbot";
import Home from "./Components/Home";
import InnerPage from "./Components/InnerPage";
import Navbar from "./Components/Navbar";
import NavBarRes from "./Components/NavBarRes";

const Routing = () => {
  return (
    <BrowserRouter>
       <NavBarRes/>
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/innerpage" element={<InnerPage />} />
         <Route path="/cappage" element={<CapPage />} />
      </Routes>
      <div className="chatbot fixed-bottom">
        <Chatbot/>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
