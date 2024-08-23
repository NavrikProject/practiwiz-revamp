import React, { useEffect, useState } from "react";
import Tarun from "../../../../Images/Mentors/tarun.webp";
import Ee1 from "../../../../Images/Mentors/ee1.png";
import Ee2 from "../../../../Images/Mentors/ee2.png";
import Tickmark from "../../../../Images/Mentors/tick-mark (1).png";
import Qw1 from "../../../../Images/Mentors/qw1 (1).png";
import Qw2 from "../../../../Images/Mentors/qw1 (2).png";
import Dcdc1 from "../../../../Images/Mentors/dcdc1.png";
import "../AllMentors.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ApiURL } from "../../../../Utils/ApiURL";
import TimeslotDatepicker from "./TimeslotDatepicker";
import { toast } from "react-toastify";
import MentorBookingAppointment from "./MentorBookingAppointment";
import { useSelector } from "react-redux";
import CustomDatePicker from "../CustomDatepicker/CustomDatePicker";
const SingleMentorProfile = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const [timeSlotDetails, setTimeSlotDetails] = useState({});
  const [showBookingModel, setShowBookingModel] = useState(false);
  const url = ApiURL();
  const params = useParams();
  const mentorDtlsId = params.id;
  const [showRating, setShowRating] = useState(null);
  const [showOverview, setShowOverview] = useState(true);
  const [singleMentor, setSingleMentor] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const handleDateSlotSelect = (date, slot) => {
    setSelectedDate(date);
    setSelectedSlot(slot);
  };

  const OverviewShowHandlder = () => {
    return setShowRating(false), setShowOverview(!showOverview);
  };
  const RatingShowHandler = () => {
    return setShowRating(!showRating), setShowOverview(false);
  };
  useEffect(() => {
    const fetchMentors = async () => {
      const response = await axios.post(
        `${url}api/v1/mentor/fetch-single-details/${mentorDtlsId}`,
        { userId: mentorDtlsId }
      );
      if (response.data.success) {
        setSingleMentor(response.data.success);
      }
      if (response.data.error) {
        setSingleMentor(null);
      }
    };
    fetchMentors();
  }, [mentorDtlsId, url]);
  const CreateBookingAppointment = () => {
    if (selectedDate === null || selectedSlot === null) {
      toast.error("Please select the Date and Time slot details");
    } else {
      setShowBookingModel(!showBookingModel);
    }
  };

  return (
    <>
      {showBookingModel && (
        <MentorBookingAppointment
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          singleMentor={singleMentor}
          showCloseHandler={CreateBookingAppointment}
        />
      )}
      {singleMentor?.map((sMentor) => {
        return (
          <>
            <div
              key={sMentor.user_dtls_id}
              className="duiegrer_bck position-relative mb-3"
              id="singleMentorCoverPicture"
            >
              <div className="container">
                <div className="csdpeijf d-flex justify-content-between">
                  <div className="ihuerorktrt position-relative">
                    <div className="iijieirr_left overflow-hidden">
                      <img
                        src={sMentor.mentor_profile_photo}
                        width="100%"
                        alt={
                          sMentor.user_firstname + " " + sMentor.user_lastname
                        }
                      />
                    </div>
                  </div>
                  <div className="ihurtf_btn">
                    <button className="btn btn-main">
                      <i className="fa-solid pe-2 fa-envelope-open-text"></i>{" "}
                      Message
                    </button>
                    <button className="btn btn-main">
                      <i className="fa-solid pe-2 fa-share"></i> Share Profile
                    </button>
                  </div>
                  <div className="ljrfhf">
                    <i className="fa-solid fa-upload"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="lndfhjfvgdvbfgfghgf py-5">
              <div className="container">
                <div className="skhfdfdfg">
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <div className="dfnjghjggh">
                        <div className="ghvfvdfgg">
                          <div className="gjnjfghg">
                            <h2>
                              {sMentor.user_firstname.toUpperCase() +
                                " " +
                                sMentor.user_lastname.toUpperCase()}
                            </h2>
                          </div>
                          <div className="njfgfghf">
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                          </div>
                        </div>
                        <div className="hfuydfgftgh">
                          <div className="gjfhg">
                            <img src={Ee1} alt="" />
                          </div>
                          <p>{sMentor.mentor_job_title.toUpperCase()}</p>
                        </div>
                        <div className="hfuydfgftgh">
                          <div className="gjfhg">
                            <img src={Ee2} alt="" />
                          </div>
                          <div className="fdjdfg">
                            <p>
                              <span className="span121">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </span>
                              <span>(3 Reviews)</span>
                            </p>
                          </div>
                        </div>
                        <div className="hfuydfgftgh">
                          <div className="gjfhg">
                            <img src={Tickmark} alt="" />
                          </div>
                          <p>
                            {sMentor.mentor_headline}
                            {/* <span className="spnn45">Show More</span> */}
                          </p>
                        </div>
                        <div className="fkjhgdfbghh my-5">
                          <ul className="tabs">
                            <li
                              className="tab-link current"
                              data-tab="tab-9"
                              onClick={() => OverviewShowHandlder()}
                            >
                              Overview
                            </li>
                            <li
                              className="tab-link"
                              data-tab="tab-10"
                              onClick={() => RatingShowHandler()}
                            >
                              Rating & Reviews
                            </li>
                          </ul>
                          {showOverview ? (
                            <div id="tab-9" className="tab-content current">
                              <div className="dfgbfgd">
                                <div className="dfkjhgufgfgh">
                                  <div className="row">
                                    <div className="col-lg-1">
                                      <div className="lgkgg">
                                        <img src={Qw1} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-lg-11">
                                      <div className="djbghdrfgfgh">
                                        <h6>Professional Experience</h6>
                                        <p>
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour.{" "}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="dfkjhgufgfgh">
                                  <div className="row">
                                    <div className="col-lg-1">
                                      <div className="lgkgg">
                                        <img src={Qw2} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-lg-11">
                                      <div className="djbghdrfgfgh">
                                        <h6>Expertise In</h6>
                                        <p>Career Guidance</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* <div className="dfujghffg my-5">
                                  <h4>
                                    Step-by-step Guidance To Business Analysis
                                  </h4>
                                  <div className="kfghg">
                                    <img src={Dcdc1} alt="" />
                                  </div>
                                </div> */}

                                {/* <div className="dfujghffg">
                                  <h4>Engage With Our Top Mentor</h4>
                                  <div className="ldfuijhgfghfg">
                                    <div className="owl-carousel gfhghg owl-theme">
                                      <div className="item">
                                        <div className="jghdfrg">
                                          <div className="kmg">
                                            <img
                                              src="./images/qqq1.webp"
                                              alt=""
                                            />
                                          </div>
                                          <div className="dfhjbghfjgfgh py-3">
                                            <h4>Bhabnesh Asar</h4>

                                            <h6>Enterprice Architect</h6>

                                            <span className="pb-2">
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                            </span>

                                            <p className="mb-1">
                                              10 Sessions (87 Reviews)
                                            </p>

                                            <div className="kbfhgfgfg">
                                              <button className="btn-main">
                                                BOOK NOW
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="item">
                                        <div className="jghdfrg">
                                          <div className="kmg">
                                            <img
                                              src="./images/qqq2.webp"
                                              alt=""
                                            />
                                          </div>

                                          <div className="dfhjbghfjgfgh py-3">
                                            <h4>Gourav Bhati</h4>

                                            <h6>Product Owner</h6>

                                            <span className="pb-2">
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                            </span>

                                            <p className="mb-1">
                                              07 Sessions (57 Reviews)
                                            </p>

                                            <div className="kbfhgfgfg">
                                              <button className="btn-main">
                                                BOOK NOW
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          {showRating ? (
                            <div id="tab-10" className="tab-content">
                              <div className="jfgghghhghkgkhjg">
                                <div className="jhdfgfjgg">
                                  <div className="hghgg">
                                    <div className="djbgdfdfgh d-flex justify-content-between align-items-center">
                                      <div className="fyhugdghg d-flex justify-content-between align-items-center">
                                        <div className="kjghjfg me-2">
                                          <img
                                            src="./images/rrrr1.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="ihceuirr mt-3">
                                          <h4>Anwesha Sinha</h4>
                                          <div className="fgnhjghjgh">
                                            <span>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                            </span>
                                            <p>
                                              <i className="fa-solid fa-calendar-days"></i>{" "}
                                              17/03/2024
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gnhjbggf">
                                        <a href="/mentor">View Profile</a>
                                      </div>
                                    </div>
                                    <div className="dfkjbghdfffg">
                                      <p>
                                        As a business analyst professional, I
                                        feel very lucky to have Tarun Sir as my
                                        mentor. I got in-depth knowledge about
                                        the subject. It helps me to cope with
                                        the dynamicity of it quite beautifully.
                                        His dedication to mentoring the students
                                        is excellent. If somebody asks to me for
                                        a business analyst mentor I will surely
                                        take  Gautam sir’s name.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hghgg mt-3">
                                    <div className="djbgdfdfgh d-flex justify-content-between align-items-center">
                                      <div className="fyhugdghg d-flex justify-content-between align-items-center">
                                        <div className="kjghjfg me-2">
                                          <img
                                            src="./images/rrrr2.png"
                                            alt=""
                                          />
                                        </div>

                                        <div className="ihceuirr mt-3">
                                          <h4>Tithi Mishra</h4>

                                          <div className="fgnhjghjgh">
                                            <span>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                            </span>
                                            <p>
                                              <i className="fa-solid fa-calendar-days"></i>{" "}
                                              17/03/2024
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="gnhjbggf">
                                        <a href="/mentor">View Profile</a>
                                      </div>
                                    </div>

                                    <div className="dfkjbghdfffg">
                                      <p>
                                        I was at first in a confusion regarding
                                        the subject matter of business
                                        analytics. The first-day introduction
                                        from Gautam Sir’s part made all my
                                        confusion clear. He is in a true sense
                                        a Pole star in the business analytics
                                        domain.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="dfujghffg">
                                    <h4>
                                      Step-by-step Guidance To Business Analysis
                                    </h4>
                                    <div className="kfghg">
                                      <img src="./images/dcdc1.png" alt="" />
                                    </div>
                                  </div>

                                  <div className="dfujghffg">
                                    <h4>Engage With Our Top Mentor</h4>
                                    <div className="ldfuijhgfghfg">
                                      <div className="owl-carousel gfhghg owl-theme">
                                        <div className="item">
                                          <div className="jghdfrg">
                                            <div className="kmg">
                                              <img
                                                src="./images/qqq2.webp"
                                                alt=""
                                              />
                                            </div>

                                            <div className="dfhjbghfjgfgh py-3">
                                              <h4>Bhabnesh Asar</h4>

                                              <h6>Enterprice Architect</h6>

                                              <span className="pb-2">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                              </span>

                                              <p className="mb-1">
                                                10 Sessions (87 Reviews)
                                              </p>

                                              <div className="kbfhgfgfg">
                                                <button className="btn-main">
                                                  BOOK NOW
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="item">
                                          <div className="jghdfrg">
                                            <div className="kmg">
                                              <img
                                                src="./images/qqq2.webp"
                                                alt=""
                                              />
                                            </div>

                                            <div className="dfhjbghfjgfgh py-3">
                                              <h4>Gourav Bhati</h4>

                                              <h6>Product Owner</h6>

                                              <span className="pb-2">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                              </span>

                                              <p className="mb-1">
                                                07 Sessions (57 Reviews)
                                              </p>

                                              <div className="kbfhgfgfg">
                                                <button className="btn-main">
                                                  BOOK NOW
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
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="hgkfgkjfgfghgfg sticky-top">
                        <h3>Skills</h3>
                        <div className="fhfbfghg">
                          {JSON.parse(sMentor.expertise_list).map(
                            (expertise) => {
                              return (
                                <>
                                  <button>{expertise.mentor_expertise}</button>
                                </>
                              );
                            }
                          )}
                          {JSON.parse(sMentor.passion_list).map((passion) => {
                            return (
                              <>
                                <button>{passion.mentor_passion}</button>
                              </>
                            );
                          })}
                        </div>
                        <div className="fkjbghdfgfghghjygh p-4">
                          <div className="fjbgfg">
                            <h4 className="mt-3 mb-4">Mentor Availability</h4>
                            <CustomDatePicker
                              onDateSlotSelect={handleDateSlotSelect}
                              timeslotList={JSON.parse(sMentor.timeslot_list)}
                              bookingDetails={JSON.parse(
                                sMentor.booking_dtls_list
                              )}
                            />
                            <div className="dfghjffg mt-3">
                              {user && timeSlotDetails === null ? (
                                <button
                                  title="Please select the date and Timeslot"
                                  className="btn btn-main"
                                >
                                  BOOK NOW
                                </button>
                              ) : (
                                <button
                                  className="btn btn-main"
                                  onClick={CreateBookingAppointment}
                                >
                                  BOOK NOW
                                </button>
                              )}
                              {!user && (
                                <button className="btn btn-main">
                                  <Link to="/login">LOGIN</Link>
                                </button>
                              )}
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
      })}
    </>
  );
};

export default SingleMentorProfile;
