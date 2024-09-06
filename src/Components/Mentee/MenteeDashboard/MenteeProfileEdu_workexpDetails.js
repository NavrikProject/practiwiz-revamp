import React from "react";
import { useState } from "react";
const MenteeProfileEdu_workexpDetails = () => {
  const [ifEdit, setifEdit] = useState(false);
  const handleEditClick = () => {
    setifEdit(!ifEdit);
  };

  return (
    <div className="col-lg-10 ps-0">
      <div className="">
        <div className="container">
          <div className="col-lg-10 col-md-12">
            <div className="mentor-prf-settings py-5">
              {!ifEdit && (
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button
                    type="button"
                    className="btn btn-primary "
                    style={{ textAlign: "right" }}
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                </div>
              )}

              <form>
                <h2>Education</h2>
                <div className="">
                  <label htmlFor="" className="form-label">
                    Educational Level
                  </label>

                  <select name="Gender" id="" className="form-select">
                    <option value="">Student</option>
                    <option value="">Working Professional</option>
                    <option value="">Corporate</option>
                    <option value="">Fresher</option>
                  </select>
                </div>

                <div className="pb-3" id="skill-tag">
                  <label htmlFor="" className="form-label">
                    Educatin details 1
                  </label>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>Collage/Institute Name </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Course Name </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                    </div>

                    <div className="EduBoxSub">
                      <h5>Location</h5>
                      <input type="type" className="form-control" />
                      <h5>Start Date</h5>
                      <input type="date" className="form-control" />
                      <h5>End Date</h5>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className=" pb-3" id="skill-tag">
                  <label htmlFor="" className="form-label">
                    Educatin details 2
                  </label>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>Collage/Institute Name </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Course Name </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                    </div>

                    <div className="EduBoxSub">
                      <h5>Location</h5>
                      <input type="type" className="form-control" />
                      <h5>Start Date</h5>
                      <input type="date" className="form-control" />
                      <h5>End Date</h5>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className=" pb-3" id="skill-tag">
                  <label htmlFor="" className="form-label">
                    Educatin details 3
                  </label>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>Collage/Institute Name </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Course Name </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                    </div>

                    <div className="EduBoxSub">
                      <h5>Location</h5>
                      <input type="type" className="form-control" />
                      <h5>Start Date</h5>
                      <input type="date" className="form-control" />
                      <h5>End Date</h5>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className=" pb-3" id="skill-tag">
                  <label htmlFor="" className="form-label">
                   Certificate
                  </label>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5> Certificate Name </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Certificate level </h5>
                        <select name="Gender" id="" className="form-select">
                    <option value="">Entry-Level</option>
                    <option value="">Intermediate</option>
                    <option value="">Advanced</option>
                    
                  </select>
                      </div>
                    </div>

                    <div className="EduBoxSub">
                      <h5>Location</h5>
                      <input type="type" className="form-control" />
                      <h5>Start Date</h5>
                      <input type="date" className="form-control" />
                      <h5>End Date</h5>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>
                  <div className="">
                    <div className="ufguirniirtr position-relative mb-4">
                      <label htmlFor="" className="form-label">
                        Skills
                      </label>

                      <input
                        type="text"
                        id="ypmyInput"
                        name="myCountry"
                        className="form-control"
                        placeholder="Type what you do"
                      />

                      <div id="ypautosuggestions"></div>
                    </div>
                  </div>
               

               

                <h2>Work Experience</h2>
                <div className=" pb-3" id="skill-tag">
                  <label htmlFor="" className="form-label">
                    Work Experience Detailes
                  </label>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>Company Name </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Role </h5>
                        <input
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                        />
                      </div>
                    </div>

                    <div className="EduBoxSub">
                      <h5>Location</h5>
                      <input type="type" className="form-control" />
                      <h5>Start Date</h5>
                      <input type="date" className="form-control" />
                      <h5>End Date</h5>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>
                {ifEdit && (
                  <div className="d-flex justify-content-between m-4">
                    <button
                      type="button"
                      onClick={handleEditClick}
                      className="btn juybeubrer_btn btn-primary"
                    >
                      Close
                    </button>
                    <button
                      // onClick={handleSubmit}
                      type="submit"
                      className="btn juybeubrer_btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfileEdu_workexpDetails;
