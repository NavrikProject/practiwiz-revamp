import React from "react";
import CurrencyData from "../../../data/Currency.json";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Language } from "../../../data/Languages";
import { option_fro_timezone } from "../../../data/Timezones";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ApiURL } from "../../../../Utils/ApiURL";

const MentorProfile4 = ({ profiledata, user, token }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const url = ApiURL();
  const [formData, setFormData] = useState({
    mentor_sessions_free_of_charge: profiledata.mentor_sessions_free_of_charge,
    mentor_guest_lectures_interest: profiledata.mentor_guest_lectures_interest,
    mentor_curating_case_studies_interest:
      profiledata.mentor_curating_case_studies_interest,
    mentor_timezone: profiledata.mentor_timezone,
    mentor_language: profiledata.mentor_language,
    mentor_currency_type: profiledata.mentor_currency_type,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const validateForm = () => {
    const {
      mentor_sessions_free_of_charge,
      mentor_guest_lectures_interest,
      mentor_curating_case_studies_interest,
      mentor_timezone,
      mentor_language,
    } = formData;

    if (
      !mentor_sessions_free_of_charge ||
      !mentor_guest_lectures_interest ||
      !mentor_curating_case_studies_interest ||
      !mentor_timezone ||
      !mentor_language
    ) {
      return toast.error("All fields are required!");
    }

    return true;
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        dispatch(showLoadingHandler());
        const res = await Promise.race([
          axios.post(
            `${url}api/v1/mentor/dashboard/update/profile-4`,
            {
              formData,
              userDtlsId: user.user_id,
            },
            {
              headers: { authorization: "Bearer " + token },
            }
          ),
          new Promise(
            (_, reject) =>
              setTimeout(() => reject(new Error("Request timed out")), 45000) // 45 seconds timeout
          ),
        ]);

        if (res.data.success) {
          toast.success("Profile Details updated successfully");
          setIsEditing(false);
        } else if (res.data.error) {
          toast.error(res.data.error);
          setIsEditing(false);
        }
      } catch (error) {
        if (error.message === "Request timed out") {
          toast.error("Update failed due to a timeout. Please try again.");
        } else {
          toast.error(
            "Error in updating the profile details, please try again!"
          );
        }
      } finally {
        dispatch(hideLoadingHandler());
        setIsEditing(false);
      }
    }
  };

  return (
    <div className="doiherner_wrapper">
      <div className="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
        {!isEditing && (
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              type="button"
              className="btn juybeubrer_btn btn-primary"
              style={{ textAlign: "right" }}
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
        )}
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Currency</b>
              </label>

              <select className="form-select" disabled={true}>
                <option value={formData.mentor_currency_type}>
                  {formData.mentor_currency_type}{" "}
                </option>
                {Object.values(CurrencyData).map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Pricing</b>
              </label>
              <input
                type="number"
                name=""
                value={profiledata.mentor_session_price}
                min={0}
                className="form-control"
                placeholder=" Enter Your Amount..."
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  For Your Alums Would You Be Fine to Do Sessions Free of Charge
                </b>
              </label>

              <select
                className="form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_sessions_free_of_charge"
              >
                {formData.mentor_sessions_free_of_charge === "Yes" && (
                  <>
                    <option value={formData.mentor_sessions_free_of_charge}>
                      {formData.mentor_sessions_free_of_charge}
                    </option>{" "}
                    <option>No</option>
                  </>
                )}
                {formData.mentor_sessions_free_of_charge !== "Yes" && (
                  <>
                    <option value={formData.mentor_sessions_free_of_charge}>
                      {formData.mentor_sessions_free_of_charge}
                    </option>{" "}
                    <option>Yes</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Would You Be Interested in Delivering Guest Lectures?</b>
              </label>

              <select
                className="form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_guest_lectures_interest"
              >
                {formData.mentor_guest_lectures_interest === "Yes" && (
                  <>
                    <option value={formData.mentor_guest_lectures_interest}>
                      {formData.mentor_guest_lectures_interest}
                    </option>{" "}
                    <option>No</option>
                  </>
                )}
                {formData.mentor_guest_lectures_interest !== "Yes" && (
                  <>
                    <option value={formData.mentor_guest_lectures_interest}>
                      {formData.mentor_guest_lectures_interest}
                    </option>{" "}
                    <option>Yes</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Would You Be Interested in Curating Case Studies?</b>
              </label>

              <select
                className="form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_curating_case_studies_interest"
              >
                {formData.mentor_curating_case_studies_interest === "Yes" && (
                  <>
                    <option
                      value={formData.mentor_curating_case_studies_interest}
                    >
                      {formData.mentor_curating_case_studies_interest}
                    </option>{" "}
                    <option>No</option>
                  </>
                )}
                {formData.mentor_curating_case_studies_interest !== "Yes" && (
                  <>
                    <option
                      value={formData.mentor_curating_case_studies_interest}
                    >
                      {formData.mentor_curating_case_studies_interest}
                    </option>{" "}
                    <option>Yes</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Your Timezone</b>
              </label>

              <select
                className="form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_timezone"
              >
                <option defaultValue={formData.mentor_timezone}>
                  {formData.mentor_timezone}
                </option>
                {option_fro_timezone?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Language</b>
              </label>

              <select
                className="form-select "
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_language"
              >
                <option defaultValue={formData.mentor_language}>
                  {formData.mentor_language}
                </option>
                {Language.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {isEditing && (
          <div className="d-flex justify-content-between m-4">
            <button
              type="button"
              onClick={handleEditClick}
              className="btn juybeubrer_btn btn-primary"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn juybeubrer_btn btn-primary"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorProfile4;
