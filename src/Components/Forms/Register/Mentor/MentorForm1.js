import React from "react";
import { Link } from "react-router-dom";
import LnIcon from "./deeteewe.png";
import { useFormContext, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import CountryData from "../../../data/CountryData.json";
// import '../Mentee/Phone-input-style.css'
import "react-phone-input-2/lib/style.css";
import "./register.css";
const MentorForm1 = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [showIcon, setShowIcon] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const {
    register,
    watch,
    control,
    getValues,
    formState: { errors },
  } = useFormContext();
  const password = watch("mentor_password");
  const handleBlur = async (fieldName) => {
    const data = { [fieldName]: getValues(fieldName) };
    props.saveStepData(data);
  };
  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);

    // Find the selected country and set the states
    const selectedCountryData = CountryData.find(
      (country) => country.country_name === countryId
    );
    if (selectedCountryData) {
      setStates(selectedCountryData.states);
    } else {
      setStates([]);
    }
  };
  return (
    <>
      <div className="doiherner_wrapper ">
        <div className="row">
          {/* <div className="col-lg-12 ">
            <div className="csfvgdtrfs cihseriniewr mb-4 position-relative">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mb-2 mt-3"
              >
                <b>I Want To Register As</b>
              </label>
              <br />
              <input
                type="radio"
                id="rdo1"
                className="radio-input"
                name="apple"
                value="mentor"
                {...register("user_type", {
                  required: "select this button",
                })}
              />
              <label htmlFor="rdo1" className="radio-label me-2">
                <span className="radio-border"></span>
                <i
                  className="fa-solid fa-user-tie me-1"
                  style={{ color: "#1B759A" }}
                ></i>
                Mentor
              </label>
              <input
                type="radio"
                id="rdo1"
                className="radio-input radio-label "
                name="apple"
                value="mentor"
                {...register("user_type", {
                  required: "select this button",
                })}
              />
              <Link to="/mentee-registration">
                {" "}
                <label
                  htmlFor="rdo2"
                  className="radio-label me-2"
                  id="menteeRegistrationlink"
                  style={{ paddingLeft: "30px" }}
                >
                  <span className="radio-border"></span>
                  <i
                    className="fa-solid fa-graduation-cap me-1"
                    style={{ color: "#1B759A" }}
                  ></i>
                  Mentee
                </label>
              </Link>
              <input
                type="radio"
                id="rdo1"
                className="radio-input radio-label "
                name="apple"
                value="mentor"
                {...register("user_type", {
                  required: "select this button",
                })}
              />
              <Link to="/mentee-registration">
                {" "}
                <label
                  htmlFor="rdo2"
                  className="radio-label me-2"
                  id="menteeRegistrationlink"
                  style={{ paddingLeft: "30px" }}
                >
                  <span className="radio-border"></span>
                  <i
                    className="fa-solid fa-briefcase me-1"
                    style={{ color: "#1B759A" }}
                  ></i>
                  Job Seeker
                </label>
              </Link>
              <input
                type="radio"
                id="rdo1"
                className="radio-input radio-label "
                name="apple"
                value="mentor"
                {...register("user_type", {
                  required: "select this button",
                })}
              />
              <Link to="/mentee-registration">
                {" "}
                <label
                  htmlFor="rdo2"
                  className="radio-label me-2"
                  id="menteeRegistrationlink"
                  style={{ paddingLeft: "30px" }}
                >
                  <span className="radio-border"></span>
                  <i
                    className="fa-solid fa-building-columns me-1"
                    style={{ color: "#1B759A" }}
                  ></i>
                  Institute
                </label>
              </Link>
              {errors.user_type && (
                <p className="Error-meg-login-register">
                  {errors.user_type.message}
                </p>
              )}
            </div>
          </div> */}

          <div className="csfvgdtrfs cihseriniewr mb-4 position-relative">
            <div className="col-lg-12 mt-2">
              <p className="mb-0 d-flex align-items-center">
                <b>Register Using :</b>
                <button
                  onClick={() => {
                    window.alert(
                      "We were working on this register using Linkedin. Please fil the mentor application"
                    );
                  }}
                  className="btn vcetgvfeeeee ms-2 d-flex align-items-center btn-primary"
                >
                  <img src={LnIcon} className="me-2" alt="deeteewe" />
                  LinkedIn
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  // id="exampleInputEmail1"
                  placeholder="First Name"
                  // aria-describedby="emailHelp"
                  {...register("mentor_firstname", {
                    required: "First Name is required",
                  })}
                  onBlur={() => handleBlur("mentor_firstname")}
                />
                {errors.mentor_firstname && (
                  <p className="Error-meg-login-register">
                    {errors.mentor_firstname.message}
                  </p>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Last Name"
                  {...register("mentor_lastname", {
                    required: "Last Name is required",
                  })} //1
                  onBlur={() => handleBlur("mentor_lastname")}
                />
                {errors.mentor_lastname && (
                  <p className="Error-meg-login-register">
                    {errors.mentor_lastname.message}
                  </p>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-4">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>Mobile Number</b>
                </label>

                <Controller
                  name="mentor_phone_number"
                  control={control}
                  rules={{
                    required: "This field is required",
                    maxLength: {
                      value: 13,
                      message: "Enter valid Phone Number",
                    },
                    minLength: {
                      value: 11,
                      message: "Enter valid Phone Number",
                    },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={"in"}
                      value={field.value}
                      // className="form-control"
                      onBlur={() => handleBlur("mentor_phone_number")}
                      onChange={(phone) => field.onChange(phone)}
                    />
                  )}
                />
                {errors.mentor_phone_number && (
                  <p className="Error-meg-login-register">
                    {errors.mentor_phone_number.message}
                  </p>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  // id="exampleInputEmail1"
                  placeholder="Email"
                  aria-describedby="emailHelp"
                  {...register("mentor_email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })} //1
                  onBlur={() => handleBlur("mentor_email")}
                />
                {errors.mentor_email && (
                  <p className="Error-meg-login-register">
                    {errors.mentor_email.message}
                  </p>
                )}

                <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>Choose A Password</b>
                </label>
                <input
                  className="form-control"
                  // id="exampleInputEmail1"
                  placeholder="Password must be at least 8 characters"
                  aria-describedby="emailHelp"
                  type={showIcon ? "text" : "password"}
                  {...register("mentor_password", {
                    required: "Password is Required",
                    pattern: {
                      // value:
                      //   /^(?!.* )(?=.[a-z])(?=.[@$!%?&])[A-Za-z\d@$!%?&.]{8,16}$/,
                      message:
                        "A min 8 - 16 characters contains a combination of upper, lowercase letter, number and special characters like @ $ ! % * ? & _ . without space",
                    },
                    maxLength: {
                      value: 16,
                      message: "Must be less than 16 characters.",
                    },
                  })}
                />
                <i
                  i="true"
                  onClick={() => setShowIcon(!showIcon)}
                  className={
                    showIcon
                      ? "fa-solid fa-eye position-absolute"
                      : "fa-solid fa-eye-slash position-absolute"
                  }
                ></i>

                {errors.mentor_password && (
                  <p className="Error-meg-login-register">
                    {errors.mentor_password.message}
                  </p>
                )}

                {/* <i className="fa-solid fa-eye position-absolute"></i> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>Confirm Password</b>
                </label>
                <input
                  // type="text"
                  className="form-control"
                  // id="exampleInputEmail1"
                  placeholder="Type your password again"
                  aria-describedby="emailHelp"
                  type={showIcons ? "text" : "password"}
                  //onChange={(e) => setConfirmPassword(e.target.value)}
                  {...register("mentor_confirm_password", {
                    required: "Password is Required",
                    validate: (value) =>
                      value === password || "Password must be matched",
                  })}
                />

                <i
                  i="true"
                  onClick={() => setShowIcons(!showIcons)}
                  className={
                    showIcons
                      ? "fa-solid fa-eye position-absolute"
                      : "fa-solid fa-eye-slash position-absolute"
                  }
                />

                {errors.mentor_confirm_password && (
                  <p className="Error-meg-login-register">
                    {errors.mentor_confirm_password.message}
                  </p>
                )}

                {/* <i className="fa-solid fa-eye position-absolute"></i> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>Can we use your LinkedIn Photo for the Profile Pic</b>
                </label>
                <input
                  type="file"
                  accept=".jpg"
                  className="form-control"
                  {...register("linkedin_photo", {
                    required: "Upload Photo",
                  })} //1
                />
                {errors.linkedin_photo && (
                  <p className="Error-meg-login-register">
                    {errors.linkedin_photo.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>Linkedin URL Profile</b>
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  pattern="http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?"
                  placeholder="Social media profile link"
                  {...register("social_media_profile", {
                    required: "Linkedin profile URL is required",
                  })} //1
                  className="form-control"
                />
                {errors.social_media_profile && (
                  <p className="Error-meg-login-register">
                    {errors.social_media_profile.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Which Country You Live in?</b>
                </label>
                <select
                  className="form-select"
                  {...register("mentor_country", {
                    required: "Country is required",
                  })}
                  onChange={handleCountryChange} // Handle country change
                >
                  <option value="">Please select a country</option>
                  {CountryData.map((option) => (
                    <option key={option.country_id} value={option.country_name}>
                      {option.country_name}
                    </option>
                  ))}
                </select>{" "}
                {errors.mentor_country && (
                  <p className="Error-meg-login-register">
                    {errors.mentor_country.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Which State You Are Living In?</b>
                </label>
                <select
                  className="form-select"
                  {...register("mentor_state", {
                    required: "State is required",
                  })}
                >
                  <option value="">Please select a state</option>
                  {states.map((state) => (
                    <option key={state.state_id} value={state.state_name}>
                      {state.state_name}
                    </option>
                  ))}
                </select>{" "}
                {errors.mentor_state && (
                  <p className="Error-meg-login-register">
                    {errors.mentor_state.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorForm1;
