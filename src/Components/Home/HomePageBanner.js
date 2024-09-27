import React from "react";
import "./Home.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";

const HomePageBanner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_content">
          <div className=" px-5">
            {/* <div className="row align-items-center container-homepage"> */}
            <div className="container-homepage">
              <div className="col-lg-8 mb-4">
                <div className="iduherr_left">
                  <h1>Share Your Superpower</h1>
                  {/* <h2 style={{ color: "white" }}>Become a Mentor</h2> */}
                  <h1>Become a Mentor</h1>
                  <p
                    id="typing"
                    className="mb-0 mt-3"
                    style={{ borderRight: "0" }}
                  >
                    {/* Learn From The Corporate, Step Into Corporate World! */}
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
              <div className="col-lg-4 mb-4 testbackg">
                <div className="iduherr_right">
                  {/* <div className="diehjrrr_intern position-relative">
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
                  </div> */}
                  <div className="owl-carousel udguafr_slider owl-theme carousel-react">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper "
                    >
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center swiper-img-home">
                            <img
                              src={img1}
                              alt="Mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center swiper-img-home">
                            <img
                              src={img2}
                              alt="Mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center swiper-img-home">
                            <img
                              src={img3}
                              alt="Mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center swiper-img-home">
                            <img
                              src={img4}
                              alt="Mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center swiper-img-home">
                            <img
                              src={img5}
                              alt="Mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center swiper-img-home">
                            <img
                              src={img6}
                              alt="Mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center swiper-img-home">
                            <img
                              src={img7}
                              alt="Mentor"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="item">
                          <div className="uihderr_slider text-center swiper-img-home">
                            <img
                              src={img8}
                              alt="Mentor"
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
