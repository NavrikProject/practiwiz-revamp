import React, { useState } from "react";
import "./Institutedashboardnotification.css";
// import "./Institute.css";
// import "./teststyle.css"

import Logo from "../../../Images/logo.png";
import InstituteNotifications from "./InstituteNotifications";
import InstituteChangePwd from "./InstituteChangePwd";
import InstituteMessages from "./InstituteMessages";
import InstituteProfileDashboard from "./InstituteProfileDashboard";
import AddMentor from "./AddMentor";
import SearchGuestLacture from "./SearchGuestLacture";
import RequestGuestlacture from "./RequestGuestLacture";
import RegisterGuestlacture from "./RegisterGuestLacture";
import HistoryGuestlacture from "./HistoryGuestlacture";
import CommunicationTemplate from "./CommunicationTemplate";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../Redux/userRedux";

const InstituteDashboard = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const [showNotification, setShowNotification] = useState(false);
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [showInstituteMessage, setShowInstituteMessage] = useState(false);
  const [showInstituteProfile, setshowInstituteProfile] = useState(true);
  const [showAddMentor, setshowAddMentor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showsearchguest, setshowsearchguest] = useState(false);
  const [ShowRequestGuest, setShowRequestGuest] = useState(false);
  const [ShowRegisterGuest, setShowRegisterGuest] = useState(false);
  const [ShowHistory, setShowHistory] = useState(false);
  const [Communication, setCommunication] = useState(false);
  const [profilemenu, setprofilemenu] = useState(false);
  const toggleMenu = () => {
    setIsOpen(true);
  };
  const toggleMenu2 = () => {
    setIsOpen(false);
  };
  const toggleMenu1 = () => {
    setprofilemenu(true);
  };
  const toggleMenu3 = () => {
    setprofilemenu(false);
  };
  const InstituteProfileHandler = () => {
    if (!showInstituteProfile) {
      setshowInstituteProfile(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowInstituteMessage(false),
      setshowsearchguest(false),
      setShowRequestGuest(false),
      setShowRegisterGuest(false),
      setShowHistory(false),
      setshowAddMentor(false),
      setCommunication(false)
    );
  };

  const InstituteAddmentorShowingHandler = () => {
    if (!showAddMentor) {
      setshowAddMentor(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowInstituteMessage(false),
      setshowInstituteProfile(false),
      setshowsearchguest(false),
      setShowRequestGuest(false),
      setShowRegisterGuest(false),
      setShowHistory(false),
      setCommunication(false)
    );
  };

  const InstituteNotificationHandler = () => {
    if (!showNotification) {
      setShowNotification(true);
    }
    return (
      setShowChangePwd(false),
      setShowInstituteMessage(false),
      setshowInstituteProfile(false),
      setshowsearchguest(false),
      setShowRequestGuest(false),
      setShowRegisterGuest(false),
      setShowHistory(false),
      setshowAddMentor(false),
      setCommunication(false)
    );
  };

  const InstituteSearchGuestLacture = () => {
    if (!showsearchguest) {
      setshowsearchguest(true);
    }
    return (
      setShowChangePwd(false),
      setShowInstituteMessage(false),
      setshowInstituteProfile(false),
      setShowRequestGuest(false),
      setShowRegisterGuest(false),
      setShowHistory(false),
      setshowAddMentor(false),
      setShowNotification(false),
      setCommunication(false)
    );
  };

  const InstituteRequestGuest = () => {
    if (!ShowRequestGuest) {
      setShowRequestGuest(true);
    }
    return (
      setShowChangePwd(false),
      setShowInstituteMessage(false),
      setshowInstituteProfile(false),
      setshowsearchguest(false),
      setShowRegisterGuest(false),
      setShowHistory(false),
      setShowNotification(false),
      setshowAddMentor(false),
      setCommunication(false)
    );
  };
  const InstituteRegiterGuest = () => {
    if (!ShowRegisterGuest) {
      setShowRegisterGuest(true);
    }
    return (
      setShowChangePwd(false),
      setShowInstituteMessage(false),
      setshowInstituteProfile(false),
      setshowsearchguest(false),
      setShowRequestGuest(false),
      setShowHistory(false),
      setShowNotification(false),
      setshowAddMentor(false),
      setCommunication(false)
    );
  };
  const InstituteHistoryGuest = () => {
    if (!ShowHistory) {
      setShowHistory(true);
    }
    return (
      setShowChangePwd(false),
      setShowInstituteMessage(false),
      setshowInstituteProfile(false),
      setshowsearchguest(false),
      setShowRequestGuest(false),
      setShowRegisterGuest(false),
      setShowNotification(false),
      setshowAddMentor(false),
      setCommunication(false)
    );
  };

  const InstituteCommunicationTemplate = () => {
    if (!Communication) {
      setCommunication(true);
    }
    return (
      setShowChangePwd(false),
      setShowInstituteMessage(false),
      setshowInstituteProfile(false),
      setshowsearchguest(false),
      setShowRequestGuest(false),
      setShowRegisterGuest(false),
      setShowNotification(false),
      setshowAddMentor(false),
      setShowHistory(false)
    );
  };

  const InstituteChangePwdHandler = () => {
    if (!showChangePwd) {
      setShowChangePwd(true);
    }
    return (
      setShowInstituteMessage(false),
      setshowInstituteProfile(false),
      setshowsearchguest(false),
      setCommunication(false),
      setShowRequestGuest(false),
      setShowRegisterGuest(false),
      setShowNotification(false),
      setshowAddMentor(false),
      setShowHistory(false)
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
            <nav className="navbar mx-4 px-3 mt-3 navbar-expand-sm navbar-light bg-color">
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
                        {user?.user_role === 1 && (
                          <li>
                            <Link target="_blanks" to={`/user/admin/dashboard`}>
                              Admin Dashboard
                            </Link>
                          </li>
                        )}
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
          {/* <div className="row"> */}
          {/* <div className="col-lg-2 pe-0 csdegbfraedd"> */}
          <div className=" display-raw  ">
            <button
              className="btn btn-transparent text-center py-3 seeeett"
              onClick={InstituteProfileHandler}
            >
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i class="fa-solid fa-house-circle-check"></i>
              </span>

              <h5>Dashboard</h5>
            </button>

            <button
              className="btn btn-transparent text-center py-3 seeeett"
              // onClick={InstituteProfilesettings}

              onMouseOver={toggleMenu1}
              onMouseLeave={toggleMenu3}
              // onBlur={toggleMenu1}
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
                    // onClick={InstituteSearchGuestLacture}
                  >
                    <h5> Users List</h5>
                  </button>
                  <button
                    className="submenu-item1"
                    onClick={InstituteChangePwdHandler}
                  >
                    <h5>Change Password</h5>
                  </button>
                </div>
              )}
            </button>

            <button
              className="btn btn-transparent text-center py-3 seeeett "
              onClick={InstituteAddmentorShowingHandler}
            >
              <span className="d-block bg-white position-relative m-auto mb-3">
                {/* <img src={Pic1} alt="pic1" width={"44px"} /> */}
                <i class="fa-solid fa-user-plus"></i>
              </span>

              <h5>Alumni Upload</h5>
            </button>
            <button
              className="btn btn-transparent text-center py-3 seeeett main-button menu-container"
              onMouseOver={toggleMenu}
              onMouseLeave={toggleMenu2}
            >
              <span className="d-block bg-white position-relative m-auto mb-3 ">
                {/* <img src={Pic2} alt="pic2" width={"44px"} /> */}
                <i class="fa-solid fa-chalkboard-user"></i>
              </span>

              <h5>
                Guest Lectures{" "}
                <i class="fa-solid fa-chevron-down downarrowsize"></i>
              </h5>

              {isOpen && (
                <div className="submenu">
                  <button
                    className="submenu-item"
                    onClick={InstituteSearchGuestLacture}
                  >
                    <h5> Search Guest lct.</h5>
                  </button>
                  <button
                    className="submenu-item"
                    onClick={InstituteRequestGuest}
                  >
                    <h5>Request</h5>
                  </button>
                  <button
                    className="submenu-item"
                    onClick={InstituteRegiterGuest}
                  >
                    <h5> Register</h5>
                  </button>
                  <button
                    className="submenu-item"
                    onClick={InstituteHistoryGuest}
                  >
                    <h5> History</h5>
                  </button>
                </div>
              )}
            </button>

            <button
              className="btn btn-transparent text-center py-3 seeeett"
              onClick={InstituteCommunicationTemplate}
            >
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-solid fa-phone-volume"></i>
              </span>

              <h5>Communication Template</h5>
            </button>
            <button
              className="btn btn-transparent text-center py-3 seeeett"
              onClick={InstituteNotificationHandler}
            >
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-solid fa-bell"></i>
              </span>

              <h5>Notifications</h5>
            </button>

            {/* <button
                  className="btn btn-transparent text-center py-3"
                  onClick={InstituteChangePwdHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </span>

                  <h5>CHANGE PASSWORD</h5>
                </button> */}

            {/* <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>

                  <h5>LOG OUT</h5>
                </button> */}
            {/* </div> */}
          </div>
          <div className="maincontent">
            {showNotification ? <InstituteNotifications /> : ""}
            {showInstituteProfile ? <InstituteProfileDashboard /> : ""}
            {showChangePwd ? <InstituteChangePwd /> : ""}
            {showInstituteMessage ? <InstituteMessages /> : ""}
            {showAddMentor ? <AddMentor /> : ""}
            {showsearchguest ? <SearchGuestLacture /> : ""}
            {ShowRequestGuest ? <RequestGuestlacture /> : ""}
            {ShowRegisterGuest ? <RegisterGuestlacture /> : ""}
            {ShowHistory ? <HistoryGuestlacture /> : ""}
            {Communication ? <CommunicationTemplate /> : ""}
          </div>
        </div>
        {/* </div> */}
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

              <h5>ADD MENTOR</h5>
            </button>
            <button className="btn btn-transparent text-center py-3">
              <span className="d-block bg-white position-relative m-auto mb-3">
                <i className="fa-brands fa-rocketchat"></i>
              </span>

              <h5>ADD MENTEE</h5>
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

export default InstituteDashboard;
