import React from "react";
import "./style.scss";
import Cards from "./cards/Cards";
import testipica from "../../images/testi1.png";
import testipicb from "../../images/testi2.png";
import testipicc from "../../images/testi3.png";
import { AiOutlineGoogle } from "react-icons/ai";
import logoa from "../../images/Smile.svg"
import logob from "../../images/RCT.png"
import logoc from "../../images/Implants.png"
import logod from "../../images/Celebrating.png"
import { ImYoutube } from "react-icons/im";
import ReactPlayer from "react-player/youtube";

const TestimonialCards = () => {
  return (
    <div className="testi_cards_main_container">
      <div className="testi_cards_inner_container">
        <p className="rew_title_1">PATIENT SPEAKS</p>
        <p className="rew_title_2">What They Say About Us</p>
        <div className="testi_cards">
          <Cards
            profilePic={testipica}
            name="Sujatha mageshbahu"
            designation="Patient"
            text="Bunny teeth dental clinic equipped with latest technology of digital scanning. 
          For my tooth issue it was scanning in 360 degree angle.
          Dr. Santhosh kumari very patiently doing the treatment without any pain.
           Clinic is well equipped with technology and all things are well sterilized. For kids pain
            free treatment and their room is very nice. Every kid would love to take treatment here. 
            Best part is follow up with us next day."
            stars={5}
          />
          <Cards
            profilePic={testipicb}
            name="RAMANATHAN MUTHU"
            designation="Patient"
            text="We went for my daughters tooth removal last week. The doctor who attended was polite and friendly. 
          Though my daughter started to panic when the doctor told we have to remove two of her teeth, the Doctor assured my 
          daughter that she would put her tooth to sleep and slowly started the treatment while they played cartoons for my child. It was painless for
           my daughter and now she has a confident look. Would strongly recommend this clinic for children."
            stars={5}
          />
          <Cards
            profilePic={testipicc}
            name="Surendar Kumar"
            designation="Patient"
            text="Well experienced and a good doctor. Had a good experience with them, have been consulting her for about 5 years. 
          She and her team are very friendly, polite and co-operative. Would recommend this place for anyone who is looking for a dentist."
            stars={5}
          />
        </div>
        <div className="rew_more_testimonial">
          <p className="rew_more_text1">Check Out More Testimonials here</p>
          <a className="rew_more_icon" href="https://goo.gl/maps/nZV7f7zfeUGBuUnE8"
            target="_blank">
            <AiOutlineGoogle />
          </a>
        </div>
        <p className="rew_title_1">PATIENT SPEAKS</p>
        <p className="rew_title_2">What They Say About Us</p>
        <div className="test_video_section">
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=WTQQxG0N26s`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=stzL4DFDfiY`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=S0QlC-gFZ8o`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=s1lbN53D3i8`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=K4qvMAxWWfQ`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=we7HAVwEIXw`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=IrA2jZs-OfI`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=9H47oSU-8-0`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=MtOZOCzi8hk`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
        </div>
        <p className="rew_title_1" style={{ marginTop: "30px" }}>
          DENTAL TIPS
        </p>
        <p className="rew_title_2">What Our Dentist has to Say</p>
        <div className="test_video_section">
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=SCSh_oOatXc`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=Yz7KtvfFDGU`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=AZD1t_9NPSc`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=zl_JwElKmxI`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=5sCLSO9S8iY`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=PP9p_28bjso`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=XvaPMaq2DTU`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=pkJhvhaYt40`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
          <div className="video_p_test">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=1F7rt8tCN_E`}
              controls
              width="100%"
              height="100%"
              //   playing={true}
            />
          </div>
        </div>
        <div className="rew_more_testimonial">
          <p className="rew_more_text1">Check Out More Videos here</p>
          <a
          href="https://www.youtube.com/channel/UCBRE5bDuKzXacW1Xpk8hYxQ"
          target="_blank"
            className="rew_more_icon"
            style={{ backgroundColor: "#cd201f" }}
          >
            <ImYoutube />
          </a>
        </div>
      </div>
      <p className="rew_title_2">Our Success Story</p>
      <div className="testi_end_container">
        <div className="t_end_card">
          <div className="digit">
            <p className="t_end_count">10,000+</p>{" "}
            <p className="t_end_text">Happy Smiles</p>
          </div>
          <span className="t_end_pic"><img src={logoa} alt="" width={"100%"} height={"100%"} /></span>
        </div>
      
        <div className="t_end_card">
          <div className="digit">
            <p className="t_end_count">7,500+</p>{" "}
            <p className="t_end_text">Root Canals</p>
          </div>
          <span className="t_end_pic"><img src={logob} alt="" width={"100%"} height={"100%"} /></span>
        </div>
        <div className="t_end_card">
          <div className="digit">
            <p className="t_end_count">2,500+</p>{" "}
            <p className="t_end_text">Implants Placed</p>
          </div>
          <span className="t_end_pic"><img src={logoc} alt="" width={"100%"} height={"100%"} /></span>
        </div>
        <div className="t_end_card">
          <div className="digit">
            <p className="t_end_count">20+</p>{" "}
            <p className="t_end_text">Beaming Years</p>
          </div>
          <span className="t_end_pic"><img src={logod} alt="" width={"100%"} height={"100%"} /></span>
        </div>
        </div>
    </div>
  );
};

export default TestimonialCards;
