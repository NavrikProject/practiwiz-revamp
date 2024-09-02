import React from "react";
import Qqq1 from "../../../Images/Mentors/qqq1.webp";
const MentorCompletedSessionCard = ({ allMentorCompletedBookingSessions }) => {
  return (
    <>
      {allMentorCompletedBookingSessions?.map((session) => {
        return (
          <div className="col-lg-3 mb-3">
            <div className="ghfghgfhg iuhuh__enruiere mb-0">
              <div className="jghdfrg">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="doiejrer_left">
                      <div className="kmg">
                        <img src={session.mentor_profile_photo} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="doiejrer_right mt-3">
                      <div className="dfhjbghfjgfgh22">
                        <h4>
                          {session.mentor_firstname +
                            " " +
                            session.mentor_lastname}
                        </h4>
                        <h6>{session.mentor_job_title}</h6>
                        <hr />
                        <div className="row mt-3 justify-content-center">
                          <div className="col-lg-6 mb-2">
                            <div className="ierjuhrt_left">
                              <h5 className="mb-0">
                                <i className="fa-regular me-1 fa-clock"></i>{" "}
                                Time :
                              </h5>
                              <p className="my-0">
                                {session.mentor_booking_time}
                              </p>
                            </div>
                          </div>

                          <div className="col-lg-6 mb-2">
                            <div className="ierjuhrt_left">
                              <h5 className="mb-0">
                                <i className="fa-solid me-1 fa-calendar-days"></i>{" "}
                                Date :
                              </h5>

                              <p className="my-0">
                                {new Date(
                                  session.mentor_session_booking_date
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>

                          {/* <div className="col-lg-6 mb-2">
                          <div className="ierjuhrt_left">
                            <h5 className="mb-0">
                              <i className="fa-regular me-1 fa-face-smile"></i>{" "}
                              Rating :
                            </h5>

                            <p className="my-0">4.9/5</p>
                          </div>
                        </div> */}
                        </div>
                        <hr />
                        <div className="kbfhgfgfg d-flex justify-content-center mt-3">
                          {session.mentor_booking_confirmed === "Yes" &&
                            session.mentor_session_status === "completed" && (
                              <>
                                <div className="error-box-green">
                                  You have already completed this mentor
                                  session. You can find the feedback below.
                                </div>
                              </>
                            )}
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

export default MentorCompletedSessionCard;
