import React from "react";
import {useForm } from "react-hook-form";

const InstituteForm = ({ InstitutePreviousHandler }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  // const methods = useForm();
  const onSubmit = (data) => console.log(data)


  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="step" id="instituteInputFields">
        <h4 className="text-center">
          <img src="images/icons8-account-96.webp" alt="" className="me-1" />
          Registration For Institutions
        </h4>

        <div className="ihduwfr_form_wrapper mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name Of Institute
                </label>
                <input
                  type="text"
                  className="form-control"
                  // id="exampleInputEmail1"
                  placeholder="Name Of Institute"
                  aria-describedby="emailHelp"
                  {...register("institute_name", {
                    required: "Institute Name is required",
                  })}
                />
                {errors.institute_name && (
                <p className="Error-meg-login-register">
                  {errors.institute_name.message}
                </p>
              )}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contact Person
                </label>
                <input
                  type="text"
                  className="form-control"
                  // id="exampleInputPassword1"
                  placeholder="Contact Person"
                  {...register("contact_person", {
                    required: "Name is required",
                  })}
                />
                {errors.contact_person && (
                <p className="Error-meg-login-register">
                  {errors.contact_person.message}
                </p>
              )}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  // id="exampleInputPassword1"
                  placeholder="Email Id"
                  {...register("institute_email", {
                    required: "Institute Email is required",
                  })}
                />
                {errors.institute_email && (
                <p className="Error-meg-login-register">
                  {errors.institute_email.message}
                </p>
              )}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Membership Plan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Membership Plan"
                  {...register("institute_membership", {
                    required: "Membership Plan required",
                  })}
                />
                {errors.institute_membership && (
                <p className="Error-meg-login-register">
                  {errors.institute_membership.message}
                </p>
              )}
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
    </form>
  );
};

export default InstituteForm;
