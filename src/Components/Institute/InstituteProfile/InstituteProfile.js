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
     
      <div ClassName="dfknhguyfdgf">
        <div ClassName="container-fluid px-5">
          <div ClassName="row">
            <div ClassName="col-lg-8">
              <div ClassName="gtyfdgfgf">
                <div ClassName="tjbghdfhbgfgf">
                  <ul>
                    <li>
                      Home <i ClassName="fa-solid fa-chevron-right"></i>
                    </li>

                    <li>
                      <i>Institute Profile</i>
                    </li>
                  </ul>
                </div>

                <div ClassName="ndfhjvdfv">
                  <h2>Brainware Group Of Institution</h2>

                  <div ClassName="fhghgdgg">
                    <h3>
                      <i ClassName="fa-solid me-2 fa-sign-hanging"></i> Est. 2006
                    </h3>
                  </div>
                </div>

                <div ClassName="ndshfgfdgdfgdfg">
                  <div ClassName="hff">
                    <h4 ClassName="d-flex align-items-center">
                      <i ClassName="fa-solid me-2 fa-eject"></i> About Institute
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

                <div ClassName="jvhfdfvgdf">
                  <h4>
                    <i ClassName="fa-regular me-2 fa-address-card"></i> Registered
                    Mentors Alumni
                  </h4>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>

                  <div ClassName="ihitrbubrt">
                    <div ClassName="djghvgfgbgfg552">
                      <div ClassName="rejugfgh">
                        <div ClassName="dfnghdfgdf">
                          <div ClassName="owl-carousel owl-theme owl58">
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

                <div ClassName="jvhfdfvgdf">
                  <h4>
                    <i ClassName="fa-solid me-2 fa-star-of-life"></i> Top 5 Alumni
                    Mentors
                  </h4>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>

                  <div ClassName="ihitrbubrt">
                    <div ClassName="djghvgfgbgfg552">
                      <div ClassName="rejugfgh">
                        <div ClassName="dfnghdfgdf">
                          <div ClassName="row justify-content-center">
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

                <div ClassName="jvhfdfvgdf">
                  <h4>
                    <i ClassName="fa-solid me-2 fa-id-card-clip"></i> Registered
                    Mentors Non-Alumni
                  </h4>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>

                  <div ClassName="ihitrbubrt">
                    <div ClassName="djghvgfgbgfg552">
                      <div ClassName="rejugfgh">
                        <div ClassName="dfnghdfgdf">
                          <div
                            ClassName="owl-carousel owl-theme owl58"
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

                <div ClassName="jvhfdfvgdf mt-5">
                  <div ClassName="">
                    <h4>
                      <i ClassName="fa-regular me-2 fa-calendar-check"></i> Upcoming
                      Mentor Sessions
                    </h4>

                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>

                  <div ClassName="iudfyghentr_slider_wrapper mt-4">
                    <div ClassName="uidheiur_mentor_slider">
                      <div ClassName="carouselMentor">
                        <UpcomingMentorSessions />
                        <UpcomingMentorSessions /> <UpcomingMentorSessions />
                        <UpcomingMentorSessions /> <UpcomingMentorSessions />
                      </div>

                      <div id="content1" ClassName="contentMentor show">
                        <div ClassName="idghuiehrnihr_ihihuerr">
                          <div ClassName="row justify-content-between mt-4">
                            <div ClassName="col-lg-6 mb-4">
                              <div ClassName="duiheirre_left">
                                <h4>About My Upcoming Sessions</h4>

                                <p>
                                  <i ClassName="fa-solid fa-star"></i>{" "}
                                  <i ClassName="fa-solid fa-star"></i>{" "}
                                  <i ClassName="fa-solid fa-star"></i>{" "}
                                  <i ClassName="fa-solid fa-star"></i>{" "}
                                  <i ClassName="fa-solid fa-star"></i>
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

                                <button ClassName="btn btn-main">
                                  View Profile
                                </button>
                              </div>
                            </div>

                            <div ClassName="col-lg-6">
                              <div ClassName="duiheirre_right">
                                <div
                                  ClassName="mb-responsive-calendar vvverrbrrtr bg-white"
                                  id="mbrcalmodal"
                                >
                                  <div ClassName="fkjbghdfgfghghjygh mt-0 p-3">
                                    <div ClassName="ghjfgghgf">
                                      <div ClassName="wrapper">
                                        <header>
                                          <p ClassName="current-date">May 2024</p>
                                          <div ClassName="icons">
                                            <span
                                              id="prev"
                                              ClassName="material-symbols-rounded"
                                            >
                                              <i ClassName="fa-regular fa-chevron_right"></i>
                                            </span>
                                            <span
                                              id="next"
                                              ClassName="material-symbols-rounded"
                                            >
                                              <i ClassName="fa-regular fa-chevron_left"></i>
                                            </span>
                                          </div>
                                        </header>

                                        <div ClassName="calendar">
                                          <ul ClassName="weeks mb-0">
                                            <li>Sun</li>
                                            <li>Mon</li>
                                            <li>Tue</li>
                                            <li>Wed</li>
                                            <li>Thu</li>
                                            <li>Fri</li>
                                            <li>Sat</li>
                                          </ul>

                                          <ul ClassName="days">
                                            <li ClassName="inactive">28</li>
                                            <li ClassName="inactive">29</li>
                                            <li ClassName="inactive">30</li>
                                            <li ClassName="">1</li>
                                            <li ClassName="">2</li>
                                            <li ClassName="active">3</li>
                                            <li ClassName="">4</li>
                                            <li ClassName="">5</li>
                                            <li ClassName="">6</li>
                                            <li ClassName="">7</li>
                                            <li ClassName="">8</li>
                                            <li ClassName="">9</li>
                                            <li ClassName="">10</li>
                                            <li ClassName="">11</li>
                                            <li ClassName="">12</li>
                                            <li ClassName="">13</li>
                                            <li ClassName="">14</li>
                                            <li ClassName="">15</li>
                                            <li ClassName="">16</li>
                                            <li ClassName="">17</li>
                                            <li ClassName="">18</li>
                                            <li ClassName="">19</li>
                                            <li ClassName="">20</li>
                                            <li ClassName="">21</li>
                                            <li ClassName="">22</li>
                                            <li ClassName="">23</li>
                                            <li ClassName="">24</li>
                                            <li ClassName="">25</li>
                                            <li ClassName="">26</li>
                                            <li ClassName="">27</li>
                                            <li ClassName="">28</li>
                                            <li ClassName="">29</li>
                                            <li ClassName="">30</li>
                                            <li ClassName="">31</li>
                                            <li ClassName="inactive">1</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                    <div ClassName="bhghh">
                                      <div ClassName="lkfhgfgf sefagfberr">
                                        <h5>Choose The Time Slot:</h5>

                                        <div ClassName="text-center">
                                          <button ClassName="btngdfr m-1">
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

                                          <button ClassName="btngdfr m-1">
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

                                          <button ClassName="btngdfr m-1">
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

                                        <div ClassName="dfghjffg mt-3">
                                          <button ClassName="btn btn-main">
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

                <div ClassName="jvhfdfvgdf mt-5">
                  <div ClassName="">
                    <h4>
                      <i ClassName="fa-regular me-2 fa-calendar-check"></i>{" "}
                      Completed Mentor Sessions
                    </h4>

                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>

                  <div ClassName="cmpltd-mntr-sesns-slider-wrapper mt-4">
                    <div ClassName="row">
                      <CompletedMentorSessions />
                      <CompletedMentorSessions />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ClassName="col-lg-4">
              <div ClassName="hdfgfghfgh sticky-top">
                <div ClassName="doeirbrner_right">
                  <div ClassName="jvhfdfvgdf">
                    <h4>
                      <i ClassName="fa-solid me-2 fa-id-card-clip"></i> Planned
                      Guest Lectures
                    </h4>

                    <p ClassName="mb-0">
                      There are many variations of passages of Lorem Ipsum
                      available..
                    </p>

                    <div ClassName="ihitrbubrt uigbhuyguberer">
                      <div ClassName="djghvgfgbgfg552">
                        <div ClassName="rejugfgh">
                          <div ClassName="dfnghdfgdf">
                            <div ClassName="owl-carousel owl-theme deeyfvytfer_slider">
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

      <div ClassName="hjvgdhvdffg d-none">
        <div ClassName="container-fluid px-5">
          <div ClassName="dfghfg">
            <h4>Our Testimonial</h4>
          </div>

          <div ClassName="jhffgfhfgh">
            <div ClassName="owl-carousel owl-theme fhghjgfhjgh">
              <div ClassName="item">
                <div ClassName="fgfghjg55">
                  <div ClassName="carousel-item">
                    <div ClassName="card shadow-sm rounded-3">
                      <div ClassName="quotes display-2 text-body-tertiary">
                        <i ClassName="bi bi-quote"></i>
                      </div>

                      <div ClassName="card-body">
                        <p ClassName="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div ClassName="d-flex align-items-center pt-2">
                          <div ClassName="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/square-headshot-2.png"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 ClassName="card-title fw-bold">June Doe</h5>
                            <span ClassName="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ClassName="item">
                <div ClassName="carousel-item">
                  <div ClassName="fgfghjg55">
                    <div ClassName="card shadow-sm rounded-3">
                      <div ClassName="quotes display-2 text-body-tertiary">
                        <i ClassName="bi bi-quote"></i>
                      </div>
                      <div ClassName="card-body">
                        <p ClassName="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div ClassName="d-flex align-items-center pt-2">
                          <div ClassName="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 ClassName="card-title fw-bold">John Doe</h5>
                            <span ClassName="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ClassName="item">
                <div ClassName="carousel-item">
                  <div ClassName="fgfghjg55">
                    <div ClassName="card shadow-sm rounded-3">
                      <div ClassName="quotes display-2 text-body-tertiary">
                        <i ClassName="bi bi-quote"></i>
                      </div>
                      <div ClassName="card-body">
                        <p ClassName="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div ClassName="d-flex align-items-center pt-2">
                          <div ClassName="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 ClassName="card-title fw-bold">John Doe</h5>
                            <span ClassName="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ClassName="item">
                <div ClassName="carousel-item">
                  <div ClassName="fgfghjg55">
                    <div ClassName="card shadow-sm rounded-3">
                      <div ClassName="quotes display-2 text-body-tertiary">
                        <i ClassName="bi bi-quote"></i>
                      </div>
                      <div ClassName="card-body">
                        <p ClassName="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div ClassName="d-flex align-items-center pt-2">
                          <div ClassName="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 ClassName="card-title fw-bold">John Doe</h5>
                            <span ClassName="text-secondary">
                              CEO, Example Company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div ClassName="item">
                <div ClassName="carousel-item">
                  <div ClassName="fgfghjg55">
                    <div ClassName="card shadow-sm rounded-3">
                      <div ClassName="quotes display-2 text-body-tertiary">
                        <i ClassName="bi bi-quote"></i>
                      </div>
                      <div ClassName="card-body">
                        <p ClassName="card-text">
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content."
                        </p>
                        <div ClassName="d-flex align-items-center pt-2">
                          <div ClassName="hgfgf">
                            <img
                              src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
                              alt="bootstrap testimonial carousel slider 2"
                            />
                          </div>
                          <div>
                            <h5 ClassName="card-title fw-bold">John Doe</h5>
                            <span ClassName="text-secondary">
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
