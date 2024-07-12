import React from "react";

const MenteeRegStep3 = ({
  page,
  setPage,
  FormTitles,
  selectedOption,
  handleChange,
  setPageCount,
}) => {
  return (
    <div className="step" id="step3">
      <h4 className="text-center">
        <img src="images/icons8-account-96.webp" alt="" className="me-1" />
        Step 3: Confirmation
      </h4>

      <div className="ihduwfr_form_wrapper mt-3">
        <div className="oijfoie_image text-center">
          <img src="images/NAME.png" width="60%" alt="" />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Creating your account and you accepting
            <a href="/terms-condition">Terms & Conditions</a>
          </label>
        </div>

        {/* <!--<button type="submit" className="btn btn-main py-3 mt-3">Create Account</button>--> */}

        <div className="digheirer text-center py-3">
          <h4 className="mb-0">
            <b>OR</b>
          </h4>
        </div>

        <div className="dieyhr_iuhfiderr mt-2">
          <div className="d-flex align-items-center">
            <div className="btn btn-main">
              <img className="me-1" src="images/facebooklog.webp" alt="" />
              Facebook
            </div>

            <div className="btn btn-main">
              <img className="me-1" src="images/googlelog.webp" alt="" />
              Google
            </div>
          </div>
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

        <button type="submit" className="btn dgheuih_btn_next btn-main">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default MenteeRegStep3;
