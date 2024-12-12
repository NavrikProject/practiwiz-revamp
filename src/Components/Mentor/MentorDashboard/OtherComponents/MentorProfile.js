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
  const [showAreaOfExpertise, setShowAreaOfExpertise] = useState(true);
  const RatingShowHandler = () => {
    return setShowRating(!showRating), setShowAreaOfExpertise(false);
  };
  const AreaOfExpertiseShowHandler = () => {
    return setShowRating(false), setShowAreaOfExpertise(!showAreaOfExpertise);
  };
  return (
    <>
      {data?.map((sMentor) => {
        return (
          <>
            <div className="col-lg-10 ps-0">
              <div className="difuhtre_content">
                <div className="lndfhjfvgdvbfgfghgf py-4">
                  <div className="container widthlajsdlf">
                    <div className="skhfdfdfg">
                      <div className="row justify-content-between">
                        <div className="col-lg-6">
                          <div className="iijieirr_left2 overflow-hidden mentorImageFlex mbMentorDashboardProfilePictureBlock">
                            <img
                              src={
                                sMentor.mentor_dtls_found === "Yes" &&
                                sMentor.mentor_profile_photo !== ""
                                  ? sMentor.mentor_profile_photo
                                  : "https://practiwizstorage.blob.core.windows.net/practiwizcontainer/blue-circle-with-white-user_78370-4707.webp"
                              }
                              width="100%"
                              alt=""
                            />
                          </div>
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
                              <p>
                                {sMentor.mentor_dtls_found === "Yes" &&
                                sMentor.mentor_job_title !== ""
                                  ? sMentor.mentor_job_title?.toUpperCase()
                                  : "Please update your profile details"}
                              </p>
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
                                      rating={sMentor?.avg_mentor_rating}
                                    />
                                  </span>
                                  <span>
                                    ({sMentor?.feedback_count} Reviews)
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="hfuydfgftgh">
                              <div className="gjfhg">
                                <img src={Tickmark} alt="" />
                              </div>
                              {sMentor.mentor_dtls_found === "Yes" &&
                              sMentor?.mentor_headline !== "" ? (
                                <p>
                                  {sMentor?.mentor_headline + " "}
                                  <span className="spnn45"> Show More</span>
                                </p>
                              ) : (
                                <p>Please update your profile details</p>
                              )}
                            </div>
                            <div className="fkjhgdfbghh">
                              <ul className="tabs">
                                <li
                                  className="tab-link current2"
                                  data-tab="tab-9"
                                >
                                  Overview
                                </li>
                              </ul>
                              <div
                                id="tab-9"
                                className="tab-content current sdfasdfasdfasdf"
                              >
                                <div className="dfgbfgd">
                                  <div className="dfkjhgufgfgh">
                                    <div className="row">
                                      <div className="col-lg-1">
                                        <div className="lgkgg mbgjfhg">
                                          <img src={Qw1} alt="" />
                                        </div>
                                      </div>
                                      <div className="col-lg-11">
                                        <div className="djbghdrfgfgh">
                                          <h6>Professional Experience</h6>
                                          <p>
                                            {sMentor.mentor_dtls_found ===
                                              "Yes" &&
                                            sMentor.mentor_headline !== ""
                                              ? sMentor.mentor_headline
                                              : "Please update your profile details"}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="dfkjhgufgfgh">
                                    <div className="row">
                                      <div className="col-lg-1">
                                        <div className="lgkgg mbgjfhg">
                                          <img src={Qw2} alt="" />
                                        </div>
                                      </div>
                                      <div className="col-lg-11">
                                        <div className="djbghdrfgfgh">
                                          <h6>Expertise In</h6>
                                          <p>
                                            {sMentor.mentor_dtls_found ===
                                              "Yes" &&
                                            sMentor?.mentor_recommended_area_of_mentorship !==
                                              ""
                                              ? sMentor?.mentor_recommended_area_of_mentorship
                                              : "Please update your profile details"}
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
                                      ? "tab-link current2"
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
                                      ? "tab-link current2"
                                      : "tab-link "
                                  }
                                  data-tab="tab-10"
                                  onClick={() => RatingShowHandler()}
                                >
                                  Rating & Reviews
                                </li>
                              </ul>
                              {showAreaOfExpertise && (
                                <div className="main-option box">
                                  {" "}
                                  <div className="fhfbfghg">
                                    {sMentor.mentor_dtls_found === "Yes" &&
                                    sMentor.mentor_area_expertise !== "[]" ? (
                                      JSON?.parse(
                                        sMentor.mentor_area_expertise
                                      )?.map((option) => (
                                        <button>{option}</button>
                                      ))
                                    ) : (
                                      <div className="options-container">
                                        <div className="main-option">
                                          <h4 className="noReviewsFound">
                                            Please update your profile details
                                          </h4>
                                        </div>
                                      </div>
                                    )}{" "}
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
                          <div
                            className="hgkfgkjfgfghgfg sticky-top "
                            id="stickytopTop"
                          >
                            <div className="iijieirr_left2 overflow-hidden mentorImageFlex mbMentorDashboardProfilePicture">
                              <img
                                src={
                                  sMentor.mentor_dtls_found === "Yes" &&
                                  sMentor.mentor_profile_photo !== ""
                                    ? sMentor.mentor_profile_photo
                                    : "https://practiwizstorage.blob.core.windows.net/practiwizcontainer/blue-circle-with-white-user_78370-4707.webp"
                                }
                                width="100%"
                                alt=""
                              />
                            </div>
                            <h3 style={{ width: "auto", marginTop: "20px" }}>
                              Domain
                            </h3>
                            <div className="fhfbfghg">
                              {sMentor.mentor_dtls_found === "Yes" &&
                              sMentor.mentor_domain !== "[]" ? (
                                JSON.parse(sMentor?.mentor_domain)?.map(
                                  (domain) => {
                                    return (
                                      <>
                                        <button>{domain}</button>
                                      </>
                                    );
                                  }
                                )
                              ) : (
                                <button>
                                  Please update your profile details
                                </button>
                              )}
                            </div>
                            <h3 style={{ width: "auto", marginTop: "20px" }}>
                              Additional Skills
                            </h3>
                            <div className="fhfbfghg">
                              {/* {sMentor.mentor_dtls_found === "Yes" &&
                              sMentor.mentor_passion_dtls !== "[]" ? (
                                JSON.parse(sMentor.mentor_passion_dtls)?.map(
                                  (passion) => {
                                    return (
                                      <>
                                        {passion.inside === true && (
                                          <button>{passion.text}</button>
                                        )}
                                      </>
                                    );
                                  }
                                )
                              ) : (
                                <button>
                                  Please update your profile details
                                </button>
                              )} */}
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
