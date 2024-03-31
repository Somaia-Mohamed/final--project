import React from "react";
import { Link } from "react-router-dom";
const subTitle = "Save The Day";
const title = (
  <h2>
    Join on Day Long Free Workshop For{" "}
    <b>
      Advanced <span>Mastering</span>on Sales
    </b>
  </h2>
);
const desc = "Limited Time Offer !Hurry Up";
export default function Register() {
  return (
    <div className="course-section padding-tb pb-0 ">
      <div className="container">
        <div className=" row g-4 row-cols-lg-2 row-cols-1 align-content-center ">
          <div className=" col ">
            <div className="section-header">
              <span className="subtitle" style={{ color: "#FF5D73" }}>
                {subTitle}
              </span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className=" col ">
            <div className="section-wrapper">
              <h4>Register Now</h4>
              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="reg-input"
                />
            
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
