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
import KidsDentistry from "./pages/KidsDentistry/KidsDentistry";
import SedationDentistry from "./pages/Sedation Dentistry/SedationDentistry";
import Dentures from "./pages/Dentures/Dentures";
import DentalBridgesCrowns from "./pages/DentalBridgesCrowns/DentalBridgesCrowns";
import { ClearAligners } from "./pages/ClearAlignersandInvisible Braces/ClearAligners";
import OrthodonticTreatment from "./pages/OrthodonticTreatment/OrthodonticTreatment";
import WisdomToothRemoval from "./pages/WisdomToothRemoval/WisdomToothRemoval";
import RootCanal from "./pages/RootCanal/RootCanal";
import OurTeam from "./pages/OurTeam/OurTeam";
import SantoshProfile from "./pages/SantoshProfile/SantoshProfile";

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
        <Route exact path="/KidsDentistry" element={<KidsDentistry/>} />
        <Route exact path="/SedationDentistry" element={<SedationDentistry/>} />
        <Route exact path="/Dentures" element={<Dentures/>} />
        <Route exact path="/DentalBridgesandCrowns" element={<DentalBridgesCrowns/>} />
        <Route exact path="/ClearAlignersandInvisibleBraces" element={<ClearAligners/>} />
        <Route exact path="/OrthodonticTreatment" element={<OrthodonticTreatment/>} />
        <Route exact path="/WisdomToothRemoval" element={<WisdomToothRemoval/>} />
        <Route exact path="/RootCanal" element={<RootCanal/>} />
        <Route exact path="/ourteam" element={<OurTeam/>} />
        <Route exact path="/Santoshprofile" element={<SantoshProfile/>} />
      </Routes>

      {/* Regular or light version of the tooth icon */}
      <Footer/>
       </BrowserRouter>
  );
}

export default App;
