import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CapPage from "./Components/CapPage";
import ChatBot from "./Components/ChatBot";
import HomeRes from "./Components/HomeRes";
import InnerPage from "./Components/InnerPage";
import Navbar from "./Components/Navbar";
import NavBarRes from "./Components/NavBarRes";

const Routing = () => {
  return (
    <BrowserRouter>
       <NavBarRes/>
      <Routes>
        <Route path="/" element={<HomeRes/>} /> 
         <Route path="/innerpage" element={<InnerPage />} />
         <Route path="/cappage" element={<CapPage />} />
      </Routes>
              <ChatBot/>
      
    </BrowserRouter>
  );
};

export default Routing;
