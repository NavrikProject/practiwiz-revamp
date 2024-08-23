import React, { useEffect, useState } from "react";
import Mentors1 from "../../Images/Mentors/mentors1.jpeg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import axios from "axios";
import { ApiURL } from "../../Utils/ApiURL";
import { Link } from "react-router-dom";
const Section2 = () => {
  const [allMentors, setAllMentors] = useState([]);
  const url = ApiURL();
  useEffect(() => {
    const fetchMentors = async () => {
      const response = await axios.get(`${url}api/v1/mentor/fetch-10-mentors`);
      if (response.data.success) {
        setAllMentors(response.data.success);
      }
      if (response.data.error) {
        setAllMentors([]);
      }
    };
    fetchMentors();
  }, [url]);
  return (
    <>
      <div className="section2 py-5 section-hor-gap">
        <div className="container py-5">
          <div className="hjfgdfgfg">
            <h2>Our Featured Mentors</h2>
          </div>
          <div>
            <div className="khjfdgdf">
              <div
                className="owl-carousel ihdieruir_slider owl-theme"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {allMentors?.map((mentor) => {
                    <SwiperSlide>
                      <div className="item">
                        <div className="iheroijr_inner bg-white text-center overflow-hidden position-relative">
                          <div className="diegrher overflow-hidden">
                            <img
                              src={mentor.mentor_profile_photo}
                              alt="mentors1"
                              style={{
                                width: "240px !important",
                                height: "400px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="doiuher_content">
                            <h4 className="mb-0">Tarun Gutam</h4>
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
                    </SwiperSlide>;
                  })}
                  {/* <SwiperSlide>
                    <div className="item">
                      <div className="iheroijr_inner bg-white text-center overflow-hidden position-relative">
                        <div className="diegrher overflow-hidden">
                          <img
                            src={Mentors1}
                            alt="mentors1"
                            style={{
                              width: "240px !important",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="doiuher_content">
                          <h4 className="mb-0">Tarun Gutam</h4>
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
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="iheroijr_inner bg-white text-center overflow-hidden position-relative">
                        <div className="diegrher overflow-hidden">
                          <img
                            src={Mentors1}
                            alt="mentors1"
                            style={{
                              width: "240px !important",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="doiuher_content">
                          <h4 className="mb-0">Tarun Gutam</h4>
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
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="iheroijr_inner bg-white text-center overflow-hidden position-relative">
                        <div className="diegrher overflow-hidden">
                          <img
                            src={Mentors1}
                            alt="mentors1"
                            style={{
                              width: "240px !important",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="doiuher_content">
                          <h4 className="mb-0">Tarun Gutam</h4>
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
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="iheroijr_inner bg-white text-center overflow-hidden position-relative">
                        <div className="diegrher overflow-hidden">
                          <img
                            src={Mentors1}
                            alt="mentors1"
                            style={{
                              width: "240px !important",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="doiuher_content">
                          <h4 className="mb-0">Tarun Gutam</h4>
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
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="iheroijr_inner bg-white text-center overflow-hidden position-relative">
                        <div className="diegrher overflow-hidden">
                          <img
                            src={Mentors1}
                            alt="mentors1"
                            style={{
                              width: "240px !important",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="doiuher_content">
                          <h4 className="mb-0">Tarun Gutam</h4>
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
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="dhhfff text-center">
            <button className="btn btn-main">
              <Link to="/mentor-club">
                VIEW ALL MENTORS <i className="fa-solid fa-circle-right"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
