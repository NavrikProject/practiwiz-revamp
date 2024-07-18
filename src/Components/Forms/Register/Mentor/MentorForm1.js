import React from "react";
import { Link } from "react-router-dom";
import LnIcon from "./deeteewe.png";
import { useFormContext } from "react-hook-form";
const MentorForm1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="idneihrrr p-3">
        <h5 className="mb-0">
          Hi, Let's Get You On-boarded. It Will Take Approx. 4 Mins For Sign-up
          And Total 8 For Complete Profile
        </h5>
      </div>

      <div className="doiherner_wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="csfvgdtrfs cihseriniewr mb-4 position-relative">
              <label htmlFor="exampleInputEmail1" className="form-label mb-2 mt-3">
                <b>I Want To Register As</b>
              </label>
              <br />

              <input
                type="radio"
                id="rdo1"
                className="radio-input"
               name="apple"
                value="green"
                {...register(`Menter`)} //1
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
                id="rdo2"
                className="radio-input"
                name="apple"
                value="red"
                {...register("Mentee", {
                  // required: "First Name is required",
                })} //1
              />
              <label
                htmlFor="rdo2"
                className="radio-label"
                id="menteeRegistrationlink"
              >
                <span className="radio-border"></span>
                <i
                  className="fa-solid fa-graduation-cap me-1"
                  style={{ color: "#1B759A" }}
                ></i>
                <Link to="/mentee-registration">Mentee </Link>
              </label>

              {/* <input
                type="radio"
                id="rdo3"
                className="radio-input"
                name="radio-group"
              />
              <label for="rdo3" className="radio-label">
                <span className="radio-border"></span>
                <i
                  className="fa-solid fa-briefcase me-1"
                  style={{ color: "#1B759A" }}
                ></i>
                Job Seeker
              </label> */}
            </div>
          </div>

          <div className="csfvgdtrfs cihseriniewr mb-4 position-relative">
            <div className="col-lg-12">
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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="First Name"
                  aria-describedby="emailHelp"
                  {...register("mentor_firstname", {
                    // required: "First Name is required",
                  })} //1
                />
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
                    // required: "First Name is required",
                  })} //1
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Mobile Number</b>
                </label>

                <input
                  id="phone"
                  className="form-control"
                  type="tel"
                  name="phone"
                  {...register("mentor_phone_number", {
                    // required: "First Name is required",
                  })} //1
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  aria-describedby="emailHelp"
                  {...register("mentor_email", {
                    // required: "First Name is required",
                  })} //1
                />

                <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Choose A Password</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Password must be at least 8 characters"
                  aria-describedby="emailHelp"
                  {...register("mentor_password", {
                    // required: "First Name is required",
                  })} //1
                />

                <i className="fa-solid fa-eye position-absolute"></i>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Confirm Password</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Type your password again"
                  aria-describedby="emailHelp"
                  {...register("mentor_confirm_password", {
                    // required: "First Name is required",
                  })} //1
                />

                <i className="fa-solid fa-eye position-absolute"></i>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Can we use your LinkedIn Photo for the Profile Pic</b>
                </label>
                <input
                  id="phone"
                  type="file"
                  name="phone"
                  className="form-control"
                  {...register("linkedin_photo", {
                    // required: "First Name is required",
                  })} //1
                />
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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Social Media Profile</b>
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  {...register("social_media_profile", {
                    // required: "First Name is required",
                  })} //1
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorForm1;
