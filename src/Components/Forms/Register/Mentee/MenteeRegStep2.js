import React, { useState } from "react";

import { useFormContext } from "react-hook-form";
import collegeData from "../../../data/collegesname.json";
const MenteeRegStep2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null); // Store selected college
  const [ShowOption, setShowOption] = useState(true);
  const handleoptionFasle = () => {
    setShowOption(false);
  };
  const handleoptionTrue = () => {
    setShowOption(true);
  };
  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setValue("mentee_InstituteName", value);
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
    setValue("mentee_InstituteName", college["College Name"]);
  };

  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="step" id="step2">
      <h4 className="text-center">
        <img src="images/icons8-account-96.webp" alt="" className="me-1" />
        Step 2: More About You
      </h4>

      <div className="ihduwfr_form_wrapper mt-4">
        <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label">
            I Am A
          </label>
          <br />
          <input
            type="radio"
            id="rdo4"
            defaultChecked
            className="radio-input"
            onClick={handleoptionTrue}
            // name="radio-group1"
            value={"student"}
            {...register("mentee_type", {
              required: "Please select the one of the option",
            })}
          />

          <label htmlFor="rdo4" className="radio-label  pe-3">
            <span className="radio-border"></span> Student
          </label>

          <input
            type="radio"
            id="rdo5"
            className="radio-input"
            name="radio-group1"
            value={"workingprof"}
            onClick={handleoptionFasle}
            {...register("mentee_type", {
              required: "Please select the one of the option",
            })}
          />
          <label htmlFor="rdo5" className="radio-label  pe-3">
            <span className="radio-border"></span> Working Professional
          </label>
          <input
            type="radio"
            id="rdo6"
            className="radio-input"
            name="radio-group1"
            value={"corporate"}
            onClick={handleoptionFasle}
            {...register("mentee_type", {
              required: "Please select the one of the option",
            })}
          />
          <label htmlFor="rdo6" className="radio-label  pe-3">
            <span className="radio-border"></span> Corporate
          </label>
          <input
            type="radio"
            id="rdo10"
            className="radio-input"
            // name="radio-group1"
            value={"freasher"}
            onClick={handleoptionFasle}
            {...register("mentee_type", {
              required: "Please select the one of the option",
            })}
          />
          <label htmlFor="rdo10" className="radio-label  pe-3">
            <span className="radio-border"></span> Fresher
          </label>
        </div>
        {errors.mentee_type && (
          <p className="Error-meg-login-register">
            {errors.mentee_type.message} pe-3
          </p>
        )}
        {ShowOption && (
          <>
            {" "}
            <label htmlFor="" className="form-label">
              Institute/College name *
            </label>
            <div className="dropdown mb-3">
              <input
                onKeyUp={() => trigger("mentee_InstituteName")}
                type="text"
                className="form-control"
                placeholder="Search for a college..."
                value={searchTerm} // Ensure input value is controlled
                {...register("mentee_InstituteName", {
                  required: "Institute Name is required",
                })}
                onChange={handleInputChange}
                onFocus={() => setDropdownVisible(searchTerm !== "")} // Show dropdown when focused
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
          </>
        )}
        <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label  pe-3">
            Gender
          </label>
          {/* </br> */}

          <input
            type="radio"
            id="rdo7"
            // checked
            className="radio-input"
            name="radio-group2"
            value={"Male"}
            {...register("mentee_gender", {
              required: "Please select the one of the option",
            })}
          />
          <label htmlFor="rdo7" className="radio-label  pe-3">
            <span className="radio-border"></span> Male
          </label>

          <input
            type="radio"
            id="rdo8"
            className="radio-input"
            name="radio-group2"
            value={"Female"}
            {...register("mentee_gender", {
              required: "Please select the gender",
            })}
          />
          <label htmlFor="rdo8" className="radio-label  pe-3">
            <span className="radio-border"></span> Female
          </label>

          <input
            type="radio"
            id="rdo9"
            className="radio-input"
            name="radio-group2"
            value={"Other"}
            {...register("mentee_gender", {
              required: "Please select the gender",
            })}
          />
          <label htmlFor="rdo9" className="radio-label  pe-3">
            <span className="radio-border"></span> Other
          </label>
        </div>
        {errors.mentee_gender && (
          <p className="Error-meg-login-register">
            {errors.mentee_gender.message}
          </p>
        )}

        <div className="fiurhetit_tag_input mb-4">
          <label htmlFor="" className="form-label">
            Your Skill *
          </label>

          <input
            name="tags"
            className="form-control"
            placeholder="Eg., Business Analyst, Data Scientist..."
            autoFocus
            {...register("mentee_Skills", {
              required: "Please enter the your skills",
            })}
          />
          {errors.mentee_Skills && (
            <p className="Error-meg-login-register">
              {errors.mentee_Skills.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="" className="form-label">
            About Yourself *
          </label>

          <textarea
            type="text"
            className="form-control"
            placeholder="Write something about yourself"
            {...register("mentee_About", {
              required: "Write something about yourself",
            })}
          ></textarea>
          {errors.mentee_About && (
            <p className="Error-meg-login-register">
              {errors.mentee_About.message}
            </p>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-between pt-3"></div>
    </div>
  );
};

export default MenteeRegStep2;
