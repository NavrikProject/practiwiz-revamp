import React from "react";
import AlumniMentor from "../../../Images/Institute/idherreee.webp";
import Mentor1 from "../../../Images/Institute/mentors1.jpeg";
import { Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
function MentorAlumniCard() {
  return (
    <div ClassName="item">
      <div ClassName="njfgfd" style={{ width: "300px" }}>
        <div ClassName="ghfghgfhg">
          <div ClassName="jghdfrg">
            <div ClassName="kmg">
              <img src={AlumniMentor} alt="AlumininMentor" />
            </div>

            <div ClassName="dfhjbghfjgfgh22">
              <h4>Tarun Gautam</h4>

              <h6>Business Analyst</h6>

              <span>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
              </span>

              <p>7 Sessions Completed (57 Reviews)</p>

              <div ClassName="kbfhgfgfg">
                <button ClassName="btn-main">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Top5AlumniCard() {
  return (
    <div ClassName="col-lg-4 mb-4">
      <div ClassName="njfgfd">
        <div ClassName="ghfghgfhg mb-0">
          <div ClassName="jghdfrg">
            <div ClassName="kmg">
              <img src={AlumniMentor} alt="Top5Alumini" />
            </div>

            <div ClassName="dfhjbghfjgfgh22">
              <h4>Tarun Gautam</h4>

              <h6>Business Analyst</h6>

              <span>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
              </span>

              <p>7 Sessions Completed (57 Reviews)</p>

              <div ClassName="kbfhgfgfg">
                <button ClassName="btn-main">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function NonAlumniCard() {
  return (
    <div ClassName="item">
      <div ClassName="njfgfd" style={{ width: "300px" }}>
        <div ClassName="ghfghgfhg">
          <div ClassName="jghdfrg">
            <div ClassName="kmg">
              <img src={AlumniMentor} alt="" />
            </div>

            <div ClassName="dfhjbghfjgfgh22">
              <h4>Tarun Gautam</h4>

              <h6>Business Analyst</h6>

              <span>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
              </span>

              <p>7 Sessions Completed (57 Reviews)</p>

              <div ClassName="kbfhgfgfg">
                <button ClassName="btn-main">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpcomingMentorSessions() {
  return (
    <div ClassName="itemMentor selectedd" onclick="showContent(1)">
      <div ClassName="d-flex align-items-center">
        <div ClassName="iduheirer_img me-2">
          <img src={AlumniMentor} width="100%" alt="Upcoming mentor" />
        </div>

        <h5 ClassName="mb-0">Tarun Gautam</h5>
      </div>
    </div>
  );
}

function CompletedMentorSessions() {
  return (
    <div ClassName="col-lg-6 mb-4">
      <div ClassName="diehrer_inner">
        <div ClassName="duieghr_inner p-3 bg-white">
          <div ClassName="row">
            <div ClassName="col-lg-5 mb-3">
              <div ClassName="duieghrerewryrr text-center">
                <div ClassName="duiehirer_left">
                  <img src={Mentor1} alt="mentors" />
                </div>
              </div>
            </div>

            <div ClassName="col-lg-7">
              <div ClassName="duiehirer_right">
                <h5>Tarun Gautam</h5>

                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem.
                </p>
              </div>
            </div>

            <div ClassName="col-lg-12">
              <div ClassName="deoihrehr_Oirtuetr text-center">
                <div ClassName="owl-carousel dewrewrer_slider owl-theme">
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
                      <div ClassName="item">
                        <div ClassName="ugeurbuyger_inner">
                          <div ClassName="doiehrer_slider">
                            <h6>
                              <b>Monday - 26/2/2024</b>
                            </h6>

                            <ul ClassName="ps-0">
                              <li>
                                <i ClassName="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i ClassName="fa-solid fa-flag-checkered"></i> 2:30
                              </li>

                              <li>
                                <i ClassName="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i ClassName="fa-solid fa-flag-checkered"></i> 2:30
                              </li>

                              <li>
                                <i ClassName="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i ClassName="fa-solid fa-flag-checkered"></i> 2:30
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div ClassName="item">
                        <div ClassName="ugeurbuyger_inner">
                          <div ClassName="doiehrer_slider">
                            <h6>
                              <b>Tuesday - 27/2/2024</b>
                            </h6>

                            <ul ClassName="ps-0">
                              <li>
                                <i ClassName="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i ClassName="fa-solid fa-flag-checkered"></i> 2:30
                              </li>

                              <li>
                                <i ClassName="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i ClassName="fa-solid fa-flag-checkered"></i> 2:30
                              </li>

                              <li>
                                <i ClassName="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i ClassName="fa-solid fa-flag-checkered"></i> 2:30
                              </li>
                            </ul>
                          </div>
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
  );
}

function PlannedGuestLecture() {
  return (
    <div ClassName="item">
      <div ClassName="njfgfd">
        <div ClassName="ghfghgfhg">
          <div ClassName="jghdfrg">
            <div ClassName="kmg">
              <img src={AlumniMentor} alt="" />
            </div>

            <div ClassName="dfhjbghfjgfgh22">
              <h4>Tarun Gautam</h4>

              <h6>Business Analyst</h6>

              <span>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
              </span>

              <p>7 Sessions Completed (57 Reviews)</p>

              <div ClassName="kbfhgfgfg">
                <button ClassName="btn-main">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export {
  MentorAlumniCard,
  Top5AlumniCard,
  NonAlumniCard,
  UpcomingMentorSessions,
  CompletedMentorSessions,
  PlannedGuestLecture,
};
