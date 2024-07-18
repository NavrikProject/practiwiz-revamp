import React from "react";
import { useFormContext } from 'react-hook-form';


const MentorForm3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="doiherner_wrapper">
      <div className="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Preffered Contact Timings</b>
              </label>
              <input
                type="time"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Type Your Job Title"
                aria-describedby="emailHelp"
                {...register("preferred_contact_timings", {
                  // required: "First Name is required",
                })} //1
              />
            </div>

            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <b>Preffered Contact Dates</b>
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Your Experience"
                {...register("preferred_contact_dates", {
                  // required: "First Name is required",
                })} //1
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ikhwnjrr_right">
              <label htmlFor="exampleInputEmail1" className="form-label mb-3">
                <b>Percentage Completion</b>
              </label>

              <div className="d-flex align-items-center">
                <div className="hinrer_circle position-relative me-3">
                  <h2>SK</h2>
                </div>

                <div className="idhnerier_right">
                  <h4 className="mb-1">Sawan Kumar</h4>

                  <p className="mb-1">
                    <b>40% Complete</b>
                  </p>

                  <h6 className="mb-0">Signed up - 4 minutes ago</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Would You Be Interested in Delivering Guest Lectures?</b>
              </label>

              <select className="form-select"
                {...register("guest_lectures_interest", {
                  // required: "First Name is required",
                })} //1
              >
                <option defaultValue>Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Would You Be Interested in Curating Case Studies?</b>
              </label>

              <select className="form-select"
                {...register("curating_case_studies_interest", {
                  // required: "First Name is required",
                })} //1
              >
                <option defaultValue>Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  For Your Alums Would You Be Fine to Do Sessions Free of Charge
                </b>
              </label>

              <select className="form-select"
                {...register("sessions_free_of_charge", {
                  // required: "First Name is required",
                })} //1
                >
                <option defaultValue>Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Your Timezone</b>
              </label>

              <select className="form-select"
                {...register("mentor_timezone", {
                  // required: "First Name is required",
                })} //1
              >
                <option defaultValue>Choose An Option</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Language</b>
              </label>

              <select className="form-select"
                {...register("mentor_language", {
                  // required: "First Name is required",
                })} //1
              >
                <option defaultValue>Choose Language</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Which Country You Live in?</b>
              </label>

              <select className="form-select"
                {...register("mentor_country", {
                  // required: "First Name is required",
                })} //1
              >
                <option defaultValue>Your Country Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorForm3;
