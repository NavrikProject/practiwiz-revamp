import React from "react";

const MentorForm3 = () => {
  return (
    <div class="doiherner_wrapper">
      <div class="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>Preffered Contact Timings</b>
              </label>
              <input
                type="time"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Type Your Job Title"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">
                <b>Preffered Contact Dates</b>
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Your Experience"
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

          <div class="col-lg-6">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>Would You Be Interested in Delivering Guest Lectures?</b>
              </label>

              <select class="form-select">
                <option selected>Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>Would You Be Interested in Curating Case Studies?</b>
              </label>

              <select class="form-select">
                <option selected>Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row align-items-end">
          <div class="col-lg-6">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>
                  For Your Alums Would You Be Fine to Do Sessions Free of Charge
                </b>
              </label>

              <select class="form-select">
                <option selected>Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>Your Timezone</b>
              </label>

              <select class="form-select">
                <option selected>Choose An Option</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>Language</b>
              </label>

              <select class="form-select">
                <option selected>Choose Language</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                <b>Which Country You Live in?</b>
              </label>

              <select class="form-select">
                <option selected>Your Country Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorForm3;
