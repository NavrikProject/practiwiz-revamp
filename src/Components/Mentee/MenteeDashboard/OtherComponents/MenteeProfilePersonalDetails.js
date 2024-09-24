import React from "react";
import { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Language } from "../../../data/Languages";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ApiURL } from "../../../../Utils/ApiURL";
const MenteeProfilePersonalDetails = ({ singleMentee, user, token }) => {
  const url = ApiURL();
  const dispatch = useDispatch();
  const [ifEdit, setifEdit] = useState(false);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    mentee_profile_photo: singleMentee[0]?.mentee_profile_pic_url,
    mentee_firstname: singleMentee[0]?.mentee_firstname,
    mentee_lastname: singleMentee[0]?.mentee_lastname,
    mentee_phone_number: singleMentee[0]?.mentee_phone_number,
    mentee_email: singleMentee[0]?.mentee_email,
    mentee_instagram_link: singleMentee[0]?.mentee_instagram_url,
    mentee_Twitter_link: singleMentee[0]?.mentee_twitter_url,
    mentee_linkedin_link: singleMentee[0]?.mentee_linkedin_url,
    mentee_language: singleMentee[0]?.mentee_language,
    mentee_gender: singleMentee[0]?.mentee_gender,
    mentee_aboutyouself: singleMentee[0]?.mentee_about,
  });
  const handleEditClick = () => {
    setifEdit(false);
  };
  const validateForm = () => {
    const { mentee_language, mentee_aboutyouself } = formData;
    if (!mentee_language || !mentee_aboutyouself) {
      toast.error("All fields are required!");
      return false;
    }
    return true;
  };
  const handleSavechanges = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        dispatch(showLoadingHandler());
        const response = await Promise.race([
          axios.post(
            `${url}api/v1/mentee/dashboard/profile/profile-details`,
            {
              formData,
              menteeUserDtlsId: user?.user_id,
            },
            {
              headers: { authorization: "Bearer " + token },
            }
          ),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), 45000)
          ),
        ]);
        if (response.data.success) {
          dispatch(hideLoadingHandler());
          toast.success("Profile Details changed successfully");
        }
        if (response.data.error) {
          dispatch(hideLoadingHandler());
          toast.error(
            "There is some error while updating the profile details. Please try again"
          );
        }
      } catch (error) {
        toast.error(
          "There is some error while updating the profile details. Please try again"
        ); // Stop loading
        dispatch(hideLoadingHandler());
      } finally {
        dispatch(hideLoadingHandler());
        setifEdit(false);
      }
    }
  };

  const handleEditBtn = () => {
    setifEdit(true);
  };

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
      mentee_phone_number: phone,
    });
  };
  const [menteeProfilePhoto, setMenteeProfilePhoto] = useState();

  const onSubmit = async (data) => {
    console.log("called this function");
    const profileFormData = new FormData();
    profileFormData.append("Image", data);
    // Log form data including the selected file
  };

  const UpdateMenteeProfilePhotoHandlers = async () => {
    if (menteeProfilePhoto) {
      const fileUrl = URL.createObjectURL(menteeProfilePhoto);
      setFormData({
        ...formData,
        mentee_profile_photo: fileUrl, // Store file URL for preview
      });
      // Update the react-hook-form state with the selected file
      setValue("mentee_profile_photo", menteeProfilePhoto); // Save the file to form data
      const menteeProfilePhotoFormData = new FormData();
      menteeProfilePhotoFormData.append("image", menteeProfilePhoto);
      try {
        dispatch(showLoadingHandler());
        const response = await Promise.race([
          axios.post(
            `${url}api/v1/mentee/dashboard/profile/profile-picture`,
            {
              menteeProfilePhotoFormData,
              menteeUserDtlsId: user?.user_id,
            },
            {
              headers: { authorization: "Bearer " + token },
            }
          ),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), 45000)
          ),
        ]);
        if (response.data.success) {
          dispatch(hideLoadingHandler());
          toast.success("Profile Details changed successfully");
        }
        if (response.data.error) {
          dispatch(hideLoadingHandler());
          toast.error(
            "There is some error while updating the profile details. Please try again"
          );
        }
      } catch (error) {
        toast.error(
          "There is some error while updating the profile details. Please try again"
        ); // Stop loading
        dispatch(hideLoadingHandler());
      } finally {
        dispatch(hideLoadingHandler());
        setifEdit(false);
      }
    }
  };
  return (
    <div className="col-lg-10 ps-0">
      <div className="">
        <div className="container">
          <div className="col-lg-10 col-md-12">
            <div className="mentee-prf-settings py-5">
              {!ifEdit && (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h3>Profile Settings</h3>
                    <h5>Update your profile</h5>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary "
                      style={{ textAlign: "right" }}
                      onClick={handleEditBtn}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
              <div className="huygrut d-flex py-4 align-items-center">
                <div className="deuirr_circle position-relative overflow-hidden me-3 iijieirr_left">
                  <div>
                    <img
                      src={formData.mentee_profile_photo}
                      alt="Selected"
                      style={{ maxWidth: "100%", maxHeight: "400px" }}
                    />
                  </div>
                </div>
                {ifEdit && (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      // {...register("mentee_profile_photo")}
                      // Keep input hidden
                      onChange={(e) => {
                        setMenteeProfilePhoto(e.target.files[0]);
                      }} // Handle file change
                    />
                  </>
                )}
                {ifEdit && menteeProfilePhoto && (
                  <button
                    type="button"
                    className="btn btn-main me-3"
                    onClick={UpdateMenteeProfilePhotoHandlers} // Trigger file input on button click
                  >
                    Upload Profile Photo
                  </button>
                )}
                {/* <button className="btn btn-transparent" type="button">
                    Delete
                  </button> */}
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6 pb-3">
                    <label htmlFor="" className="form-label">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="mentee_firstname"
                      className="form-control"
                      placeholder="First Name"
                      value={formData.mentee_firstname}
                      onChange={handleInputChange}
                      disabled
                    />
                  </div>
                  <div className="col-lg-6 pb-3" id="skill-tag">
                    <label htmlFor="" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="mentee_lastname"
                      className="form-control"
                      placeholder="Last Name"
                      value={formData.mentee_lastname}
                      onChange={handleInputChange}
                      disabled
                    />
                  </div>
                  <div className="col-lg-6 pb-3" id="skill-tag">
                    <label htmlFor="" className="form-label">
                      Gender
                    </label>

                    <select
                      name="Gender"
                      id=""
                      className="form-select"
                      disabled={!ifEdit}
                    >
                      <option value="">{formData.mentee_gender}</option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Other</option>
                    </select>
                  </div>
                  <div className="col-lg-6 pb-3" id="skill-tag">
                    <label htmlFor="" className="form-label">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"in"}
                      value={formData.mentee_phone_number}
                      onChange={handlePhoneChange}
                      disabled
                    />
                  </div>
                  <div className="col-lg-6 pb-3" id="skill-tag">
                    <label htmlFor="" className="form-label">
                      E-Mail Id
                    </label>
                    <input
                      disabled
                      type="email"
                      name="mentee_email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.mentee_email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="ufguirniirtr position-relative col-lg-6 pb-3">
                    <label htmlFor="" className="form-label">
                      Languages
                    </label>

                    <select
                      className="form-select "
                      onChange={handleInputChange}
                      disabled={!ifEdit}
                      name="mentee_language"
                    >
                      <option defaultValue={formData.mentee_language}>
                        {formData.mentee_language}
                      </option>
                      {Language.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div id="ypautosuggestions"></div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="" className="form-label">
                      Your Social Account Link *
                    </label>
                    <input
                      id="phone"
                      type="text"
                      name="mentee_linkedin_link"
                      className="form-control mt-1"
                      placeholder="Linkedin Social Media Profile link"
                      value={formData.mentee_linkedin_link}
                      onChange={handleInputChange}
                      disabled={!ifEdit}
                    />

                    <input
                      id="phone"
                      type="text"
                      name="mentee_instagram_link"
                      className="form-control mt-1"
                      placeholder="Instagram Social Media Profile link"
                      value={formData.mentee_instagram_link}
                      onChange={handleInputChange}
                      disabled={!ifEdit}
                    />

                    <input
                      id="phone"
                      type="text"
                      name="mentee_Twitter_link"
                      className="form-control mt-1"
                      placeholder="Twitter Social Media Profile link"
                      value={formData.mentee_Twitter_link}
                      onChange={handleInputChange}
                      disabled={!ifEdit}
                    />
                  </div>

                  <div className="ufguirniirtr position-relative col-lg-6 pb-3">
                    <label htmlFor="" className="form-label">
                      About Me *
                    </label>

                    <textarea
                      name="mentee_aboutyouself"
                      className="form-control"
                      style={{ height: "150px" }}
                      placeholder="Write something about yourself"
                      value={formData.mentee_aboutyouself}
                      onChange={handleInputChange}
                      disabled={!ifEdit}
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
                      onClick={handleSavechanges}
                      type="button"
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
  );
};

export default MenteeProfilePersonalDetails;
