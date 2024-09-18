import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "../../../Forms/Register/Mentor/input-radio.css";
import collegeData from "../../../data/collegesname.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { ApiURL } from "../../../../Utils/ApiURL";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import axios from "axios";
const MentorProfile2 = ({ profiledata, user, token }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const url = ApiURL();
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null); // Store selected college

  // Function to handle input change
  const handleInputChange1 = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setValue("mentor_InstituteName", value);
    setDropdownVisible(value !== ""); // Only show dropdown when input is not empty
  };

  // Filter colleges based on the search term
  const filteredColleges = collegeData.filter((item) =>
    item["College Name"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle dropdown option click
  const handleOptionClick = (college) => {
    setSelectedCollege(college); // Set selected college
    setSearchTerm(college["College Name"]); // Update input with selected college name
    setDropdownVisible(false); // Hide dropdown after selection
    setValue("mentor_InstituteName", college["College Name"]);
  };

  const [formData, setFormData] = useState({
    mentor_job_title: profiledata?.mentor_job_title,
    mentor_years_of_experience: profiledata?.mentor_years_of_experience,
    mentor_company_name: profiledata?.mentor_company_name,
    mentor_academic_qualification: profiledata?.mentor_academic_qualification,
    expertise_list: profiledata?.expertise_list,
    mentor_recommended_area_of_mentorship:
      profiledata?.mentor_recommended_area_of_mentorship,
    mentor_headline: profiledata?.mentor_headline,
  });
  const exp = formData.expertise_list;
  let expert = JSON.parse(exp);
  const edulevel = formData.mentor_academic_qualification;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update formData dynamically for any input field
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  // Validation function to ensure no fields are empty
  const validateForm = () => {
    const {
      mentor_job_title,
      mentor_years_of_experience,
      mentor_company_name,
      mentor_recommended_area_of_mentorship,
      mentor_headline,
      // mentor_InstituteName,
    } = formData;

    if (
      !mentor_job_title ||
      !mentor_years_of_experience ||
      !mentor_company_name ||
      !mentor_recommended_area_of_mentorship ||
      !mentor_headline
    ) {
      toast.error("All fields are required!");
      return false;
    }

    return true;
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        dispatch(showLoadingHandler());
        const res = await Promise.race([
          axios.post(
            `${url}api/v1/mentor/dashboard/update/profile-2`,
            {
              passionAboutList: JSON.stringify(items),
              formData,
              userDtlsId: user.user_id,
            },
            {
              headers: { authorization: "Bearer " + token },
            }
          ),
          new Promise(
            (_, reject) =>
              setTimeout(() => reject(new Error("Request timed out")), 45000) // 45 seconds timeout
          ),
        ]);

        if (res.data.success) {
          toast.success("Profile Details updated successfully");
          setIsEditing(false);
        } else if (res.data.error) {
          toast.error(res.data.error);
          setIsEditing(false);
        }
      } catch (error) {
        if (error.message === "Request timed out") {
          toast.error("Update failed due to a timeout. Please try again.");
        } else {
          toast.error(
            "Error in updating the profile details, please try again!"
          );
        }
      } finally {
        dispatch(hideLoadingHandler());
        setIsEditing(false);
      }
    }
  };

  // Function to convert parsed backend data to the required format
  const convertBackendData = (backendData) => {
    return backendData.map((item) => ({
      id: `draggable${item.mentor_passion_id}`, // Create a unique id based on mentor_passion_id
      text: item.mentor_passion.trim(), // Use mentor_passion and trim extra spaces
      inside: item.mentor_passion_boolean, // Set inside based on mentor_passion_boolean
    }));
  };

  // Assume this is the passion_list from the backend
  const passionList = profiledata?.passion_list;
  // Parse the passion_list JSON string into an array
  const parsedPassionList = JSON.parse(passionList);

  // Convert the parsed data to the required format
  const [items, setItems] = useState(convertBackendData(parsedPassionList));
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
    setTimeout(() => {
      e.target.classList.add("hide");
    }, 0);
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove("hide");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropInContainer = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    setItems(
      items.map((item) => (item.id === id ? { ...item, inside: true } : item))
    );
    updateFormData();
  };

  const handleDropOutside = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    setItems(
      items.map((item) => (item.id === id ? { ...item, inside: false } : item))
    );
    updateFormData();
  };

  const handleDelete = (id) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, inside: false } : item))
    );
    updateFormData();
  };
  const updateFormData = () => {
    setValue("passionate_about", items);
  };

  return (
    <main>
      {!isEditing && (
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button
            type="button"
            className="btn juybeubrer_btn btn-primary"
            style={{ textAlign: "right" }}
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      )}
      <div className="doiherner_wrapper">
        <div className="ihduwfr_form_wrapper p-0 " style={{ height: "auto" }}>
          <div className="row">
            {/* <div className="col-lg-6"> */}
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Job Title</b>
              </label>
              <input
                type="text"
                name="mentor_job_title"
                className="form-control"
                placeholder=" Job title"
                value={formData.mentor_job_title}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <b>Years of Experience</b>
              </label>
              <input
                type="text"
                name="mentor_years_of_experience"
                className="form-control"
                placeholder="Years of experience"
                value={formData.mentor_years_of_experience}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Company</b>
              </label>
              <input
                type="text"
                name="mentor_company_name"
                className="form-control"
                placeholder="Company name"
                value={formData.mentor_company_name}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Passionate About!</b> (Select max of 4 options)
              </label>
              <div
                type=""
                id="container"
                value={profiledata?.user_firstname}
                className="bg-white"
                onDragOver={handleDragOver}
                onDrop={handleDropInContainer}
                disabled={!isEditing}
                style={{
                  overflowY: "scroll",
                  overflowX: "hidden",
                  height: "200px",
                }}
              >
                {items
                  .filter((item) => item.inside)
                  .map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="draggable inside"
                      draggable
                      onDragStart={(e) => handleDragStart(e, item.id)}
                      onDragEnd={handleDragEnd}
                    >
                      {item.inside && isEditing && (
                        <span
                          className="close-btn"
                          onClick={() => handleDelete(item.id)}
                        >
                          &times;
                        </span>
                      )}
                      {item.text}
                    </div>
                  ))}
              </div>

              <p className="iduehnbriee_text mb-0">
                (*Drag and drop the most suitable option in the box*)
              </p>
            </div>

            <div
              className="col-lg-5 mb-4"
              style={{
                overflowY: "scroll",
                overflowX: "hidden",
                height: "200px",
              }}
            >
              <div
                id="outside-container"
                onDragOver={handleDragOver}
                onDrop={handleDropOutside}
                value={profiledata?.user_firstname}
              >
                {items
                  .filter((item) => !item.inside)
                  .map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="draggable"
                      draggable
                      onDragStart={(e) => handleDragStart(e, item.id)}
                      onDragEnd={handleDragEnd}
                    >
                      {item.text}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 mb-4 ">
              <label htmlFor="exampleInputEmail1" className="form-label mb-0">
                <b>Areas of Expertise</b>
              </label>

              <div className="moideuirer_list ">
                <ul className="ps-0 mb-0">
                  <li>
                    <input
                      type="checkbox"
                      id="check_1"
                      name="check_1"
                      value="Agile"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "Agile"
                      )}
                    />
                    <label htmlFor="check_1">Agile</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_2"
                      name="check_2"
                      value="AI"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "AI"
                      )}
                    />
                    <label htmlFor="check_2">AI</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_3"
                      name="check_3"
                      value="Cloud"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "Cloud"
                      )}
                    />
                    <label htmlFor="check_3">Cloud</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_4"
                      name="check_4"
                      value="Python"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "Python"
                      )}
                    />
                    <label htmlFor="check_4">Python</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_5"
                      name="check_5"
                      value="DBA"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "DBA"
                      )}
                    />
                    <label htmlFor="check_5">DBA</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_6"
                      name="check_6"
                      value="JAVA"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "JAVA"
                      )}
                    />
                    <label htmlFor="check_6">JAVA</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_7"
                      name="check_7"
                      value="Selenium"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "Selenium"
                      )}
                    />
                    <label htmlFor="check_7">Selenium</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_8"
                      name="check_8"
                      value="Conflict Resolution"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "Conflict Resolution"
                      )}
                    />
                    <label htmlFor="check_8">Conflict Resolution</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_9"
                      name="check_9"
                      value="Communication"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "Communication"
                      )}
                    />
                    <label htmlFor="check_9">Communication</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_10"
                      name="check_10"
                      value="Resume Writing"
                      disabled={!isEditing}
                      defaultChecked={expert.some(
                        (exp) => exp.mentor_expertise === "Resume Writing"
                      )}
                    />
                    <label htmlFor="check_10">Resume Writing</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label mb-0">
                <b>Academic Qualification</b>
              </label>

              <div className="dkjiherer moideuirer_list hello">
                <ul className="ps-0 mb-0">
                  <li>
                    <input
                      type="radio"
                      id="check_11"
                      name="academic_qualification"
                      className="d-none"
                      value="Post Graduate"
                      defaultChecked={edulevel === "Post Graduate"}
                      onChange={handleInputChange} // Add the onChange event
                      disabled={!isEditing}
                    />
                    <label htmlFor="check_11">Post Graduate</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="check_20"
                      name="academic_qualification"
                      className="d-none"
                      value="Graduate"
                      defaultChecked={edulevel === "Graduate"}
                      onChange={handleInputChange} // Add the onChange event
                      disabled={!isEditing}
                    />
                    <label htmlFor="check_20">Graduate</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="check_30"
                      name="academic_qualification"
                      className="d-none"
                      value="Doctorate"
                      defaultChecked={edulevel === "Doctorate"}
                      onChange={handleInputChange} // Add the onChange event
                      disabled={!isEditing}
                    />
                    <label htmlFor="check_30">Doctorate</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" col-lg-6 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Institute/College name</b>
              </label>
              <div className="dkjiherer moideuirer_list hello">
                <div className="dropdown">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a college..."
                    disabled={!isEditing}
                    value={
                      isEditing ? profiledata.mentor_institute : searchTerm
                    } // Ensure input value is controlled
                    {...register("mentor_InstituteName", {
                      required: "Institute Name is required",
                    })}
                    onChange={handleInputChange1}
                    onFocus={() => setDropdownVisible(searchTerm !== "")} // Show dropdown when focused
                  />
                  {dropdownVisible && filteredColleges.length > 0 && (
                    <div className="dropdown-content">
                      {filteredColleges.slice(0, 50).map(
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

              {errors.mentor_InstituteName && (
                <p className="Error-meg-login-register">
                  {errors.mentor_InstituteName.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-12 mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <b>Your Recommended Area of Mentorship</b>
            </label>

            <input
              type="text"
              className="form-control"
              name="mentor_recommended_area_of_mentorship"
              placeholder=" Mentorship Area "
              value={formData.mentor_recommended_area_of_mentorship}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>

          <div className="col-lg-12 mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <b>Headline</b>
            </label>

            <textarea
              name="mentor_headline"
              className="form-control"
              style={{ height: "150px" }}
              placeholder="Type A Headline Here"
              value={formData.mentor_headline}
              onChange={handleInputChange}
              disabled={!isEditing}
            ></textarea>
          </div>

          {isEditing && (
            <div className="d-flex justify-content-between m-4">
              <button
                type="button"
                onClick={handleEditClick}
                className="btn juybeubrer_btn btn-primary"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn juybeubrer_btn btn-primary"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MentorProfile2;
