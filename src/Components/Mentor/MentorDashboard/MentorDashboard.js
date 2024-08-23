import React, { useState } from "react";
import "./mentordashboardnotification.css";
import "./Mentor.css";
import Logo from "../../../Images/logo.png";
import MentorNotifications from "./MentorNotifications";
import MentorSessionSetup from "./MentorSessionSetup";
import MentorChangePwd from "./MentorChangePwd";
import MentorProfileSettings from "./MentorProfileSettings";
import MentorProfile from "./MentorProfile";
import MentorMessages from "./MentorMessages";
import { useDispatch } from "react-redux";
import { logOut } from "../../../Redux/userRedux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MentorCompletedSessions from "./MentorCompletedSessions";
import MentorUpcomingSessions from "./MentorUpcomingSessions";
const MentorDashboard = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showSessionSetup, setShowSessionSetup] = useState(false);
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [showMentorPsettings, setShowMentorPsettings] = useState(false);
  const [showMentorProfile, setShowMentorProfile] = useState(true);
  const [showMentorMessage, setShowMentorMessage] = useState(false);
  const [showMentorUpcomingSessions, setShowMentorUpcomingSessions] =
    useState(false);
  const [showMentorCompletedSessions, setShowMentorCompletedSessions] =
    useState(false);
  const MentorNotificationHandler = () => {
    if (!showNotification) {
      setShowNotification(true);
    }
    return (
      // setShowNotification(!showNotification),
      setShowSessionSetup(false),
      setShowChangePwd(false),
      setShowMentorPsettings(false),
      setShowMentorProfile(false),
      setShowMentorMessage(false),
      setShowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(false)
    );
  };
  const MentorSessionSetupHandler = () => {
    if (!showSessionSetup) {
      setShowSessionSetup(true);
    }
    return (
      // setShowSessionSetup(!showSessionSetup),
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMentorPsettings(false),
      setShowMentorProfile(false),
      setShowMentorMessage(false),
      setShowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(false)
    );
  };
  const MentorChangePwdHandler = () => {
    if (!showChangePwd) {
      setShowChangePwd(true);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      // setShowChangePwd(!showChangePwd),
      setShowMentorPsettings(false),
      setShowMentorProfile(false),
      setShowMentorMessage(false),
      setShowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(false)
    );
  };
  const MentorPsettingsHandler = () => {
    if (!showMentorPsettings) {
      setShowMentorPsettings(true);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowChangePwd(false),
      // setShowMentorPsettings(!showMentorPsettings),
      setShowMentorProfile(false),
      setShowMentorMessage(false),
      setShowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(false)
    );
  };
  const MentorProfileShowingHandler = () => {
    if (!showMentorProfile) {
      setShowMentorProfile(true);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMentorPsettings(false),
      // setShowMentorProfile(!showMentorProfile),
      setShowMentorMessage(false),
      setShowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(false)
    );
  };

  const MentorMsgShowingHandler = () => {
    if (!showMentorMessage) {
      setShowMentorMessage(true);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMentorPsettings(false),
      setShowMentorProfile(false),
      // setShowMentorMessage(!showMentorMessage)
      setShowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(false)
    );
  };
  const ShowMentorUpcomingSessionsHandler = () => {
    if (!showMentorMessage) {
      setShowMentorMessage(false);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMentorPsettings(false),
      setShowMentorProfile(false),
      setShowMentorUpcomingSessions(!showMentorUpcomingSessions),
      setShowMentorCompletedSessions(false)
    );
  };
  const ShowMentorCompletedSessionsHandler = () => {
    if (!showMentorMessage) {
      setShowMentorMessage(false);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMentorPsettings(false),
      setShowMentorProfile(false),
      setShowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(!showMentorCompletedSessions)
    );
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogoutHandler = () => {
    return dispatch(logOut()), navigate("/login");
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

                        <li>View Public Profile</li>

                        <li onClick={userLogoutHandler}>Log Out</li>
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
                  onClick={MentorProfileShowingHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-user"></i>
                  </span>

                  <h5>Dashboard</h5>
                </button>

                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MentorPsettingsHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bars"></i>
                  </span>

                  <h5>PROFILE SETTINGS</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={ShowMentorUpcomingSessionsHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bars-progress"></i>
                  </span>

                  <h5>UPCOMING SESSIONS</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={ShowMentorCompletedSessionsHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-hourglass-half"></i>
                  </span>

                  <h5>COMPLETED SESSIONS</h5>
                </button>
                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MentorMsgShowingHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-brands fa-rocketchat"></i>
                  </span>

                  <h5>MESSAGES</h5>
                </button>

                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MentorNotificationHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bell"></i>
                  </span>

                  <h5>NOTIFICATIONS</h5>
                </button>

                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MentorChangePwdHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </span>

                  <h5>CHANGE PASSWORD</h5>
                </button>

                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={MentorSessionSetupHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-folder"></i>
                  </span>

                  <h5>SESSION SETUP</h5>
                </button>

                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>

                  <h5>LOG OUT</h5>
                </button>
              </div>
            </div>
            {showNotification ? <MentorNotifications /> : ""}
            {showSessionSetup ? <MentorSessionSetup /> : ""}
            {showChangePwd ? <MentorChangePwd /> : ""}
            {showMentorPsettings ? <MentorProfileSettings /> : ""}
            {showMentorProfile ? <MentorProfile /> : ""}
            {showMentorMessage ? <MentorMessages /> : ""}
            {showMentorCompletedSessions ? <MentorCompletedSessions /> : ""}
            {showMentorUpcomingSessions ? <MentorUpcomingSessions /> : ""}
          </div>
        </div>
      </div>
      <div className="res-db-sidebar">
        <div className="md-header ugenhuhrtniu" id="res-db-side-bar">
          <div className="difuhtre_nav" style={{ display: "none" }}>
            <div className="huirebff_close">
              <i
                className="fa-solid fa-circle-arrow-left"
                id="close-filter"
              ></i>
            </div>

            <button className="btn btn-transparent text-center py-3">
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-solid fa-user"></i>
              </span>

              <h5>Dashboard</h5>
            </button>

            <button className="btn btn-transparent text-center py-3">
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-solid fa-bars"></i>
              </span>

              <h5>PROFILE SETTINGS</h5>
            </button>

            <button className="btn btn-transparent text-center py-3">
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-brands fa-rocketchat"></i>
              </span>

              <h5>MESSAGES</h5>
            </button>

            <button className="btn btn-transparent text-center py-3">
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-solid fa-bell"></i>
              </span>

              <h5>NOTIFICATIONS</h5>
            </button>

            <button className="btn btn-transparent text-center py-3">
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
              </span>

              <h5>CHANGE PASSWORD</h5>
            </button>

            <button className="btn btn-transparent text-center py-3">
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-solid fa-folder"></i>
              </span>

              <h5>SESSION SETUP</h5>
            </button>

            <button className="btn btn-transparent text-center py-3">
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>

              <h5>LOG OUT</h5>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
