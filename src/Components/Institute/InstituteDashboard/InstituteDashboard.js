import React, { useState } from "react";
import "./Institutedashboardnotification.css";
import "./Institute.css";
import Logo from "../../../Images/logo.png";
import InstituteNotifications from "./InstituteNotifications";
import InstituteChangePwd from "./InstituteChangePwd";
import InstituteMessages from "./InstituteMessages";
const InstituteDashboard = () => {
  const [showNotification, setShowNotification] = useState("false");
  const [showChangePwd, setShowChangePwd] = useState("false");

  const [showInstituteMessage, setShowInstituteMessage] = useState("false");
  const InstituteNotificationHandler = () => {
    return (
      setShowNotification(!showNotification),
      setShowChangePwd("false"),
      setShowInstituteMessage("false")
    );
  };

  const InstituteChangePwdHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd(!showChangePwd),
      setShowInstituteMessage("false")
    );
  };

  const InstituteMsgShowingHandler = () => {
    return (
      setShowNotification("false"),
      setShowChangePwd("false"),
      setShowInstituteMessage(!showInstituteMessage)
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

                        <li>View Public Profile</li>

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

                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={InstituteMsgShowingHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-brands fa-rocketchat"></i>
                  </span>

                  <h5>MESSAGES</h5>
                </button>

                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={InstituteNotificationHandler}
                >
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bell"></i>
                  </span>

                  <h5>NOTIFICATIONS</h5>
                </button>

                <button
                  className="btn btn-transparent text-center py-3"
                  onClick={InstituteChangePwdHandler}
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
            {!showNotification ? <InstituteNotifications /> : ""}
            {!showChangePwd ? <InstituteChangePwd /> : ""}
            {!showInstituteMessage ? <InstituteMessages /> : ""}
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

export default InstituteDashboard;
