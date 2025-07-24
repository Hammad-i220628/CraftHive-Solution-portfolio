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
import './responsive.css'
import './logo-fix.css'
import Footer from "./Home/Footer";
import About from './About us/About'
import SeparateComp from "./Home/SeparateComp";
import AIServices from "./Services/AIServices";
import WebDevelopment from "./Services/WebDevelopment";
import Portfolio from "./Portfolio/Portfolio";
import AllTechnologies from "./Technologies/AllTechnologies";
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
        <Route path="/" element={<Home />} />
         <Route path="/ValueProposition" element={<ValueProposition />} />
        <Route path="/CompanyOverview" element={<CompanyOverview />} />
        <Route path="/HighlightingServices" element={<HighlightingServices />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/SeparateComp" element={<SeparateComp/>} />
        <Route path="/AIServices" element={<AIServices />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/AllTechnologies" element={<AllTechnologies />} />
     
      </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
