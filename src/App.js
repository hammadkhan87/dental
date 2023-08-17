import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import PrimarySearchAppBar from "./components/header/PrimarySearvhAppBar/PrimarySearchAppBar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Treatments from "./pages/treatments/Treatments";
import Testimonials from "./pages/Testimonials/Testimonials";
import BlogDentalImplants from "./pages/blog_dental_implant/BlogDentalImplants";
import BlogMouthBreathing from "./pages/blog_Mouth_breathing/BlogMouthBreathing";
import GeneralDentistry from "./pages/GENERAL DENTISTRY/GeneralDentistry";
import SmileMakeOver from "./pages/SMILE MAKEOVER/SmileMakeOver";
import DentalImplants from "./pages/Dental Implants/DentalImplants";

function App() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  
  const showDrawer = () => {
    setOpen(true);
  };
  
  const onClose = () => {
    setOpen(false);
  };
  
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <BrowserRouter>
      <PrimarySearchAppBar
        placement={placement}
        onChange={onChange}
        showDrawer={showDrawer}
      />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/treatments" element={<Treatments />} />
        <Route exact path="/testimonials" element={<Testimonials />} />
        <Route exact path="/digital-implants-blog" element={<BlogDentalImplants />} />
        <Route exact path="/Mouthbreathingblog" element={<BlogMouthBreathing/>} />
        <Route exact path="/generaldentistry" element={<GeneralDentistry/>} />
        <Route exact path="/SmileMakeOver" element={<SmileMakeOver/>} />
        <Route exact path="/DentalImplants" element={<DentalImplants/>} />
      </Routes>

      {/* Regular or light version of the tooth icon */}
      <Footer/>
       </BrowserRouter>
  );
}

export default App;
