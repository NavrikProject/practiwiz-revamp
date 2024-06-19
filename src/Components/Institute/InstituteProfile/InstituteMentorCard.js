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
    <div class="item">
      <div class="njfgfd" style={{ width: "300px" }}>
        <div class="ghfghgfhg">
          <div class="jghdfrg">
            <div class="kmg">
              <img src={AlumniMentor} alt="AlumininMentor" />
            </div>

            <div class="dfhjbghfjgfgh22">
              <h4>Tarun Gautam</h4>

              <h6>Business Analyst</h6>

              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>

              <p>7 Sessions Completed (57 Reviews)</p>

              <div class="kbfhgfgfg">
                <button class="btn-main">BOOK NOW</button>
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
    <div class="col-lg-4 mb-4">
      <div class="njfgfd">
        <div class="ghfghgfhg mb-0">
          <div class="jghdfrg">
            <div class="kmg">
              <img src={AlumniMentor} alt="Top5Alumini" />
            </div>

            <div class="dfhjbghfjgfgh22">
              <h4>Tarun Gautam</h4>

              <h6>Business Analyst</h6>

              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>

              <p>7 Sessions Completed (57 Reviews)</p>

              <div class="kbfhgfgfg">
                <button class="btn-main">BOOK NOW</button>
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
    <div class="item">
      <div class="njfgfd" style={{ width: "300px" }}>
        <div class="ghfghgfhg">
          <div class="jghdfrg">
            <div class="kmg">
              <img src={AlumniMentor} alt="" />
            </div>

            <div class="dfhjbghfjgfgh22">
              <h4>Tarun Gautam</h4>

              <h6>Business Analyst</h6>

              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>

              <p>7 Sessions Completed (57 Reviews)</p>

              <div class="kbfhgfgfg">
                <button class="btn-main">BOOK NOW</button>
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
    <div class="itemMentor selectedd" onclick="showContent(1)">
      <div class="d-flex align-items-center">
        <div class="iduheirer_img me-2">
          <img src={AlumniMentor} width="100%" alt="Upcoming mentor" />
        </div>

        <h5 class="mb-0">Tarun Gautam</h5>
      </div>
    </div>
  );
}

function CompletedMentorSessions() {
  return (
    <div class="col-lg-6 mb-4">
      <div class="diehrer_inner">
        <div class="duieghr_inner p-3 bg-white">
          <div class="row">
            <div class="col-lg-5 mb-3">
              <div class="duieghrerewryrr text-center">
                <div class="duiehirer_left">
                  <img src={Mentor1} alt="mentors" />
                </div>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="duiehirer_right">
                <h5>Tarun Gautam</h5>

                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem.
                </p>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="deoihrehr_Oirtuetr text-center">
                <div class="owl-carousel dewrewrer_slider owl-theme">
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
                      <div class="item">
                        <div class="ugeurbuyger_inner">
                          <div class="doiehrer_slider">
                            <h6>
                              <b>Monday - 26/2/2024</b>
                            </h6>

                            <ul class="ps-0">
                              <li>
                                <i class="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i class="fa-solid fa-flag-checkered"></i> 2:30
                              </li>

                              <li>
                                <i class="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i class="fa-solid fa-flag-checkered"></i> 2:30
                              </li>

                              <li>
                                <i class="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i class="fa-solid fa-flag-checkered"></i> 2:30
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="item">
                        <div class="ugeurbuyger_inner">
                          <div class="doiehrer_slider">
                            <h6>
                              <b>Tuesday - 27/2/2024</b>
                            </h6>

                            <ul class="ps-0">
                              <li>
                                <i class="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i class="fa-solid fa-flag-checkered"></i> 2:30
                              </li>

                              <li>
                                <i class="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i class="fa-solid fa-flag-checkered"></i> 2:30
                              </li>

                              <li>
                                <i class="fa-solid fa-hourglass-start"></i>{" "}
                                01:00 -
                                <i class="fa-solid fa-flag-checkered"></i> 2:30
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
    <div class="item">
      <div class="njfgfd">
        <div class="ghfghgfhg">
          <div class="jghdfrg">
            <div class="kmg">
              <img src={AlumniMentor} alt="" />
            </div>

            <div class="dfhjbghfjgfgh22">
              <h4>Tarun Gautam</h4>

              <h6>Business Analyst</h6>

              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>

              <p>7 Sessions Completed (57 Reviews)</p>

              <div class="kbfhgfgfg">
                <button class="btn-main">BOOK NOW</button>
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
