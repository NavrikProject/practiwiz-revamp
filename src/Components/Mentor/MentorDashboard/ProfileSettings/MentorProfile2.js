import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "../../../Forms/Register/Mentor/input-radio.css";
import CoreSkill from "../../../data/CoreSkill.json";
import { toast } from "react-toastify";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ApiURL } from "../../../../Utils/ApiURL";
const MentorProfile2 = ({ profiledata, user, token }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const url = ApiURL();
  const {
    setValue,
    formState: { errors },
  } = useForm();
  console.log(profiledata);
  const [formData, setFormData] = useState({
    mentor_job_title: profiledata?.mentor_job_title,
    mentor_years_of_experience: profiledata?.mentor_years_of_experience,
    mentor_company_name: profiledata?.mentor_company_name,
    mentor_recommended_area_of_mentorship:
      profiledata?.mentor_recommended_area_of_mentorship,
    mentor_headline: profiledata?.mentor_headline,
    mentor_institute: profiledata?.mentor_institute,
    mentor_area_expertise: profiledata?.mentor_area_expertise,
    mentor_passion_dtls: profiledata?.mentor_passion_dtls,
    mentor_domain: profiledata?.mentor_domain,
  });

  const passionList = profiledata.mentor_passion_dtls;

  // Parse the passion_list JSON string into an array
  const parsedPassionList = JSON.parse(passionList);
  const convertBackendData = (backendData) => {
    return backendData.map((item) => ({
      id: `draggable${item.id}`, // Create a unique id based on mentor_passion_id
      text: item.text.trim(), // Use mentor_passion and trim extra spaces
      inside: item.inside, // Set inside based on mentor_passion_boolean
    }));
  };
  const [items, setItems] = useState(convertBackendData(parsedPassionList));

  // Convert the parsed data to the required format

  console.log(formData.passion_list);

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
    updateFormData1();
  };

  const handleDropOutside = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    setItems(
      items.map((item) => (item.id === id ? { ...item, inside: false } : item))
    );
    updateFormData1();
  };

  const handleDelete = (id) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, inside: false } : item))
    );
    updateFormData1();
  };
  const updateFormData1 = () => {
    setValue("passionate_about", items);
  };

  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleExpertiseChange = (e) => {
    const expertiseId = parseInt(e.target.value);
    const expertise = CoreSkill.find((item) => item.id === expertiseId);

    if (expertise) {
      setSelectedExpertise((prev) =>
        prev.includes(expertise)
          ? prev.filter((item) => item.id !== expertiseId)
          : [...prev, expertise]
      );
      updateFormData();
    }
  };

  const handleSubOptionChange = (subOptionId) => {
    const subOption = selectedExpertise
      .flatMap((exp) => exp.sub_options)
      .find((option) => option.id === subOptionId);

    if (subOption) {
      setSelectedSubOptions((prev) =>
        prev.includes(subOption)
          ? prev.filter((item) => item.id !== subOptionId)
          : [...prev, subOption]
      );
      updateFormData();
    }
  };

  const handleSkillChange = (skillId) => {
    const skill = selectedSubOptions
      .flatMap((subOption) => subOption.skills)
      .find((s) => s.id === skillId);

    if (skill) {
      setSelectedSkills((prev) =>
        prev.includes(skill)
          ? prev.filter((item) => item.id !== skillId)
          : [...prev, skill]
      );
      updateFormData();
    }
  };

  const updateFormData = () => {
    const selectedData = {
      expertise: selectedExpertise.map((exp) => ({
        id: exp.id,
        name: exp.name,
        subOptions: exp.sub_options
          .filter((sub) => selectedSubOptions.includes(sub))
          .map((sub) => ({
            id: sub.id,
            name: sub.name,
            skills: sub.skills.filter((skill) =>
              selectedSkills.includes(skill)
            ),
          })),
      })),
    };

    setValue("Core_Skills", selectedData);
  };

  const handleDeleteExpertise = (expertiseToDelete) => {
    setSelectedExpertise(
      selectedExpertise.filter(
        (expertise) => expertise.id !== expertiseToDelete.id
      )
    );
    setSelectedSubOptions([]); // Clear sub-options when expertise is removed
    setSelectedSkills([]); // Clear skills when expertise is removed
    updateFormData();
  };

  const handleDeleteSubOption = (subOptionToDelete) => {
    setSelectedSubOptions(
      selectedSubOptions.filter(
        (subOption) => subOption.id !== subOptionToDelete.id
      )
    );
    setSelectedSkills(
      selectedSkills.filter(
        (skill) => skill.subOptionId !== subOptionToDelete.id
      )
    ); // Clear skills associated with the removed sub-option
    updateFormData();
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill.id !== skillToDelete.id)
    );
    updateFormData();
  };

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
    // console.log("Datahgdjwgdhvdhwvdahvd",items)
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

  // Assume this is the passion_list from the backend

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
            <div className="col-lg-6 mb-4">
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
            <div className="col-lg-6 mb-4">
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
            <div className="col-lg-6 mb-4">
              <label htmlFor="mentor_domain" className="form-label">
                <b>Domain</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="mentor_domain"
                placeholder="eg: Banking, Manufacturing, IT, Telecom ..."
                value={formData.mentor_domain}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="col-lg-6 mb-4">
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
            {!isEditing ? (
              <div className="options-container dashboardFlex">
                {JSON.parse(profiledata.mentor_area_expertise).map((option) => (
                  <div
                    key={option.id}
                    className="main-option box dashboardFlexWidth marginRight"
                  >
                    <h2 className="optionH2">{option.name}</h2>
                    {option.subOptions.length > 0 &&
                      option.subOptions.map((subOption) => (
                        <div key={subOption.id} className="sub-option">
                          <h3>{subOption.name}</h3>
                          {subOption.skills.length > 0 && (
                            <div className="fhfbfghg">
                              {subOption.skills.map((skill) => (
                                <button key={skill.id}>{skill.name}</button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="col-lg-6 mb-4">
                  <label htmlFor="core_skill" className="form-label">
                    <b>Core Skill</b>
                  </label>
                  {selectedExpertise.length > 0 && (
                    <div className="Optionshow">
                      {selectedExpertise.map((expertise) => (
                        <span key={expertise.id} className="optionbox">
                          {expertise.name}
                          <button
                            onClick={() => handleDeleteExpertise(expertise)}
                            className="optionDispaly"
                          >
                            <span className="OptionCross">&#10006;</span>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <select
                    onChange={handleExpertiseChange}
                    defaultValue=""
                    className="form-select"
                  >
                    <option value="" disabled>
                      Select an Area
                    </option>
                    {CoreSkill.map((expertise) => (
                      <option key={expertise.id} value={expertise.id}>
                        {expertise.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-6 mb-4">
                  <label htmlFor="sub_options" className="form-label">
                    <b>Sub-options:</b>
                  </label>
                  {selectedSubOptions.length > 0 && (
                    <div className="Optionshow">
                      {selectedSubOptions.map((subOption) => (
                        <span key={subOption.id} className="optionbox">
                          {subOption.name}
                          <button
                            onClick={() => handleDeleteSubOption(subOption)}
                            className="optionDispaly"
                          >
                            <span className="OptionCross">&#10006;</span>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <select
                    onChange={(e) =>
                      handleSubOptionChange(parseInt(e.target.value))
                    }
                    defaultValue=""
                    className="form-select"
                    disabled={selectedExpertise.length === 0}
                    title="Please select the core skills"
                  >
                    <option value="" disabled>
                      {selectedExpertise.length === 0
                        ? "Select an Area of Expertise first"
                        : "Select a Sub-option"}
                    </option>
                    {selectedExpertise
                      .flatMap((exp) => exp.sub_options)
                      .map((subOption) => (
                        <option key={subOption.id} value={subOption.id}>
                          {subOption.name}
                        </option>
                      ))}
                  </select>
                </div>
                {/* {selectedSubOptions.length > 0 && ( */}
                <div className="row">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mb-0"
                  >
                    <b>Areas of Expertise</b>
                  </label>
                  <div className="col-lg-12 mb-4 moideuirer_list areaofint">
                    <ul className="ps-0 mb-0">
                      {selectedSubOptions
                        .flatMap((subOption) => subOption.skills)
                        .map((skill) => (
                          <li key={skill.id}>
                            <input
                              type="checkbox"
                              id={`skill-${skill.id}`}
                              checked={selectedSkills.includes(skill)}
                              onChange={() => handleSkillChange(skill.id)}
                            />
                            <label htmlFor={`skill-${skill.id}`}>
                              {skill.name}
                            </label>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className="row align-items-center">
              <div className="col-lg-7 mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Passionate About!</b> (Select max of 4 options)
                </label>
                <div
                  type=""
                  id="container"
                  // value={profiledata.user_firstname}
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
                  (Drag and drop the most suitable option in the box)
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
                  // value={profiledata.user_firstname}
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
