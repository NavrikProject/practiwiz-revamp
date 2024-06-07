import React from "react";
import "./Home.css";
import Dcaffer from "../../Images/Home/dcaffer.png";
const Section7 = () => {
  return (
    <>
      <div className="section7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="uiherr_wrapper">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-3">
                    <div className="diehrer_inner">
                      <h2>Register Now</h2>

                      <p>to study in Next Academic Year 2025</p>

                      <button className="btn btn-main mt-3">
                        Register Now
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <img
                      src={Dcaffer}
                      alt="dcaffer"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
