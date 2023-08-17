import React from "react";
import Pagetitle from "../../components/pagetitle/Pagetitle";
import imageaa from "../../images/woman-and-dentists-N5BXGZH-1.jpg";
import "./style.scss";
import InfoPage from "../../components/InfoAboutPage/InfoPage";
import EndWhyUs from "../../components/EndWhyUs/EndWhyUs";
const DentalImplants = () => {
  return (
    <div className="implant_main_container">
      <Pagetitle title="Dental Implants" />
      <div className="imp_container_a">
        <div className="imp_left_side_container">
          <p className="imp_title">Dental Implants</p>
          <div className="imp_img">
            <img src={imageaa} alt="" />
          </div>
          <p className="imp_detail_left_side">
            We offer dental implants to patients who are eligible to avail this
            procedure. These replacement tooth roots are created from titanium
            alloys or titanium. It helps stimulate bone growth while preventing
            bone resorption. It replaces your missing teeth the natural way and
            restores function to allow you to bite, chew and eat food.
          </p>
          <p className="imp_detail_left_side">
            Our dental implants will provide you with lots of benefits like
            improved speech, appearance, comfort, oral health, self-esteem and
            easier eating. You can also find it convenient and enjoy having them
            for a lifetime with good care.
          </p>
          <p className="imp_detail_left_side">
            The cost involved in availing dental implants is based on the bone
            quality and brand selected. We do offer top-quality, affordable
            dental implantation procedure, enabling you to lead a normal life
            and smile wide without any worry or inconvenience.
          </p>
          <p className="imp_detail_left_side">
            We also recommend you to quit or reduce smoking to avoid dental
            implant failures. For the initial few days, you will experience some
            swelling and pain in the region. We will suggest you with some pain
            medication and therapies practicing which you will feel relief and
            become normal quickly. The stitches used around the implant are
            dissolvable. But if you feel uncomfortable, our dentists will have
            it removed.
          </p>
          <p className="imp_detail_left_side">
            You should take proper care of your dental implants like that of
            your natural teeth. We suggest you to visit our clinic after every
            six month for cleaning and thorough check-up to enjoy optimal oral
            health.
          </p>
          <p className="imp_detail_left_side">
            We offer our patients with multiple and single tooth implants as the
            circumstances require. Single tooth is suggested to those with
            single or several missing teeth. If there are large gaps and full
            mouth replacement is not desired, then multiple implants are
            recommended.
          </p>
          <p className="imp_detail_left_side">
            We offer another advanced procedure, named, ‘All-on-4-implants’.
            With merely 4 implants, we replace easily full single-jaw missing
            teeth. It is indeed a cost-effective solution.
          </p>
          <p className="imp_detail_left_side">
            We strongly recommend children to have bi-annual check-up to ensure
            they grow teeth properly and in the right shape. Our dental clinic
            will provide you with all the information that you wish to know
            about your child’s tooth. Whatever questions you have in mind will
            be answered by our expert dentists. We also suggest parents to
            maintain oral hygiene for their babies. This will ensure that your
            baby’s mouth is clear and clean of harmful germs.
          </p>
          <p className="imp_detail_left_side">
            We do offer various types of preventive treatment for deciduous or
            milk teeth.
          </p>
          <ul
            className="imp_detail_left_side"
            style={{ listStyleType: "disc" }}
          >
            <li>
              Fluoride Treatments: It helps increase teeth strength by
              bolstering enamel and destroying bacteria and acid.
            </li>
            <li>
              Dental sealants: We spread this translucent material on your
              child’s teeth to prevent cavity formation and further spreading.
            </li>
            <li>
              Mouth Guards: We recommend children to wear mouth guards. We
              create them at our clinic to suit your child’s unique mouth shape.
            </li>
            <li>
              Space Maintainers: We offer this fully customized, specialised
              dental appliance to suit your child’s mouth.
            </li>
          </ul>
          <p className="imp_detail_left_side">
            We also administer laughing gas sedation or sleep dentistry for kids
            based on the prevailing circumstance and needs. We generally
            recommended administering NOIS on children of 8+ years. We address
            their dental problem with intravenous sedation or Day Care General
            Anaesthesia.
          </p>
          <p className="imp_detail_left_side">
            We do understand that children are prone to panic or experience
            anxiety when visiting dentists. Hence, we make sure that your child
            is made comfort with our soothing, playful words and remove their
            anxiety and stress.
          </p>
        </div>
        <div className="imp_right_side_container">
          <InfoPage title="Dental Implants" drname1="Dr. Santosh Rathod" drname2="Dr. Vishnu Priya"/>
        </div>
      </div>
      <p className="final_heading">We Care for your teeth!</p>
      <button className="imp_final_btn">Get Appointment</button>
      <div className="imp_final_container">
        <div className="imp_final_left">
            <EndWhyUs/>
        </div>
        <div className="imp_final_right"></div>
      </div>
    </div>
  );
};

export default DentalImplants;
