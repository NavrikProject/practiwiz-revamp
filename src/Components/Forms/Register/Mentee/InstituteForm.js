import React from "react";

const InstituteForm = ({ InstitutePreviousHandler }) => {
  return (
    <div className="step" id="instituteInputFields">
      <h4 className="text-center">
        <img src="images/icons8-account-96.webp" alt="" className="me-1" />
        Registration For Institutions
      </h4>

      <div className="ihduwfr_form_wrapper mt-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name Of Institute
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Name Of Institute"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Contact Person
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Contact Person"
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Email Id
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Email Id"
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Membership Plan
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Membership Plan"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between pt-3">
        <input
          type="button"
          className="btn dgheuih_btn_prev btn-main"
          onClick={(event) => InstitutePreviousHandler(event, "institute")}
          value="Previous"
          name="Previous"
        />
        <button type="submit" className="btn dgheuih_btn_next btn-main">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default InstituteForm;
