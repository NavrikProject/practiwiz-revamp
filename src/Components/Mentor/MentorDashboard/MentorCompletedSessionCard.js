import React from "react";
import Qqq1 from "../../../Images/Mentors/qqq1.webp";
const MentorCompletedSessionCard = () => {
  return (
    <div className="col-lg-3 mb-3">
      <div className="ghfghgfhg iuhuh__enruiere mb-0">
        <div className="jghdfrg">
          <div className="row">
            <div className="col-lg-12">
              <div className="doiejrer_left">
                <div className="kmg">
                  <img src={Qqq1} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="doiejrer_right mt-3">
                <div className="dfhjbghfjgfgh22">
                  <h4>Gourav Bhati</h4>

                  <h6>Product Owner</h6>
                  <hr />
                  <div className="row mt-3 justify-content-center">
                    <div className="col-lg-6 mb-2">
                      <div className="ierjuhrt_left">
                        <h5 className="mb-0">
                          <i className="fa-regular me-1 fa-clock"></i> Time :
                        </h5>

                        <p className="my-0">11:50 pm</p>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <div className="ierjuhrt_left">
                        <h5 className="mb-0">
                          <i className="fa-solid me-1 fa-calendar-days"></i>{" "}
                          Date :
                        </h5>

                        <p className="my-0">30/06/2024</p>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <div className="ierjuhrt_left">
                        <h5 className="mb-0">
                          <i className="fa-regular me-1 fa-face-smile"></i>{" "}
                          Rating :
                        </h5>

                        <p className="my-0">4.9/5</p>
                      </div>
                    </div>
                  </div>

                  <div className="kbfhgfgfg d-flex justify-content-center mt-3">
                    <button className="btn-main me-1">Book Again</button>

                    <button className="btn-main">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCompletedSessionCard;
