import React from "react";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import "./Phone-input-style.css";
import "./MenteeReg.css";
const MenteeRegStep1 = ({ selectedOption, handleChange }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const {
    register,
    watch,
    control,

    formState: { errors },
  } = useFormContext();
  const password = watch("mentor_password");

  return (
    <div className="step active" id="step1">
      <h4 className="text-center">
        <img src="images/icons8-account-96.webp" alt="" className="me-1" />
        Step 1: Account Information
      </h4>

      <div className="ihduwfr_form_wrapper mt-4">
        <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label">
            I Want To Register As
          </label>
          <br />
          <input
            type="radio"
            id="rdo2"
            className="radio-input"
            name="radio-group"
            value="mentee"
            checked={selectedOption === "mentee"}
            onChange={handleChange}
          />
          <label htmlFor="rdo2" className="radio-label  pe-3">
            <span className="radio-border"></span>
            <i
              className="fa-solid fa-graduation-cap me-1"
              style={{ color: "#1B759A" }}
            ></i>
            Mentee
          </label>
          <input
            type="radio"
            id="rdo3"
            className="radio-input"
            name="radio-group"
            value="jobseeker"
            checked={selectedOption === "jobseeker"}
            onChange={handleChange}
          />
          <label htmlFor="rdo3" className="radio-label  pe-3">
            <span className="radio-border"></span>
            <i
              className="fa-solid fa-briefcase me-1"
              style={{ color: "#1B759A" }}
            ></i>
            Job Seeker
          </label>
          <input
            type="radio"
            id="rdo4"
            className="radio-input"
            name="radio-group"
            value="institute"
            checked={selectedOption === "institute"}
            onChange={handleChange}
          />
          <label htmlFor="rdo4" className="radio-label pe-3">
            <span className="radio-border"></span>
            <i
              className="fa-solid fa-building-columns me-1"
              style={{ color: "#1B759A" }}
            ></i>
            Institute
          </label>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label  pe-3">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                // id="exampleInputEmail1"
                placeholder="First Name"
                // aria-describedby="emailHelp"
                {...register("mentee_firstname", {
                  required: "First Name is required",
                })}
              />
              {errors.mentee_firstname && (
                <p className="Error-meg-login-register">
                  {errors.mentee_firstname.message}
                </p>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                // id="exampleInputPassword1"
                placeholder="Last Name"
                {...register("mentee_lastname", {
                  required: "Last Name is required",
                })}
              />
              {errors.mentee_lastname && (
                <p className="Error-meg-login-register">
                  {errors.mentee_lastname.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1 " className="form-label">
            Phone Number
          </label>
          <div className="h-25">
            <Controller
              className="form-control h-25"
              name="mentee_phone_number"
              control={control}
              rules={{
                required: "Phone Number is required",
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
                  className="form-control"
                  country={"in"}
                  value={field.value}
                  onChange={(phone) => field.onChange(phone)}
                />
              )}
            />
            {errors.mentee_phone_number && (
              <p className="Error-meg-login-register">
                {errors.mentee_phone_number.message}
              </p>
            )}
          </div>
        </div>

        <div className="csfvgdtrfs mb-3 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            // id="exampleInputEmail1"
            placeholder="Email"
            aria-describedby="emailHelp"
            {...register("mentee_Email", {
              required: "Email is required",
            })}
          />
          {errors.mentee_Email && (
            <p className="Error-meg-login-register">
              {errors.mentee_Email.message}
            </p>
          )}

          <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
        </div>

        <div className="csfvgdtrfs mb-3 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Password
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

        <div className="csfvgdtrfs mb-3 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Confirm Password
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

      <div className="d-flex justify-content-between pt-3">
        <div className="uherrr_text text-center">
          <p className="mb-0">
            Already Have An Account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenteeRegStep1;
