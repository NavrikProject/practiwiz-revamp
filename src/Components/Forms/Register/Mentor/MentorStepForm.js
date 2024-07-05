import React, { useState } from "react";
import "./register.css";
import MentorForm1 from "./MentorForm1";
import MentorForm2 from "./MentorForm2";

import MentorForm3 from "./MentorForm3";

const MentorStepForm = () => {
  const [page, setPage] = useState(0);

  const FormTitles = ["ABOUT YOURSELF", "YOUR SUPER POWER", "PREFERENCES"];
  const PageDisplay = () => {
    if (page === 0) {
      return <MentorForm1 />;
    } else if (page === 1) {
      return <MentorForm2 />;
    } else {
      return <MentorForm3 />;
    }
  };
  const setPageCount = (event) => {
    event.preventDefault();
    if (page === 0) {
      setPage((currPage) => currPage + 1);
    } else if (page === 1) {
      setPage((currPage) => currPage + 1);
    } else if (page === 2) {
      setPage((currPage) => currPage + 1);
    }
  };
  return (
    <main>
      <div className="regis_background" id="mentorRegisterBg">
        <div className="jdoieoir_wrapper">
          <div
            id="tabs"
            className="d-flex justify-content-between align-items-center mb-4"
          >
            <button
              className="btn btn-primary tablinks active"
              data-tab="form1"
            >
              <i className="fa-solid me-1 fa-user"></i> ABOUT YOURSELF
            </button>

            <button className="btn btn-primary tablinks" data-tab="form2">
              <i className="fa-solid me-1 fa-bolt"></i> YOUR SUPER POWER
            </button>

            <button className="btn btn-primary tablinks" data-tab="form3">
              <i className="fa-solid me-1 fa-asterisk"></i> PREFERENCES
            </button>
          </div>

          <form id="form1" className="tab active">
            {PageDisplay()}
            <div className="bjuerirr_btn diuher d-flex justify-content-between mt-4">
              {page === 0 ? (
                ""
              ) : (
                <button
                  type="button"
                  className="btn iudhehrnbeer_btn btn-primary"
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  <i className="fa-solid me-2 fa-left-long"></i> Previous
                </button>
              )}
              {page === FormTitles.length - 1 ? (
                <button
                  type="button"
                  className="btn juybeubrer_btn btn-primary"
                >
                  Submit
                </button>
              ) : (
                <div className="bjuerirr_btn diuher d-flex mt-4">
                  <button
                    type="button"
                    className="btn juybeubrer_btn btn-primary"
                    onClick={setPageCount}
                  >
                    Next Step <i className="fa-solid ms-2 fa-right-long"></i>
                  </button>
                </div>
              )}
            </div>
            {/*Next button  */}
          </form>
        </div>
      </div>
    </main>
  );
};

export default MentorStepForm;
