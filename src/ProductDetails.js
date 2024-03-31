import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./products.json";
import PageHeader from "./PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Review from "./Review";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductDisplay from "./ProductDisplay";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const [detialProduct, setDetialProduct] = useState([]);
  // useEffect(() => {
  //   fetch("./products.json")
  //     .then((data) => data.json)
  //     .then((data) => setProduct(data));
  // }, []);
  useEffect(() => {
    setProduct(data);
    console.log(product);
  }, []);
  console.log("fffffffff", product);
  const result = product.filter((p) => p.id === id);

  console.log(result);

  // const result = product.filter((p) => p.id === id);
  // console.log("detiiiiiiiiiii");
  // console.log(detialProduct);

  return (
    <div>
      <PageHeader title="Our Shop Single" curpage="shop/Single Product" />
      <div className="shop-single  ">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col  col-lg-8 col-12 ">
              <article>
                <div className="product-details">
                  <div className="row align-items-center ">
                    <div className="col-md-6 col-12 ">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={"true"}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={{ Autoplay }}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((el, index) => (
                              <SwiperSlide key={index}>
                                <div className="single-thumb">
                                  <img src={el.img} alt="images product" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div
                            className="pro-single-prev"
                            style={{ background: "#ff5d73 " }}
                          >
                            <i className="icofont-rounded-right"></i>
                          </div>
                          <div
                            className="pro-single-next"
                            style={{ background: "#ff5d73 " }}
                          >
                            <i className="icofont-rounded-left"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 ">
                      <div className="post-content">
                        <div>
                          {result.map((el, index) => (
                            // <h1>{el.name}</h1>
                            <ProductDisplay key={index} data={el} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review">
                
                  <Review />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
