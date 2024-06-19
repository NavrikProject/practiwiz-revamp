import React, { useState } from "react";
import "./register.css";
import MentorForm1 from "./MentorForm1";
import MentorForm2 from "./MentorForm2";

import MentorForm3 from "./MentorForm3";

const MentorStepForm = () => {
  const [page, setPage] = useState(0);
  const [buttonEnable, setButtonEnable] = useState(false);

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
              onclick="openTab('form1')"
            >
              <i className="fa-solid me-1 fa-user"></i> ABOUT YOURSELF
            </button>

            <button
              className="btn btn-primary tablinks"
              data-tab="form2"
              onclick="openTab('form2')"
            >
              <i className="fa-solid me-1 fa-bolt"></i> YOUR SUPER POWER
            </button>

            <button
              className="btn btn-primary tablinks"
              data-tab="form3"
              onclick="openTab('form3')"
            >
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
                  onclick="submitForm()"
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

          <form id="form2" className="tab">
            <div className="doiherner_wrapper">
              <div
                className="ihduwfr_form_wrapper p-0"
                style={{ height: "auto" }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>Job Title</b>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Type Your Job Title"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-4">
                      <label for="exampleInputPassword1" className="form-label">
                        <b>Years of Experience</b>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Your Experience"
                      />
                    </div>

                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>Company</b>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Type Your Company Name"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="ikhwnjrr_right">
                      <label
                        for="exampleInputEmail1"
                        className="form-label mb-3"
                      >
                        <b>Percentage Completion</b>
                      </label>

                      <div className="d-flex align-items-center">
                        <div className="hinrer_circle position-relative me-3">
                          <h2>SK</h2>
                        </div>

                        <div className="idhnerier_right">
                          <h4 className="mb-1">Sawan Kumar</h4>

                          <p className="mb-1">
                            <b>40% Complete</b>
                          </p>

                          <h6 className="mb-0">Signed up - 4 minutes ago</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-7 mb-4">
                    <label for="exampleInputEmail1" className="form-label">
                      <b>Passionate About!</b> (Select max of 4 options)
                    </label>
                    <div id="container" className="bg-white"></div>

                    <p className="iduehnbriee_text mb-0">
                      (*Drag and drop the most suitable option in the box*)
                    </p>
                  </div>

                  <div className="col-lg-5 mb-4">
                    <div id="outside-container">
                      <div
                        className="draggable"
                        id="draggable1"
                        draggable="true"
                      >
                        Technology
                        <span
                          className="close-btn"
                          onclick="removeFromContainer('draggable1')"
                        >
                          &times;
                        </span>
                      </div>

                      <div
                        className="draggable"
                        id="draggable2"
                        draggable="true"
                      >
                        Management
                        <span
                          className="close-btn"
                          onclick="removeFromContainer('draggable2')"
                        >
                          &times;
                        </span>
                      </div>

                      <div
                        className="draggable"
                        id="draggable3"
                        draggable="true"
                      >
                        Leadership
                        <span
                          className="close-btn"
                          onclick="removeFromContainer('draggable3')"
                        >
                          &times;
                        </span>
                      </div>

                      <div
                        className="draggable"
                        id="draggable4"
                        draggable="true"
                      >
                        Career Guidance
                        <span
                          className="close-btn"
                          onclick="removeFromContainer('draggable4')"
                        >
                          &times;
                        </span>
                      </div>

                      <div
                        className="draggable"
                        id="draggable5"
                        draggable="true"
                      >
                        Public Speaking
                        <span
                          className="close-btn"
                          onclick="removeFromContainer('draggable5')"
                        >
                          &times;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <label for="exampleInputEmail1" className="form-label mb-0">
                      <b>Areas of Expertise</b>
                    </label>

                    <div className="moideuirer_list">
                      <ul className="ps-0 mb-0">
                        <li>
                          <input
                            type="checkbox"
                            id="check_1"
                            name="check_1"
                            value="check_1"
                          />
                          <label for="check_1">Agile</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_2"
                            name="check_2"
                            value="check_2"
                          />
                          <label for="check_2">AI</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_3"
                            name="check_3"
                            value="check_3"
                          />
                          <label for="check_3">Cloud</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_4"
                            name="check_4"
                            value="check_4"
                          />
                          <label for="check_4">Python</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_5"
                            name="check_5"
                            value="check_5"
                          />
                          <label for="check_5">DBA</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_6"
                            name="check_6"
                            value="check_6"
                          />
                          <label for="check_6">JAVA</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_7"
                            name="check_7"
                            value="check_7"
                          />
                          <label for="check_7">Selenium</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_8"
                            name="check_8"
                            value="check_8"
                          />
                          <label for="check_8">Conflict Resolution</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_9"
                            name="check_9"
                            value="check_9"
                          />
                          <label for="check_9">Communication</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_10"
                            name="check_10"
                            value="check_10"
                          />
                          <label for="check_10">Resume Writing</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <label for="exampleInputEmail1" className="form-label mb-0">
                      <b>Academic Qualification</b>
                    </label>

                    <div className="dkjiherer moideuirer_list">
                      <ul className="ps-0 mb-0">
                        <li>
                          <input
                            type="checkbox"
                            id="check_11"
                            name="check_11"
                            value="check_11"
                          />
                          <label for="check_11">Post Graduate</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_20"
                            name="check_20"
                            value="check_20"
                          />
                          <label for="check_20">Graduate</label>
                        </li>

                        <li>
                          <input
                            type="checkbox"
                            id="check_30"
                            name="check_30"
                            value="check_30"
                          />
                          <label for="check_30">Doctorate</label>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <label for="exampleInputEmail1" className="form-label">
                      <b>Your Recommended Area of Mentorship</b>
                    </label>
                    <textarea
                      className="form-control"
                      style={{ height: "150px" }}
                    ></textarea>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <label for="exampleInputEmail1" className="form-label">
                      <b>Headline</b>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Type A Headline Here"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Form 2 fields here --> */}

            <div className="bjuerirr_btn diuher d-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn iudhehrnbeer_btn btn-primary"
                onclick="prevTab()"
              >
                <i className="fa-solid me-2 fa-left-long"></i> Previous
              </button>

              <button
                type="button"
                className="btn juybeubrer_btn btn-primary"
                onclick="nextTab()"
              >
                Next Step <i className="fa-solid ms-2 fa-right-long"></i>
              </button>
            </div>
          </form>

          <form id="form3" className="tab">
            <div className="doiherner_wrapper">
              <div
                className="ihduwfr_form_wrapper p-0"
                style={{ height: "auto" }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>Preffered Contact Timings</b>
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Type Your Job Title"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-4">
                      <label for="exampleInputPassword1" className="form-label">
                        <b>Preffered Contact Dates</b>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Your Experience"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="ikhwnjrr_right">
                      <label
                        for="exampleInputEmail1"
                        className="form-label mb-3"
                      >
                        <b>Percentage Completion</b>
                      </label>

                      <div className="d-flex align-items-center">
                        <div className="hinrer_circle position-relative me-3">
                          <h2>SK</h2>
                        </div>

                        <div className="idhnerier_right">
                          <h4 className="mb-1">Sawan Kumar</h4>

                          <p className="mb-1">
                            <b>40% Complete</b>
                          </p>

                          <h6 className="mb-0">Signed up - 4 minutes ago</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>
                          Would You Be Interested in Delivering Guest Lectures?
                        </b>
                      </label>

                      <select className="form-select">
                        <option selected>Choose An Option</option>

                        <option>Yes</option>

                        <option>No</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>Would You Be Interested in Curating Case Studies?</b>
                      </label>

                      <select className="form-select">
                        <option selected>Choose An Option</option>

                        <option>Yes</option>

                        <option>No</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row align-items-end">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>
                          For Your Alums Would You Be Fine to Do Sessions Free
                          of Charge
                        </b>
                      </label>

                      <select className="form-select">
                        <option selected>Choose An Option</option>

                        <option>Yes</option>

                        <option>No</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>Your Timezone</b>
                      </label>

                      <select className="form-select">
                        <option selected>Choose An Option</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>Language</b>
                      </label>

                      <select className="form-select">
                        <option selected>Choose Language</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        <b>Which Country You Live in?</b>
                      </label>

                      <select className="form-select">
                        <option selected>Your Country Name</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Form 3 fields here --> */}

            <div className="bjuerirr_btn diuher d-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn iudhehrnbeer_btn btn-primary"
                onclick="prevTab()"
              >
                <i className="fa-solid me-2 fa-left-long"></i> Previous
              </button>

              <button
                type="button"
                className="btn juybeubrer_btn btn-primary"
                onclick="submitForm()"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default MentorStepForm;
