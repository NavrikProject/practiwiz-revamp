/* eslint-disable no-sequences */
import "./DashboardCSS/mentordashboardnotification.css";
import "./DashboardCSS/Mentor.css";
import Logo from "../../../Images/logo.png";
import MentorNotifications from "./OtherComponents/MentorNotifications";
import MentorSessionSetup from "./OtherComponents/MentorSessionSetup";
import MentorChangePwd from "./OtherComponents/MentorChangePwd";
import MentorProfileSettings from "./ProfileSettings/MentorProfileSettings";
import MentorProfile from "./OtherComponents/MentorProfile";
import MentorBankdetails from "./OtherComponents/MentorBankdetails";
import { useDispatch } from "react-redux";
import { logOut } from "../../../Redux/userRedux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ApiURL } from "../../../Utils/ApiURL";
import MentorUpcomingSessions from "./OtherComponents/MentorUpcomingSessions";
import MentorCompletedSessions from "./OtherComponents/MentorCompletedSessions";
import MentorCaseStudyInput from "./CaseStudy/MentorCaseStudyInput";
import SingleMentorProfilePageSkelton from "../AllMentors/SingleMentorProfile/Skelton/SingleMentorProfilePageSkelton";
import { toast } from "react-toastify";

const MentorDashboard = ({ user, token }) => {
  const url = ApiURL();
  const [singleMentor, setSingleMentor] = useState([]);
  const [loading, setLoading] = useState(false);
  const mentorDtlsId = user?.user_id;
  useEffect(() => {
    const fetchSingleMentors = async () => {
      setLoading(true);
      const response = await axios.post(
        `${url}api/v1/mentor/dashboard/fetch-single-details/${mentorDtlsId}`,
        { userId: mentorDtlsId }
      );
      setLoading(false);
      if (response.data.success) {
        // if (response.data.success[0]?.mentor_dtls_found === "No") {
        //   return (
        //     toast.error(
        //       "Mentor details not found, Please update the details, to view the Dashboard"
        //     ),
        //     navigate("/mentor/dashboard/update-details")
        //   );
        // } else {
        // eslint-disable-next-line no-sequences
        return setSingleMentor(response.data.success), setLoading(false);
        // }
      }
      if (response.data.error) {
        return setLoading(false), setSingleMentor(null);
      }
    };
    fetchSingleMentors();
  }, [mentorDtlsId, url]);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [showMentorProfile, setShowMentorProfile] = useState(true);
  const [showMentorPsettings, setshowMentorPsettings] = useState(false);
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showMentorMessage, setShowMentorMessage] = useState(false);
  const [showSessionSetup, setShowSessionSetup] = useState(false);
  const [showMentorUpcomingSessions, setshowMentorUpcomingSessions] =
    useState(false);
  const [showMentorCompletedSessions, setShowMentorCompletedSessions] =
    useState(false);
  const [profilemenu, setprofilemenu] = useState(false);
  const [Sessionmenu, setSessionmenu] = useState(false);
  const [caseStudies, setCaseStudies] = useState(false);
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

  const MentorProfileShowingHandler = () => {
    if (!showMentorProfile) {
      setShowMentorProfile(true);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowChangePwd(false),
      setshowMentorPsettings(false),
      setshowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(false),
      setShowMentorMessage(false),
      setCaseStudies(false)
    );
  };

  const MentorPsettingsHandler = () => {
    if (!showMentorPsettings) {
      setshowMentorPsettings(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setShowMentorProfile(false),
      setShowMentorCompletedSessions(false),
      setshowMentorUpcomingSessions(false),
      setShowMentorCompletedSessions(false),
      setCaseStudies(false)
    );
  };

  const MentorChangePwdHandler = () => {
    if (!showChangePwd) {
      setShowChangePwd(true);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowMentorCompletedSessions(false),
      setshowMentorUpcomingSessions(false),
      setshowMentorPsettings(false),
      setShowMentorProfile(false),
      setShowMentorMessage(false),
      setCaseStudies(false)
    );
  };

  const ShowMentorUpcomingHandler = () => {
    if (!showMentorUpcomingSessions) {
      setshowMentorUpcomingSessions(true);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowChangePwd(false),
      setshowMentorPsettings(false),
      setShowMentorCompletedSessions(false),
      setShowMentorMessage(false),
      setShowMentorProfile(false),
      setCaseStudies(false)
    );
  };
  const ShowMentorCompletedHandler = () => {
    if (!showMentorCompletedSessions) {
      setShowMentorCompletedSessions(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setshowMentorPsettings(false),
      setShowMentorProfile(false),
      setshowMentorUpcomingSessions(false),
      setCaseStudies(false)
    );
  };

  const MentorNotificationHandler = () => {
    if (!showNotification) {
      setShowNotification(true);
    }
    return (
      // setShowNotification(!showNotification),
      setShowSessionSetup(false),
      setShowChangePwd(false),
      setshowMentorPsettings(false),
      setShowMentorProfile(false),
      setShowMentorCompletedSessions(false),
      setshowMentorUpcomingSessions(false),
      setShowMentorMessage(false),
      setCaseStudies(false)
    );
  };
  const MentorSessionSetupHandler = () => {
    if (!showSessionSetup) {
      setShowSessionSetup(true);
    }
    return (
      setShowNotification(false),
      setShowChangePwd(false),
      setshowMentorPsettings(false),
      setShowMentorProfile(false),
      setShowMentorCompletedSessions(false),
      setshowMentorUpcomingSessions(false),
      setShowMentorMessage(false),
      setCaseStudies(false)
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
      setshowMentorPsettings(false),
      setShowMentorCompletedSessions(false),
      setshowMentorUpcomingSessions(false),
      setShowMentorProfile(false),
      setCaseStudies(false)
    );
  };

  const MentorCaseStudiesShowingHandler = () => {
    if (!caseStudies) {
      setCaseStudies(true);
    }
    return (
      setShowSessionSetup(false),
      setShowNotification(false),
      setShowChangePwd(false),
      setshowMentorPsettings(false),
      setShowMentorCompletedSessions(false),
      setshowMentorUpcomingSessions(false),
      setShowMentorProfile(false),
      setShowMentorMessage(false)
    );
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogoutHandler = () => {
    return dispatch(logOut()), navigate("/login");
  };
  useEffect(() => {
    const notifications = singleMentor?.map((item) => {
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
  }, [singleMentor]);

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
          <div className="  ">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "0 40px 0",
              }}
            >
              <div className="  display-raw">
                <button
                  className="btn btn-transparent text-center py-3 seeeett"
                  onClick={MentorProfileShowingHandler}
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
                      Profile Settings{" "}
                      <i className="fa-solid fa-chevron-down downarrowsize"></i>
                    </h5>{" "}
                  </button>
                  {profilemenu && (
                    <div className="submenu1">
                      <button
                        className="submenu-item1"
                        onClick={MentorPsettingsHandler}
                      >
                        <h5>Profile Change</h5>
                      </button>
                      <button
                        className="submenu-item1"
                        onClick={MentorChangePwdHandler}
                      >
                        <h5>Change Password</h5>
                      </button>
                    </div>
                  )}
                </div>
                <div className="Baseposition" onMouseLeave={toggleOffSession}>
                  <button
                    className="btn btn-transparent text-center py-3 seeeett"
                    onMouseOver={toggleNosession}
                  >
                    <span className="d-block bg-white position-relative m-auto">
                      {/* <i className="fa-solid fa-bars-progress"></i> */}
                      <i className="fa-solid fa-tv"></i>
                    </span>
                    <h5>
                      Session Info{" "}
                      <i className="fa-solid fa-chevron-down downarrowsize"></i>
                    </h5>{" "}
                  </button>
                  {Sessionmenu && (
                    <div className="submenu1">
                      <button
                        className="submenu-item1"
                        onClick={ShowMentorUpcomingHandler}
                      >
                        <h5>Upcomig Session</h5>
                      </button>
                      <button
                        className="submenu-item1"
                        onClick={ShowMentorCompletedHandler}
                      >
                        <h5>Completed Session</h5>
                      </button>
                    </div>
                  )}
                </div>

                <button
                  className="btn btn-transparent text-center py-3 seeeett"
                  onClick={MentorMsgShowingHandler}
                >
                  <span className="d-block bg-white position-relative m-auto">
                    {/* <i className="fa-brands fa-rocketchat"></i> */}
                    <i className="fa-solid fa-building-columns"></i>
                  </span>

                  <h5>Bank Details</h5>
                </button>

                <button
                  className="btn btn-transparent text-center py-3 seeeett"
                  onClick={MentorNotificationHandler}
                >
                  <span className="d-block bg-white position-relative m-auto">
                    <i className="fa-solid fa-bell"></i>
                    {hasUnreadNotifications && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-3px",
                          right: "-5px",
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

                <button
                  className="btn btn-transparent text-center py-3 seeeett"
                  onClick={MentorCaseStudiesShowingHandler}
                >
                  <span className="d-block bg-white position-relative m-auto">
                    <i className="fa-solid fa-folder"></i>
                  </span>

                  <h5>Case Studies</h5>
                </button>

                {/* <button
                  className="btn btn-transparent text-center py-3 seeeett"
                  onClick={MentorSessionSetupHandler}
                >
                  <span className="d-block bg-white position-relative m-auto">
                    <i className="fa-solid fa-folder"></i>
                  </span>

                  <h5>Session Setup</h5>
                </button> */}
                {/* <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto">
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>

                  <h5>LOG OUT</h5>
                </button> */}
              </div>
              <div>
                <h5 className="h5stmt" style={{ margin: "0px" }}>
                  Status :
                  {singleMentor[0]?.mentor_approved_status === "Yes" && (
                    <>
                      <i className="fa-solid fa-circle-check fa-lg approveStatus"></i>
                      Approved
                    </>
                  )}
                  {singleMentor[0]?.mentor_approved_status === "No" && (
                    <>
                      <i className="fa-solid fa-circle-exclamation fa-lg disapproveStatus"></i>
                      Not Approved
                    </>
                  )}
                </h5>
              </div>
            </div>
            <div className="maincontent">
              {loading && <SingleMentorProfilePageSkelton />}
              {showNotification && (
                <MentorNotifications
                  user={user}
                  token={token}
                  data={singleMentor}
                  mentorDtlsId={mentorDtlsId}
                />
              )}
              {showSessionSetup && (
                <MentorSessionSetup
                  user={user}
                  token={token}
                  data={singleMentor}
                />
              )}
              {showChangePwd && (
                <MentorChangePwd
                  user={user}
                  token={token}
                  data={singleMentor}
                />
              )}
              {showMentorPsettings && (
                <MentorProfileSettings
                  user={user}
                  token={token}
                  data={singleMentor}
                />
              )}
              {showMentorProfile && (
                <MentorProfile user={user} token={token} data={singleMentor} />
              )}
              {showMentorMessage && (
                <MentorBankdetails
                  user={user}
                  token={token}
                  data={singleMentor}
                />
              )}
              {showMentorUpcomingSessions && (
                <MentorUpcomingSessions
                  user={user}
                  token={token}
                  data={singleMentor}
                />
              )}
              {showMentorCompletedSessions && (
                <MentorCompletedSessions
                  user={user}
                  token={token}
                  data={singleMentor}
                />
              )}
              {caseStudies && (
                <MentorCaseStudyInput
                  user={user}
                  token={token}
                  data={singleMentor}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
