import React, { useState } from "react";
import Logo from "../../../Images/logo.png";
import AdminAllMentors from "./Mentors/AdminApprovedAllMentors";
import AdminApprovedAllMentors from "./Mentors/AdminApprovedAllMentors";
import AdminNotApprovedAllMentors from "./Mentors/AdminNotApprovedAllMentors";

const AdminDashboard = () => {
  const [adminAllUsers, setAdminAllUsers] = useState(false);
  const [adminChangePwd, setAdminChangePwd] = useState(false);
  const [adminAllApprovedMentors, setAdminAllApprovedMentors] = useState(false);
  const [adminAllNotApprovedMentors, setAdminAllNotApprovedMentors] =
    useState(false);
  const [showAdminNotification, setShowAdminNotification] = useState(false);
  const [showAdminDashboardProfile, setShowAdminDashboardProfile] =
    useState(true);
  // const [showAllMentorMentorsMenu, setShowAllMentorsMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
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

  const AdminDashboardProfileHandler = () => {
    if (!showAdminDashboardProfile) {
      setShowAdminDashboardProfile(true);
    }
    return (
      setAdminAllUsers(false),
      setAdminChangePwd(false),
      setAdminAllApprovedMentors(false),
      setAdminAllNotApprovedMentors(false),
      setShowAdminNotification(false)
    );
  };

  const AdminDashboardNotificationHandler = () => {
    if (!showAdminNotification) {
      setShowAdminNotification(!showAdminNotification);
    }
    return (
      setAdminAllUsers(false),
      setAdminChangePwd(false),
      setAdminAllApprovedMentors(false),
      setAdminAllNotApprovedMentors(false),
      setShowAdminDashboardProfile(false)
    );
  };
  const AdminNotApprovedMentorsHandler = () => {
    if (!adminAllNotApprovedMentors) {
      setAdminAllNotApprovedMentors(!adminAllNotApprovedMentors);
    }
    return (
      setAdminAllUsers(false),
      setAdminChangePwd(false),
      setAdminAllApprovedMentors(false),
      setShowAdminDashboardProfile(false),
      setShowAdminNotification(false)
    );
  };
  const AdminApprovedMentorsHandler = () => {
    if (!adminAllApprovedMentors) {
      setAdminAllApprovedMentors(!adminAllApprovedMentors);
    }
    return (
      setAdminAllUsers(false),
      setAdminChangePwd(false),
      setAdminAllNotApprovedMentors(false),
      setShowAdminDashboardProfile(false),
      setShowAdminNotification(false)
    );
  };

  const AdminDashboardChangePwdHandler = () => {
    if (!adminChangePwd) {
      setAdminChangePwd(!adminChangePwd);
    }
    return (
      setAdminAllUsers(false),
      setAdminAllApprovedMentors(false),
      setAdminAllApprovedMentors(false),
      setShowAdminDashboardProfile(false),
      setShowAdminNotification(false)
    );
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
          {/* <div className="row"> */}
          {/* <div className="col-lg-2 pe-0 csdegbfraedd"> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 40px 0",
            }}
          >
            <div className=" display-raw  ">
              <button
                className="btn btn-transparent text-center py-3 seeeett"
                onClick={AdminDashboardProfileHandler}
              >
                <span className="d-block bg-white position-relative m-auto ">
                  <i class="fa-solid fa-house-circle-check"></i>
                </span>
                <h5>Practywiz Dashboard</h5>
              </button>

              <button
                className="btn btn-transparent text-center py-3 seeeett"
                // onClick={AdminDashboardProfilesettings}
                onMouseOver={toggleMenu1}
                onMouseLeave={toggleMenu3}
                // onBlur={toggleMenu1}
              >
                <span className="d-block bg-white position-relative m-auto ">
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
                      // onClick={AdminDashboardSearchGuestLacture}
                    >
                      <h5>Users List</h5>
                    </button>
                    <button
                      className="submenu-item1"
                      onClick={AdminDashboardChangePwdHandler}
                    >
                      <h5>Change Password</h5>
                    </button>
                  </div>
                )}
              </button>

              <button
                className="btn btn-transparent text-center py-3 seeeett "
                onMouseOver={toggleMenu}
                onMouseLeave={toggleMenu2}
              >
                <span className="d-block bg-white position-relative m-auto  ">
                  {/* <img src={Pic2} alt="pic2" width={"44px"} /> */}
                  <i class="fa-solid fa-chalkboard-user"></i>
                </span>

                <h5>
                  All Mentors
                  <i class="fa-solid fa-chevron-down downarrowsize"></i>
                </h5>

                {isOpen && (
                  <div className="submenu">
                    <button
                      className="submenu-item"
                      onClick={AdminApprovedMentorsHandler}
                    >
                      <h5>Approved Mentors</h5>
                    </button>
                    <button
                      className="submenu-item"
                      onClick={AdminNotApprovedMentorsHandler}
                    >
                      <h5>Not Approved Mentors</h5>
                    </button>
                  </div>
                )}
              </button>

              <button
                className="btn btn-transparent text-center py-3 seeeett"
                onClick={AdminDashboardNotificationHandler}
              >
                <span className="d-block bg-white position-relative m-auto ">
                  <i className="fa-solid fa-bell"></i>
                </span>

                <h5>Notifications</h5>
              </button>
            </div>
            <div></div>
          </div>

          <div className="maincontent">
            {adminAllApprovedMentors && <AdminApprovedAllMentors />}
            {adminAllNotApprovedMentors && <AdminNotApprovedAllMentors />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
