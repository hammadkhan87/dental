import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReviewCard from './cards/ReviewCard';
import pica from "../../images/mm.png"
import picb from "../../images/bb.png"
import picc from "../../images/cc.png"
import "./style.scss"
const AutoplayCarousel = () => {
  const totalSlides = 3; // Change this to the actual number of slides
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Autoplay logic
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    
   
       <div className='main_container_r'>
         <div style={{width:"31%", margin:"7px"}}>
        <ReviewCard profilePic={pica} name={"Mohammed Ansar ali"} date={"2021-6-18"} stars={5} description={"I went for my daughter root canal treatment more than my daughter I was very happy because proper treatment without pain doctor and co staff very nice interaction with child and explain the treatment step by step doc has advance technology to treat kids with out pain worth for money after treatment mam gave gift to my daughter she is very much happy I am totally satisfied with bunny teeth. after treatment they call us and ask about child condition none of other clinic do this."}/>
        </div>
        <div style={{width:"31%", margin:"7px"}}>
        <ReviewCard profilePic={picb} name={"Jhayaram MRK"} date={"2021-06-13"} stars={5} description={"Dr.Santhosh Kumari is an Experienced and Excellent dentist who used to ask me if anything hurt and it was the first time I had totally pain-free dentistry. The crowns and the partials you did for me feels great. Overall it was a very good experience with the Team Bunny Teath"}/>
        </div>
        <div style={{width:"31%", margin:"7px"}}>

        <ReviewCard profilePic={picc} name={"raja gopal"} date={"2021-6-13"} stars={5} description={"I DID DENTAL TREAMENT FOR MY SON - THE TREAMENT WAS VERY GREAT AND HE HAD NO PAIN AND HE ENJOYED HIS TREATMENT TOO..I RECOMMEDN STRONGLY BUNNY TEETH FOR DENTAL TREAMENTS"}/>
        </div>
      </div> 
  );
};

export default AutoplayCarousel;
