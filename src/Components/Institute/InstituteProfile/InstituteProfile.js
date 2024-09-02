import React from "react";
import "./institute.css";
import {
  CompletedMentorSessions,
  MentorAlumniCard,
  NonAlumniCard,
  PlannedGuestLecture,
  Top5AlumniCard,
  UpcomingMentorSessions,
} from "./InstituteMentorCard";
import { Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const InstituteProfile = () => {
  return (
    <>
     
      <div class="dfknhguyfdgf">
        <div class="container-fluid px-5">
          <div class="row">
            <div class="col-lg-8">
              <div class="gtyfdgfgf">
                <div class="tjbghdfhbgfgf">
                  <ul>
                    <li>
                      Home <i class="fa-solid fa-chevron-right"></i>
                    </li>

                    <li>
                      <i>Institute Profile</i>
                    </li>
                  </ul>
                </div>

                <div class="ndfhjvdfv">
                  <h2>Brainware Group Of Institution</h2>

                  <div class="fhghgdgg">
                    <h3>
                      <i class="fa-solid me-2 fa-sign-hanging"></i> Est. 2006
                    </h3>
                  </div>
                </div>

                <div class="ndshfgfdgdfgdfg">
                  <div class="hff">
                    <h4 class="d-flex align-items-center">
                      <i class="fa-solid me-2 fa-eject"></i> About Institute
                    </h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the making this the first
                      Internet.{" "}
                    </p>
                  </div>
                </div>

                <div class="jvhfdfvgdf">
                  <h4>
                    <i class="fa-regular me-2 fa-address-card"></i> Registered
                    Mentors Alumni
                  </h4>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>

                  <div class="ihitrbubrt">
                    <div class="djghvgfgbgfg552">
                      <div class="rejugfgh">
                        <div class="dfnghdfgdf">
                          <div class="owl-carousel owl-theme owl58">
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
                                <MentorAlumniCard />
                              </SwiperSlide>
                              <SwiperSlide>
                                <MentorAlumniCard />
                              </SwiperSlide>
                              <SwiperSlide>
                                <MentorAlumniCard />
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="jvhfdfvgdf">
                  <h4>
                    <i class="fa-solid me-2 fa-star-of-life"></i> Top 5 Alumni
                    Mentors
                  </h4>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>

                  <div class="ihitrbubrt">
                    <div class="djghvgfgbgfg552">
                      <div class="rejugfgh">
                        <div class="dfnghdfgdf">
                          <div class="row justify-content-center">
                            <Top5AlumniCard />
                            <Top5AlumniCard /> <Top5AlumniCard />
                            <Top5AlumniCard /> <Top5AlumniCard />
                            <Top5AlumniCard />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="jvhfdfvgdf">
                  <h4>
                    <i class="fa-solid me-2 fa-id-card-clip"></i> Registered
                    Mentors Non-Alumni
                  </h4>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>

                  <div class="ihitrbubrt">
                    <div class="djghvgfgbgfg552">
                      <div class="rejugfgh">
                        <div class="dfnghdfgdf">
                          <div
                            class="owl-carousel owl-theme owl58"
                            style={{ display: "flex" }}
                          >
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
                                <NonAlumniCard />
                              </SwiperSlide>
                              <SwiperSlide>
                                <NonAlumniCard />
                              </SwiperSlide>
                              <SwiperSlide>
                                <NonAlumniCard />
                              </SwiperSlide>
                              <SwiperSlide>
                                <NonAlumniCard />
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="jvhfdfvgdf mt-5">
                  <div class="">
                    <h4>
                      <i class="fa-regular me-2 fa-calendar-check"></i> Upcoming
                      Mentor Sessions
                    </h4>

                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>

                  <div class="iudfyghentr_slider_wrapper mt-4">
                    <div class="uidheiur_mentor_slider">
                      <div class="carouselMentor">
                        <UpcomingMentorSessions />
                        <UpcomingMentorSessions /> <UpcomingMentorSessions />
                        <UpcomingMentorSessions /> <UpcomingMentorSessions />
                      </div>

                      <div id="content1" class="contentMentor show">
                        <div class="idghuiehrnihr_ihihuerr">
                          <div class="row justify-content-between mt-4">
                            <div class="col-lg-6 mb-4">
                              <div class="duiheirre_left">
                                <h4>About My Upcoming Sessions</h4>

                                <p>
                                  <i class="fa-solid fa-star"></i>{" "}
                                  <i class="fa-solid fa-star"></i>{" "}
                                  <i class="fa-solid fa-star"></i>{" "}
                                  <i class="fa-solid fa-star"></i>{" "}
                                  <i class="fa-solid fa-star"></i>
                                </p>

                                <p>
                                  Join us for an insightful session on Business
                                  Analysis! Our experienced mentor will cover
                                  key topics including the role of a business
                                  analyst, analysis techniques, and leveraging
                                  data for decision-making. Whether you're an
                                  entrepreneur or professional, this session
                                  will equip you with essential skills for
                                  success in the business world.
                                </p>

                                <button class="btn btn-main">
                                  View Profile
                                </button>
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="duiheirre_right">
                                <div
                                  class="mb-responsive-calendar vvverrbrrtr bg-white"
                                  id="mbrcalmodal"
                                >
                                  <div class="fkjbghdfgfghghjygh mt-0 p-3">
                                    <div class="ghjfgghgf">
                                      <div class="wrapper">
                                        <header>
                                          <p class="current-date">May 2024</p>
                                          <div class="icons">
                                            <span
                                              id="prev"
                                              class="material-symbols-rounded"
                                            >
                                              <i class="fa-regular fa-chevron_right"></i>
                                            </span>
                                            <span
                                              id="next"
                                              class="material-symbols-rounded"
                                            >
                                              <i class="fa-regular fa-chevron_left"></i>
                                            </span>
                                          </div>
                                        </header>

                                        <div class="calendar">
                                          <ul class="weeks mb-0">
                                            <li>Sun</li>
                                            <li>Mon</li>
                                            <li>Tue</li>
                                            <li>Wed</li>
                                            <li>Thu</li>
                                            <li>Fri</li>
                                            <li>Sat</li>
                                          </ul>

                                          <ul class="days">
                                            <li class="inactive">28</li>
                                            <li class="inactive">29</li>
                                            <li class="inactive">30</li>
                                            <li class="">1</li>
                                            <li class="">2</li>
                                            <li class="active">3</li>
                                            <li class="">4</li>
                                            <li class="">5</li>
                                            <li class="">6</li>
                                            <li class="">7</li>
                                            <li class="">8</li>
                                            <li class="">9</li>
                                            <li class="">10</li>
                                            <li class="">11</li>
                                            <li class="">12</li>
                                            <li class="">13</li>
                                            <li class="">14</li>
                                            <li class="">15</li>
                                            <li class="">16</li>
                                            <li class="">17</li>
                                            <li class="">18</li>
                                            <li class="">19</li>
                                            <li class="">20</li>
                                            <li class="">21</li>
                                            <li class="">22</li>
                                            <li class="">23</li>
                                            <li class="">24</li>
                                            <li class="">25</li>
                                            <li class="">26</li>
                                            <li class="">27</li>
                                            <li class="">28</li>
                                            <li class="">29</li>
                                            <li class="">30</li>
                                            <li class="">31</li>
                                            <li class="inactive">1</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="bhghh">
                                      <div class="lkfhgfgf sefagfberr">
                                        <h5>Choose The Time Slot:</h5>

                                        <div class="text-center">
                                          <button class="btngdfr m-1">
                                            <input
                                              type="radio"
                                              id="csad"
                                              name="dfsadf"
                                              value=""
                                            />
                                            <label for="csad">
                                              11:00 - 12:30
                                            </label>
                                          </button>

                                          <button class="btngdfr m-1">
                                            <input
                                              type="radio"
                                              id="cdsfdf"
                                              name="dfsadf"
                                              value=""
                                            />
                                            <label for="cdsfdf">
                                              13:00 - 14:30
                                            </label>
                                          </button>

                                          <button class="btngdfr m-1">
                                            <input
                                              type="radio"
                                              id="cgdf"
                                              name="dfsadf"
                                              value=""
                                            />
                                            <label for="cgdf">
                                              18:00 - 19:30
                                            </label>
                                          </button>
                                        </div>

                                        <div class="dfghjffg mt-3">
                                          <button class="btn btn-main">
                                            Confirm Booking
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="jvhfdfvgdf mt-5">
                  <div class="">
                    <h4>
                      <i class="fa-regular me-2 fa-calendar-check"></i>{" "}
                      Completed Mentor Sessions
                    </h4>

                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>

                  <div class="cmpltd-mntr-sesns-slider-wrapper mt-4">
                    <div class="row">
                      <CompletedMentorSessions />
                      <CompletedMentorSessions />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="hdfgfghfgh sticky-top">
                <div class="doeirbrner_right">
                  <div class="jvhfdfvgdf">
                    <h4>
                      <i class="fa-solid me-2 fa-id-card-clip"></i> Planned
                      Guest Lectures
                    </h4>

                    <p class="mb-0">
                      There are many variations of passages of Lorem Ipsum
                      available..
                    </p>

                    <div class="ihitrbubrt uigbhuyguberer">
                      <div class="djghvgfgbgfg552">
                        <div class="rejugfgh">
                          <div class="dfnghdfgdf">
                            <div class="owl-carousel owl-theme deeyfvytfer_slider">
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
                                  <PlannedGuestLecture />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <PlannedGuestLecture />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <PlannedGuestLecture />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <PlannedGuestLecture />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <PlannedGuestLecture />
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hjvgdhvdffg d-none">
        <div class="container-fluid px-5">
          <div class="dfghfg">
            <h4>Our Testimonial</h4>
          </div>

          <div class="jhffgfhfgh">
            <div class="owl-carousel owl-theme fhghjgfhjgh">
              <div class="item">
                <div class="fgfghjg55">
                  <div class="carousel-item">
                    <div class="card shadow-sm rounded-3">
                      <div class="quotes display-2 text-body-tertiary">
                        <i class="bi bi-quote"></i>
                      </div>

                      <div class="card-body">
                        <p class="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div class="d-flex align-items-center pt-2">
                          <div class="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/square-headshot-2.png"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 class="card-title fw-bold">June Doe</h5>
                            <span class="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="carousel-item">
                  <div class="fgfghjg55">
                    <div class="card shadow-sm rounded-3">
                      <div class="quotes display-2 text-body-tertiary">
                        <i class="bi bi-quote"></i>
                      </div>
                      <div class="card-body">
                        <p class="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div class="d-flex align-items-center pt-2">
                          <div class="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 class="card-title fw-bold">John Doe</h5>
                            <span class="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="carousel-item">
                  <div class="fgfghjg55">
                    <div class="card shadow-sm rounded-3">
                      <div class="quotes display-2 text-body-tertiary">
                        <i class="bi bi-quote"></i>
                      </div>
                      <div class="card-body">
                        <p class="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div class="d-flex align-items-center pt-2">
                          <div class="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 class="card-title fw-bold">John Doe</h5>
                            <span class="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="carousel-item">
                  <div class="fgfghjg55">
                    <div class="card shadow-sm rounded-3">
                      <div class="quotes display-2 text-body-tertiary">
                        <i class="bi bi-quote"></i>
                      </div>
                      <div class="card-body">
                        <p class="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div class="d-flex align-items-center pt-2">
                          <div class="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 class="card-title fw-bold">John Doe</h5>
                            <span class="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="carousel-item">
                  <div class="fgfghjg55">
                    <div class="card shadow-sm rounded-3">
                      <div class="quotes display-2 text-body-tertiary">
                        <i class="bi bi-quote"></i>
                      </div>
                      <div class="card-body">
                        <p class="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div class="d-flex align-items-center pt-2">
                          <div class="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 class="card-title fw-bold">John Doe</h5>
                            <span class="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default InstituteProfile;
