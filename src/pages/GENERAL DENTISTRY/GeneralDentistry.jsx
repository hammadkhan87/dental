import React from "react";
import "./style.scss";
import Pagetitle from "../../components/pagetitle/Pagetitle";
import AboutUsSection from "../../components/aboutus/AboutUsSection";
import TreatSnapshot from "../../components/treatmentSnapshot/TreatSnapshot";
import OneStopSolution from "../../components/onestopsolution/OneStopSolution";
import GeneralDentalServices from "../../components/GeneralDentalServices/GeneralDentalServices";
import WhyTrust from "../../components/WHY TRUST/WhyTrust";
import imageb from "../../images/J2I1615_1-1024x683.jpg"
const GeneralDentistry = () => {
  return (
    <div>
      <Pagetitle title={"GENERAL DENTISTRY"} />
      <OneStopSolution title="One Stop Solution For Your Dental Issues" image={imageb}/>
      <GeneralDentalServices/>
      <WhyTrust/>
    </div>
  );
};

export default GeneralDentistry;
