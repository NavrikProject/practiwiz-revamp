import React from "react";
import "../DashboardCSS/menteeprofile.css";
import "../DashboardCSS/mobileMenteeProfile.css";
import Annesa from "../../../../Images/Mentee/annesa.webp";
import Ll1 from "../../../../Images/Mentee/ll1.png";
import Ll2 from "../../../../Images/Mentee/ll2.png";
import Ll3 from "../../../../Images/Mentee/ll3.png";
import Ll4 from "../../../../Images/Mentee/ll4.png";
import Ll5 from "../../../../Images/Mentee/ll5.png";
import Ii1 from "../../../../Images/Mentee/ii1.png";
import Ii2 from "../../../../Images/Mentee/ii2.png";
import Ii4 from "../../../../Images/Mentee/ii4.png";
import Edu from "../../../../Images/Mentee/edu.png";
import Certification from "../../../../Images/Mentee/certification.png";
import Experience from "../../../../Images/Mentee/experiece.png";
const MenteeProfileDashboard = ({ singleMentee, user, token }) => {
  return (
    <>
      {singleMentee?.map((sMentee) => {
        return (
          <div className="col-lg-10 ps-0 hththtggh mob-main">
            <div
              className="duiegrer_bck position-relative mb-3"
              id="menteeBackgroundCover"
            >
              <div className="container">
                <div className="mob-center csdpeijf kjbdbeuirrr d-flex justify-content-between">
                  <div className="mob-center mlr ihuerorktrt ujgereter position-relative">
                    <div className="iijieirr_left2 overflow-hidden">
                      <img
                        src={sMentee?.mentee_profile_pic_url}
                        width="100%"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="ihurtf_btn mob-hide">
                    {/* <button className="btn btn-main">
                        <i className="fa-solid pe-2 fa-envelope-open-text"></i>{" "}
                        Message
                      </button> */}

                    <button className="btn btn-main">
                      <i className="fa-solid pe-2 fa-share"></i> Share Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lndfhjfvgdvbfgfghgf pt-5">
              <div className="container">
                <div className="skhfdfdfg">
                  <div className="row justify-content-between">
                    <div className="col-lg-7">
                      <div className="dfnjghjggh">
                        <div className="ghvfvdfgg">
                          <div className="gjnjfghg">
                            <h2 className="mb-2">
                              {" "}
                              {sMentee.mentee_firstname.toUpperCase() +
                                " " +
                                sMentee.mentee_lastname.toUpperCase()}
                            </h2>
                          </div>

                          <div className="njfgfghf">
                            <i className="fa-brands me-2 fa-linkedin-in"></i>

                            <i className="fa-brands fa-x-twitter"></i>
                          </div>
                        </div>

                        <div className="hfuydfgftgh d-flex align-items-center mb-2">
                          <div className="gjfhg me-2">
                            <img src={Ii1} alt="" />
                          </div>

                          <p className="mb-0" style={{ marginTop: "8px" }}>
                            {sMentee.mentee_type.toUpperCase()}
                          </p>
                        </div>

                        {/* <div className="hfuydfgftgh d-flex align-items-center mb-2">
                            <div className="gjfhg me-2">
                              <img src={Ii2} alt="" />
                            </div>

                            <p className="mb-0">
                              Working Professional{" "}
                              <span className="spnrr">
                                ({sMentee.mentee_lastname.toUpperCase()})
                              </span>
                            </p>
                          </div> */}

                        <div className="hfuydfgftgh d-flex mb-2 gfgh">
                          <div className="gjfhg me-2 ">
                            <img src={Ii4} alt="" />
                          </div>

                          <p className="mb-0 ">
                            {sMentee.mentee_about}
                            {/* <span className="spnn45">Show More</span> */}
                          </p>
                        </div>

                        <div className="jgufgfhghjg my-5">
                          <h4 className="mb-3">Skills</h4>

                          <div className="hjuyfgdfggh gfgh">
                            <p>{sMentee.mentee_skills}</p>
                          </div>
                        </div>

                        <div className="jnfhujydfgfghfh">
                          <div className="lgjgf align-items-center mb-3">
                            <div className="mgjhg me-3">
                              <img src={Experience} alt="" />
                            </div>

                            <h3 className="mb-0">Work Experience</h3>
                          </div>

                          <div className="gkjnhfgfg">
                            <div className="row">
                              <div className="">
                                <div className="gfgh">
                                  {JSON?.parse(
                                    sMentee?.mentee_experience_details
                                  ) !== null ? (
                                    <>
                                      {" "}
                                      {JSON.parse(
                                        sMentee?.mentee_experience_details
                                      ).map((dlt) => {
                                        return (
                                          <div className="gfgh">
                                            <h6>
                                              {dlt?.mentee_workexp_CompanyName}
                                            </h6>
                                            <p>{dlt?.mentee_workexp_Role}</p>
                                            <p>{dlt?.mentee_workexp_Desc}</p>
                                            <p>
                                              {dlt?.mentee_workexp_Location}
                                            </p>
                                            <p>
                                              {new Date(
                                                dlt?.mentee_workexp_Start_Year
                                              ).toDateString()}
                                              {}--{" "}
                                              {new Date(
                                                dlt?.mentee_workexp_End_Year
                                              ).toDateString()}
                                            </p>
                                          </div>
                                        );
                                      })}
                                    </>
                                  ) : (
                                    <h7>Please UpDate Education Details </h7>
                                  )}
                                </div>
                              </div>
                              {/* <div className="col-lg-6">
                            <div className="gfgh">
                              <h6>Product Designer</h6>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form
                              </p>
                            </div>
                          </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="gdfgghjhhjkjh">
                        <div className="dfkjbgdfgg">
                          <div className="nggh mb-3">
                            <h5>Personal Details</h5>
                          </div>

                          {/* <div className="mfbghffghg py-2">
                              <div className="doiherer d-flex align-items-center">
                                <div className="jnhfgjhf me-2">
                                  <img src={Ll1} alt="" />
                                </div>

                                <h6 className="mb-0">Experience:</h6>
                              </div>

                              <p className="mb-0">0-2 Years</p>
                            </div> */}

                          <div className="mfbghffghg py-2">
                            <div className="doiherer d-flex align-items-center">
                              <div className=" me-2">
                                {/* <img src={Ll2} alt="" /> */}

                                <i
                                  class="fa-solid fa-envelope"
                                  style={{
                                    color: " #ff9214",
                                    marginLeft: "7px",
                                  }}
                                ></i>
                              </div>

                              <h6
                                className="mb-0"
                                style={{ marginLeft: "16px" }}
                              >
                                Email:
                              </h6>
                            </div>

                            <p className="mb-0">{sMentee?.mentee_email}</p>
                          </div>

                          <div className="mfbghffghg py-2">
                            <div className="doiherer d-flex align-items-center">
                              <div className="jnhfgjhf me-2">
                                <img src={Ll3} alt="" />
                              </div>

                              <h6 className="mb-0">Gender:</h6>
                            </div>

                            <p className="mb-0">{sMentee?.mentee_gender}</p>
                          </div>

                          <div className="mfbghffghg py-2">
                            <div className="doiherer d-flex align-items-center">
                              <div className="jnhfgjhf me-2">
                                <img src={Ll4} alt="" />
                              </div>

                              <h6 className="mb-0">Language:</h6>
                            </div>

                            <p className="mb-0">{sMentee?.mentee_language}</p>
                          </div>

                          <div className="mfbghffghg py-2">
                            <div className="doiherer d-flex align-items-center">
                              <div className="jnhfgjhf me-2">
                                <img src={Ll5} alt="" />
                              </div>

                              <h6 className="mb-0">Educational Level:</h6>
                            </div>

                            <p className="mb-0">{sMentee?.mentee_type}</p>
                          </div>
                          {/* <div className="mfbghffghg py-2">
                              <div className="doiherer d-flex align-items-center">
                                <div className="jnhfgjhf me-2">
                                  <img src={Ll5} alt="" />
                                </div>

                                <h6 className="mb-0">Educational Level:</h6>
                              </div>

                              <p className="mb-0">{sMentee?.mentee_EduLevel}</p>
                            </div> */}
                        </div>

                        <div className="jnfhujydfgfghfh my-4">
                          <div className="lgjgf2 align-items-center mb-3">
                            <div className="mgjhg me-3">
                              <img src={Edu} alt="" />
                            </div>

                            <h3 className="mb-0">Education</h3>
                          </div>

                          <div className="gkjnhfgfg">
                            <div className="row">
                              <div className="">
                                {sMentee?.mentee_institute_details ? (
                                  <>
                                    {" "}
                                    {JSON.parse(
                                      sMentee?.mentee_institute_details
                                    ).map((dlt) => {
                                      return (
                                        <div className="gfgh">
                                          <h6>{dlt?.mentee_instituteName}</h6>
                                          <p>{dlt?.mentee_courseName}</p>
                                          <p>
                                            {dlt?.mentee_institute_location}
                                          </p>
                                          <p>
                                            {" "}
                                            {new Date(
                                              dlt?.mentee_institute_Start_Year
                                            ).toDateString()}
                                            --{" "}
                                            {new Date(
                                              dlt?.mentee_institute_End_Year
                                            ).toDateString()}
                                          </p>
                                        </div>
                                      );
                                    })}
                                  </>
                                ) : (
                                  <h7>Please UpDate Education Details </h7>
                                )}
                              </div>
                              {/* <div className="col-lg-6">
                                  <div className="gfgh">
                                    <h6>Bachelors in Fins Arts</h6>
                                    <p>College/ School 2010-2012</p>
                                  </div>
                                </div> */}
                            </div>
                          </div>
                        </div>
                        <div className="jnfhujydfgfghfh py-3">
                          <div className="lgjgf3 align-items-center mb-3">
                            <div className="mgjhg me-3">
                              <img src={Certification} alt="" />
                            </div>

                            <h3 className="mb-0">Certification</h3>
                          </div>

                          <div className="gkjnhfgfg">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="gfgh">
                                  {JSON?.parse(
                                    sMentee?.mentee_certificate_details
                                  ) !== null ? (
                                    <>
                                      {" "}
                                      {JSON.parse(
                                        sMentee?.mentee_certificate_details
                                      ).map((dlt) => {
                                        return (
                                          <div className="gfgh">
                                            <h6>
                                              {dlt?.mentee_Certificate_Name}
                                            </h6>
                                            <p>
                                              {dlt?.mentee_Certificate_level}
                                            </p>
                                            <p>
                                              {dlt?.mentee_Certificate_Desc}
                                            </p>
                                            <p>
                                              {" "}
                                              {new Date(
                                                dlt?.mentee_Certificate_Start_Year
                                              ).toDateString()}
                                              --{" "}
                                              {new Date(
                                                dlt?.mentee_Certificate_End_Year
                                              ).toDateString()}
                                            </p>
                                          </div>
                                        );
                                      })}
                                    </>
                                  ) : (
                                    <h7>Please UpDate Education Details </h7>
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
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenteeProfileDashboard;
