import React from "react";
import { Link } from "react-router-dom";
import LnIcon from "./deeteewe.png";
import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
// import '../Mentee/Phone-input-style.css'
import "react-phone-input-2/lib/style.css";
import "./register.css"
const MentorForm1 = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [phonenumbervalidate, setphonenumbervalidate] = useState("");

  const {
    register,
    watch,
    control,

    formState: { errors },
  } = useFormContext();
  const password = watch("mentor_password");
  return (
    <>
      <div className="idneihrrr p-3">
        <h5 className="mb-0">
          Hi, Let's Get You On-boarded. It Will Take Approx. 4 Mins For Sign-up
          And Total 8 For Complete Profile
        </h5>
      </div>
      <div className="doiherner_wrapper ">
        <div className="row">
          <div className="col-lg-12 ">
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
                {...register("mentor", {
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
              <label
                htmlFor="rdo2"
                className="radio-label"
                id="menteeRegistrationlink"
                style={{ paddingLeft: "10px" }}
              >
                <i
                  className="fa-solid fa-graduation-cap me-1"
                  style={{ color: "#1B759A" }}
                ></i>
                <Link to="/mentee-registration">Mentee</Link>
              </label>
              <label
                htmlFor="rdo2"
                className="radio-label"
                id="menteeRegistrationlink"
              >
                <i
                  className="fa-solid fa-briefcase me-1"
                  style={{ color: "#1B759A" }}
                ></i>
                <Link to="/mentee-registration">Job Seeker</Link>
              </label>
              <label
                htmlFor="rdo2"
                className="radio-label"
                id="menteeRegistrationlink"
              >
                <i
                  className="fa-solid fa-building-columns me-1"
                  style={{ color: "#1B759A" }}
                ></i>
                <Link to="/mentee-registration">Institute</Link>
              </label>
              {errors.mentor && (
                <p className="Error-meg-login-register">
                  {errors.mentor.message}
                </p>
              )}
            </div>
          </div>

          <div className="csfvgdtrfs cihseriniewr mb-4 position-relative">
            <div className="col-lg-12 mt-2">
              <p className="mb-0 d-flex align-items-center">
                <b>Register Using :</b>
                <button className="btn vcetgvfeeeee ms-2 d-flex align-items-center btn-primary">
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

                {/* <input
                  id="phone"
                  className="form-control"
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  {...register("mentor_phone_number", {
                    required: "Mobile Number is required",
                  })} //1
                />
                {errors.mentor_phone_number && (
<<<<<<< HEAD
                  <p className="Error-meg-login-register">{errors.mentor_phone_number.message}</p>
                )} */}
                <Controller
                  name="mentor_phone_number"
                  control={control}
                  rules={{
                    required: "This field is required",
                    maxLength: {
                      value: 13,
                      message: "Enter valid Phone Number"
                    },
                    minLength: {
                      value: 11,
                      message: "Enter valid Phone Number"
                    }
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <PhoneInput
                 
                      {...field}
                      country={"in"}
                      value={field.value}
                      // className="form-control"

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
                      value:
                        /^(?!.* )(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&.]{8,16}$/,
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

            {/* <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label for="exampleInputEmail1" className="form-label">
                  <b>Click Photo</b>
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  className="form-control"
                />
              </div>
            </div> */}

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>Social Media Profile</b>
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Social media profile link"
                  {...register("social_media_profile", {
                    required: "Social media profile link is required",
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorForm1;
