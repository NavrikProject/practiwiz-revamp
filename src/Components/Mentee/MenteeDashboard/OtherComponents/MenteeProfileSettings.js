import React, { useState } from "react";
import { useForm } from "react-hook-form";

import MenteeProfilePersonalDetails from "./MenteeProfilePersonalDetails.js";
import MenteeProfileEdu_workexpDetails from "./MenteeProfileEdu_workexpDetails.js";

const MenteeProfileSettings = () => {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <MenteeProfilePersonalDetails />;
    } else if (page === 1) {
      return <MenteeProfileEdu_workexpDetails />;
    }
  };

  const setPageCount = () => {
    if (page === 0) {
      setPage((currPage) => currPage + 1);
    } else if (page === 1) {
      setPage((currPage) => currPage + 1);
    }
  };
  const tab1 = () => {
    setPage(0);
  };
  const tab2 = () => {
    setPage(1);
  };

  return (
    <>
      <div div className="col-lg-10 ps-0">
        <div className="">
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
                    <i className="fa-solid me-1 fa-user"></i> Personal Details
                  </button>
                ) : (
                  <button
                    className="btn btn-primary tablinks "
                    data-tab="form1"
                    onClick={tab1}
                  >
                    <i className="fa-solid me-1 fa-user"></i> Personal Details
                  </button>
                )}
                {page === 1 ? (
                  <button
                    className="btn btn-primary tablinks active"
                    data-tab="form2"
                  >
                    <i className="fa-solid me-1 fa-bolt"></i> Educational/Work
                    Experience Details
                  </button>
                ) : (
                  <button
                    className="btn btn-primary tablinks "
                    data-tab="form2"
                    onClick={tab2}
                  >
                    <i className="fa-solid me-1 fa-bolt"></i> Educational/Work
                    Experience Details
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
export default MenteeProfileSettings;
