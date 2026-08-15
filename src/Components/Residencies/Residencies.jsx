import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/Common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <Swiper {...sliderSettings}>
          {/* Header and Controls */}
          <div className="r-head-container">
            <div className="r-head flexColStart">
              <span className="orangeText">Best Choices</span>
              <span className="primaryText">Popular Residencies</span>
            </div>
            <SliderButtons />
          </div>

          {/* Carousel Slides */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt={card.name || "Residency"} />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText r-detail">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} aria-label="Previous Slide">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} aria-label="Next Slide">
        &gt;
      </button>
    </div>
  );
};