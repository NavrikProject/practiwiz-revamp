import React from "react";

const MentorForm2 = () => {
  return (
    <div class="doiherner_wrapper">
      <div class="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>Job Title</b>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Type Your Job Title"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">
                <b>Years of Experience</b>
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Your Experience"
              />
            </div>

            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>Company</b>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Type Your Company Name"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="ikhwnjrr_right">
              <label for="exampleInputEmail1" class="form-label mb-3">
                <b>Percentage Completion</b>
              </label>

              <div class="d-flex align-items-center">
                <div class="hinrer_circle position-relative me-3">
                  <h2>SK</h2>
                </div>

                <div class="idhnerier_right">
                  <h4 class="mb-1">Sawan Kumar</h4>

                  <p class="mb-1">
                    <b>40% Complete</b>
                  </p>

                  <h6 class="mb-0">Signed up - 4 minutes ago</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-7 mb-4">
            <label for="exampleInputEmail1" class="form-label">
              <b>Passionate About!</b> (Select max of 4 options)
            </label>
            <div id="container" class="bg-white"></div>

            <p class="iduehnbriee_text mb-0">
              (*Drag and drop the most suitable option in the box*)
            </p>
          </div>

          <div class="col-lg-5 mb-4">
            <div id="outside-container">
              <div class="draggable" id="draggable1" draggable="true">
                Technology
                <span
                  class="close-btn"
                  onclick="removeFromContainer('draggable1')"
                >
                  &times;
                </span>
              </div>

              <div class="draggable" id="draggable2" draggable="true">
                Management
                <span
                  class="close-btn"
                  onclick="removeFromContainer('draggable2')"
                >
                  &times;
                </span>
              </div>

              <div class="draggable" id="draggable3" draggable="true">
                Leadership
                <span
                  class="close-btn"
                  onclick="removeFromContainer('draggable3')"
                >
                  &times;
                </span>
              </div>

              <div class="draggable" id="draggable4" draggable="true">
                Career Guidance
                <span
                  class="close-btn"
                  onclick="removeFromContainer('draggable4')"
                >
                  &times;
                </span>
              </div>

              <div class="draggable" id="draggable5" draggable="true">
                Public Speaking
                <span
                  class="close-btn"
                  onclick="removeFromContainer('draggable5')"
                >
                  &times;
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 mb-4">
            <label for="exampleInputEmail1" class="form-label mb-0">
              <b>Areas of Expertise</b>
            </label>

            <div class="moideuirer_list">
              <ul class="ps-0 mb-0">
                <li>
                  <input
                    type="checkbox"
                    id="check_1"
                    name="check_1"
                    value="check_1"
                  />
                  <label for="check_1">Agile</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_2"
                    name="check_2"
                    value="check_2"
                  />
                  <label for="check_2">AI</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_3"
                    name="check_3"
                    value="check_3"
                  />
                  <label for="check_3">Cloud</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_4"
                    name="check_4"
                    value="check_4"
                  />
                  <label for="check_4">Python</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_5"
                    name="check_5"
                    value="check_5"
                  />
                  <label for="check_5">DBA</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_6"
                    name="check_6"
                    value="check_6"
                  />
                  <label for="check_6">JAVA</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_7"
                    name="check_7"
                    value="check_7"
                  />
                  <label for="check_7">Selenium</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_8"
                    name="check_8"
                    value="check_8"
                  />
                  <label for="check_8">Conflict Resolution</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_9"
                    name="check_9"
                    value="check_9"
                  />
                  <label for="check_9">Communication</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_10"
                    name="check_10"
                    value="check_10"
                  />
                  <label for="check_10">Resume Writing</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 mb-4">
            <label for="exampleInputEmail1" class="form-label mb-0">
              <b>Academic Qualification</b>
            </label>

            <div class="dkjiherer moideuirer_list">
              <ul class="ps-0 mb-0">
                <li>
                  <input
                    type="checkbox"
                    id="check_11"
                    name="check_11"
                    value="check_11"
                  />
                  <label for="check_11">Post Graduate</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_20"
                    name="check_20"
                    value="check_20"
                  />
                  <label for="check_20">Graduate</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check_30"
                    name="check_30"
                    value="check_30"
                  />
                  <label for="check_30">Doctorate</label>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-12 mb-4">
            <label for="exampleInputEmail1" class="form-label">
              <b>Your Recommended Area of Mentorship</b>
            </label>
            <textarea
              class="form-control"
              style={{ height: "150px" }}
            ></textarea>
          </div>

          <div class="col-lg-12 mb-4">
            <label for="exampleInputEmail1" class="form-label">
              <b>Headline</b>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Type A Headline Here"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorForm2;
