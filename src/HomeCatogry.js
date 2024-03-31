import React from "react";
import { Link } from "react-router-dom";
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "images/category/011.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Man Casual",
  },
  {
    imgUrl: "images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "images/category/033.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Dresses",
  },
  {
    imgUrl: "images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Man Accessories",
  },
  {
    imgUrl: "images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "images/category/01111.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Woman Accessories",
  },
];

export default function HomeCatogry() {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="course-section">
        <div className="section-header text-center ">
          <span className="subtitle" style={{ color: "#FF5D73" }}>
            {subTitle}
          </span>
          <h2 className="title">{title}</h2>
        </div>
        {/* social wrapper  */}
        <div className="section-wrapper">
          <div className=" row gap-4 justify-content-center row-cols-md-4   row-cols-sm-2 row-cols-1 ">
            {categoryList.map((el, index) => (
              <div key={index} className="col">
                <Link className="category-item">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={el.imgUrl} alt={el.imgAlt} />
                    </div>
                    {/* content  */}
                    <div className="category-content">
                      <div
                        className="cate-icon"
                        style={{ background: "#FF5D73" }}
                      >
                        <i
                          className={`${el.iconName}`}
                          style={{ color: "white" }}
                        ></i>
                        {/* <i class="fa-brands fa-windows"></i> */}
                      </div>
                      <Link style={{ color: "white" }}>{el.title}</Link>
                    </div>
                    {/* <i
                        className={el.iconName}
                        m-5
                        style={{ color: "#EB5E6F", margin: "20px" }}
                      ></i>
                      <Link>{el.title}</Link> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className=" text-center mt-5 ">
            <Link
              to={"/shop"}
              className="lab-btn bg-white "
              style={{ border: "#FF5D73 5px solid" }}
            >
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mt-5 " style={{ backgroundColor: "#D2FEF1" }}>
        <div className="container">
          <div className="row">
            <div className=" col ">
              <img src="summer.jpg" />
            </div>
            <div className="col  align-content-center  ">
              <span
                className="subtitle align-content-center fs-5 "
                style={{ color: "#f76d80" }}
              >
                New season trends!
              </span>
              <h2 className="title">Best Summer Collection</h2>
              <h6>Sale Get up to 50% Off</h6>
              <button className="lab-btn">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
