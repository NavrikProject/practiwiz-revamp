import React from "react";
import Wdrtjh from "../../Images/Home/wdrtjh.png";
import Csdfsfgdf from "../../Images/Home/csdfsfgdf.png";
import Dfsh from "../../Images/Home/dfsh.png";
import Mkwef from "../../Images/Home/mkwef.png";
import Mentor1 from "../../Images/Home/mentors1.jpeg";
import Rdtere5rt from "../../Images/Home/rdtere5rt.jpg";
import Adse from "../../Images/Home/adse.png";
import { ReactTyped } from "react-typed";
import "./Home.css";
import { Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const HomePageBanner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_content">
          <div className="container px-5">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4">
                <div className="iduherr_left">
                  <h1>Share Your Superpower Become a Mentor</h1>
                  <p id="typing" className="mb-0 mt-3">
                    Learn From The Corporate, Step Into Corporate World!
                    {/* <ReactTyped
                      strings={[
                        "Learn From The Corporate, Step Into Corporate World!",
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    ></ReactTyped> */}
                  </p>
                  <button className="btn mt-5 btn-main">
                    <Link target="_blank" to="/register">
                      Register
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="iduherr_right">
                  <div className="diehjrrr_intern position-relative">
                    <div className="uidgher_circle position-absolute">
                      <img src={Wdrtjh} alt="wdrth" style={{ width: "100%" }} />
                    </div>

                    <div>
                      <img
                        src={Csdfsfgdf}
                        className="position-absolute"
                        alt="csdfs"
                        style={{ width: "56%" }}
                      />
                    </div>
                  </div>
                  <div className="diehjsdrrr_intern position-relative">
                    <div className="uidgher_circle position-absolute">
                      <img src={Dfsh} alt="dfsh" style={{ width: "100%" }} />
                    </div>

                    <div>
                      <img
                        src={Mkwef}
                        className="position-absolute"
                        alt="mkwef"
                        style={{ width: "56%" }}
                      />
                    </div>
                  </div>
                  <div className="owl-carousel udguafr_slider owl-theme carousel-react">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center">
                            <img
                              src={Mentor1}
                              alt="mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center">
                            <img
                              src={Mentor1}
                              alt="mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center">
                            <img
                              src={Rdtere5rt}
                              alt="rdtere"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center">
                            <img
                              src={Adse}
                              alt="adse"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
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

export default HomePageBanner;
