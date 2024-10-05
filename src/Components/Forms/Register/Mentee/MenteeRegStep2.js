import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import collegeData from "../../../data/collegesname.json";

const MenteeRegStep2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [showOption, setShowOption] = useState(true);

  const handleOptionFalse = () => setShowOption(false);
  const handleOptionTrue = () => setShowOption(true);

  const {
    register,
    setValue,
    trigger,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setValue("mentee_InstituteName", value);
    setDropdownVisible(value !== ""); // Only show dropdown when input is not empty
  };

  const filteredColleges = collegeData.filter((item) =>
    item["College Name"].toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleOptionClick = (college) => {
    setSelectedCollege(college); // Set selected college
    setSearchTerm(college["College Name"]); // Update input with selected college name
    setDropdownVisible(false); // Hide dropdown after selection
    setValue("mentee_InstituteName", college["College Name"]); // Update the form value
    clearErrors("mentee_InstituteName"); // Clear error when an option is selected
    trigger("mentee_InstituteName"); // Optionally trigger validation if needed
  };

  return (
    <div className="step" id="step2">
      <h4 className="text-center">
        <img src="images/icons8-account-96.webp" alt="" className="me-1" />
        Step 2: More About You
      </h4>

      <div className="ihduwfr_form_wrapper mt-4">
        {/* Radio Buttons for Type Selection */}
        <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label">
            I Am A
          </label>
          <br />
          <input
            type="radio"
            id="rdo4"
            className="radio-input"
            value={"student"}
            defaultChecked
            onClick={handleOptionTrue}
            {...register("mentee_type", {
              required: "Please select one of the options",
            })}
          />
          <label htmlFor="rdo4" className="radio-label pe-3">
            <span className="radio-border"></span> Student
          </label>

          <input
            type="radio"
            id="rdo5"
            className="radio-input"
            value={"workingprof"}
            onClick={handleOptionFalse}
            {...register("mentee_type", {
              required: "Please select one of the options",
            })}
          />
          <label htmlFor="rdo5" className="radio-label pe-3">
            <span className="radio-border"></span> Working Professional
          </label>

          <input
            type="radio"
            id="rdo6"
            className="radio-input"
            value={"corporate"}
            onClick={handleOptionFalse}
            {...register("mentee_type", {
              required: "Please select one of the options",
            })}
          />
          <label htmlFor="rdo6" className="radio-label pe-3">
            <span className="radio-border"></span> Corporate
          </label>

          <input
            type="radio"
            id="rdo10"
            className="radio-input"
            value={"fresher"}
            onClick={handleOptionFalse}
            {...register("mentee_type", {
              required: "Please select one of the options",
            })}
          />
          <label htmlFor="rdo10" className="radio-label pe-3">
            <span className="radio-border"></span> Fresher
          </label>

          {errors.mentee_type && (
            <p className="Error-meg-login-register">
              {errors.mentee_type.message}
            </p>
          )}
        </div>

        {/* College Name Search with Dropdown */}
        {showOption && (
          <>
            <label htmlFor="exampleInputEmail1" className="form-label">
              <b>
                Institute/College name{" "}
                <span className="RedColorStarMark">*</span>
              </b>
            </label>
            <div className="dkjiherer moideuirer_list hello">
              <div className="dropdown">
                <input
                  onKeyUp={() => {
                    trigger("mentee_InstituteName");
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Choose/Search for a college..."
                  value={searchTerm} // Ensure input value is controlled
                  {...register("mentee_InstituteName", {
                    required: "College or Institute Name is required",
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
          </>
        )}

        {/* Gender Selection */}
        <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label pe-3">
            Gender
          </label>
          <input
            type="radio"
            id="rdo7"
            className="radio-input"
            name="radio-group2"
            value={"Male"}
            {...register("mentee_gender", {
              required: "Please select a gender",
            })}
            onClick={() => clearErrors("mentee_gender")} // Clear errors on click
          />
          <label htmlFor="rdo7" className="radio-label pe-3">
            <span className="radio-border"></span> Male
          </label>

          <input
            type="radio"
            id="rdo8"
            className="radio-input"
            name="radio-group2"
            value={"Female"}
            {...register("mentee_gender", {
              required: "Please select a gender",
            })}
            onClick={() => clearErrors("mentee_gender")} // Clear errors on click
          />
          <label htmlFor="rdo8" className="radio-label pe-3">
            <span className="radio-border"></span> Female
          </label>

          <input
            type="radio"
            id="rdo9"
            className="radio-input"
            name="radio-group2"
            value={"Other"}
            {...register("mentee_gender", {
              required: "Please select a gender",
            })}
            onClick={() => clearErrors("mentee_gender")} // Clear errors on click
          />
          <label htmlFor="rdo9" className="radio-label pe-3">
            <span className="radio-border"></span> Other
          </label>
        </div>
        {errors.mentee_gender && (
          <p className="Error-meg-login-register">
            {errors.mentee_gender.message}
          </p>
        )}

        {/* Skills Input */}
        <div className="fiurhetit_tag_input mb-4">
          <label htmlFor="" className="form-label">
            Your Skill *
          </label>
          <input
            name="tags"
            className="form-control"
            placeholder="Eg., Business Analyst, Data Scientist..."
            {...register("mentee_Skills", {
              required: "Please enter your skills",
            })}
            onChange={() => clearErrors("mentee_Skills")} // Clear errors when user enters skill
          />
          {errors.mentee_Skills && (
            <p className="Error-meg-login-register">
              {errors.mentee_Skills.message}
            </p>
          )}
        </div>

        {/* About Yourself */}
        <div className="mb-4">
          <label htmlFor="" className="form-label">
            About Yourself *
          </label>
          <textarea
            className="form-control"
            placeholder="Write something about yourself"
            {...register("mentee_About", {
              required: "Write something about yourself",
            })}
            onChange={() => clearErrors("mentee_About")} // Clear errors when user types
          ></textarea>
          {errors.mentee_About && (
            <p className="Error-meg-login-register">
              {errors.mentee_About.message}
            </p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsConditions"
            {...register("mentee_Agree", {
              required: "You must agree before submitting.",
            })}
            onChange={() => clearErrors("mentee_Agree")} // Clear error when checkbox is clicked
          />
          <label className="form-check-label" htmlFor="termsConditions">
            I agree to the Terms and Conditions
          </label>
          {errors.mentee_Agree && (
            <p className="Error-meg-login-register">
              {errors.mentee_Agree.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenteeRegStep2;
