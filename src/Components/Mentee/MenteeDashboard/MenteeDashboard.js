import React, { useState } from "react";
import Logo from "../../../Images/logo.png";

import "./Mentee.css";
import MenteeCompletedCourses from "./MenteeCompletedCourses";
import MenteeNotifications from "./MenteeNotifications";
import MenteeChangePwd from "./MenteeChangePwd";
import MenteeSavedJobs from "./MenteeSavedJobs";
import MenteeCourseProgress from "./MenteeCourseProgress";
import MenteeMessages from "./MenteeMessages";
import MenteeProfileSettings from "./MenteeProfileSettings";
import MenteeProfileDashboard from "./MenteeProfileDashboard";
import { Link } from "react-router-dom";
import MenteeUpcomingSessions from "./MenteeUpcomingSessions";
import MenteeCompletedSessions from "./MenteeCompletedSessions";
const MenteeDashboard = () => {
  const [showNotification, setShowNotification] = useState("false");
  const [showChangePwd, setShowChangePwd] = useState("false");
  const [showMenteePsettings, setShowMenteePsettings] = useState("false");
  const [showCompletedCourse, setShowCompletedCourse] = useState("false");
  const [showMenteeSavedJobs, setShowMenteeSavedJobs] = useState("false");
  const [showMenteeCourseProgress, setShowMenteeCourseProgress] =
    useState("false");
  const [showMenteeMessage, setShowMenteeMessage] = useState("false");
  const [showMenteeProfile, setShowMenteeProfile] = useState("false");
  const [showMenteeUpcomingSessions, setShowMenteeUpcomingSessions] =
    useState("false");
  const [showMenteeCompletedSessions, setShowMenteeCompletedSessions] =
    useState("false");
  const MenteeNotificationHandler = () => {
    return (
      setShowNotification(!showNotification),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false"),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions("false")
    );
  };
  const MenteeCompCourseHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse(!showCompletedCourse),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false"),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions("false")
    );
  };
  const MenteeChangePwdHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd(!showChangePwd),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false"),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions("false")
    );
  };
  const MenteeSavedJobsHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs(!showMenteeSavedJobs),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false"),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions("false")
    );
  };
  const MenteeCourseProgressHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress(!showMenteeCourseProgress),
      setShowMenteeMessage("false"),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions("false")
    );
  };
  const MenteePsettingsHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowMenteePsettings(!showMenteePsettings),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false"),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions("false")
    );
  };
  const MenteeMessageHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage(!showMenteeMessage),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions("false")
    );
  };
  const ShowMenteeProfileHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false"),
      setShowMenteeProfile(!showMenteeProfile),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions("false")
    );
  };
  const ShowMenteeUpcomingHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false"),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions(!showMenteeUpcomingSessions),
      setShowMenteeCompletedSessions("false")
    );
  };
  const ShowMenteeCompletedHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false"),
      setShowMenteeProfile("false"),
      setShowMenteeUpcomingSessions("false"),
      setShowMenteeCompletedSessions(!showMenteeCompletedSessions)
    );
  };
  return (
    <>
      <div className="md-header">
        <header>
          <div className="header-wrapper">
            <nav className="navbar mx-4 px-3 mt-3 navbar-expand-sm navbar-light bg-white">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src={Logo} alt="" />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  id="nav-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span id="bar-icon" className="navbar-toggler-icon"></span>

                  <i
                    id="close-mark-icon"
                    className="fa-solid fa-xmark d-none"
                  ></i>
                </button>

                <div
                  className="navbarmenucollapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <form className="d-flex iugeuirrr align-items-center">
                    <div className="udgehrr pe-3">
                      <div className="cdsfsdvnghff position-relative">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Discover Your Mentor..."
                        />

                        <i className="fa-solid fa-magnifying-glass position-absolute"></i>
                      </div>
                    </div>

                    <div className="udgehrr position-relative ps-3">
                      <button className="btn btn-main mt-0" type="button">
                        <i className="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul className="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>
                          <Link to="/mentee/view-profile/mahesh">
                            View Public Profile
                          </Link>
                        </li>

                        <li>Log Out</li>
                      </ul>
                    </div>
                  </form>
                </div>

                <div className="odejr_res d-none">
                  <div className="d-flex align-items-center">
                    <div className="udgehrr position-relative me-3 ps-3">
                      <button className="btn btn-main mt-0" type="button">
                        <i className="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul className="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>View Public Profile</li>

                        <li>Log Out</li>
                      </ul>
                    </div>

                    <div
                      className="dashboard-side-bar"
                      id="responsive-side-bar"
                    >
                      <i className="fa-solid fa-2x fa-bars-staggered"></i>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div className="mentor_dashboard">
          <div className="row">
            <div className="col-lg-2 pe-0 csdegbfraedd">
              <div className="difuhtre_nav">
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={ShowMenteeProfileHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-user"></i>
                  </span>

                  <h5>Dashboard</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MenteePsettingsHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bars"></i>
                  </span>

                  <h5>PROFILE SETTINGS</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MenteeMessageHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-brands fa-rocketchat"></i>
                  </span>

                  <h5>MESSAGES</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MenteeNotificationHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bell"></i>
                  </span>

                  <h5>NOTIFICATIONS</h5>
                </button>{" "}
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={ShowMenteeUpcomingHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bars-progress"></i>
                  </span>

                  <h5>UPCOMING SESSIONS</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={ShowMenteeCompletedHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-hourglass-half"></i>
                  </span>

                  <h5>COMPLETED SESSIONS</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MenteeCourseProgressHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bars-progress"></i>
                  </span>

                  <h5>COURSE PROGRESS</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MenteeCompCourseHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-hourglass-half"></i>
                  </span>

                  <h5>COMPLETED COURSES</h5>
                </button>
                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </span>

                  <h5>PAYMENT HISTORY</h5>
                </button>
                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-regular fa-building"></i>
                  </span>

                  <h5>SAVED INSTITUTE</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MenteeSavedJobsHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bookmark"></i>
                  </span>

                  <h5>SAVED JOBS</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MenteeChangePwdHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </span>

                  <h5>CHANGE PASSWORD</h5>
                </button>
                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>

                  <h5>LOG OUT</h5>
                </button>
              </div>
            </div>
            {!showMenteeCompletedSessions ? <MenteeCompletedSessions /> : ""}
            {!showMenteeUpcomingSessions ? <MenteeUpcomingSessions /> : ""}
            {!showMenteeProfile ? <MenteeProfileDashboard /> : ""}
            {!showNotification ? <MenteeNotifications /> : ""}
            {!showChangePwd ? <MenteeChangePwd /> : ""}
            {!showCompletedCourse ? <MenteeCompletedCourses /> : ""}
            {!showMenteeSavedJobs ? <MenteeSavedJobs /> : ""}
            {!showMenteeCourseProgress ? <MenteeCourseProgress /> : ""}
            {!showMenteeMessage ? <MenteeMessages /> : ""}
            {!showMenteePsettings ? <MenteeProfileSettings /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenteeDashboard;
