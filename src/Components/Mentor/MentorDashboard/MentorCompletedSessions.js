import React from "react";
import "./mentorcompletesession.css";
import MentorCompletedSessionCard from "./MentorCompletedSessionCard";

const MenteeCompletedSessions = () => {
  return (
    <div className="col-lg-10 ps-0">
      <div className="difuhtre_content bkjihinewrewr">
        <div className="flkhgjfgf">
          <div className="fgfdg">
            <h2>Your Completed Sessions</h2>
          </div>
          <div className="oidieoiejrer_filter">
            <div className="row justify-content-between">
              <div className="col-lg-3 mb-2">
                <div className="oidheknrier">
                  <h5>
                    <b>Sort By</b>
                  </h5>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Year</option>
                    <option value="1">2021</option>
                    <option value="2">2022</option>
                    <option value="3">2023</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 mb-2">
                <div className="oidheknrier">
                  <h5>
                    <b>Sort By</b>
                  </h5>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Mentor Name</option>
                    <option value="1">Tarun Gautam</option>
                    <option value="2">Tarun Gautam</option>
                    <option value="3">Tarun Gautam</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 mb-2">
                <div className="oidheknrier">
                  <h5>
                    <b>Sort By</b>
                  </h5>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Sort By</option>
                    <option value="1">11:15 am</option>
                    <option value="2">1:15 am</option>
                    <option value="3">12:15 am</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <MentorCompletedSessionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeCompletedSessions;
