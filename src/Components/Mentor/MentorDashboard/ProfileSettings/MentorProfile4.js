import React from "react";
import CurrencyData from "../../../data/Currency.json";
import { useForm } from "react-hook-form";
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
const conversionRates = {
  INR: 1,
  USD: 83.0,
  CAD: 61.0,
  GBP: 100.0,
  AUD: 53.0,
};
const MentorProfile4 = ({ profiledata, user, token }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const url = ApiURL();
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm({});
  const [formData, setFormData] = useState({
    mentor_sessions_free_of_charge: profiledata.mentor_sessions_free_of_charge,
    mentor_guest_lectures_interest: profiledata.mentor_guest_lectures_interest,
    mentor_curating_case_studies_interest:
      profiledata.mentor_curating_case_studies_interest,
    mentor_timezone: profiledata.mentor_timezone,
    mentor_language: profiledata.mentor_language,
    mentor_currency_type: profiledata.mentor_currency_type,
    mentor_session_price: profiledata.mentor_session_price,
  });

  const priceOptions = [
    { value: 800, label: "800" },
    { value: 1000, label: "1000" },
    { value: 1200, label: "1200" },
    { value: 1500, label: "1500" },
    { value: 1800, label: "1800" },
    { value: 2000, label: "2000" },
    { value: 2300, label: "2300" },
    { value: 2500, label: "2500" },
    { value: 3000, label: "3000" },
  ];
  const SessionsPrice = formData?.mentor_session_price
  const filteredOptions = priceOptions.filter(
    (option) => option.value !== SessionsPrice
  );
  const [currency, setCurrency] = useState(formData.mentor_currency_type);
  const [price, setPrice] = useState(formData.mentor_session_price);
  const [convertedPriceINR, setConvertedPriceINR] = useState(null);
  const [error, setError] = useState("");

  // Min and max limit in INR
  const minINR = 800;
  const maxINR = 1600;

  // Convert INR limits to the selected currency
  const minCurrencyLimit = (minINR / conversionRates[currency]).toFixed(2);
  const maxCurrencyLimit = (maxINR / conversionRates[currency]).toFixed(2);

  const handlePriceChange = (e) => {
    const enteredValue = parseFloat(e.target.value);

    if (isNaN(enteredValue)) {
      setError("Please enter a valid number");
      setPrice("");
      setConvertedPriceINR(null);
      return;
    }

    // Convert entered value to INR
    const valueInINR = enteredValue * conversionRates[currency];

    // Validate against INR limits
    if (valueInINR < minINR) {
      setError(`Minimum allowed value is ${minCurrencyLimit} ${currency}`);
      setConvertedPriceINR(null);
    } else if (valueInINR > maxINR) {
      setError(`Maximum allowed value is ${maxCurrencyLimit} ${currency}`);
      setConvertedPriceINR(null);
    } else {
      setError("");
      setConvertedPriceINR(valueInINR);
    }

    setPrice(e.target.value);
    setFormData({ ...formData, mentor_session_price: e.target.value });
  };

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
      mentor_session_price,
    } = formData;

    if (
      !mentor_sessions_free_of_charge ||
      !mentor_guest_lectures_interest ||
      !mentor_curating_case_studies_interest ||
      !mentor_timezone ||
      !mentor_language ||
      !mentor_session_price
    ) {
      return toast.error("All fields are required!"), false;
    }

    return true;
  };
  const errorvalidation = () => {
    if (error === "") {
      return true;
    } else {
      return toast.error("Please enter a valid number"), false;
    }
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    console.log("Final data ", formData);
    event.preventDefault();
    if (validateForm() && errorvalidation()) {
      try {
        dispatch(showLoadingHandler());
        const res = await Promise.race([
          axios.post(
            `${url}api/v1/mentor/dashboard/update/profile-4`,
            {
              formData,
              mentorUserDtlsId: user.user_id,
              mentor_email: profiledata?.mentor_email,
              mentorPhoneNumber: profiledata?.mentor_phone_number,
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
              <label htmlFor="currencySelect" className="form-label">
                <b>
                  Currency <span className="RedColorStarMark">*</span>
                </b>
              </label>
              <select
                value={currency}
                disabled
                name="mentor_currency_type"
                className="form-select"
                {...register("mentor_currency_type", {
                  required: "Please select your Currency",
                })}
                onChange={(e) => {
                  setCurrency(e.target.value);
                  const updatedPrice = (
                    price / conversionRates[currency]
                  ).toFixed(2);
                  setPrice(updatedPrice);
                  setFormData({
                    ...formData,
                    mentor_currency_type: e.target.value,
                    mentor_session_price: null,
                  });
                  setPrice(" ");
                  // setValue("mentor_session_price", null);
                  // setFormData({
                  //   ...formData,
                  //   mentor_session_price: null,
                  // });
                }}
              >
                <option value="INR">INR - Indian Rupee</option>
                <option value="USD">USD - US Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="AUD">AUD - Australian Dollar</option>
              </select>

              {errors.mentor_currency_type && (
                <p className="Error-meg-login-register">
                  {errors.mentor_currency_type.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="priceInput" className="form-label">
                <b>
                  Pricing ({currency}){" "}
                  <span className="RedColorStarMark">*</span>
                </b>
              </label>
              <select
                className="form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_session_price"
              >
               
                {filteredOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Other form fields (sessions free of charge, guest lectures, etc.) remain unchanged */}

          {/* ... rest of the fields and the submit button */}

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  For Your Alums Would You Be Fine to Do Sessions Free of Charge
                  <span className="RedColorStarMark">*</span>
                </b>
              </label>
              <select
                className="form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_sessions_free_of_charge"
              >
                {formData.mentor_sessions_free_of_charge === "" && (
                  <>
                    <option Value="">Choose an option</option>
                    <option Value="Yes">Yes</option>
                    <option value="No">No</option>
                  </>
                )}
                {formData.mentor_sessions_free_of_charge === "Yes" && (
                  <>
                    <option value={formData.mentor_sessions_free_of_charge}>
                      {formData.mentor_sessions_free_of_charge}
                    </option>
                    <option value="No">No</option>
                  </>
                )}
                {formData.mentor_sessions_free_of_charge === "No" && (
                  <>
                    <option value={formData.mentor_sessions_free_of_charge}>
                      {formData.mentor_sessions_free_of_charge}
                    </option>
                    <option value="Yes">Yes</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  Would You Be Interested in Delivering Guest Lectures?{" "}
                  <span className="RedColorStarMark">*</span>
                </b>
              </label>

              <select
                className="form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_guest_lectures_interest"
              >
                {formData.mentor_guest_lectures_interest === "" && (
                  <>
                    <option Value="">Choose an option</option>
                    <option Value="Yes">Yes</option>
                    <option value="No">No</option>
                  </>
                )}
                {formData.mentor_guest_lectures_interest === "Yes" && (
                  <>
                    <option value={formData.mentor_guest_lectures_interest}>
                      {formData.mentor_guest_lectures_interest}
                    </option>
                    <option value="No">No</option>
                  </>
                )}
                {formData.mentor_guest_lectures_interest === "No" && (
                  <>
                    <option value={formData.mentor_guest_lectures_interest}>
                      {formData.mentor_guest_lectures_interest}
                    </option>{" "}
                    <option value="Yes">Yes</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  Would You Be Interested in Curating Case Studies?{" "}
                  <span className="RedColorStarMark">*</span>
                </b>
              </label>

              <select
                className="form-select"
                onChange={handleInputChange}
                disabled={!isEditing}
                name="mentor_curating_case_studies_interest"
              >
                {formData.mentor_curating_case_studies_interest === "" && (
                  <>
                    <>
                      <option Value="">Choose an option</option>
                      <option Value="Yes">Yes</option>
                      <option value="No">No</option>
                    </>
                  </>
                )}
                {formData.mentor_curating_case_studies_interest === "Yes" && (
                  <>
                    <option
                      value={formData.mentor_curating_case_studies_interest}
                    >
                      {formData.mentor_curating_case_studies_interest}
                    </option>{" "}
                    <option value="No">No</option>
                  </>
                )}
                {formData.mentor_curating_case_studies_interest === "No" && (
                  <>
                    <option
                      value={formData.mentor_curating_case_studies_interest}
                    >
                      {formData.mentor_curating_case_studies_interest}
                    </option>{" "}
                    <option value="Yes">Yes</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  Your Timezone <span className="RedColorStarMark">*</span>
                </b>
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
                <b>
                  Language <span className="RedColorStarMark">*</span>
                </b>
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
