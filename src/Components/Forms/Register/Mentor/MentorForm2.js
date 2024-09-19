import React from "react";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import "./input-radio.css";
import GoToTop from "../../../../Utils/GoToTop";
import collegeData from "../../../data/collegesname.json";

const MentorForm2 = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null); // Store selected college

  // Function to handle input change
  const handleInputChange = (e) => {
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
    <>
      <div className="doiherner_wrapper">
        <div className="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
          <div className="row">
            {/* <div className="col-lg-6"> */}
            <div className="col-lg-6 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Job Title</b>
              </label>
              <input
                type="email"
                className="form-control"
                // id="exampleInputEmail1"
                placeholder="Type Your Job Title"
                aria-describedby="emailHelp"
                {...register("mentor_job_title", {
                  required: "Job title  is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/, // Allows letters and spaces
                    message: "Job Title should contain only letters",
                  },
                })} //1
              />
              {errors.mentor_job_title && (
                <p className="Error-meg-login-register">
                  {errors.mentor_job_title.message}
                </p>
              )}
            </div>
            <div className="col-lg-6 mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <b>Years of Experience</b>
              </label>
              <input
                type="number"
                className="form-control"
                min="0"
                // id="exampleInputPassword1"
                placeholder="Your Experience"
                {...register("years_of_experience", {
                  required: "Years of Experience is required",
                  minLength: { value: 0 },
                })} //1
              />
              {errors.years_of_experience && (
                <p className="Error-meg-login-register">
                  {errors.years_of_experience.message}
                </p>
              )}
            </div>

            <div className=" col-lg-6 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Company</b>
              </label>
              <input
                type="text"
                className="form-control"
                // id="exampleInputEmail1"
                placeholder="Type Your Company Name"
                aria-describedby="emailHelp"
                {...register("mentor_company_name", {
                  required: "Company name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/, // Allows letters and spaces
                    message: "Company Name should contain only letters",
                  },
                })} //1
              />
              {errors.mentor_company_name && (
                <p className="Error-meg-login-register">
                  {errors.mentor_company_name.message}
                </p>
              )}
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
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_1">Agile</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_2"
                      name="check_2"
                      value="AI"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_2">AI</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_3"
                      name="check_3"
                      value="Cloud"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_3">Cloud</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_4"
                      name="check_4"
                      value="Python"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_4">Python</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_5"
                      name="check_5"
                      value="DBA"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_5">DBA</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_6"
                      name="check_6"
                      value="JAVA"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_6">JAVA</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_7"
                      name="check_7"
                      value="Selenium"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_7">Selenium</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_8"
                      name="check_8"
                      value="Conflict Resolution"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_8">Conflict Resolution</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_9"
                      name="check_9"
                      value="Communication"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
                    />
                    <label htmlFor="check_9">Communication</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="check_10"
                      name="check_10"
                      value="Resume Writing"
                      {...register("areas_of_expertise", {
                        // required: "First Name is required",
                      })} //1
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
                      name="check_11"
                      value="Post Graduate"
                      className="d-none"
                      {...register("academic_qualification", {
                        // required: "First Name is required",
                      })} //1
                    />

                    <label htmlFor="check_11">Post Graduate</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="check_20"
                      name="check_20"
                      className="d-none"
                      value="Graduate"
                      {...register("academic_qualification", {
                        // required: "First Name is required",
                      })} //1
                    />

                    <label htmlFor="check_20">Graduate</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="check_30"
                      name="check_30"
                      className="d-none"
                      value="Doctorate"
                      {...register("academic_qualification", {
                        // required: "First Name is required",
                      })} //1
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
                    value={searchTerm} // Ensure input value is controlled
                    {...register("mentor_InstituteName", {
                      required: "Institute Name is required",
                    })}
                    onChange={handleInputChange}
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
              <b>Headline</b>
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
    </>
  );
};

export default MentorForm2;
