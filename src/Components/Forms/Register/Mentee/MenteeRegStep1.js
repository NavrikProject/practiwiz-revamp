import React from "react";

const MenteeRegStep1 = ({
  page,
  setPage,
  FormTitles,
  selectedOption,
  handleChange,
  setPageCount,
}) => {
  return (
    <div className="step active" id="step1">
      <h4 className="text-center">
        <img src="images/icons8-account-96.webp" alt="" className="me-1" />
        Step 1: Account Information
      </h4>

      <div className="ihduwfr_form_wrapper mt-4">
        <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
          <label for="exampleInputEmail1" className="form-label">
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
          <label for="rdo2" className="radio-label">
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
          <label for="rdo3" className="radio-label">
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
          <label for="rdo4" className="radio-label">
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
              <label for="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="First Name"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Last Name
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone Number
          </label>

          <input id="phone" type="tel" name="phone" />
        </div>

        <div className="csfvgdtrfs mb-3 position-relative">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
            aria-describedby="emailHelp"
          />

          <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
        </div>

        <div className="csfvgdtrfs mb-3 position-relative">
          <label for="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Password must be at least 8 characters"
            aria-describedby="emailHelp"
          />

          <i className="fa-solid fa-eye position-absolute"></i>
        </div>

        <div className="csfvgdtrfs mb-3 position-relative">
          <label for="exampleInputEmail1" className="form-label">
            Confirm Password
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Type your password again"
            aria-describedby="emailHelp"
          />

          <i className="fa-solid fa-eye position-absolute"></i>
        </div>
      </div>

      <div className="d-flex justify-content-between pt-3">
        <div className="uherrr_text text-center">
          <p className="mb-0">
            Already Have An Account? <a href="/login">Log In</a>
          </p>
        </div>

        <button
          onClick={(event) => setPageCount(event)}
          type="button"
          className="btn dgheuih_btn_next btn-main"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MenteeRegStep1;
