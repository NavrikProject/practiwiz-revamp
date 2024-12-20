import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
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
import PassionSkill from "../../../data/PassionSkills.json";
import Select from "react-select";
import { options, experienceOptions } from "../../../data/DomainData.js";
const MentorProfile2 = ({ profiledata, user, token }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const url = ApiURL();
  const {
    setValue,
    control,
    trigger,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    mentor_job_title: profiledata?.mentor_job_title,
    mentor_years_of_experience: profiledata?.mentor_years_of_experience,
    mentor_company_name: profiledata?.mentor_company_name,
    mentor_recommended_area_of_mentorship:
      profiledata?.mentor_recommended_area_of_mentorship,
    mentor_headline: profiledata?.mentor_headline,
    mentor_passion_dtls: profiledata?.mentor_passion_dtls,
    mentor_domain: JSON.parse(profiledata?.mentor_domain),
  });

  const passionList = profiledata.mentor_passion_dtls;

  // Parse the passion_list JSON string into an array
  const parsedPassionList = JSON.parse(passionList);
  const convertBackendData = (backendData) => {
    return backendData?.map((item) => ({
      id: `draggable${item.id}`, // Create a unique id based on mentor_passion_id
      text: item.text.trim(), // Use mentor_passion and trim extra spaces
      inside: item.inside, // Set inside based on mentor_passion_boolean
    }));
  };
  const [items, setItems] = useState(convertBackendData(parsedPassionList));

  // Convert the parsed data to the required format
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
      items?.map((item) => (item.id === id ? { ...item, inside: true } : item))
    );
    updateFormData1();
  };

  const handleDropOutside = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    setItems(
      items?.map((item) => (item.id === id ? { ...item, inside: false } : item))
    );
    updateFormData1();
  };

  const handleDelete = (id) => {
    setItems(
      items?.map((item) => (item.id === id ? { ...item, inside: false } : item))
    );
    updateFormData1();
  };
  const updateFormData1 = () => {
    setValue("passionate_about", items);
  };

  const preSelectedData = JSON.parse(profiledata?.mentor_area_expertise);
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [error, setError] = useState(""); // State to store error messages
  // Initialize the form with preselected data
  useEffect(() => {
    if (profiledata.mentor_area_expertise !== null) {
      const expertise = preSelectedData?.map((preSelectedItem) => {
        const expertiseData = CoreSkill.find(
          (coreItem) => coreItem.id === preSelectedItem.id
        );
        return expertiseData || preSelectedItem;
      });

      setSelectedExpertise(expertise);

      const subOptions = expertise.flatMap((exp) => {
        return exp.sub_options.filter((subOption) =>
          preSelectedData
            .find((preSelectedItem) => preSelectedItem.id === exp.id)
            .subOptions.some((preSubOption) => preSubOption.id === subOption.id)
        );
      });

      setSelectedSubOptions(subOptions);

      const skills = subOptions.flatMap((subOption) => {
        const selectedExp = preSelectedData.find((preSelectedItem) =>
          preSelectedItem.subOptions.some(
            (preSubOption) => preSubOption.id === subOption.id
          )
        );

        return subOption.skills.filter((skill) =>
          selectedExp.subOptions
            .flatMap((preSubOption) => preSubOption.skills)
            .some((preSkill) => preSkill.id === skill.id)
        );
      });

      setSelectedSkills(skills);
    }
  }, []);

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
      expertise: selectedExpertise?.map((exp) => ({
        id: exp.id,
        name: exp.name,
        subOptions: exp.sub_options
          .filter((sub) => selectedSubOptions.includes(sub))
          ?.map((sub) => ({
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
  // Function to handle the "Save" button click
  const handleSave = () => {
    // Clear any previous errors
    setError("");
    // Validation: Check if at least one Core Skill is selected
    if (selectedExpertise.length === 0) {
      setError("Please select at least one Core Skill.");
      return;
    }

    // Validation: Check if for every selected Core Skill, at least one Sub-option is selected
    const coreSkillsWithoutSubOptions = selectedExpertise.filter((exp) => {
      const subOptionsForExp = exp.sub_options.filter((subOption) =>
        selectedSubOptions.includes(subOption)
      );
      return subOptionsForExp.length === 0; // Return true if no sub-options are selected for this core skill
    });

    if (coreSkillsWithoutSubOptions.length > 0) {
      setError(
        "Please select at least one Sub-option for each selected Core Skill."
      );
      return;
    }

    // Check if for each selected Sub-option, at least one Skill is selected
    const subOptionsWithoutSkills = selectedSubOptions.filter((subOption) => {
      const skillsForSubOption = subOption.skills.filter((skill) =>
        selectedSkills.includes(skill)
      );
      return skillsForSubOption.length === 0; // Return true if no skills are selected for this sub-option
    });

    if (subOptionsWithoutSkills.length > 0) {
      setError(
        "Please select at least one Skill for each selected Sub-option."
      );
      return;
    }

    // If validation passes, construct the selected data
    const selectedData = {
      expertise: selectedExpertise?.map((exp) => ({
        id: exp.id,
        name: exp.name,
        subOptions: exp.sub_options
          .filter((sub) => selectedSubOptions.includes(sub))
          ?.map((sub) => ({
            id: sub.id,
            name: sub.name,
            skills: sub.skills.filter((skill) =>
              selectedSkills.includes(skill)
            ),
          })),
      })),
    };

    // Log the selected data to the console
    return selectedData;
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    // Check if the input field is 'mentor_years_of_experience'
    if (name === "mentor_years_of_experience") {
      const selectedExperience = experienceOptions.find(
        (option) => option.value === value
      );

      if (selectedExperience) {
        // Update the formData state with the selected experience
        setFormData((prevData) => ({
          ...prevData,
          mentor_years_of_experience: selectedExperience.value, // or use selectedExperience.label if you prefer
        }));
      }
    } else {
      // For other inputs, just update the formData as usual
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // Update formData dynamically for any input field
      }));

      if (name === "mentor_domain") {
        const updatedDomains = [...formData.mentor_domain]; // Copy the array

        // Check if the index exists in the array
        if (updatedDomains[index]) {
          updatedDomains[index].label = value; // Update the specific domain
          setFormData((prevData) => ({
            ...prevData,
            mentor_domain: updatedDomains, // Update formData state
          }));
        } else {
          console.error(`No domain found at index ${index}`);
        }
      }
    }
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
    event.preventDefault();
    const data = handleSave();
    if (validateForm()) {
      try {
        dispatch(showLoadingHandler());
        const res = await Promise.race([
          axios.post(
            `${url}api/v1/mentor/dashboard/update/profile-2`,
            {
              formData,
              mentor_domain: JSON.stringify(formData.mentor_domain),
              expertiseList: JSON.stringify(data.expertise),
              mentorUserDtlsId: user.user_id,
              mentor_email: profiledata?.mentor_email,
              mentorPhoneNumber: profiledata?.mentor_phone_number,
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
              <select
                className="form-control form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_years_of_experience" // The name must match the form field
                value={formData.mentor_years_of_experience || ""} // Ensure the correct value is reflected
              >
                {/* Default option or placeholder */}
                <option value="" disabled>
                  {formData.mentor_years_of_experience
                    ? `Selected: ${formData.mentor_years_of_experience}`
                    : "Select your experience"}
                </option>

                {/* Mapping over your experienceOptions array */}
                {experienceOptions?.map((experience) => (
                  <option key={experience.value} value={experience.value}>
                    {experience.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-6 mb-4">
              <label htmlFor="mentor_domain" className="form-label">
                <b>
                  Domain <span className="RedColorStarMark">*</span>
                </b>
              </label>

              {isEditing ? (
                <Controller
                  name="mentor_domain"
                  control={control}
                  defaultValue={formData.mentor_domain} // Set the current selected domains as default
                  rules={{ required: "Please select your Domain" }} // Validation rule
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={options} // Your available options for the select menu
                      isMulti={true} // Allow multiple selections
                      value={field.value} // Sync value with form state
                      onChange={(selectedOptions) => {
                        field.onChange(selectedOptions); // Update form state with selected options
                        setFormData({
                          ...formData,
                          mentor_domain: selectedOptions,
                        }); // Update formData with selected options
                      }}
                    />
                  )}
                />
              ) : (
                // Display selected domains as plain text when not editing
                formData.mentor_domain && (
                  <div className="djesj">
                    {formData.mentor_domain.map((domain, index) => (
                      <p key={index} className="DomainOption">
                        {domain.label}
                      </p>
                    ))}
                  </div>
                )
              )}

              {/* Toggle button for editing mode */}

              {/* Error message */}
              {errors.mentor_domain && (
                <p style={{ color: "red", marginTop: "8px" }}>
                  {errors.mentor_domain.message}
                </p>
              )}
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

            {/* Expertise Selection */}
            <div className="col-lg-6 mb-4">
              <label htmlFor="core_skill" className="form-label">
                <b>Core Skill</b>
              </label>
              {selectedExpertise.length > 0 && (
                <div className="Optionshow">
                  {selectedExpertise?.map((expertise) => (
                    <span key={expertise.id} className="optionbox">
                      {expertise.name}
                      <button
                        onClick={() => handleDeleteExpertise(expertise)}
                        className="optionDispaly"
                        disabled={!isEditing}
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
                disabled={!isEditing}
              >
                <option value="" disabled>
                  Select an Area
                </option>
                {CoreSkill?.map((expertise) => (
                  <option key={expertise.id} value={expertise.id}>
                    {expertise.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sub-option Selection */}
            <div className="col-lg-6 mb-4">
              <label htmlFor="sub_options" className="form-label">
                <b>Sub-options:</b>
              </label>
              {selectedSubOptions.length > 0 && (
                <div className="Optionshow">
                  {selectedSubOptions?.map((subOption) => (
                    <span key={subOption.id} className="optionbox">
                      {subOption.name}
                      <button
                        onClick={() => handleDeleteSubOption(subOption)}
                        className="optionDispaly"
                        disabled={!isEditing}
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
                disabled={!isEditing}
              >
                <option value="" disabled>
                  {selectedExpertise.length === 0
                    ? "Select an Area of Expertise first"
                    : "Select a Sub-option"}
                </option>
                {selectedExpertise
                  .flatMap((exp) => exp.sub_options)
                  ?.map((subOption) => (
                    <option key={subOption.id} value={subOption.id}>
                      {subOption.name}
                    </option>
                  ))}
              </select>
            </div>
            {/* Display error message if any */}
            {error && <p className="text-danger">{error}</p>}
            {/* Skill Selection */}
            <div className="row">
              <label htmlFor="skills" className="form-label mb-0">
                <b>Areas of Expertise</b>
              </label>
              <div className="col-lg-12 mb-4 moideuirer_list areaofint">
                <ul className="ps-0 mb-0">
                  {selectedSubOptions
                    .flatMap((subOption) => subOption.skills)
                    ?.map((skill) => (
                      <li key={skill.id} className="ps-0">
                        <div className="form-check d-inline-block my-2">
                          <input
                            type="checkbox"
                            value={skill.id}
                            id={skill.id}
                            checked={selectedSkills.includes(skill)}
                            onChange={() => handleSkillChange(skill.id)}
                            disabled={!isEditing}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={skill.id}
                          >
                            {skill.name}
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Save Button */}

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
                    ?.map((item) => (
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
                    ?.map((item) => (
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
