import React from "react";
import CountUp from "react-countup";
export default function AboutUs() {
  return (
    <div>
      <div className="container  ">
        <div className="row  row-cols-1  row-cols-md-3   mb-5   ">
          <div className="col p-3 ">
            <i class="icofont-vehicle-delivery-van fs-1"></i>
            <h6>Free Delivery</h6>
            <p>
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
          <div className="col justify-content-center  p-3">
            <i class="icofont-pay fs-1 " style={{ alignItems: "center" }}></i>
            <h6 className=" ">
              <CountUp end={30} /> Day Return
            </h6>
            <p>
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
          <div className="col p-3 ">
            <i class="icofont-live-support  fs-1"></i>
            <h6>
              {" "}
              <CountUp end={24} />/ <CountUp end={7} /> Support
            </h6>
            <p>
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#ff5d73" }}>
        <div className="container ">
          <div className="row justify-content-center  ">
            <div className="col mt-5 mb-5   ">
              <h3>Subscribe Our Newsletter</h3>
            </div>
            <div className="col mt-5   ">
              <div className=" d-flex ">
                <input type="email" placeholder="Your Email Address" />
                <button className=" bg-black " style={{ color: "white" }}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
