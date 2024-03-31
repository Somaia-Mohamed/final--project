import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperBackGround() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className=" mt-5 ">
          <div
            className=" d-flex justify-content-between mt-lg-5  "
            style={{ backgroundColor: "#D2FEF1", height: "450px" }}
          >
            <div className=" m-auto ">
              <h4 className="subtitle">
                Taking your Viewing Experience to Next Level
              </h4>
              <h1 className="title">Summer Sale</h1>
              <button className="lab-btn">SHOP NOW</button>
            </div>
            <img src="boy.webp" alt="boy" className="  me-5" />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mt-5 ">
          <div
            className=" d-flex justify-content-between "
            style={{ backgroundColor: "#FFE4D3", height: "450px" }}
          >
            <div className=" m-auto ">
              <h4>50% off in all products</h4>
              <h1 className="title">Man Fashion</h1>
              <button className="lab-btn">SHOP NOW</button>
            </div>
            <img src="man.webp" alt="boy" className=" me-5" />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mt-5 ">
          <div
            className=" d-flex justify-content-between "
            style={{ backgroundColor: "#FFE4D3", height: "450px" }}
          >
            <div className=" m-auto ">
              <h4>Get up to 50% off Today Only!</h4>
              <h1 className="title">Woman Fashion</h1>
              <button className="lab-btn">SHOP NOW</button>
            </div>
            <img src="girl.png" alt="boy" className=" me-5" />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="section-wrapper">
        <div className=" row gap-4 justify-content-center row-cols-1 row-cols-sm-1 row-cols-md-2 ">
          <div
            style={{ background: "#FFDBDF", width: "45%" }}
            className=" d-flex category-content "
          >
            <img src="sale.png" alt="sale" className=" w-50 m-2   " />
            <div className=" m-auto ">
              <h6 className="subtitle ">Super Sale</h6>
              <h2 className="title d-sm-none d-none d-lg-inline-block  ">
                New Collection
              </h2>
              <a href="#">Shop Now</a>
            </div>
          </div>
          <div
            style={{ background: "#D6F7FE", width: "45%" }}
            className=" d-flex "
          >
            <img src="girls.png" alt="girl" className=" w-50 m-2   " />
            <div className=" m-auto ">
              <h2 className="title  d-lg-inline-block">New Season</h2>
              <h6 className="subtitle ">Sale 40% Off</h6>
              <a href="#">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
