import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const MenteeRegStep2 = () => {
  const {
    register,
    watch,
    control,

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
