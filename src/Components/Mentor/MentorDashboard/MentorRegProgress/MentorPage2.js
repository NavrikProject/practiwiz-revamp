import React, { useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import GoToTop from "../../../../Utils/GoToTop";
import CoreSkill from "../../../data/CoreSkill.json";
import PassionSkill from "../../../data/PassionSkills.json";
import { toast } from "react-toastify";
import Select from "react-select";
import { options, experienceOptions } from "../../../data/DomainData.js";

const MentorPage2 = () => {
  const {
    register,
    control,
    setValue,
    getValues,
    watch,
    trigger,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const formValues = getValues();

  console.log(formValues);

  const loadStoredData = () => {
    const storedData = localStorage.getItem("formData1");
    if (storedData) {
      try {
        return JSON.parse(storedData);
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
    return {};
  };

  const saveDataToStorage = (formValues) => {
    localStorage.setItem("formData1", JSON.stringify(formValues));
    localStorage.setItem("formData1", JSON.stringify(watch()));
  };

  const [update, setupdate] = useState({});
  useEffect(() => {
    const storedData = loadStoredData();
    if (storedData) {
      Object.keys(storedData).forEach((key) => {
        setValue(key, storedData[key]);
      });
      setupdate([]);
    }
  }, [setValue]);

  useEffect(() => {
    saveDataToStorage(formValues);
  }, [formValues, register]);

  const [statefordata, setstatefordata] = useState();

  const [items, setItems] = useState(PassionSkill);
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
  const [error, setError] = useState(""); // State to store error messages

  // Load saved data from local storage and initialize the form
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("mentorData"));
    if (savedData?.expertise) {
      const expertise = savedData.expertise.map((preSelectedItem) => {
        const expertiseData = CoreSkill.find(
          (coreItem) => coreItem.id === preSelectedItem.id
        );
        return expertiseData || preSelectedItem;
      });
      setSelectedExpertise(expertise);

      const subOptions = expertise.flatMap((exp) =>
        exp.sub_options?.filter((subOption) =>
          savedData.expertise
            .find((preSelectedItem) => preSelectedItem.id === exp.id)
            ?.subOptions.some(
              (preSubOption) => preSubOption.id === subOption.id
            )
        )
      );
      setSelectedSubOptions(subOptions);

      const skills = subOptions.flatMap((subOption) =>
        subOption.skills.filter((skill) =>
          savedData.expertise
            .find((preSelectedItem) =>
              preSelectedItem.subOptions.some(
                (preSubOption) => preSubOption.id === subOption.id
              )
            )
            ?.subOptions.flatMap((preSubOption) => preSubOption.skills)
            .some((preSkill) => preSkill.id === skill.id)
        )
      );
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
    setSelectedSubOptions(
      selectedExpertise.filter(
        (subOption) => subOption.id !== expertiseToDelete.id
      )
    );
    setSelectedSkills(
      selectedExpertise.filter((skill) => skill.id !== expertiseToDelete.id)
    );
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
    );
    updateFormData();
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill.id !== skillToDelete.id)
    );
    updateFormData();
  };

  const handleSave = () => {
    setError("");
    if (selectedExpertise.length === 0) {
      setError("Please select at least one Core Skill.");
      return;
    }

    const coreSkillsWithoutSubOptions = selectedExpertise.filter((exp) =>
      exp.sub_options.every(
        (subOption) => !selectedSubOptions.includes(subOption)
      )
    );
    if (coreSkillsWithoutSubOptions.length > 0) {
      setError(
        "Please select at least one Sub-option for each selected Core Skill."
      );
      return;
    }

    const subOptionsWithoutSkills = selectedSubOptions.filter((subOption) =>
      subOption.skills.every((skill) => !selectedSkills.includes(skill))
    );
    if (subOptionsWithoutSkills.length > 0) {
      setError(
        "Please select at least one Skill for each selected Sub-option."
      );
      return;
    }

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
    toast.success("😊 Success! Your Field Saved.", {
      position: "top-right", // Directly specifying the position
    });
    localStorage.setItem("mentorData", JSON.stringify(selectedData));
    console.log("Saved Data:", selectedData);
    setValue("Core_Skills", selectedData);
    setValue("ForSkillValidation", "ok");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSave();
  };

  return (
    <>
      <div className="doiherner_wrapper">
        <div className="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <label htmlFor="mentor_job_title" className="form-label">
                <b>
                  Your Job Title <span className="RedColorStarMark">*</span>
                </b>
              </label>
              <input
                onKeyUp={() => {
                  trigger("mentor_job_title");
                }}
                type="text"
                className="form-control"
                placeholder="Type Your Job Title....."
                {...register("mentor_job_title", {
                  required: "Job title is required",
                  validate: (value) => {
                    // Check if the trimmed value is not empty (i.e., the input is not only spaces)
                    if (!value.trim()) {
                      return "Job title cannot be only spaces.";
                    }
                    return true;
                  },
                })}
              />
              {errors.mentor_job_title && (
                <p className="Error-meg-login-register">
                  {errors.mentor_job_title.message}
                </p>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <label htmlFor="years_of_experience" className="form-label">
                <b>
                  Years of Experience{" "}
                  <span className="RedColorStarMark">*</span>
                </b>
              </label>
              <select
                className="form-control form-select"
                {...register("years_of_experience", {
                  required: "Please select the Years Of experience",
                })}
                onChange={(e) => {
                  if (e.target.value) {
                    clearErrors("years_of_experience"); // Clear error when a valid option is selected
                  }
                }}
                onKeyUp={() => {
                  trigger("years_of_experience"); // Optional: still trigger validation on keyup
                }}
              >
                <option value="">Please Select Years Of experience</option>
                {experienceOptions?.map((experience) => (
                  <option key={experience.value} value={experience.value}>
                    {experience.label}
                  </option>
                ))}
              </select>

              {errors.years_of_experience && (
                <p className="Error-meg-login-register">
                  {errors.years_of_experience.message}
                </p>
              )}
            </div>
            <div className="col-lg-6 mb-4">
              <label htmlFor="mentor_domain" className="form-label">
                <b>
                  Domain <span className="RedColorStarMark">*</span>
                </b>
              </label>
              <Controller
                name="Mentor_Domain"
                control={control}
                defaultValue={[]} // Default value for multiple select
                rules={{ required: "Please select you Domain" }} // Validation rule
                render={({ field }) => (
                  <Select
                    {...field}
                    // styles={customStyles} // Apply your custom styles here
                    options={options}
                    isMulti={true} // Allow multiple selections
                    value={field.value} // Sync value with react-hook-form state
                    onChange={(selectedOptions) => {
                      field.onChange(selectedOptions); // Update form state
                      trigger("Mentor_Domain"); // Trigger validation when option is selected
                    }}
                  />
                )}
              />
              {/* Error message */}
              {errors.Mentor_Domain && (
                <p
                  style={{ color: "red", marginTop: "8px" }}
                  // className="Error-meg-login-register"
                >
                  {errors.Mentor_Domain.message}
                </p>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <label htmlFor="mentor_company_name" className="form-label">
                <b>
                  Company <span className="RedColorStarMark">*</span>
                </b>
              </label>
              <input
                onKeyUp={() => {
                  trigger("mentor_company_name");
                }}
                type="text"
                className="form-control"
                placeholder="Type Your Company/Freelancer Name"
                {...register("mentor_company_name", {
                  required: "Company name is required",
                  validate: (value) => {
                    // Check if the trimmed value is not empty (i.e., the input is not only spaces)
                    if (!value.trim()) {
                      return "Company name cannot be only spaces.";
                    }
                    return true;
                  },
                })}
              />
              {errors.mentor_company_name && (
                <p className="Error-meg-login-register">
                  {errors.mentor_company_name.message}
                </p>
              )}
            </div>

            {/* Expertise Selection */}
            <div className="col-lg-6 mb-4">
              <label htmlFor="core_skill" className="form-label">
                <b>
                  Core Skill <span className="RedColorStarMark">*</span>
                </b>
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

            {/* Sub-option Selection */}
            <div className="col-lg-6 mb-4">
              <label htmlFor="sub_options" className="form-label">
                <b>
                  Sub-Skills: <span className="RedColorStarMark">*</span>
                </b>
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

            {/* Error Message */}
            {error && <p className="text-danger">{error}</p>}

            {/* Skill Selection */}

            <div className="row">
              <label htmlFor="skills" className="form-label mb-0">
                <b>
                  Areas of Expertise <span className="RedColorStarMark">*</span>
                </b>
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
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <button
                onClick={handleSubmit}
                className="btn btn-primary djssjbfe"
              >
                Save
              </button>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Passionate About!</b>
                  {/* (Select min of 4 options) */}
                </label>
                <div
                  type=""
                  id="container"
                  className="bg-white"
                  onDragOver={handleDragOver}
                  onDrop={handleDropInContainer}
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
                        // className="draggable"
                        draggable
                        onDragStart={(e) => handleDragStart(e, item.id)}
                        onDragEnd={handleDragEnd}
                      >
                        {item.inside && (
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

                <p className=" mb-0 ghhduenee">
                  (*Drag and drop the most suitable option in the box*)
                </p>
              </div>

              <div
                className="col-lg-6 mb-4"
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

            <div className="col-lg-12 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  Your Super Power <span className="RedColorStarMark">*</span>
                </b>
              </label>
              <textarea
                onKeyUp={() => {
                  trigger("mentor_Headline");
                }}
                className="form-control"
                placeholder="My superpower is problem-solving. I excel at breaking down complex challenges into manageable steps and finding innovative solutions, whether it's troubleshooting technical issues or resolving conflicts in a team."
                style={{ height: "100px" }}
                {...register("mentor_Headline", {
                  required: "This field is required",
                  minLength: {
                    value: 100,
                    message: "Must be greater than 100 characters.",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Must be less than 1000 characters.",
                  },
                  validate: (value) => {
                    const trimmedValue = value.trim();
                    // Check if the input contains at least 3 alphanumeric characters
                    const hasEnoughAlphanumeric =
                      (trimmedValue.match(/[a-zA-Z0-9]/g) || []).length >= 3;
                    // Check if more than 3 consecutive spaces exist
                    const hasTooManySpaces = /\s{4,}/.test(value);

                    if (!hasEnoughAlphanumeric) {
                      return "Must contain at least 3 alphanumeric characters.";
                    }
                    if (hasTooManySpaces) {
                      return "Must not contain more than 3 consecutive spaces.";
                    }

                    return true;
                  },
                })}
              ></textarea>

              <p className=" mb-0 ghhduenee">
                (*Give a good headline, This helps us understand the mentor
                overview*)
              </p>
              {errors.mentor_Headline && (
                <p className="Error-meg-login-register">
                  {errors.mentor_Headline.message}
                </p>
              )}
            </div>

            <div className="col-lg-12 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Your Recommended Area of Mentorship </b>
              </label>{" "}
              <input
                onKeyUp={() => {
                  trigger("recommended_area_of_mentorship");
                }}
                type="text"
                className="form-control"
                // id="exampleInputEmail1"
                placeholder="Eg:I will give the mentorship about the react development, communication skills, and resume building"
                aria-describedby="emailHelp"
                {...register("recommended_area_of_mentorship", {
                  minLength: {
                    value: 50,
                    message: "Must be greater than 50 characters.",
                  },
                  maxLength: {
                    value: 200,
                    message: "Must be less than 200 characters.",
                  },
                })}
              />
              {errors.recommended_area_of_mentorship && (
                <p className="Error-meg-login-register">
                  {errors.recommended_area_of_mentorship.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <GoToTop />
      </div>
    </>
  );
};

export default MentorPage2;
