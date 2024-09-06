import React from "react";
import { useState } from "react";
const MenteeProfilePersonalDetails = () => {
    const [ifEdit, setifEdit] = useState(false)
    const handleEditClick = () => {
      setifEdit(!ifEdit);
    };

    
  return (
    <div className="col-lg-10 ps-0">
<div className="">
  <div className="container">
    <div className="col-lg-10 col-md-12">
      <div className="mentor-prf-settings py-5">
        {!ifEdit && (
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              type="button"
              className="btn btn-primary "
              style={{ textAlign: "right" }}
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
        )}
        <h3>Profile Settings</h3>

        <h5>Update your profile</h5>

        <form>
        <div className="huygrut d-flex py-4 align-items-center">
        <div className="deuirr_circle position-relative overflow-hidden me-3 iijieirr_left">
          <div>
            {/* <img
              src={
               
              }
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            /> */}
          </div>
        </div>
        <button
          className="btn btn-main me-3"
          type="button"
          
        >
          Upload Avatar
        </button>
        <input
          type="file"
          accept="image/*"
          
          style={{ display: "none" }}
        />
        <button
          className="btn btn-transparent"
          type="button"
          
        >
          Delete
        </button>
      </div>
          <div className="row">
            <div className="col-lg-6 pb-3">
              <label htmlFor="" className="form-label">
                First Name
              </label>

              <input
                className="form-control"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="col-lg-6 pb-3" id="skill-tag">
              <label htmlFor="" className="form-label">
                Last Name
              </label>
              <input
                className="form-control"
                placeholder="Eg., Business Analyst, Data Scientist..."
              />
            </div>

            <div className="col-lg-6 pb-3" id="skill-tag">
              <label htmlFor="" className="form-label">
                Gender
              </label>
             
              <select name="Gender" id="" className="form-select">
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="col-lg-6 pb-3" id="skill-tag">
              <label htmlFor="" className="form-label">
                Phone Number
              </label>
              <input
                className="form-control"
                placeholder="Eg., Business Analyst, Data Scientist..."
              />
            </div>
            <div className="col-lg-6 pb-3" id="skill-tag">
              <label htmlFor="" className="form-label">
               E-Mail Id
              </label>
              <input
                className="form-control"
                placeholder="Eg., Business Analyst, Data Scientist..."
              />
            </div>


            <div className="ufguirniirtr position-relative col-lg-6 pb-3">
              <label htmlFor="" className="form-label">
                Languages
              </label>

              <input
                type="text"
                id="ypmyInput"
                name="myCountry"
                className="form-control"
                placeholder="Type what you do"
              />

              <div id="ypautosuggestions"></div>
            </div>   </div>


            <div className="row">
            <div className="col-lg-6">
              <label htmlFor="" className="form-label">
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

          <div className="ufguirniirtr position-relative col-lg-6 pb-3">
            <label htmlFor="" className="form-label">
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
          </div>
          {ifEdit && (
            <div className="d-flex justify-content-between pb-3">
              <button
                type="button"
                onClick={handleEditClick}
                className="btn juybeubrer_btn btn-primary"
              >
                Close
              </button>
              <button
                // onClick={handleSubmit}
                type="submit"
                className="btn juybeubrer_btn btn-primary"
              >
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    
  )
}

export default MenteeProfilePersonalDetails
