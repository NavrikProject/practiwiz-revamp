import React from "react";

const MentorForm1 = () => {
  return (
    <>
      <div class="idneihrrr p-3">
        <h5 class="mb-0">
          Hi, Let's Get You On-boarded. It Will Take Approx. 4 Mins For Sign-up
          And Total 8 For Complete Profile
        </h5>
      </div>

      <div class="doiherner_wrapper">
        <div class="row">
          <div class="col-lg-12">
            <div class="csfvgdtrfs cihseriniewr mb-4 position-relative">
              <label for="exampleInputEmail1" class="form-label mb-2 mt-3">
                <b>I Want To Register As</b>
              </label>{" "}
              <br />
              <input
                type="radio"
                id="rdo1"
                checked
                class="radio-input"
                name="radio-group"
              />
              <label for="rdo1" class="radio-label">
                {" "}
                <span class="radio-border"></span>
                <i
                  class="fa-solid fa-user-tie me-1"
                  style={{ color: "#1B759A" }}
                ></i>{" "}
                Mentor{" "}
              </label>
              <input
                type="radio"
                id="rdo2"
                class="radio-input"
                name="radio-group"
              />
              <label for="rdo2" class="radio-label">
                <span class="radio-border"></span>
                <i
                  class="fa-solid fa-graduation-cap me-1"
                  style={{ color: "#1B759A" }}
                ></i>{" "}
                Mentee{" "}
              </label>
              <input
                type="radio"
                id="rdo3"
                class="radio-input"
                name="radio-group"
              />
              <label for="rdo3" class="radio-label">
                <span class="radio-border"></span>
                <i
                  class="fa-solid fa-briefcase me-1"
                  style={{ color: "#1B759A" }}
                ></i>{" "}
                Job Seeker{" "}
              </label>
            </div>
          </div>

          <div class="csfvgdtrfs cihseriniewr mb-4 position-relative">
            <div class="col-lg-12">
              <p class="mb-0 d-flex align-items-center">
                <b>Register Using :</b>{" "}
                <button class="btn vcetgvfeeeee ms-2 d-flex align-items-center btn-primary">
                  <img src="images/deeteewe.png" class="me-2" alt="deeteewe" />{" "}
                  LinkedIn
                </button>
              </p>
            </div>
          </div>
        </div>

        <div class="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">
                  <b>First Name</b>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="First Name"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-4">
                <label for="exampleInputPassword1" class="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">
                  <b>Mobile Number</b>
                </label>

                <input
                  id="phone"
                  class="form-control"
                  type="tel"
                  name="phone"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="csfvgdtrfs mb-4 position-relative">
                <label for="exampleInputEmail1" class="form-label">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  aria-describedby="emailHelp"
                />

                <i class="fa-solid fa-envelopes-bulk position-absolute"></i>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="csfvgdtrfs mb-4 position-relative">
                <label for="exampleInputEmail1" class="form-label">
                  <b>Choose A Password</b>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Password must be at least 8 characters"
                  aria-describedby="emailHelp"
                />

                <i class="fa-solid fa-eye position-absolute"></i>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="csfvgdtrfs mb-4 position-relative">
                <label for="exampleInputEmail1" class="form-label">
                  <b>Confirm Password</b>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Type your password again"
                  aria-describedby="emailHelp"
                />

                <i class="fa-solid fa-eye position-absolute"></i>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="csfvgdtrfs mb-4 position-relative">
                <label for="exampleInputEmail1" class="form-label">
                  <b>Can we use your LinkedIn Photo for the Profile Pic</b>
                </label>
                <input
                  id="phone"
                  type="file"
                  name="phone"
                  class="form-control"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="csfvgdtrfs mb-4 position-relative">
                <label for="exampleInputEmail1" class="form-label">
                  <b>Click Photo</b>
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  class="form-control"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="csfvgdtrfs mb-4 position-relative">
                <label for="exampleInputEmail1" class="form-label">
                  <b>Social Media Profile</b>
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  class="form-control"
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
