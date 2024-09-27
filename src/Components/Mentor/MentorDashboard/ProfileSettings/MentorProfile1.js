import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CountryData from "../../../data/CountryData.json";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import collegeData from "../../../data/collegesname.json";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ApiURL } from "../../../../Utils/ApiURL";

const Mentorprofile1 = ({ profiledata, user, token }) => {
  console.log();
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const url = ApiURL();
  // const mentor_profile_photo = profiledata.mentor_profile_photo; // Add photo to formData
  const [formData, setFormData] = useState({
    mentor_firstname: profiledata?.mentor_firstname,
    mentor_lastname: profiledata?.mentor_lastname,
    mentor_phone_number: profiledata?.mentor_phone_number,
    mentor_email: profiledata?.mentor_email,
    social_media_profile: profiledata?.mentor_social_media_profile,
    mentor_country: profiledata?.mentor_country,
    mentor_city: profiledata?.mentor_city,
    mentor_institute: profiledata.mentor_institute,
    mentor_academic_qualification: profiledata?.mentor_academic_qualification,
  });
  const edulevel = formData.mentor_academic_qualification;
  const {
    setValue,
    formState: { errors },
  } = useForm();

  const [searchTerm, setSearchTerm] = useState(formData.mentor_institute);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null); // Store selected college

  // Function to handle input change
  const handleInputChange1 = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setValue("mentor_InstituteName", value);
    setDropdownVisible(value !== ""); // Only show dropdown when input is not empty
  };

  // Filter colleges based on the search term
  const filteredColleges = collegeData.filter((item) =>
    item["College Name"]?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  // Function to handle dropdown option click
  const handleOptionClick = (college) => {
    setSelectedCollege(college); // Set selected college
    setSearchTerm(college["College Name"]); // Update input with selected college name
    setDropdownVisible(false); // Hide dropdown after selection
    setValue("mentor_InstituteName", college["College Name"]);
    formData.mentor_institute = college["College Name"];
  };

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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFormData({
        ...formData,
        mentor_profile_photo: fileURL, // Update photo in formData
      });
    }
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
  const [file, setFile] = useState(null);
  const UpdateMentorProfilePhotoHandler = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }
    const fileUrl = URL.createObjectURL(file);
    setFormData({
      ...formData,
      mentee_profile_photo: fileUrl, // Store file URL for preview
    });
    const formData1 = new FormData();
    formData1.append("image", file);
    formData1.append("mentorUserDtlsId", user?.user_id);
    formData1.append("mentorDtlsId", profiledata?.mentor_dtls_id); // Append user ID to the
    // Append user ID to the
    try {
      dispatch(showLoadingHandler());
      const response = await Promise.race([
        axios.post(
          `${url}api/v1/mentor/dashboard/update/profile-picture`,
          formData1,
          {
            headers: {
              authorization: "Bearer " + token,
              // No need to set "Content-Type" header explicitly; Axios does this automatically
            },
          }
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 45000)
        ),
      ]);
      if (response.data.success) {
        dispatch(hideLoadingHandler());
        toast.success("Profile picture updated successfully.");
      } else if (response.data.error) {
        dispatch(hideLoadingHandler());
        toast.error("Error updating profile picture. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile picture.");
      dispatch(hideLoadingHandler());
    } finally {
      dispatch(hideLoadingHandler());
      setIsEditing(false);
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
        {isEditing && (
          <form>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button
              onClick={UpdateMentorProfilePhotoHandler}
              type="submit"
              className="btn btn-main me-3"
            >
              Upload Profile Photo
            </button>
          </form>
        )}
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

            <div className="col-lg-6 mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label mb-0">
                <b>Academic Qualification</b>
              </label>

              <div className="dkjiherer moideuirer_list hello">
                <ul className="ps-0 mb-0">
                  <li>
                    <input
                      type="radio"
                      id="check_11"
                      name="mentor_academic_qualification"
                      className="d-none"
                      value="Post Graduate"
                      defaultChecked={edulevel === "Post Graduate"}
                      onChange={handleInputChange} // Add the onChange event
                      disabled={!isEditing}
                    />
                    <label htmlFor="check_11">Post Graduate</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="check_20"
                      name="mentor_academic_qualification"
                      className="d-none"
                      value="Graduate"
                      defaultChecked={edulevel === "Graduate"}
                      onChange={handleInputChange} // Add the onChange event
                      disabled={!isEditing}
                    />
                    <label htmlFor="check_20">Graduate</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="check_30"
                      name="mentor_academic_qualification"
                      className="d-none"
                      value="Doctorate"
                      defaultChecked={edulevel === "Doctorate"}
                      onChange={handleInputChange} // Add the onChange event
                      disabled={!isEditing}
                    />
                    <label htmlFor="check_30">Doctorate</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" col-lg-6 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Institute/College name</b>
              </label>
              <div className="dkjiherer moideuirer_list hello">
                <div className="dropdown">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a college..."
                    disabled={!isEditing}
                    value={searchTerm} // Ensure input value is controlled
                    onChange={handleInputChange1}
                    onFocus={() => setDropdownVisible(searchTerm !== "")} // Show dropdown when focused
                  />
                  {dropdownVisible && filteredColleges.length > 0 && (
                    <div className="dropdown-content">
                      {filteredColleges.slice(0, 10).map(
                        (
                          college,
                          index // Limit to 10 results
                        ) => (
                          <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(college)}
                          >
                            {college["College Name"]}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
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
                  <b>Which Country do You Live in?</b>
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
                  <b>City</b>
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