import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import ValueProposition from "./Home/ValueProposition";
import CompanyOverview from "./Home/CompanyOverview";
import HighlightingServices from "./Home/HighlightingServices";
import ContactForm from './Contact us/ContactForm';
import Home from "./Home/Home";
import './index.css'
import Footer from "./Home/Footer";
import About from './About us/About'
import SeparateComp from "./Home/SeparateComp";
import ThreeDAnimation from "./Services/ThreeDAnimation";
import ContentWriting from "./Services/ContentWriting";
import WebsiteSolutions from "./Services/WebsiteSolutions";
import Portfolio from "./Portfolio/Portfolio";
import { AnimatePresence } from 'framer-motion';




const App = () => {
  

useEffect(() => {
  AOS.init({
    duration: 2000, // Global animation duration
       
  });
}, []);
  return (
    <Router>
        <AnimatePresence>
      <Navigation />
      <Routes>
        Define your routes here
        {/* <Route path="/" element={<Home />} />
        
       
      
        <Route path="/blog" element={<Blog />} /> */}
         <Route path="/ValueProposition" element={<ValueProposition />} />
        <Route path="/CompanyOverview" element={<CompanyOverview />} />
        <Route path="/HighlightingServices" element={<HighlightingServices />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/SeparateComp" element={<SeparateComp/>} />
        <Route path="/ThreeDAnimation" element={<ThreeDAnimation />} />
        <Route path="/ContentWriting" element={<ContentWriting />} />
        <Route path="/WebsiteSolutions" element={<WebsiteSolutions />} />
        <Route path="/Portfolio" element={<Portfolio />} />
     
      </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
