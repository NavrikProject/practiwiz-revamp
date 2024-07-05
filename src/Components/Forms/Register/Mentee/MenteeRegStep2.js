import React from "react";

const MenteeRegStep2 = ({
  page,
  setPage,
  FormTitles,
  selectedOption,
  handleChange,
  setPageCount,
}) => {
  return (
    <div className="step" id="step2">
      <h4 className="text-center">
        <img src="images/icons8-account-96.webp" alt="" className="me-1" />
        Step 2: More About You
      </h4>

      <div className="ihduwfr_form_wrapper mt-4">
        <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
          <label for="exampleInputEmail1" className="form-label">
            I Am A
          </label>
          <br />
          <input
            type="radio"
            id="rdo4"
            checked
            className="radio-input"
            name="radio-group1"
          />
          <label for="rdo4" className="radio-label">
            <span className="radio-border"></span> Student
          </label>
          <input
            type="radio"
            id="rdo5"
            className="radio-input"
            name="radio-group1"
          />
          <label for="rdo5" className="radio-label">
            <span className="radio-border"></span> Working Professional
          </label>
          <input
            type="radio"
            id="rdo6"
            className="radio-input"
            name="radio-group1"
          />
          <label for="rdo6" className="radio-label">
            <span className="radio-border"></span> Corporate
          </label>
          <input
            type="radio"
            id="rdo10"
            className="radio-input"
            name="radio-group1"
          />
          <label for="rdo10" className="radio-label">
            <span className="radio-border"></span> Fresher
          </label>
        </div>

        <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
          <label for="exampleInputEmail1" className="form-label">
            Gender
          </label>
          {/* </br> */}

          <input
            type="radio"
            id="rdo7"
            checked
            className="radio-input"
            name="radio-group2"
          />
          <label for="rdo7" className="radio-label">
            <span className="radio-border"></span> Male
          </label>

          <input
            type="radio"
            id="rdo8"
            className="radio-input"
            name="radio-group2"
          />
          <label for="rdo8" className="radio-label">
            <span className="radio-border"></span> Female
          </label>

          <input
            type="radio"
            id="rdo9"
            className="radio-input"
            name="radio-group2"
          />
          <label for="rdo9" className="radio-label">
            <span className="radio-border"></span> Other
          </label>
        </div>

        <div className="fiurhetit_tag_input mb-4">
          <label for="" className="form-label">
            Your Skill *
          </label>

          <input
            name="tags"
            className="form-control"
            placeholder="Eg., Business Analyst, Data Scientist..."
            autofocus
          />
        </div>

        <div className="mb-4">
          <label for="" className="form-label">
            About Yourself *
          </label>

          <textarea
            type="text"
            className="form-control"
            placeholder="Write something about yourself"
          ></textarea>
        </div>
      </div>

      <div className="d-flex justify-content-between pt-3">
        <button
          type="button"
          className="btn dgheuih_btn_prev btn-main"
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Previous
        </button>

        <button
          type="button"
          className="btn dgheuih_btn_next btn-main"
          onClick={(event) => setPageCount(event)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MenteeRegStep2;
