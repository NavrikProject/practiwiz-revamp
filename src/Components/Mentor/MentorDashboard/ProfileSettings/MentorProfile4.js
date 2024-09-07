import React from "react";

import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

const MentorProfile4 = ({ profiledata, user, token }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    mentor_sessions_free_of_charge: profiledata.mentor_sessions_free_of_charge,
    mentor_guest_lectures_interest: profiledata.mentor_guest_lectures_interest,
    mentor_curating_case_studies_interest:
      profiledata.mentor_curating_case_studies_interest,
    mentor_timezone: profiledata.mentor_timezone,
    mentor_language: profiledata.mentor_language,
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic here to handle form submission, like sending data to an API
    setIsEditing(false);
  };

  const option_fro_timezone = [
    "UTC-12:00: Baker Island Time (BIT)",
    "UTC-11:00: Niue Time (NUT), Samoa Standard Time (ST)",
    "UTC-10:00: Hawaii-Aleutian Standard Time (HAST), Tahiti Time (TAHT)",
    "UTC-09:00: Alaska Standard Time (AKST)",
    "UTC-08:00: Pacific Standard Time (PST)",
    "UTC-07:00: Mountain Standard Time (MST)",
    "UTC-06:00: Central Standard Time (CST)",
    "UTC-05:00: Eastern Standard Time (EST)",
    "UTC-04:00: Atlantic Standard Time (AST), Eastern Caribbean Time (ECT)",
    "UTC-03:00: Argentina Time (ART), Brasília Time (BRT)",
    "UTC-02:00: South Georgia Time (GST)",
    " UTC-01:00: Cape Verde Time (CVT)",
    "UTC±00:00: Coordinated Universal Time (UTC), Greenwich Mean Time (GMT)",
    "UTC+01:00: Central European Time (CET), West Africa Time (WAT)",
    "UTC+03:00: Moscow Time (MSK), East Africa Time (EAT)",
    "UTC+04:00: Azerbaijan Time (AZT), Gulf Standard Time (GST)",
    "UTC+05:00: Pakistan Standard Time (PKT), Yekaterinburg Time (YEKT)",
    "UTC+05:30: Indian Standard Time (IST), Sri Lanka Time (SLT)",
    " UTC+05:45: Nepal Time (NPT)  ",
    " UTC+06:00: Bangladesh Standard Time (BST), Omsk Time (OMST)",
    " UTC+06:30: Cocos Islands Time (CCT)",
    " UTC+07:00: Indochina Time (ICT), Krasnoyarsk Time (KRAT)",
    "UTC+08:00: China Standard Time (CST), Australian Western Standard Time (AWST)",
    "UTC+09:00: Japan Standard Time (JST), Korea Standard Time (KST)",
    "UTC+09:30: Australian Central Standard Time (ACST)",
    " UTC+10:00: Australian Eastern Standard Time (AEST), Papua New Guinea Time (PGT)",
    "UTC+10:30: Lord Howe Standard Time (LHST)",
    "   UTC+11:00: Solomon Islands Time (SBT), Vanuatu Time (VUT)",
    " UTC+12:00: Fiji Time (FJT), New Zealand Standard Time (NZST)",
    " UTC+13:00: Tonga Time (TOT), Phoenix Island Time (PHOT)",
    " UTC+14:00: Line Islands Time (LINT)",
    "UTC+03:30: Iran Standard Time (IRST)",
    "UTC+04:30: Afghanistan Time (AFT)",

    "UTC+06:30: Cocos Islands Time (CCT)",
    "UTC+03:45: Nepal Time (NPT)",
    "UTC+05:45: Nepal Time (NPT)",
    "UTC+09:45: Australian Central Standard Time (ACST)",
    "UTC+12:45: Chatham Islands Time (CHAST)",
  ];
  const Language = [
    "Mandarin Chinese",
    "Spanish",
    "English",
    "Hindi",
    "Bengali",
    "Portuguese",
    "Russian",
    "Japanese",
    "Western Punjabi",
    "Marathi",
    "Telugu",
    "Turkish",
    "Korean",
    "French",
    "German",
    "Vietnamese",
    "Tamil",
    "Urdu",
    "Italian",
    "Arabic",
    "Persian (Farsi)",
    "Polish",
    "Ukrainian",
    "Romanian",
    "Dutch",
    "Greek",
    "Hungarian",
    "Hebrew",
    "Swedish",
    "Czech",
    "Javanese",
    "Thai",
    "Gujarati",
    "Kannada",
    "Malay/Indonesian",
    "Burmese",
    "Amharic",
    "Somali",
    "Hausa",
    "Igbo",
    "Yoruba",
    "Zulu",
    "Xhosa",
    "Afrikaans",
    "Serbian",
    "Croatian",
    "Bosnian",
    "Bulgarian",
    "Slovak",
    "Finnish",
  ];

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
                <b>Pricing</b>
              </label>

              <select
                className="form-select"
                disabled={!isEditing}
                name="user_lastname"
              >
                <option value={profiledata.user_lastname}>
                  {profiledata.user_lastname}
                </option>

                <option> $20/hr</option>
                <option> $30/hr</option>
                <option> $40/hr</option>
                <option> $50/hr</option>
                <option> $60/hr</option>
                <option> $70/hr</option>
              </select>
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
        </div>

        <div className="row align-items-end">
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
                {option_fro_timezone.map((option) => (
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
