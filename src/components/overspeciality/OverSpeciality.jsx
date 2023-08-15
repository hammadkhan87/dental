import React from "react";
import "./style.scss";
import img from "../../images/LaserDentistry-4.jpg";
import imgb from "../../images/Autoclave-3.jpg";
import imgc from "../../images/trios-Scanner.jpg";
import imgd from "../../images/SleepDentistruy-3.jpg";

const OverSpeciality = () => {
  return (
    <div className="sp_main_container">
      <p className="sp_title_1">Over Speciality</p>
      <p className="sp_title_2">We are eminent at</p>
      <p className="sp_des_1">
        providing finest treatments, using state of the art infrastructure, from
        the hands of efficient dentists in a friendly, safe and hygiene
        environment
      </p>
      <div className="sp_cards_main_container">
        <div className="sp_card_1">
          <img src={img} alt="" />
          <p className="sp_card_title">PAIN-FREE DENTISTRY</p>
          <p className="sp_dec">We go for minimal invasive dentistry for detecting, diagnosing, intercepting and treating dental anomalies 
          at a microscopic level, thereby providing minimalistic abrasion, pain and zero infection</p>
        </div>
        <div className="sp_card_1">
          <img src={imgb} alt="" />
          <p className="sp_card_title">STERILIZATION</p>
          <p className="sp_dec">Usage of Class B Autoclave Sterilizer (steam sterilizer) ensures consistent hygiene practices for quality treatment</p>
        </div>
        <div className="sp_card_1">
          <img src={imgc} alt="" />
          <p className="sp_card_title">DIGITAL DENTISTRY</p>
          <p className="sp_dec">Our state of the art infrastructure includes “intra oral scanner” which is high in
           precision, guaranteeing us with error free prosthesis for implantation</p>
        </div>
        <div className="sp_card_1">
          <img src={imgd} alt="" />
          <p className="sp_card_title">RELAXED DENTISTRY</p>
          <p className="sp_dec">Our qualified dentists will help overcome your anxiety and fears through sedation or relaxation</p>
        </div>
      </div>
    </div>
  );
};

export default OverSpeciality;
