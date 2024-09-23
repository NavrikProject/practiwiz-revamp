import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CountryData from "../../../data/CountryData.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ApiURL } from "../../../../Utils/ApiURL";

const Mentorprofile1 = ({ profiledata, user, token }) => {
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const url = ApiURL();
  // const mentor_profile_photo = profiledata.mentor_profile_photo; // Add photo to formData
  const [formData, setFormData] = useState({
    mentor_firstname: profiledata?.user_firstname,
    mentor_lastname: profiledata?.user_lastname,
    mentor_phone_number: profiledata?.user_phone_number,
    mentor_email: profiledata?.user_email,
    social_media_profile: profiledata?.mentor_social_media_profile,
    mentor_country: profiledata?.mentor_country,
    mentor_city: profiledata?.mentor_city,
  });

  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(CountryData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      mentor_phone_number: phone,
    });
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFormData({
        ...formData,
        mentor_profile_photo: fileURL, // Update photo in formData
      });
    }
  };

  const handleDeleteClick = () => {
    setFormData({
      ...formData,
      mentor_profile_photo: null, // Remove photo from formData
    });
    fileInputRef.current.value = "";
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const validateForm = () => {
    const { social_media_profile, mentor_country } = formData;

    if (!social_media_profile || !mentor_country) {
      toast.error("All fields are required!");
      return false;
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
            `${url}api/v1/mentor/dashboard/update/profile-1`,
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
    <main>
      {!isEditing && (
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
      <div className="huygrut d-flex py-4 align-items-center">
        <div className="deuirr_circle position-relative overflow-hidden me-3 iijieirr_left">
          <div>
            <img
              src={
                formData.mentor_profile_photo ||
                profiledata.mentor_profile_photo
              }
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
        </div>
        <button
          className="btn btn-main me-3"
          type="button"
          onClick={handleButtonClick}
        >
          Upload Avatar
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <button
          className="btn btn-transparent"
          type="button"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>

      <div className="doiherner_wrapper">
        <div className="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4">
                <label className="form-label">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  name="mentor_firstname"
                  className="form-control"
                  placeholder="First Name"
                  value={formData.mentor_firstname}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-4">
                <label className="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  name="mentor_lastname"
                  className="form-control"
                  placeholder="Last Name"
                  value={formData.mentor_lastname}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-4">
                <label className="form-label">
                  <b>Mobile Number</b>
                </label>
                <PhoneInput
                  country={"in"}
                  value={formData.mentor_phone_number}
                  onChange={handlePhoneChange}
                  disabled
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label className="form-label">
                  <b>Email</b>
                </label>
                <input
                  disabled
                  type="email"
                  name="mentor_email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.mentor_email}
                  onChange={handleInputChange}
                />
                <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label className="form-label">
                  <b>Linkedin Social Media Profile</b>
                </label>
                <input
                  id="phone"
                  type="text"
                  name="social_media_profile"
                  className="form-control"
                  placeholder="Linkedin Social Media Profile link"
                  value={formData.social_media_profile}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-4">
                <label className="form-label">
                  <b>Which Country You Live in?</b>
                </label>
                <select
                  className="form-select"
                  name="mentor_country"
                  value={formData.mentor_country}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="">{profiledata.mentor_country}</option>
                  {options.map((option) => (
                    <option key={option.country_id} value={option.country_name}>
                      {option.country_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="csfvgdtrfs mb-4 position-relative">
                <label
                  // htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  <b>City/State</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="mentor_city"
                  placeholder="City"
                  aria-describedby="emailHelp"
                  value={formData.mentor_city}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />

                <i className="fa-solid fa-map-location-dot position-absolute"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group">
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
    </main>
  );
};

export default Mentorprofile1;
