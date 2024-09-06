import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CountryData from "../../../data/CountryData.json";

const Mentorprofile1 = (props) => {
  const [userdata, setUserdata] = useState(props.profiledata);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const mentor_profile_photo = userdata.mentor_profile_photo; // Add photo to formData
  const [formData, setFormData] = useState({
    mentor_firstname: userdata.user_firstname,
    mentor_lastname: userdata.user_lastname,
    mentor_phone_number: userdata.user_phone_number,
    mentor_email: userdata.user_email,
    social_media_profile: userdata.mentor_social_media_profile,
    mentor_country: userdata.mentor_country,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic here to handle form submission, like sending data to an API
    setIsEditing(false);
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
                formData.mentor_profile_photo || userdata.mentor_profile_photo
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
                  disabled={!isEditing}
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
                  disabled={!isEditing}
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
                  disabled={!isEditing}
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
                  <b>Social Media Profile</b>
                </label>
                <input
                  id="phone"
                  type="text"
                  name="social_media_profile"
                  className="form-control"
                  placeholder="Social media profile link"
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
                  <option value="">{userdata.mentor_country}</option>
                  {options.map((option) => (
                    <option key={option.country_id} value={option.country_name}>
                      {option.country_name}
                    </option>
                  ))}
                </select>
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
