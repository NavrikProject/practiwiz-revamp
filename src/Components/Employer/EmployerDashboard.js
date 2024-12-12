import { useState, useEffect } from "react";

import Logo from "../../Images/logo.png";
import PostInternship from "../Employer/Internships/OtherComponents/PostInternship.js";
import ApplicationsReceived from "../Employer/Internships/OtherComponents/ApplicationsReceived.js";
import ViewEditInternshipPost from "../Employer/Internships/OtherComponents/ViewEditInternshipPost.js";
import { ApiURL } from "../../Utils/ApiURL";
import InternshipChangePwd from "../Employer/Internships/OtherComponents/InternshipChangePwd.js";
import PostedInternshipListing from "./Internships/OtherComponents/PostedInternships.js";
import InternshipNotification from "../Employer/Internships/OtherComponents/InternshipNotification.js";
import InternshipProfileSettings from "../Employer/Internships/OtherComponents/InternshipProfileSettings.js";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../Redux/userRedux.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import OrgUpdateDetails from "./OrgUpdateDetails/OrgUpdateDetails.js";

const EmployerDashboard = ({ user, token }) => {
  const [employerDetails, setEmployerDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showOrgUpdateDetails, setShowOrgUpdateDetails] = useState(false);
  const [employerTotalProgress, setEmployerTotalProgress] = useState(0);
  const [showEmployerProfile, setShowEmployerProfile] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [showInternshipDashboad, setshowInternshipDashboad] = useState(false);
  const [ShowPostInternship, setShowPostInternship] = useState(false);
  const [InternshipApplicationR, setInternshipApplicationR] = useState(false);
  const [InternshipProfileSetting, setInternshipProfileSetting] =
    useState(false);
  const [InternshipChangePassword, setInternshipChangePassword] =
    useState(false);
  const [ShowInternshipNotification, setShowInternshipNotification] =
    useState(false);
  const [showViewEditInternshipPost, setShowViewEditInternshipPost] =
    useState(false);
  const [profilemenu, setprofilemenu] = useState(false);
  const [Sessionmenu, setSessionmenu] = useState(false);
  const [showInternshipPostId, setShowInternshipPostId] = useState(null);
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

  const HandleInternshipDashBoardProfile = () => {
    if (!showInternshipDashboad) {
      setshowInternshipDashboad(true);
    }
    return (
      setShowInternshipNotification(false),
      setInternshipApplicationR(false),
      setShowPostInternship(false),
      setInternshipProfileSetting(false),
      setInternshipChangePassword(false),
      setShowViewEditInternshipPost(false)
    );
  };

  const HandlePostInternship = () => {
    if (!ShowPostInternship) {
      setShowPostInternship(true);
    }
    return (
      setShowInternshipNotification(false),
      setInternshipApplicationR(false),
      setshowInternshipDashboad(false),
      setInternshipProfileSetting(false),
      setInternshipChangePassword(false),
      setShowViewEditInternshipPost(false)
    );
  };
  const HandleShowInternshipNotification = () => {
    if (!ShowInternshipNotification) {
      setShowInternshipNotification(true);
    }
    return (
      setShowPostInternship(false),
      setInternshipApplicationR(false),
      setshowInternshipDashboad(false),
      setInternshipProfileSetting(false),
      setInternshipChangePassword(false),
      setShowViewEditInternshipPost(false)
    );
  };

  const HandleApplicationsReceived = () => {
    if (!InternshipApplicationR) {
      setInternshipApplicationR(true);
    }
    return (
      setShowPostInternship(false),
      setShowInternshipNotification(false),
      setshowInternshipDashboad(false),
      setInternshipProfileSetting(false),
      setInternshipChangePassword(false),
      setShowViewEditInternshipPost(false)
    );
  };
  const HandleChangePwd = () => {
    if (!InternshipChangePassword) {
      setInternshipChangePassword(true);
    }
    return (
      setShowPostInternship(false),
      setShowInternshipNotification(false),
      setshowInternshipDashboad(false),
      setInternshipProfileSetting(false),
      setInternshipApplicationR(false),
      setShowViewEditInternshipPost(false)
    );
  };
  const HandleInternshipProfileSetting = () => {
    if (!InternshipProfileSetting) {
      setInternshipProfileSetting(true);
    }
    return (
      setShowPostInternship(false),
      setShowInternshipNotification(false),
      setshowInternshipDashboad(false),
      setInternshipApplicationR(false),
      setInternshipChangePassword(false),
      setShowViewEditInternshipPost(false)
    );
  };

  const handleEditInternshipPost = (id) => {
    if (!showViewEditInternshipPost) {
      setShowInternshipPostId(id);
      setShowViewEditInternshipPost(true);
    }
    return (
      setShowPostInternship(false),
      setShowInternshipNotification(false),
      setshowInternshipDashboad(false),
      setInternshipApplicationR(false),
      setInternshipChangePassword(false),
      setInternshipProfileSetting(false)
    );
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = ApiURL();
  const userLogoutHandler = () => {
    return dispatch(logOut()), navigate("/login");
  };

  const employerUserDtlsId = user?.user_id;
  useEffect(() => {
    const fetchSingleMentors = async () => {
      setLoading(true);
      const response = await axios.post(
        `${url}api/v1/employer/dashboard/fetch-single-details/${employerUserDtlsId}`,
        { userId: employerUserDtlsId }
      );
      setLoading(false);
      if (response.data.success) {
        if (response.data.success[0]?.total_progress === 50) {
          return (
            setShowOrgUpdateDetails(true),
            setEmployerDetails(response.data.success),
            setLoading(false),
            setEmployerTotalProgress(response.data.success[0]?.total_progress),
            setShowEmployerProfile(false)
          );
        } else if (response.data.success[0]?.total_progress === 90) {
          return (
            setEmployerDetails(response.data.success),
            setLoading(false),
            setEmployerTotalProgress(response.data.success[0]?.total_progress)
          );
        } else if (response.data.success[0]?.total_progress === 100) {
          return (
            setShowOrgUpdateDetails(false),
            setEmployerDetails(response.data.success),
            setLoading(false),
            setEmployerTotalProgress(response.data.success[0]?.total_progress),
            setShowEmployerProfile(true)
          );
        }
      }
      if (response.data.error) {
        return setLoading(false), setEmployerDetails(null);
      }
    };
    fetchSingleMentors();
  }, [employerUserDtlsId, url]);
  useEffect(() => {
    const notifications = employerDetails?.map((item) => {
      if (item?.notification_list) {
        try {
          return JSON.parse(item.notification_list);
        } catch (error) {
          console.error("Failed to parse notification_list:", error);
          return []; // Return an empty array if parsing fails
        }
      }
      return []; // Return an empty array if notification_list is undefined or null
    });
    const allNotifications = notifications?.flat();
    const unreadExists = allNotifications?.some(
      (notification) => !notification.notification_is_read
    );
    // Delay the state update slightly
    setTimeout(() => {
      setHasUnreadNotifications(unreadExists);
    }, 0);
  }, [employerDetails]);
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
                        <li>
                          <Link
                            target="_blanks"
                            to={`/mentor-club/mentor-profile/${
                              user?.user_firstname +
                              "-" +
                              user.user_lastname.replace(" ", "-").toLowerCase()
                            }/${user?.user_id}`}
                          >
                            View Public Profile
                          </Link>
                        </li>
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
              </div>
            </nav>
          </div>
        </header>

        <div className="mentor_dashboard" id="mentorRegisterBg">
          {/* <div className="row"> */}
          <div className="">
            <div className="col-md-flex-center">
              {showOrgUpdateDetails ? (
                <div className="display-raw">
                  <button
                    className="btn btn-transparent text-center py-3 seeeett"
                    onClick={HandleInternshipDashBoardProfile}
                  >
                    <span className="d-block bg-white position-relative m-auto">
                      {/* <i className="fa-solid fa-user"> */}
                      <i className="fa-solid fa-house-circle-check"></i>
                    </span>

                    <h5>Dashboard</h5>
                  </button>
                  <button
                    className="btn btn-transparent text-center py-3 seeeett"
                    onClick={HandleShowInternshipNotification}
                  >
                    <i className="fa-solid fa-bell"></i>
                    <span className="d-block bg-white position-relative m-auto">
                      {hasUnreadNotifications && (
                        <span
                          style={{
                            position: "absolute",
                            top: "-15px",
                            right: "7px",
                            width: "12px",
                            height: "12px",
                            backgroundColor: "red",
                            borderRadius: "50%",
                            border: "2px solid white",
                          }}
                        />
                      )}
                    </span>
                    <h5>Notifications</h5>
                  </button>
                </div>
              ) : (
                <div className="display-raw">
                  <button
                    className="btn btn-transparent text-center py-3 seeeett"
                    onClick={HandleInternshipDashBoardProfile}
                  >
                    <span className="d-block bg-white position-relative m-auto">
                      {/* <i className="fa-solid fa-user"> */}
                      <i className="fa-solid fa-house-circle-check"></i>
                    </span>

                    <h5>Dashboard</h5>
                  </button>
                  <div className="Baseposition" onMouseLeave={toggleOffProfile}>
                    <button
                      className="btn btn-transparent text-center py-3 seeeett"
                      onMouseOver={toggleNoProfile}
                    >
                      <span className="d-block bg-white position-relative m-auto">
                        <i className="fa-solid fa-bars"></i>
                      </span>
                      <h5>
                        Profile Settings
                        <i className="fa-solid fa-chevron-down downarrowsize"></i>
                      </h5>
                    </button>
                    {profilemenu && (
                      <div className="submenu1">
                        <button
                          className="submenu-item1"
                          onClick={HandleInternshipProfileSetting}
                        >
                          <h5>Profile Change</h5>
                        </button>
                        <button
                          className="submenu-item1"
                          onClick={HandleChangePwd}
                        >
                          <h5>Change Password</h5>
                        </button>
                      </div>
                    )}
                  </div>{" "}
                  <button
                    className="btn btn-transparent text-center py-3 seeeett"
                    onClick={HandlePostInternship}
                  >
                    <span className="d-block bg-white position-relative m-auto">
                      <i class="fa-solid fa-share-from-square"></i>
                    </span>

                    <h5>Posted Internships</h5>
                  </button>
                  <button
                    className="btn btn-transparent text-center py-3 seeeett"
                    onClick={HandlePostInternship}
                  >
                    <span className="d-block bg-white position-relative m-auto">
                      <i class="fa-solid fa-share-from-square"></i>
                    </span>

                    <h5>Post Internship</h5>
                  </button>
                  {/* 
                <button
                  className="btn btn-transparent text-center py-3 seeeett"
                  onClick={HandleApplicationsReceived}
                >
                  <span className="d-block bg-white position-relative m-auto">
                    <i className="fa-solid fa-folder"></i>
                  </span>

                  <h5>Applications received</h5>
                </button> */}
                  <button
                    className="btn btn-transparent text-center py-3 seeeett"
                    onClick={HandleShowInternshipNotification}
                  >
                    {" "}
                    <i className="fa-solid fa-bell"></i>
                    <span className="d-block bg-white position-relative m-auto">
                      {hasUnreadNotifications && (
                        <span
                          style={{
                            position: "absolute",
                            top: "-15px",
                            right: "7px",
                            width: "12px",
                            height: "12px",
                            backgroundColor: "red",
                            borderRadius: "50%",
                            border: "2px solid white",
                          }}
                        />
                      )}
                    </span>
                    <h5>Notifications</h5>
                  </button>
                </div>
              )}
            </div>

            <div className="maincontent">
              {showOrgUpdateDetails && (
                <OrgUpdateDetails employerUserDtlsId={employerUserDtlsId} />
              )}

              {ShowPostInternship && (
                <PostInternship
                  user={user}
                  token={token}
                  employerDetails={employerDetails}
                />
              )}
              {/* {InternshipApplicationR && <ApplicationsReceived />} */}
              {ShowInternshipNotification && (
                <InternshipNotification
                  data={employerDetails}
                  employerDtlsId={employerUserDtlsId}
                />
              )}
              {showInternshipDashboad && (
                <PostedInternshipListing
                  data={employerDetails}
                  employerDtlsId={employerUserDtlsId}
                  onEditInternshipPost={handleEditInternshipPost}
                />
              )}
              {InternshipProfileSetting && <InternshipProfileSettings />}
              {InternshipChangePassword && <InternshipChangePwd />}
              {showViewEditInternshipPost && (
                <ViewEditInternshipPost
                  internshipPostId={showInternshipPostId}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;