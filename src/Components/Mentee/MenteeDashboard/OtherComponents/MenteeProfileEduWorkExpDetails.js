import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import collegeData from "../../../data/collegesname.json";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import axios from "axios";
import { ApiURL } from "../../../../Utils/ApiURL";
import { useDispatch } from "react-redux";
const MenteeProfileEduWorkexpDetails = ({ singleMentee, user, token }) => {
  const handleEditClick = () => {
    setIfEdit(!ifEdit);
  };
  const [formData, setFormData] = useState({
    mentee_EduLevel: singleMentee[0]?.mentee_type,
    mentee_instituteName: JSON.parse(
      singleMentee[0]?.mentee_institute_details
    )[0]?.mentee_instituteName,
    mentee_courseName: JSON.parse(singleMentee[0]?.mentee_institute_details)[0]
      ?.mentee_courseName,
    mentee_institute_location: JSON.parse(
      singleMentee[0]?.mentee_institute_details
    )[0]?.mentee_institute_location,
    mentee_institute_Start_Year: JSON.parse(
      singleMentee[0]?.mentee_institute_details
    )[0]?.mentee_institute_Start_Year,
    mentee_institute_End_Year: JSON.parse(
      singleMentee[0]?.mentee_institute_details
    )[0]?.mentee_institute_End_Year,

    mentee_Skills: singleMentee[0]?.mentee_skills,

    certificates:
      JSON.parse(singleMentee[0]?.mentee_certificate_details) || null,
  });
  const initialCertificates = formData?.certificates;
  const [certificatesDATA, setcertificatesDATA] = useState(
    formData?.certificates
  );
  const [ifEdit, setIfEdit] = useState(false);
  const handleInputChange2 = (index, e) => {
    const { name, value } = e.target;
    const updatedCertificates = [...certificates];
    updatedCertificates[index][name] = value;
    setCertificates(updatedCertificates);
  };
  const [certificates, setCertificates] = useState([]);

  // Load initial data from props into state
  useEffect(() => {
    // Check if initialCertificates is null or not and set state accordingly
    if (initialCertificates === null || initialCertificates.length === 0) {
      setCertificates([
        {
          mentee_Certificate_Name: "",
          mentee_Certificate_level: "",
          mentee_Certificate_Desc: "",
          mentee_Certificate_Start_Year: "",
          mentee_Certificate_End_Year: "",
        },
      ]);
    } else {
      // Check if certificates are different from the current state to avoid infinite loop
      if (
        JSON.stringify(certificates) !== JSON.stringify(initialCertificates)
      ) {
        setCertificates(initialCertificates);
      }
    }
  }, [initialCertificates]); // Only run when initialCertificates changes

  const handleInputChangeForCertificate = (index, e) => {
    const { name, value } = e.target;
    const updatedCertificates = [...certificates];
    updatedCertificates[index][name] = value;
    setCertificates(updatedCertificates);
  };

  const validateFirstCertificate = () => {
    const firstCertificate = certificates[0];
    return (
      firstCertificate.mentee_Certificate_Name.trim() !== "" &&
      firstCertificate.mentee_Certificate_level.trim() !== "" &&
      firstCertificate.mentee_Certificate_Desc.trim() !== "" &&
      firstCertificate.mentee_Certificate_Start_Year.trim() !== "" &&
      firstCertificate.mentee_Certificate_End_Year.trim() !== ""
    );
  };

  const addCertificate = () => {
    if (!validateFirstCertificate()) {
      alert(
        "Please fill out all fields in the first certificate before adding another."
      );
      return;
    }
    setCertificates([
      ...certificates,
      {
        mentee_Certificate_Name: "",
        mentee_Certificate_level: "",
        mentee_Certificate_Desc: "",
        mentee_Certificate_Start_Year: "",
        mentee_Certificate_End_Year: "",
      },
    ]);
  };

  const deleteCertificate = (index) => {
    // Only allow deletion if more than one certificate is present
    if (certificates.length > 1) {
      const updatedCertificates = certificates.filter((_, i) => i !== index);
      setCertificates(updatedCertificates);
    } else {
      alert("At least one certificate must be present.");
    }
  };

  // const [ifEdit, setifEdit] = useState(false);
  const [searchTerm, setSearchTerm] = useState(formData.mentee_instituteName);
  const url = ApiURL();
  const dispatch = useDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null); // Store selected college
  const handleInputChange1 = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    setDropdownVisible(value !== ""); // Only show dropdown when input is not empty
  };

  // Filter colleges based on the search term
  const filteredColleges = collegeData.filter((item) =>
    item["College Name"]?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  // Function to handle dropdown option click
  const handleOptionClick = (college) => {
    setSelectedCollege(college); // Set selected college
    setSearchTerm(college["College Name"]); // Update input with selected college name
    setDropdownVisible(false); // Hide dropdown after selection

    formData.mentee_instituteName = college["College Name"];
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { mentee_language, mentee_aboutyouself } = formData;

    if (!mentee_language || !mentee_aboutyouself) {
      toast.error("All fields are required!");
      return false;
    }

    return true;
  };

  const handleSavechanges = async (event) => {
    event.preventDefault();
    try {
      dispatch(showLoadingHandler());
      const response = await Promise.race([
        axios.post(
          `${url}api/v1/mentee/dashboard/profile/edu-work-details`,
          {
            formData,
            certificates: JSON.stringify(certificates),
            menteeUserDtlsId: user?.user_id,
          },
          {
            headers: { authorization: "Bearer " + token },
          }
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 45000)
        ),
      ]);
      if (response.data.success) {
        dispatch(hideLoadingHandler());
        toast.success("Profile Details changed successfully");
      }
      if (response.data.error) {
        dispatch(hideLoadingHandler());
        toast.error(
          "There is some error while updating the profile details. Please try again"
        );
      }
    } catch (error) {
      toast.error(
        "There is some error while updating the profile details. Please try again"
      ); // Stop loading
      dispatch(hideLoadingHandler());
    } finally {
      dispatch(hideLoadingHandler());
      setIfEdit(false);
    }
  };

  return (
    <div className="col-lg-10 ps-0">
      <div className="">
        <div className="container">
          <div className="col-lg-10 col-md-12">
            <div className="mentee-prf-settings py-5">
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

              <div>
                <label htmlFor="" className="form-label">
                  <h3>Education</h3>
                </label>

                <div className="">
                  <label htmlFor="" className="form-label">
                    Educational Level
                  </label>

                  <select
                    name=" "
                    id=""
                    className="form-select"
                    disabled={!ifEdit}
                  >
                    <option value={formData.mentee_EduLevel}>
                      {formData.mentee_EduLevel}
                    </option>
                    {formData.mentee_EduLevel === "student" ? (
                      " "
                    ) : (
                      <option value="Student">Student</option>
                    )}
                    {formData.mentee_EduLevel === "workingprof" ? (
                      " "
                    ) : (
                      <option value="Working Professional">
                        Working Professional
                      </option>
                    )}
                    {formData.mentee_EduLevel === "corporate" ? (
                      " "
                    ) : (
                      <option value="Corporate">Corporate</option>
                    )}
                    {formData.mentee_EduLevel === "freasher" ? (
                      " "
                    ) : (
                      <option value="Fresher">Fresher</option>
                    )}
                  </select>
                </div>

                <div className="pb-3" id="skill-tag">
                  <label htmlFor="" className="form-label">
                    Education details
                  </label>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>Collage/Institute Name </h5>
                        <div className="dkjiherer moideuirer_list hello">
                          <div className="dropdown">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for a college..."
                              disabled={!ifEdit}
                              value={searchTerm} // Ensure input value is controlled
                              onChange={handleInputChange1}
                              onFocus={() =>
                                setDropdownVisible(searchTerm !== "")
                              } // Show dropdown when focused
                            />
                            {dropdownVisible && filteredColleges.length > 0 && (
                              <div className="dropdown-content">
                                {filteredColleges.slice(0, 10).map(
                                  (
                                    college,
                                    index // Limit to 10 results
                                  ) => (
                                    <div
                                      key={index}
                                      className="dropdown-item"
                                      onClick={() => handleOptionClick(college)}
                                    >
                                      {college["College Name"]}
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h5>Course Name </h5>
                        <input
                          type="text"
                          name="mentee_courseName"
                          className="form-control"
                          placeholder=" Enter you Course Name"
                          value={formData.mentee_courseName}
                          onChange={handleInputChange}
                          disabled={!ifEdit}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mt-2">
                        <h5>Location</h5>
                        <div className="EduBoxSub">
                          <input
                            type="type"
                            name="mentee_institute_location"
                            className="form-control"
                            value={formData.mentee_institute_location}
                            onChange={handleInputChange}
                            disabled={!ifEdit}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 mt-2">
                        <div className="row">
                          <div className="col-lg-6">
                            <h5>Start Date</h5>
                            <div className="EduBoxSub">
                              <input
                                type="month"
                                name="mentee_institute_Start_Year"
                                className="form-control"
                                value={formData.mentee_institute_Start_Year}
                                onChange={handleInputChange}
                                disabled={!ifEdit}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <h5>End Date</h5>
                            <div className="EduBoxSub">
                              <input
                                type="month"
                                name="mentee_institute_End_Year"
                                className="form-control"
                                value={formData.mentee_institute_End_Year}
                                onChange={handleInputChange}
                                disabled={!ifEdit}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className=" pb-3" id="skill-tag">
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
                </div> */}

                <div className=" pb-3" id="skill-tag">
                  <div>
                    {}
                    {certificates !== null &&
                      certificates !== "" &&
                      certificates?.map((certificate, index) => (
                        <div className="pb-3" id="skill-tag" key={index}>
                          <label htmlFor="" className="form-label">
                            <h2> Certificate {index + 1}</h2>
                          </label>
                          <div className="form-control">
                            <div className="row">
                              <div className="col-lg-6">
                                <h5> Certificate Name </h5>
                                <input
                                  className="form-control"
                                  name="mentee_Certificate_Name"
                                  disabled={!ifEdit}
                                  value={certificate.mentee_Certificate_Name}
                                  onChange={(e) =>
                                    handleInputChangeForCertificate(index, e)
                                  }
                                  placeholder="Enter Certificate Name ..."
                                />
                              </div>
                              <div className="col-lg-6">
                                <h5>Certificate level </h5>
                                <select
                                  name="mentee_Certificate_level"
                                  className="form-select"
                                  value={certificate.mentee_Certificate_level}
                                  disabled={!ifEdit}
                                  onChange={(e) =>
                                    handleInputChangeForCertificate(index, e)
                                  }
                                >
                                  <option value="">Select Level</option>
                                  <option value="Entry-Level">
                                    Entry-Level
                                  </option>
                                  <option value="Intermediate">
                                    Intermediate
                                  </option>
                                  <option value="Advanced">Advanced</option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{
                                display: "flex",
                                alignItems: "baseline",
                              }}
                            >
                              <div className="position-relative col-lg-6 pb-3 mt-1">
                                <label htmlFor="" className="form-label">
                                  Description
                                </label>
                                <textarea
                                  name="mentee_Certificate_Desc"
                                  className="form-control"
                                  style={{ height: "45px" }}
                                  placeholder="Write something about the certificate"
                                  value={certificate.mentee_Certificate_Desc}
                                  onChange={(e) =>
                                    handleInputChangeForCertificate(index, e)
                                  }
                                  disabled={!ifEdit}
                                ></textarea>
                              </div>
                              <div className="col-lg-6 mt-2">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <h5>Start Date</h5>
                                    <div className="EduBoxSub">
                                      <input
                                        type="month"
                                        disabled={!ifEdit}
                                        name="mentee_Certificate_Start_Year"
                                        className="form-control"
                                        value={
                                          certificate.mentee_Certificate_Start_Year
                                        }
                                        onChange={(e) =>
                                          handleInputChangeForCertificate(
                                            index,
                                            e
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <h5>End Date</h5>
                                    <div className="EduBoxSub">
                                      <input
                                        type="month"
                                        disabled={!ifEdit}
                                        name="mentee_Certificate_End_Year"
                                        className="form-control"
                                        value={
                                          certificate.mentee_Certificate_End_Year
                                        }
                                        onChange={(e) =>
                                          handleInputChangeForCertificate(
                                            index,
                                            e
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {ifEdit && (
                              <div>
                                <button
                                  className="btn btn-danger mt-2"
                                  onClick={() => deleteCertificate(index)}
                                >
                                  Delete Certificate
                                </button>
                              </div>
                            )}{" "}
                          </div>
                        </div>
                      ))}
                  </div>
                  {ifEdit && (
                    <>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={addCertificate}
                      >
                        Add Certificate
                      </button>
                    </>
                  )}
                </div>
                <div className="">
                  <div className="ufguirniirtr position-relative mb-4">
                    <label htmlFor="" className="form-label">
                      Skills
                    </label>

                    <input
                      type="text"
                      name="mentee_Skills"
                      className="form-control"
                      placeholder=" Skills ..."
                      value={formData.mentee_Skills}
                      onChange={handleInputChange}
                      disabled={!ifEdit}
                    />

                    {/* <div id="ypautosuggestions"></div> */}
                  </div>
                </div>
                <label htmlFor="" className="form-label">
                  <h3>Work Experience</h3>
                </label>
                <div className=" pb-3" id="skill-tag">
                  <label htmlFor="" className="form-label">
                    Work Experience Details
                  </label>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>Company Name </h5>
                        <input
                          name="mentee_workexp_CompanyName"
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                          value={formData.mentee_workexp_CompanyName}
                          onChange={handleInputChange}
                          disabled={!ifEdit}
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Role </h5>
                        <input
                          name="mentee_workexp_Role"
                          className="form-control"
                          placeholder="Eg., Business Analyst, Data Scientist..."
                          value={formData.mentee_workexp_Role}
                          onChange={handleInputChange}
                          disabled={!ifEdit}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="position-relative col-lg-6 pb-3 mt-1">
                        <label htmlFor="" className="form-label">
                          Description
                        </label>

                        <textarea
                          name="mentee_workexp_Desc"
                          className="form-control"
                          style={{ height: "80px" }}
                          placeholder="Write something about the Work Experience"
                          value={formData.mentee_workexp_Desc}
                          onChange={handleInputChange}
                          disabled={!ifEdit}
                        ></textarea>
                      </div>
                      <div className="col-lg-6 mt-2">
                        <h5>Location</h5>
                        <div className="EduBoxSub">
                          <input
                            type="type"
                            name="mentee_workexp_Location"
                            className="form-control"
                            value={formData.mentee_workexp_Location}
                            onChange={handleInputChange}
                            disabled={!ifEdit}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 mt-2">
                        <div className="row">
                          <div className="col-lg-6">
                            <h5>Start Date</h5>
                            <div className="EduBoxSub">
                              <input
                                type="month"
                                name="mentee_workexp_Start_Year"
                                className="form-control"
                                value={formData.mentee_workexp_Start_Year}
                                onChange={handleInputChange}
                                disabled={!ifEdit}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <h5>End Date</h5>
                            <div className="EduBoxSub">
                              <input
                                type="month"
                                name="mentee_workexp_End_Year"
                                className="form-control"
                                value={formData.mentee_workexp_End_Year}
                                onChange={handleInputChange}
                                disabled={!ifEdit}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="EduBoxSub">
                      <h5>Location</h5>
                      <input
                        type="type"
                        className="form-control"
                        name="mentee_workexp_Role"
                        value={formData.mentee_workexp_Role}
                        onChange={handleInputChange}
                        disabled={!ifEdit}
                      />
                      <h5>Start Date</h5>
                      <input
                        type="date"
                        className="form-control"
                        name="mentee_workexp_Start_Year"
                        value={formData.mentee_workexp_Start_Year}
                        onChange={handleInputChange}
                        disabled={!ifEdit}
                      />
                      <h5>End Date</h5>
                      <input
                        type="date"
                        className="form-control"
                        name="mentee_workexp_End_Year"
                        value={formData.mentee_workexp_End_Year}
                        onChange={handleInputChange}
                        disabled={!ifEdit}
                      />
                    </div> */}
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
                      onClick={handleSavechanges}
                      type="button"
                      className="btn juybeubrer_btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfileEduWorkexpDetails;
