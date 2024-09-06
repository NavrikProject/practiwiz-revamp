import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MentorProfile1 from "./MentorProfile1.js";
import MentorProfile2 from "./MentorProfile2.js";
import MentorProfile3 from "./MentorProfile3.js";
import MentorProfile4 from "./MentorProfile4.js";
const MentorProfileSettings = (props) => {
  const [userdata, setuserdata] = useState(props.data[0]);
  console.log(" mentor profile1", userdata);
  const methods = useForm({});
  const [page, setPage] = useState(0);
  const [step, setStep] = useState(1);
  const PageDisplay = () => {
    if (page === 0) {
      return <MentorProfile1 profiledata={userdata} />;
    } else if (page === 1) {
      return <MentorProfile2 profiledata={userdata} />;
    } else if (page == 2) {
      return <MentorProfile3 profiledata={userdata} />;
    } else {
      return <MentorProfile4 profiledata={userdata} />;
    }
  };

  const setPageCount = () => {
    if (page === 0) {
      setPage((currPage) => currPage + 1);
    } else if (page === 1) {
      setPage((currPage) => currPage + 1);
    } else if (page === 2) {
      setPage((currPage) => currPage + 1);
    } else if (page === 3) {
      setPage((currPage) => currPage + 1);
    }
  };
  const tab1 = () => {
    setPage(0);
  };
  const tab2 = () => {
    setPage(1);
  };
  const tab3 = () => {
    setPage(2);
  };
  const tab4 = () => {
    setPage(3);
  };

  return (
    <>
      <div div className="col-lg-10 ps-0">
        <div className="difuhtre_content">
          <div id="mentorRegisterBg">
            <div
              className="jdoieoir_wrapper"
              style={{ width: "85%", paddingTop: "2rem" }}
            >
              <div
                id="tabs"
                className="d-flex justify-content-between align-items-center mb-4"
              >
                {page === 0 ? (
                  <button
                    className="btn btn-primary tablinks active"
                    data-tab="form1"
                  >
                    <i className="fa-solid me-1 fa-user"></i> ABOUT YOURSELF
                  </button>
                ) : (
                  <button
                    className="btn btn-primary tablinks "
                    data-tab="form1"
                    onClick={tab1}
                  >
                    <i className="fa-solid me-1 fa-user"></i> ABOUT YOURSELF
                  </button>
                )}
                {page === 1 ? (
                  <button
                    className="btn btn-primary tablinks active"
                    data-tab="form2"
                  >
                    <i className="fa-solid me-1 fa-bolt"></i> YOUR SUPER POWER
                  </button>
                ) : (
                  <button
                    className="btn btn-primary tablinks "
                    data-tab="form2"
                    onClick={tab2}
                  >
                    <i className="fa-solid me-1 fa-bolt"></i> YOUR SUPER POWER
                  </button>
                )}
                {page === 2 ? (
                  <button
                    className="btn btn-primary tablinks active"
                    data-tab="form3"
                  >
                    <i className="fa-solid fa-calendar-check"></i> AVAILABILITY
                  </button>
                ) : (
                  <button
                    className="btn btn-primary tablinks "
                    data-tab="form3"
                    onClick={tab3}
                  >
                    <i className="fa-solid fa-calendar-check"></i> AVAILABILITY
                  </button>
                )}
                {page === 3 ? (
                  <button
                    className="btn btn-primary tablinks active"
                    data-tab="form3"
                  >
                    <i className="fa-solid me-1 fa-asterisk"></i> PREFERENCES
                  </button>
                ) : (
                  <button
                    className="btn btn-primary tablinks "
                    data-tab="form3"
                    onClick={tab4}
                  >
                    <i className="fa-solid me-1 fa-asterisk"></i> PREFERENCES
                  </button>
                )}
              </div>

              <form>
                <div id="form1" className="tab active">
                  {PageDisplay()}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorProfileSettings;
