import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import GoToTop from "../../../../Utils/GoToTop";
import CoreSkill from "../../../data/CoreSkill.json";

const MentorForm2 = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const [items, setItems] = useState([
    { id: "draggable1", text: " Technology", inside: false },
    { id: "draggable2", text: " Management ", inside: false },
    { id: "draggable3", text: "Leadership", inside: false },
    { id: "draggable4", text: "Career Guidance", inside: false },
    { id: "draggable5", text: "Public Speaking", inside: false },
  ]);

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

  return (
    <>
      <div className="doiherner_wrapper">
        <div className="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <label htmlFor="mentor_job_title" className="form-label">
                <b>Job Title</b>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Your Job Title"
                {...register("mentor_job_title", {
                  required: "Job title is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Job Title should contain only letters",
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
                <b>Years of Experience</b>
              </label>
              <input
                type="number"
                className="form-control"
                min="0"
                placeholder="Your Experience"
                {...register("years_of_experience", {
                  required: "Years of Experience is required",
                  minLength: { value: 0 },
                })}
              />
              {errors.years_of_experience && (
                <p className="Error-meg-login-register">
                  {errors.years_of_experience.message}
                </p>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <label htmlFor="mentor_domain" className="form-label">
                <b>Domain</b>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="eg: Banking, Manufacturing, IT, Telecom ..."
                {...register("Mentor_Domain", {
                  required: "Your Domain is required",
                  minLength: { value: 2 },
                })}
              />
              {errors.Mentor_Domain && (
                <p className="Error-meg-login-register">
                  {errors.Mentor_Domain.message}
                </p>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <label htmlFor="mentor_company_name" className="form-label">
                <b>Company</b>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Your Company Name"
                {...register("mentor_company_name", {
                  required: "Company name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Company Name should contain only letters",
                  },
                })}
              />
              {errors.mentor_company_name && (
                <p className="Error-meg-login-register">
                  {errors.mentor_company_name.message}
                </p>
              )}
            </div>

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
                <label htmlFor="exampleInputEmail1" className="form-label mb-0">
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
            {/* )} */}
            <div className="row align-items-center">
              <div className="col-lg-7 mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Passionate About!</b> (Select max of 4 options)
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
                <b>Your Recommended Area of Mentorship</b>
              </label>{" "}
              <input
                type="text"
                className="form-control"
                // id="exampleInputEmail1"
                placeholder="Type A Headline Here"
                aria-describedby="emailHelp"
                {...register("recommended_area_of_mentorship", {
                  // required: "First Name is required",
                })}
              />
            </div>
            <div className="col-lg-12 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Your Super Power</b>
              </label>
              <textarea
                className="form-control"
                style={{ height: "150px" }}
                {...register("mentor_Headline", {
                  // required: "First Name is required",
                })} //1
              ></textarea>
              <p className="iduehnbriee_text mb-0">
                (*Give a good headline, This help us to understand the mentor
                overview*)
              </p>
            </div>
          </div>
        </div>
        <GoToTop />
      </div>
    </>
  );
};

export default MentorForm2;
