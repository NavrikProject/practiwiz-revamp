import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "../../../Forms/Register/Mentor/input-radio.css";

const MentorProfile2 = (props) => {
  const [userdata, setUserdata] = useState(props.profiledata);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    mentor_job_title: userdata.mentor_job_title,
    mentor_years_of_experience: userdata.mentor_years_of_experience,
    mentor_company_name: userdata.mentor_company_name,
    passion_list: userdata.passion_list,
    mentor_academic_qualification: userdata.mentor_academic_qualification,
    expertise_list: userdata.expertise_list,
    mentor_recommended_area_of_mentorship:
      userdata.mentor_recommended_area_of_mentorship,
    mentor_headline: userdata.mentor_headline,
  });
  console.log(userdata.expertise_list);

  const exp = formData.expertise_list;
  let expert = JSON.parse(exp);

  const edulevel = formData.mentor_academic_qualification;

  console.log(edulevel);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic here to handle form submission, like sending data to an API
    setIsEditing(false);
  };

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
              {/* <input
              type="text"
              value={userdata.mentor_job_title}
              className="form-control"
              // id="exampleInputEmail1"
              placeholder="Type Your Job Title"
              aria-describedby="emailHelp"
              {...register("mentor_job_title", {
                required: "Job title  is required",
              })}
            /> */}
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
                value={userdata.user_firstname}
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
                value={userdata.user_firstname}
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
            <div className="col-lg-12 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label mb-0">
                <b>Academic Qualification</b>
              </label>

              <div className="dkjiherer moideuirer_list hello">
                <ul className="ps-0 mb-0">
                  <li>
                    <input
                      type="radio"
                      className="d-none"
                      id="check_11"
                      name="check_11"
                      value="Post Graduate"
                      defaultChecked={edulevel === "Post Graduate"}
                    />

                    <label htmlFor="check_11">Post Graduate</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      className="d-none"
                      id="check_20"
                      name="check_20"
                      value="Graduate"
                      defaultChecked={edulevel === "Graduate"}
                    />

                    <label htmlFor="check_20">Graduate</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      className="d-none"
                      id="check_30"
                      name="check_30"
                      value="Doctorate"
                      defaultChecked={edulevel === "Doctorate"}
                    />

                    <label htmlFor="check_30">Doctorate</label>
                  </li>
                </ul>
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
