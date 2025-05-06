import React from "react";
import {EmblaCarousel} from "./Carousel/EmblaCarousel";
import HomeIcon from "./HomeIcon/HomeIcon";
import QandA from "./QandA/QandA";
import ReviewSection from "./ReviewSection/ReviewSection";
import Notice from "./Notice/Notice";

import Endsection from "./LastSection/Endsection";

const HomePage = () => {
  return (
    <div className="">
      <div className="mt-10">
        <EmblaCarousel></EmblaCarousel>
      </div>
      <div className="mt-20">
        <HomeIcon></HomeIcon>
      </div>
      <div className="mt-20">
        <Notice> </Notice>
      </div>
      <div className="mt-20">
        <ReviewSection></ReviewSection>
      </div>
      <div className="mt-20">
        <QandA></QandA>
      </div>
      <Endsection></Endsection>
    </div>
  );
};

export default HomePage;
