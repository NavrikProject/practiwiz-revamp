import React from "react";

const MenteeProfileSettings = () => {
  return (
    <div className="col-lg-10 ps-0">
      <div className="difuhtre_content">
        <div className="container">
          <div className="col-lg-10 col-md-12">
            <div className="mentor-prf-settings py-5">
              <h3>Profile Settings</h3>

              <h5>Update your profile</h5>

              <form>
                <div className="huygrut d-flex py-3 align-items-center">
                  <div className="deuirr_circle position-relative overflow-hidden me-3">
                    <img src="images/idherreee.webp" width="100%" alt="" />
                  </div>

                  <button className="btn btn-main me-3">Upload Avatar</button>

                  <button className="btn btn-transparent">Delete</button>
                </div>

                <div className="mb-4">
                  <label for="" className="form-label">
                    You Name *
                  </label>

                  <input
                    className="form-control"
                    placeholder="Enter Your Name"
                    autofocus
                  />
                </div>

                <div className="mb-4" id="skill-tag">
                  <label for="" className="form-label">
                    Your Skills *
                  </label>
                  <input
                    className="form-control"
                    placeholder="Eg., Business Analyst, Data Scientist..."
                    autofocus
                  />
                </div>

                <div className="ufguirniirtr position-relative mb-4">
                  <label for="" className="form-label">
                    About Me *
                  </label>

                  <textarea
                    type="text"
                    id="ammyInput"
                    name="myCountry"
                    className="form-control"
                    placeholder="Write something about yourself"
                  ></textarea>

                  <div id="amautosuggestions"></div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="ufguirniirtr position-relative mb-4">
                      <label for="" className="form-label">
                        Your Profession *
                      </label>

                      <input
                        type="text"
                        id="ypmyInput"
                        name="myCountry"
                        className="form-control"
                        placeholder="Type what you do"
                      />

                      <div id="ypautosuggestions"></div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="ufguirniirtr position-relative mb-4">
                      <label for="" className="form-label">
                        You Are Expertise In *
                      </label>

                      <input
                        type="text"
                        id="yemyInput"
                        name="myCountry"
                        className="form-control"
                        placeholder="Start Typing..."
                      />

                      <div id="yeautosuggestions"></div>
                    </div>
                  </div>
                </div>

                <div className="ufguirniirtr position-relative mb-4">
                  <label for="" className="form-label">
                    Professional Experience *
                  </label>

                  <textarea
                    type="text"
                    id="pemyInput"
                    name="myCountry"
                    className="form-control"
                    placeholder="Write About Your Professional Experience"
                  ></textarea>

                  <div id="peautosuggestions"></div>
                </div>

                <div className="mb-4">
                  <label for="" className="form-label">
                    Your Social Account Link *
                  </label>

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Paste Your LinkedIn Profile Link"
                  />

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Paste Your X Profile Link (Previously Twitter)"
                  />

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Paste Your Youtube Link"
                  />
                </div>

                <button className="btn btn-main">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenteeProfileSettings;
