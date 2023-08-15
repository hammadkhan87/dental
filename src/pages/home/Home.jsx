import React from "react";
import "./home.scss"
import Hero from "../../components/hero/Hero";
import HomeFirstCards from "../../components/homecard1/HomeFirstCards";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";
import DentalServices from "../../components/Dentalservices/DentalServices";
import HomeCardsB from "../../components/homecards2/HomeCardsB";
import SaftyVideo from "../../components/saftyvideo/SaftyVideo";
import OverSpeciality from "../../components/overspeciality/OverSpeciality";
import { ReviewsCard } from "../../components/home_reviews/ReviewsCard";

const Home = () => {
  return <div className="container">
    <Hero/>
    <HomeFirstCards/>
    <WhyChooseUs/>
    <DentalServices/>
    <HomeCardsB/>
    <SaftyVideo/>
    <OverSpeciality/>
    <ReviewsCard/>
  
  </div>;
};

export default Home;
