import React from "react";

export default function Fotter() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="row  ">
          <div className="col mt-5 ">
            <img src="logo_light.png" alt="Logo" className=" mb-3 " />
            <p className=" mt-3 fs-6" style={{ color: "white" }}>
              If you are going to use of Lorem Ipsum need to be sure there isn't
              hidden of text
            </p>
          </div>
          <div className="col mt-5 pt-3 ">
            <h5 style={{ color: "white" }}>Useful Links</h5>
          </div>
          <div className="col mt-5 pt-3 ">
            <h5 style={{ color: "white" }}>Category</h5>
          </div>
          <div className="col mt-5 pt-3">
            <h5 style={{ color: "white" }}>My  Account</h5>
          </div>
          <div className="col mt-5 pt-3">
            <h5 style={{ color: "white" }}>Useful Links</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
