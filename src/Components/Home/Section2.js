import React from "react";
import "./Home.css";
const Section2 = () => {
  return (
    <>
      {" "}
      <div className="section2 py-5 section-hor-gap">
        <div className="container py-5">
          <div className="hjfgdfgfg">
            <h2>Our Featured Mentors</h2>
          </div>

          <div>
            <div className="khjfdgdf">
              <div className="owl-carousel ihdieruir_slider owl-theme">
                <div className="item">
                  <div className="iheroijr_inner bg-white text-center overflow-hidden position-relative">
                    <div className="diegrher overflow-hidden">
                      <img
                        src=""
                        alt="mentors1"
                        style={{
                          width: "240px !important",
                          height: "400px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="doiuher_content">
                      <h4 className="mb-0">Mahesh Bandari</h4>

                      <p className="profession">Full stack developer</p>
                      <p className="rating mb-0">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dhhfff text-center">
            <button className="btn btn-main">
              VIEW ALL MENTORS <i className="fa-solid fa-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
