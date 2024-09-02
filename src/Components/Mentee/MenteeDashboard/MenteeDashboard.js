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
  const [showNotification, setShowNotification] = useState(false);
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [showMenteePsettings, setShowMenteePsettings] = useState(false);
  const [showCompletedCourse, setShowCompletedCourse] = useState(false);
  const [showMenteeSavedJobs, setShowMenteeSavedJobs] = useState(false);
  const [showMenteeCourseProgress, setShowMenteeCourseProgress] =
    useState(false);
  const [showMenteeMessage, setShowMenteeMessage] = useState(false);
  const [showMenteeProfile, setShowMenteeProfile] = useState(true);
  const [showMenteeUpcomingSessions, setShowMenteeUpcomingSessions] =
    useState(false);
  const [showMenteeCompletedSessions, setShowMenteeCompletedSessions] =
    useState(false);
  const [profilemenu, setprofilemenu] = useState(false);
  const [Sessionmenu, setSessionmenu] = useState(false);
  const [Coursemenu, setCoursemenu] = useState(false);
  const MenteeNotificationHandler = () => {
    if (!showNotification) {
      setShowNotification(true);
    }
    return (
      setShowChangePwd(false),
      setShowMenteePsettings(false),
      setShowCompletedCourse(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeMessage(false),
      setShowMenteeProfile(false),
      setShowMenteeUpcomingSessions(false),
      setShowMenteeCompletedSessions(false)
    );
  };

  const MenteeChangePwdHandler = () => {
    if (!showChangePwd) {
      setShowChangePwd(true);
    }
    return (
      setShowNotification(false),
      setShowMenteePsettings(false),
      setShowCompletedCourse(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeMessage(false),
      setShowMenteeProfile(false),
      setShowMenteeUpcomingSessions(false),
      setShowMenteeCompletedSessions(false)
    );
  };
  const MenteeSavedJobsHandler = () => {
    if (!showMenteeSavedJobs) {
      setShowMenteeSavedJobs(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMenteePsettings(false),
      setShowCompletedCourse(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeMessage(false),
      setShowMenteeProfile(false),
      setShowMenteeUpcomingSessions(false),
      setShowMenteeCompletedSessions(false)
    );
  };
  const MenteeCourseProgressHandler = () => {
    if (!showMenteeCourseProgress) {
      setShowMenteeCourseProgress(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMenteePsettings(false),
      setShowCompletedCourse(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeMessage(false),
      setShowMenteeProfile(false),
      setShowMenteeUpcomingSessions(false),
      setShowMenteeCompletedSessions(false)
    );
  };
  const MenteeCompCourseHandler = () => {
    if (!showCompletedCourse) {
      setShowCompletedCourse(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMenteePsettings(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeMessage(false),
      setShowMenteeProfile(false),
      setShowMenteeUpcomingSessions(false),
      setShowMenteeCompletedSessions(false)
    );
  };
  const MenteePsettingsHandler = () => {
    if (!showMenteePsettings) {
      setShowMenteePsettings(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowCompletedCourse(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeMessage(false),
      setShowMenteeProfile(false),
      setShowMenteeUpcomingSessions(false),
      setShowMenteeCompletedSessions(false)
    );
  };
  const MenteeMessageHandler = () => {
    if (!showMenteeMessage) {
      setShowMenteeMessage(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMenteePsettings(false),
      setShowCompletedCourse(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeProfile(false),
      setShowMenteeUpcomingSessions(false),
      setShowMenteeCompletedSessions(false)
    );
  };
  const ShowMenteeProfileHandler = () => {
    if (!showMenteeProfile) {
      setShowMenteeProfile(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMenteePsettings(false),
      setShowCompletedCourse(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeMessage(false),
      setShowMenteeUpcomingSessions(false),
      setShowMenteeCompletedSessions(false)
    );
  };

  const toggleNoProfile = () => {
    setprofilemenu(true);
  };
  const toggleOffProfile = () => {
    setprofilemenu(false);
  };
  const toggleNosession = () => {
    setSessionmenu(true);
  };
  const toggleOffSession = () => {
    setSessionmenu(false);
  };
  const toggleNoCourse = () => {
    setCoursemenu(true);
  };
  const toggleOffCourse = () => {
    setCoursemenu(false);
  };
  const ShowMenteeUpcomingHandler = () => {
    if (!showMenteeUpcomingSessions) {
      setShowMenteeUpcomingSessions(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMenteePsettings(false),
      setShowCompletedCourse(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeMessage(false),
      setShowMenteeProfile(false),
      setShowMenteeCompletedSessions(false)
    );
  };
  const ShowMenteeCompletedHandler = () => {
    if (!showMenteeCompletedSessions) {
      setShowMenteeCompletedSessions(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMenteePsettings(false),
      setShowCompletedCourse(false),
      setShowMenteeSavedJobs(false),
      setShowMenteeCourseProgress(false),
      setShowMenteeMessage(false),
      setShowMenteeProfile(false),
      setShowMenteeUpcomingSessions(false)
    );
  };
  return (
    <>
      <div className="md-header">
        <header>
          <div className="header-wrapper">
            <nav className="navbar mx-4 px-3 mt-3 navbar-expand-sm navbar-light ">
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
          <div className="">
            <div className="display-raw">
              <button
                className="btn btn-transparent text-center py-3 seeeett"
                onClick={ShowMenteeProfileHandler}
              >
                <span className="d-block bg-white position-relative m-auto mb-3">
                  <i className="fa-solid fa-user"></i>
                </span>

                <h5>Dashboard</h5>
              </button>
              <button
                className="btn btn-transparent text-center py-3 seeeett"
                onMouseOver={toggleNoProfile}
                onMouseLeave={toggleOffProfile}
              >
                <span className="d-block bg-white position-relative m-auto mb-3">
                  <i className="fa-solid fa-bars"></i>
                </span>

                <h5>
                  Profile Settings{" "}
                  <i class="fa-solid fa-chevron-down downarrowsize"></i>
                </h5>
                {profilemenu && (
                  <div className="submenu1">
                    <button
                      className="submenu-item1"
                      onClick={MenteePsettingsHandler}
                    >
                      <h5>Profile Change</h5>
                    </button>
                    <button
                      className="submenu-item1"
                      onClick={MenteeChangePwdHandler}
                    >
                      <h5>Change Password</h5>
                    </button>
                  </div>
                )}
              </button>
              <button
                className="btn btn-transparent text-center py-3 seeeett"
                onMouseOver={toggleNosession}
                onMouseLeave={toggleOffSession}
              >
                <span className="d-block bg-white position-relative m-auto mb-3">
                  {/* <i className="fa-solid fa-bars-progress"></i> */}
                  <i class="fa-solid fa-tv"></i>
                </span>

                <h5>
                  My Session Info
                  <i class="fa-solid fa-chevron-down downarrowsize"></i>
                </h5>
                {Sessionmenu && (
                  <div className="submenu1">
                    <button
                      className="submenu-item1"
                      onClick={ShowMenteeUpcomingHandler}
                    >
                      <h5>Upcomig Session</h5>
                    </button>
                    <button
                      className="submenu-item1"
                      onClick={ShowMenteeCompletedHandler}
                    >
                      <h5>Completed Session</h5>
                    </button>
                  </div>
                )}
              </button>
              {/* <button
                  className="btn btn-transparent text-center py-3 seeeett" 
                  onClick={ShowMenteeCompletedHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-hourglass-half"></i>
                  </span>

                  <h5>COMPLETED SESSIONS</h5>
                </button> */}
              <button
                className="btn btn-transparent text-center py-3 seeeett"
                onMouseOver={toggleNoCourse}
                onMouseLeave={toggleOffCourse}
              >
                <span className="d-block bg-white position-relative m-auto mb-3">
                  {/* <i className="fa-solid fa-bars-progress"></i> */}
                  <i class="fa-solid fa-book-open-reader"></i>
                </span>

                <h5>
                  Course Info{" "}
                  <i class="fa-solid fa-chevron-down downarrowsize"></i>
                </h5>
                {Coursemenu && (
                  <div className="submenu1">
                    <button
                      className="submenu-item1"
                      onClick={MenteeCourseProgressHandler}
                    >
                      <h5>Course Progress </h5>
                    </button>
                    <button
                      className="submenu-item1"
                      onClick={MenteeCompCourseHandler}
                    >
                      <h5>Completed Course</h5>
                    </button>
                  </div>
                )}
              </button>
              {/* <button
                  className="btn btn-transparent text-center py-3 seeeett"
                  onClick={MenteeCompCourseHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-hourglass-half"></i>
                  </span>

                  <h5>COMPLETED info</h5>
                  
                </button> */}
              <button className="btn btn-transparent text-center py-3 seeeett">
                <span className="d-block bg-white position-relative m-auto mb-3">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </span>

                <h5>Payment History</h5>
              </button>
              <button className="btn btn-transparent text-center py-3 seeeett">
                <span className="d-block bg-white position-relative m-auto mb-3">
                  <i className="fa-regular fa-building"></i>
                </span>

                <h5>Saved Institute</h5>
              </button>
              <button
                className="btn btn-transparent text-center py-3 seeeett"
                onClick={MenteeSavedJobsHandler}
              >
                <span className="d-block bg-white position-relative m-auto mb-3">
                  {/* <i className="fa-solid fa-bookmark"></i> */}
                  <i class="fa-regular fa-bookmark"></i>
                </span>

                <h5>Saved Jobs</h5>
              </button>
              <button
                className="btn btn-transparent text-center py-3 seeeett"
                onClick={MenteeNotificationHandler}
              >
                <span className="d-block bg-white position-relative m-auto mb-3">
                  <i className="fa-solid fa-bell"></i>
                </span>

                <h5>Notifications</h5>
              </button>{" "}
              {/* <button
                  className="btn btn-transparent text-center py-3 seeeett"
                  // onClick={MenteeChangePwdHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </span>

                  <h5>CHANGE PASSWORD</h5>
                </button> */}
            </div>
          </div>
          {showMenteeProfile ? <MenteeProfileDashboard /> : ""}
          {showMenteePsettings ? <MenteeProfileSettings /> : ""}
          {showChangePwd ? <MenteeChangePwd /> : ""}
          {showMenteeCompletedSessions ? <MenteeCompletedSessions /> : ""}
          {showMenteeUpcomingSessions ? <MenteeUpcomingSessions /> : ""}
          {showMenteeCourseProgress ? <MenteeCourseProgress /> : ""}
          {showCompletedCourse ? <MenteeCompletedCourses /> : ""}
          {showMenteeSavedJobs ? <MenteeSavedJobs /> : ""}
          {showMenteeMessage ? <MenteeMessages /> : ""}
          {showNotification ? <MenteeNotifications /> : ""}
        </div>
      </div>
    </>
  );
};

export default MenteeDashboard;
