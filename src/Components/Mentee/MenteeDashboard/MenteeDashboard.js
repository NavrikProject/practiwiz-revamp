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
const MenteeDashboard = () => {
  const [showNotification, setShowNotification] = useState("false");
  const [showChangePwd, setShowChangePwd] = useState("false");
  const [showMenteePsettings, setShowMenteePsettings] = useState("false");
  const [showCompletedCourse, setShowCompletedCourse] = useState("false");
  const [showMenteeSavedJobs, setShowMenteeSavedJobs] = useState("false");
  const [showMenteeCourseProgress, setShowMenteeCourseProgress] =
    useState("false");
  const [showMenteeMessage, setShowMenteeMessage] = useState("false");
  const MenteeNotificationHandler = () => {
    return (
      setShowNotification(!showNotification),
      setShowChangePwd("false"),
      setShowMenteePsettings("false"),
      setShowCompletedCourse("false"),
      setShowMenteeSavedJobs("false"),
      setShowMenteeCourseProgress("false"),
      setShowMenteeMessage("false")
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
      setShowMenteeMessage("false")
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
      setShowMenteeMessage("false")
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
      setShowMenteeMessage("false")
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
      setShowMenteeMessage("false")
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
      setShowMenteeMessage("false")
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
      setShowMenteeMessage(!showMenteeMessage)
    );
  };
  return (
    <>
      <div class="md-header">
        <header>
          <div class="header-wrapper">
            <nav class="navbar mx-4 px-3 mt-3 navbar-expand-sm navbar-light bg-white">
              <div class="container-fluid">
                <a class="navbar-brand" href="/">
                  <img src={Logo} alt="" />
                </a>

                <button
                  class="navbar-toggler"
                  type="button"
                  id="nav-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span id="bar-icon" class="navbar-toggler-icon"></span>

                  <i id="close-mark-icon" class="fa-solid fa-xmark d-none"></i>
                </button>

                <div
                  class="navbarmenucollapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <form class="d-flex iugeuirrr align-items-center">
                    <div class="udgehrr pe-3">
                      <div class="cdsfsdvnghff position-relative">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Discover Your Mentor..."
                        />

                        <i class="fa-solid fa-magnifying-glass position-absolute"></i>
                      </div>
                    </div>

                    <div class="udgehrr position-relative ps-3">
                      <button class="btn btn-main mt-0" type="button">
                        <i class="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul class="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>View Public Profile</li>

                        <li>Log Out</li>
                      </ul>
                    </div>
                  </form>
                </div>

                <div class="odejr_res d-none">
                  <div class="d-flex align-items-center">
                    <div class="udgehrr position-relative me-3 ps-3">
                      <button class="btn btn-main mt-0" type="button">
                        <i class="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul class="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>View Public Profile</li>

                        <li>Log Out</li>
                      </ul>
                    </div>

                    <div class="dashboard-side-bar" id="responsive-side-bar">
                      <i class="fa-solid fa-2x fa-bars-staggered"></i>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div class="mentor_dashboard">
          <div class="row">
            <div class="col-lg-2 pe-0 csdegbfraedd">
              <div class="difuhtre_nav">
                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-user"></i>
                  </span>

                  <h5>Dashboard</h5>
                </button>

                <button
                  class="btn btn-transparent text-center py-3"
                  onClick={MenteePsettingsHandler}
                >
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-bars"></i>
                  </span>

                  <h5>PROFILE SETTINGS</h5>
                </button>

                <button
                  class="btn btn-transparent text-center py-3"
                  onClick={MenteeMessageHandler}
                >
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-brands fa-rocketchat"></i>
                  </span>

                  <h5>MESSAGES</h5>
                </button>

                <button
                  class="btn btn-transparent text-center py-3"
                  onClick={MenteeNotificationHandler}
                >
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-bell"></i>
                  </span>

                  <h5>NOTIFICATIONS</h5>
                </button>

                <button
                  class="btn btn-transparent text-center py-3"
                  onClick={MenteeChangePwdHandler}
                >
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                  </span>

                  <h5>CHANGE PASSWORD</h5>
                </button>

                <button
                  class="btn btn-transparent text-center py-3"
                  onClick={MenteeCourseProgressHandler}
                >
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-bars-progress"></i>
                  </span>

                  <h5>COURSE PROGRESS</h5>
                </button>

                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-hourglass-half"></i>
                  </span>

                  <h5>COMPLETED SESSIONS</h5>
                </button>

                <button
                  class="btn btn-transparent text-center py-3"
                  onClick={MenteeCompCourseHandler}
                >
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-hourglass-half"></i>
                  </span>

                  <h5>COMPLETED COURSES</h5>
                </button>
                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                  </span>

                  <h5>PAYMENT HISTORY</h5>
                </button>
                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-regular fa-building"></i>
                  </span>

                  <h5>SAVED INSTITUTE</h5>
                </button>

                <button
                  class="btn btn-transparent text-center py-3"
                  onClick={MenteeSavedJobsHandler}
                >
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-bookmark"></i>
                  </span>

                  <h5>SAVED JOBS</h5>
                </button>

                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </span>

                  <h5>LOG OUT</h5>
                </button>
              </div>
            </div>
            {!showNotification && <MenteeNotifications />}
            {!showChangePwd && <MenteeChangePwd />}
            {!showCompletedCourse && <MenteeCompletedCourses />}
            {!showMenteeSavedJobs && <MenteeSavedJobs />}
            {!showMenteeCourseProgress && <MenteeCourseProgress />}
            {!showMenteeMessage && <MenteeMessages />}
            {!showMenteePsettings && <MenteeProfileSettings />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenteeDashboard;
