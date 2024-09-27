import React, { useEffect, useState } from "react";
import Ee1 from "../../../../Images/Mentors/ee1.png";
import Ee2 from "../../../../Images/Mentors/ee2.png";
import Tickmark from "../../../../Images/Mentors/tick-mark (1).png";
import Qw1 from "../../../../Images/Mentors/qw1 (1).png";
import Qw2 from "../../../../Images/Mentors/qw1 (2).png";
import DCdc1 from "../../../../Images/Mentors/Mentor_session.jpg";
import "../AllMentors.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ApiURL } from "../../../../Utils/ApiURL";
import MentorBookingAppointment from "./MentorBookingAppointment";
import { useSelector } from "react-redux";
import CustomDatePicker from "../CustomDatepicker/CustomDatePicker";
import { toast } from "react-toastify";
import SingleMentorProfilePageSkelton from "./Skelton/SingleMentorProfilePageSkelton";
import MentorRatingCard from "./MentorRatingCard";
import StarRating from "../../../../Utils/StartRating";
const SingleMentorProfile = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const [showBookingModel, setShowBookingModel] = useState(false);
  const url = ApiURL();
  const params = useParams();
  const mentorDtlsId = params.id;
  const [showRating, setShowRating] = useState(null);
  const [singleMentor, setSingleMentor] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleDateSlotSelect = (date, slot) => {
    setSelectedDate(date);
    setSelectedSlot(slot);
  };

  const [showAreaOfExpertise, setShowAreaOfExpertise] = useState(true);
  const RatingShowHandler = () => {
    return setShowRating(!showRating), setShowAreaOfExpertise(false);
  };
  const AreaOfExpertiseShowHandler = () => {
    return setShowRating(false), setShowAreaOfExpertise(!showAreaOfExpertise);
  };
  useEffect(() => {
    const fetchMentors = async () => {
      setLoading(true);
      const response = await axios.post(
        `${url}api/v1/mentor/fetch-single-details/${mentorDtlsId}`,
        { userId: mentorDtlsId }
      );
      setLoading(false);
      if (response.data.success) {
        setLoading(false);
        setSingleMentor(response.data.success);
      }
      if (response.data.error) {
        setLoading(false);
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
      {loading ? (
        <>
          <SingleMentorProfilePageSkelton />
        </>
      ) : (
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
                              sMentor.mentor_firstname +
                              " " +
                              sMentor.mentor_lastname
                            }
                          />
                        </div>
                      </div>
                      <div className="ihurtf_btn">
                        <button className="btn btn-main">
                          <i className="fa-solid pe-2 fa-envelope-open-text"></i>
                          Message
                        </button>
                        <button className="btn btn-main">
                          <i className="fa-solid pe-2 fa-share"></i> Share
                          Profile
                        </button>
                      </div>
                      {/* <div className="ljrfhf">
                        <i className="fa-solid fa-upload"></i>
                      </div> */}
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
                                  {sMentor?.mentor_firstname?.toUpperCase() +
                                    " " +
                                    sMentor?.mentor_lastname?.toUpperCase()}
                                </h2>{" "}
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
                                  Average rating :
                                  <span className="span121">
                                    <StarRating
                                      rating={sMentor.avg_mentor_rating}
                                    />
                                  </span>
                                  <span>
                                    ({sMentor.feedback_count} Reviews)
                                  </span>
                                </p>
                              </div>
                            </div>

                            <div className="hfuydfgftgh">
                              <div className="gjfhg">
                                <img
                                  src={Tickmark}
                                  style={{ width: "25px" }}
                                  alt=""
                                />
                              </div>
                              <div className="fdjdfg">
                                <p>
                                  {sMentor.mentor_headline + " "}
                                  <span className="spnn45"> Show More</span>
                                </p>
                              </div>
                            </div>
                            <div className="fkjhgdfbghh">
                              <ul className="tabs">
                                <li
                                  className="tab-link current"
                                  data-tab="tab-9"
                                >
                                  Overview
                                </li>
                              </ul>
                              <div id="tab-9" className="tab-content current">
                                <div className="dfgbfgd">
                                  {/* <div className="dfkjhgufgfgh">
                                    <div className="row">
                                      <div className="col-lg-1">
                                        <div className="lgkgg">
                                          <img src={Qw1} alt="" />
                                        </div>
                                      </div>
                                      <div className="col-lg-11">
                                        <div className="djbghdrfgfgh">
                                          <h6>Professional Experience</h6>
                                          <p>{sMentor.mentor_headline}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}

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
                                          <p>
                                            {
                                              sMentor.mentor_recommended_area_of_mentorship
                                            }
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* key skills and expertise starts here. */}

                            {/* area of expertise and rating starts */}
                            <div className="fkjhgdfbghh">
                              <ul className="tabs">
                                <li
                                  className={
                                    showAreaOfExpertise
                                      ? "tab-link current"
                                      : "tab-link "
                                  }
                                  data-tab="tab-9"
                                  onClick={() => AreaOfExpertiseShowHandler()}
                                >
                                  Area of Expertise
                                </li>
                                <li
                                  className={
                                    showRating
                                      ? "tab-link current"
                                      : "tab-link "
                                  }
                                  data-tab="tab-10"
                                  onClick={() => RatingShowHandler()}
                                >
                                  Rating & Reviews
                                </li>
                              </ul>
                              {showAreaOfExpertise && (
                                <div className="options-container">
                                  {JSON.parse(
                                    sMentor.mentor_area_expertise
                                  ).map((option) => (
                                    <div
                                      key={option.id}
                                      className="main-option box"
                                    >
                                      <h2 className="optionH2">
                                        {option.name}
                                      </h2>
                                      {option.subOptions.length > 0 &&
                                        option.subOptions.map((subOption) => (
                                          <div
                                            key={subOption.id}
                                            className="sub-option"
                                          >
                                            <h3>{subOption.name}</h3>
                                            {subOption.skills.length > 0 && (
                                              <div className="fhfbfghg">
                                                {subOption.skills.map(
                                                  (skill) => (
                                                    <button key={skill.id}>
                                                      {skill.name}
                                                    </button>
                                                  )
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                    </div>
                                  ))}
                                </div>
                              )}
                              {showRating && (
                                <div id="tab-10" className="">
                                  <div className="jfgghghhghkgkhjg">
                                    <div className="jhdfgfjgg">
                                      <MentorRatingCard
                                        feedbackCount={sMentor.feedback_count}
                                        feedback_details={
                                          sMentor.feedback_details
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="hgkfgkjfgfghgfg sticky-top">
                            <h3 style={{ width: "auto" }}>Domain</h3>
                            <div className="fhfbfghg">
                              <button>{sMentor.mentor_domain}</button>
                            </div>
                            <h3 style={{ width: "auto", marginTop: "20px" }}>
                              Additional Skills
                            </h3>
                            <div className="fhfbfghg">
                              {JSON.parse(sMentor.mentor_passion_dtls).map(
                                (passion) => {
                                  return (
                                    <>
                                      {passion.inside === true && (
                                        <button>{passion.text}</button>
                                      )}
                                    </>
                                  );
                                }
                              )}
                            </div>
                            <div className="fkjbghdfgfghghjygh p-4">
                              <div className="fjbgfg">
                                <h4 className="mt-3 mb-4">
                                  Mentor Availability
                                </h4>
                                <CustomDatePicker
                                  onDateSlotSelect={handleDateSlotSelect}
                                  timeslotList={JSON.parse(
                                    sMentor.timeslot_list
                                  )}
                                  bookingDetails={JSON.parse(
                                    sMentor?.booking_dtls_list
                                  )}
                                />
                                <div className="dfghjffg mt-3">
                                  {user && user?.user_type !== "mentor" && (
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
      )}
    </>
  );
};

export default SingleMentorProfile;
