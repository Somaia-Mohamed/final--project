import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import HomeCatogry from "./HomeCatogry";
import SwiperBackGround from "./swiper";
import ProductCategory from "./ProductCategory";
import Register from "./Register";
import AboutUs from "./AboutUs";
import Fotter from "./Fotter";

export default function Home() {
  return (
    <>
      <SwiperBackGround />
      <HomeCatogry />
      <ProductCategory />
      <AboutUs/>
      <Fotter/>
      {/* <h1>Homehhhhhhhhhhhhhhhhhhhhhhhhhh</h1> */}
    </>
  );
}
