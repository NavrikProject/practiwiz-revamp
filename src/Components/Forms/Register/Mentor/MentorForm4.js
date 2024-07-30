import React from "react";

import ReactFlagsSelect from "react-flags-select";
import { useState, useEffect } from "react";

import { useFormContext } from "react-hook-form";
import CountryData from "../../../data/CountryData.json";

const MentorForm4 = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(CountryData); // Directly setting options if importing the JSON file
  }, []);

  const {
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useFormContext({});
  const F_Name = watch("mentor_firstname");
  const L_Name = watch("mentor_lastname");
  const [selected, setSelected] = useState("");
  const [timezome, settimezone] = useState("");
  // const handleExpertiseChange = (e) => {
  //   settimezone(e.target.value);
  // };
  // const r1 = { selected };

  const handleSelect = (code) => {
    // setSelected(code);
    setValue("mentor_country", selected); // Update React Hook Form value
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
    // "UTC+05:30: Indian Standard Time (IST), Sri Lanka Time (SLT)",
    // "UTC+05:45: Nepal Time (NPT)",
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

  const countryname = [];

  // const [items, setItems] = useState([
  //   { id: "8:00-8:30AM", text: "8:00-8:30AM", inside: false },
  //   { id: "8:30-9:00AM", text: "8:30-9:00AM", inside: false },
  //   { id: "9:00-9:30AM", text: "9:00-9:30AM", inside: false },
  //   { id: "9:30-10:00AM", text: "9:30-10:00AM", inside: false },
  //   { id: "10:00-10:30AM", text: "10:00-10:30AM", inside: false },
  //   { id: "10:30-11:00AM", text: "10:30-11:00AM", inside: false },
  //   { id: "11:00-11:30AM", text: "11:00-11:30AM", inside: false },
  //   { id: "11:30-12:00PM", text: "11:30-12:00PM", inside: false },
  //   { id: "12:00-12:30PM", text: "12:00-12:30PM", inside: false },
  //   { id: "12:30-1:00PM", text: "12:30-1:00PM", inside: false },
  //   { id: "1:00-1:30PM", text: "1:00-1:30PM", inside: false },
  //   { id: "1:30-2:00PM", text: "1:30-2:00PM", inside: false },
  //   { id: "2:00-2:30PM", text: "2:00-2:30PM", inside: false },
  //   { id: "2:30-3:00PM", text: "2:30-3:00PM", inside: false },
  //   { id: "3:00-3:30PM", text: "3:00-3:30PM", inside: false },
  //   { id: "3:30-4:00PM", text: "3:30-4:00PM", inside: false },
  //   { id: "4:00-4:30PM", text: "4:00-4:30PM", inside: false },
  //   { id: "4:30-5:00PM", text: "4:30-5:00PM", inside: false },
  //   { id: "5:00-5:30PM", text: "5:00-5:30PM", inside: false },
  //   { id: "5:30-6:00PM", text: "5:30-6:00PM", inside: false },
  //   { id: "6:00-6:30PM", text: "6:00-6:30PM", inside: false },
  //   { id: "6:30-7:00PM", text: "6:30-7:00PM", inside: false },
  //   { id: "7:00-7:30PM", text: "7:00-7:30PM", inside: false },
  //   { id: "7:30-8:00PM", text: "7:30-8:00PM", inside: false },
  //   { id: "8:00-8:30PM", text: "8:00-8:30PM", inside: false },
  //   { id: "8:30-9:00PM", text: "8:30-9:00PM", inside: false },
  //   { id: "9:00-9:30PM", text: "9:00-9:30PM", inside: false },
  //   { id: "9:30-10:00PM", text: "9:30-10:00PM", inside: false },
  //   { id: "10:00-10:30PM", text: "10:00-10:30PM", inside: false },
  //   { id: "10:30-11:00PM", text: "10:30-11:00PM", inside: false },
  // ]);

  // const handleDragStartTimeSlot = (e, id) => {
  //   e.dataTransfer.setData("text/plain", id);
  //   setTimeout(() => {
  //     e.target.classList.add("hide");
  //   }, 0);
  // };

  // const handleDragEndTimeSlot = (e) => {
  //   e.target.classList.remove("hide");
  // };

  // const handleDragOverTimeSlot = (e) => {
  //   e.preventDefault();
  // };

  // const handleDropInContainerTimeSlot = (e) => {
  //   e.preventDefault();
  //   const id = e.dataTransfer.getData("text");
  //   setItems(
  //     items.map((item) => (item.id === id ? { ...item, inside: true } : item))
  //   );
  //   updateFormData();
  // };

  // const handleDropOutsideTimeSlot = (e) => {
  //   e.preventDefault();
  //   const id = e.dataTransfer.getData("text");
  //   setItems(
  //     items.map((item) => (item.id === id ? { ...item, inside: false } : item))
  //   );
  //   updateFormData();
  // };

  // const handleDeleteTimeSlot = (id) => {
  //   setItems(
  //     items.map((item) => (item.id === id ? { ...item, inside: false } : item))
  //   );
  //   updateFormData();
  // };
  // const updateFormData = () => {
  //   setValue("time_slot", items);
  // };

  return (
    <div className="doiherner_wrapper">
      <div className="ihduwfr_form_wrapper p-0" style={{ height: "auto" }}>
        <div className="row">
          {/* <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <b>Preffered Contact Timings</b>
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    // id="exampleInputEmail1"
                    placeholder="Type Your Job Title"
                    aria-describedby="emailHelp"
                    {...register("preferred_contact_timings", {
                      required: "First Name is required",
                    })} //1
                  />
                  {errors.preferred_contact_timings && (
                    <p className="Error-meg-login-register">
                      {errors.preferred_contact_timings.message}
                    </p>
                  )}
                </div>
    
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <b>Preffered Contact Dates</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputPassword1"
                    // placeholder="Your Experience"
                    {...register("preferred_contact_dates", {
                      required: "Preffered Contact Dates is required",
                    })} //1
                  />
                  {errors.preferred_contact_dates && (
                    <p className="Error-meg-login-register">
                      {errors.preferred_contact_dates.message}
                    </p>
                  )}
                </div>
              </div> */}

          {/* <div className="col-lg-6">
                <div className="ikhwnjrr_right">
                  <label htmlFor="exampleInputEmail1" className="form-label mb-3">
                    <b>Percentage Completion</b>
                  </label>
    
                  <div className="d-flex align-items-center">
                    <div className="hinrer_circle position-relative me-3">
                      <h2>
                        {F_Name.charAt(0)}
                        {L_Name.charAt(0)}
                      </h2>
                    </div>
    
                    <div className="idhnerier_right">
                      <h4 className="mb-1">
                        {F_Name}&nbsp;
                        {L_Name}
                      </h4>
    
                      <p className="mb-1">
                        <b>40% Complete</b>
                      </p>
    
                      <h6 className="mb-0">Signed up - 4 minutes ago</h6>
                    </div>
                  </div>
                </div>
              </div> */}
          {/* <div className="row align-items-center">
                <div className="col-lg-7 mb-4">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <b>Choose Your time slots!</b>
                  </label>
                  <div
                    type=""
                    id="container"
                    className="bg-white"
                    onDragOver={handleDragOverTimeSlot}
                    onDrop={handleDropInContainerTimeSlot}
                    style={{
                      overflowY: "scroll",
                      overflowX: "hidden",
                      height: "200px",
                    }}
                  >
                    {items
                      .filter((item) => item.inside)
                      .map((item) => (
                        <div
                          key={item.id}
                          id={item.id}
                          className="draggable inside"
                          // className="draggable"
                          draggable
                          onDragStart={(e) => handleDragStartTimeSlot(e, item.id)}
                          onDragEnd={handleDragEndTimeSlot}
                        >
                          {item.inside && (
                            <span
                              className="close-btn"
                              onClick={() => handleDeleteTimeSlot(item.id)}
                            >
                              &times;
                            </span>
                          )}
                          {item.text}
                        </div>
                      ))}
                  </div>
    
                  <p className="iduehnbriee_text mb-0">
                    (*Drag and drop the most suitable slot time option in the box.
                    This slots will be displayed for booking the mentor session with
                    you*)
                  </p>
                </div>
    
                <div
                  className="col-lg-5 mb-4"
                  style={{
                    overflowY: "scroll",
                    overflowX: "hidden",
                    height: "200px",
                  }}
                >
                  <div
                    id="outside-container"
                    onDragOver={handleDragOverTimeSlot}
                    onDrop={handleDropOutsideTimeSlot}
                  >
                    {items
                      .filter((item) => !item.inside)
                      .map((item) => (
                        <div
                          key={item.id}
                          id={item.id}
                          className="draggable"
                          draggable
                          onDragStart={(e) => handleDragStartTimeSlot(e, item.id)}
                          onDragEnd={handleDragEndTimeSlot}
                        >
                          {item.text}
                        </div>
                      ))}
                  </div>
                </div>
              </div> */}
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Would You Be Interested in Delivering Guest Lectures?</b>
              </label>

              <select
                className="form-select"
                {...register("guest_lectures_interest", {
                  required: " required",
                })} //1
              >
                <option value="">Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
            {errors.guest_lectures_interest && (
              <p className="Error-meg-login-register">
                {errors.guest_lectures_interest.message}
              </p>
            )}
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Would You Be Interested in Curating Case Studies?</b>
              </label>

              <select
                className="form-select"
                {...register("curating_case_studies_interest", {
                  required: "required",
                })} //1
              >
                <option value="">Choose An Option</option>

                <option defaultValue>Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
            {errors.curating_case_studies_interest && (
              <p className="Error-meg-login-register">
                {errors.curating_case_studies_interest.message}
              </p>
            )}
          </div>
        </div>

        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  For Your Alums Would You Be Fine to Do Sessions Free of Charge
                </b>
              </label>

              <select
                className="form-select"
                {...register("sessions_free_of_charge", {
                  required: "required",
                })} //1
              >
                <option value="">Choose An Option</option>

                <option defaultValue>Choose An Option</option>

                <option>Yes</option>

                <option>No</option>
              </select>
            </div>
            {errors.sessions_free_of_charge && (
              <p className="Error-meg-login-register">
                {errors.sessions_free_of_charge.message}
              </p>
            )}
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Your Timezone</b>
              </label>

              <select
                className="form-select"
                // onChange={option_fro_timezone}
                {...register("mentor_timezone", {
                  required: "required",
                })} //1
              >
                <option
                  defaultValue={
                    "UTC+05:30: Indian Standard Time (IST), Sri Lanka Time (SLT)"
                  }
                >
                  {" "}
                  UTC+05:30: Indian Standard Time (IST), Sri Lanka Time (SLT)
                </option>
                {option_fro_timezone.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {errors.mentor_timezone && (
              <p className="Error-meg-login-register">
                {errors.mentor_timezone.message}
              </p>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Language</b>
              </label>

              <select
                className="form-select"
                {...register("mentor_language", {
                  required: "Please select language",
                })} //1
              >
                <option defaultValue={"English"}>English</option>
                {Language.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {errors.mentor_language && (
              <p className="Error-meg-login-register">
                {errors.mentor_language.message}
              </p>
            )}
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Which Country You Live in?</b>
              </label>

              <select
                className="form-select"
                {...register("mentor_country", {
                  required: "required",
                })} //1
              >
                {options.map((option) => (
                  <option key={option.country_id} value={option.country_name}>
                    {option.country_name}
                  </option>
                ))}
              </select>
              {/* <ReactFlagsSelect
                    selected={selected}
                    className="country-flag"
                    onSelect={(code) => setSelected(code)}
                    // onClick={handleSelect}
                    {...register("mentor_country", {
                      required: "required",
                    })} //1
                    
                  /> */}
            </div>
            {errors.mentor_country && (
              <p className="Error-meg-login-register">
                {errors.mentor_country.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorForm4;
