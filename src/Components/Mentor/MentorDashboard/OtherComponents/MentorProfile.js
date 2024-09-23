import React, { useState } from "react";
import Ee1 from "../../../../Images/Mentors/ee1.png";
import Ee2 from "../../../../Images/Mentors/ee2.png";
import Tickmark from "../../../../Images/Mentors/tick-mark (1).png";
import Qw1 from "../../../../Images/Mentors/qw1 (1).png";
import Qw2 from "../../../../Images/Mentors/qw1 (2).png";
import MentorRatingCard from "../../AllMentors/SingleMentorProfile/MentorRatingCard";
import StarRating from "../../../../Utils/StartRating";
const MentorProfile = ({ data, user, token }) => {
  const [showRating, setShowRating] = useState(null);
  const [showOverview, setShowOverview] = useState(true);
  const OverviewShowHandler = () => {
    return setShowRating(false), setShowOverview(!showOverview);
  };
  const RatingShowHandler = () => {
    return setShowRating(!showRating), setShowOverview(false);
  };
  return (
    <>
      {data?.map((sMentor) => {
        return (
          <>
            <div className="col-lg-10 ps-0">
              <div className="difuhtre_content">
                <div
                  className="duiegrer_bck position-relative mb-3"
                  id="MentorCoverPicture"
                >
                  <div className="container">
                    <div className="csdpeijf d-flex justify-content-between">
                      <div className="ihuerorktrt position-relative">
                        <div className="iijieirr_left overflow-hidden">
                          <img
                            src={sMentor.mentor_profile_photo}
                            width="100%"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="ljrfhf">
                        {/* <i className="fa-solid fa-upload"></i> */}
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
                                <img src={Tickmark} alt="" />
                              </div>
                              <p>
                                {sMentor.mentor_headline + " "}
                                <span className="spnn45"> Show More</span>
                              </p>
                            </div>

                            <div className="fkjhgdfbghh my-5">
                              <ul className="tabs">
                                <li
                                  className={
                                    showOverview
                                      ? "tab-link current"
                                      : "tab-link "
                                  }
                                  data-tab="tab-9"
                                  onClick={() => OverviewShowHandler()}
                                >
                                  Overview
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
                              {showOverview && (
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
                                            <p>{sMentor.mentor_headline}</p>
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
                            <h3>Skills</h3>
                            <div className="fhfbfghg">
                              {JSON.parse(sMentor.expertise_list).map(
                                (expertise) => {
                                  return (
                                    <>
                                      <button>
                                        {expertise.mentor_expertise}
                                      </button>
                                    </>
                                  );
                                }
                              )}
                              {JSON.parse(sMentor.passion_list).map(
                                (passion) => {
                                  return (
                                    <>
                                      <button>{passion.mentor_passion}</button>
                                    </>
                                  );
                                }
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

export default MentorProfile;
