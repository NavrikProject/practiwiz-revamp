import React from "react";
import { useFormContext } from 'react-hook-form';

const MentorForm2 = () => {
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
                <b>Job Title</b>
              </label>
              <input
                type="email"
                className="form-control"
                // id="exampleInputEmail1"
                placeholder="Type Your Job Title"
                aria-describedby="emailHelp"
                {...register("mentor_job_title", {
                  // required: "First Name is required",
                })} //1
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <b>Years of Experience</b>
              </label>
              <input
                type="password"
                className="form-control"
                // id="exampleInputPassword1"
                placeholder="Your Experience"
                {...register("years_of_experience", {
                  // required: "First Name is required",
                })} //1
              />
            </div>

            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Company</b>
              </label>
              <input
                type="email"
                className="form-control"
                // id="exampleInputEmail1"
                placeholder="Type Your Company Name"
                aria-describedby="emailHelp"
                {...register("mentor_company_name", {
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
        </div>

        <div className="row align-items-center">
          <div className="col-lg-7 mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <b>Passionate About!</b> (Select max of 4 options)
            </label>
            <div type="" id="container" className="bg-white"></div>

            <p className="iduehnbriee_text mb-0">
              (*Drag and drop the most suitable option in the box*)
            </p>
          </div>

          <div className="col-lg-5 mb-4">
            <div id="outside-container">
              <div className="draggable" id="draggable1" draggable="true">
                Technology
                <span
                  className="close-btn"
                  // onclick="removeFromContainer('draggable1')"
                >
                  &times;
                </span>
              </div>

              <div className="draggable" id="draggable2" draggable="true">
                Management
                <span
                  className="close-btn"
                  // onclick="removeFromContainer('draggable2')"
                >
                  &times;
                </span>
              </div>

              <div className="draggable" id="draggable3" draggable="true">
                Leadership
                <span
                  className="close-btn"
                  // onClick="removeFromContainer('draggable3')"
                >
                  &times;
                </span>
              </div>

              <div className="draggable" id="draggable4" draggable="true">
                Career Guidance
                <span
                  className="close-btn"
                  // onClick="removeFromContainer('draggable4')"
                >
                  &times;
                </span>
              </div>

              <div className="draggable" id="draggable5" draggable="true">
                Public Speaking
                <span
                  className="close-btn"
                  // onClick="removeFromContainer('draggable5')"
                >
                  &times;
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label mb-0">
              <b>Areas of Expertise</b>
            </label>

            <div className="moideuirer_list">
              <ul className="ps-0 mb-0">
                <li>
                  <input
                    type="checkbox"
                    id="check_1"
                    name="check_1"
                    value="check_1"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_1">Agile</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_2"
                    name="check_2"
                    value="check_2"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_2">AI</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_3"
                    name="check_3"
                    value="check_3"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_3">Cloud</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_4"
                    name="check_4"
                    value="check_4"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_4">Python</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_5"
                    name="check_5"
                    value="check_5"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_5">DBA</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_6"
                    name="check_6"
                    value="check_6"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_6">JAVA</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_7"
                    name="check_7"
                    value="check_7"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_7">Selenium</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_8"
                    name="check_8"
                    value="check_8"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_8">Conflict Resolution</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_9"
                    name="check_9"
                    value="check_9"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_9">Communication</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_10"
                    name="check_10"
                    value="check_10"
                    {...register("areas_of_expertise", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_10">Resume Writing</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label mb-0">
              <b>Academic Qualification</b>
            </label>

            <div className="dkjiherer moideuirer_list">
              <ul className="ps-0 mb-0">
                <li>
                  <input
                    type="checkbox"
                    id="check_11"
                    name="check_11"
                    value="check_11"
                    {...register("academic_qualification", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_11">Post Graduate</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_20"
                    name="check_20"
                    value="check_20"
                    {...register("academic_qualification", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_20">Graduate</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_30"
                    name="check_30"
                    value="check_30"
                    {...register("academic_qualification", {
                      // required: "First Name is required",
                    })} //1
                  />
                  <label htmlFor="check_30">Doctorate</label>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <b>Your Recommended Area of Mentorship</b>
            </label>
            <textarea
              className="form-control"
              style={{ height: "150px" }}
              {...register("recommended_area_of_mentorship", {
                // required: "First Name is required",
              })} //1
            ></textarea>
          </div>

          <div className="col-lg-12 mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <b>Headline</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Type A Headline Here"
              aria-describedby="emailHelp"
              {...register("mentor_Headline", {
                // required: "First Name is required",
              })} //1
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorForm2;
