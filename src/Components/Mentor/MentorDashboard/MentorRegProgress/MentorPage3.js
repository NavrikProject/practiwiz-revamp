// MentorPage3.js
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MentorForm3.css";
import { Controller, useFormContext } from "react-hook-form";
import GoToTop from "../../../../Utils/GoToTop";
import { toast } from "react-toastify";

// Custom Time Picker Component
const CustomTimePicker = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value: inputValue } = e.target;
    onChange({ ...value, [name]: inputValue });
  };

  const hoursOptions = Array.from({ length: 13 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const minutesOptions = ["00", "30"];

  return (
    <div className="time-picker">
      <select
        name="hours"
        value={value.hours}
        onChange={handleInputChange}
        style={styles.timeSelect}
      >
        {hoursOptions.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      :
      <select
        name="minutes"
        value={value.minutes}
        onChange={handleInputChange}
        style={styles.timeSelect}
      >
        {minutesOptions.map((minute) => (
          <option key={minute} value={minute}>
            {minute}
          </option>
        ))}
      </select>
      <select
        name="ampm"
        value={value.ampm}
        onChange={handleInputChange}
        style={styles.ampmSelect}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

// Mentor Page 3 Component
const MentorPage3 = () => {
  const {
    control,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const [condition, setCondition] = useState(true);

  const defaultShow = () => {
    if (condition) {
      setCondition(false);
    }
  };

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const initialTime = {
    hours: "00",
    minutes: "00",
    ampm: "PM",
  };

  const initialDate = {
    // Mentor_timeslot_rec_end_date: "",
  };

  const [selectedDays, setSelectedDays] = useState(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );

  const [timeInputs, setTimeInputs] = useState(
    daysOfWeek.reduce(
      (acc, day) => ({
        ...acc,
        [day]: {
          from: initialTime,
          to: initialTime,
          date: initialDate,
          recurring: initialDate,
        },
      }),
      {}
    )
  );

  const [timeSlotTags, setTimeSlotTags] = useState(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
  );

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("mentorPageData"));
    if (savedData) {
      setSelectedDays(savedData.selectedDays);
      setTimeInputs(savedData.timeInputs);
      setTimeSlotTags(savedData.timeSlotTags);
      daysOfWeek.forEach((day) => {
        setValue(day, savedData.timeSlotTags[day]);
      });
      setCondition(false);
    }
  }, [setValue]);

  useEffect(() => {
    const dataToSave = {
      selectedDays,
      timeInputs,
      timeSlotTags,
    };
    localStorage.setItem("mentorPageData", JSON.stringify(dataToSave));
  }, [selectedDays, timeInputs, timeSlotTags]);

  const handleDaySwitch = (day, checked) => {
    setSelectedDays((prev) => ({ ...prev, [day]: checked }));
    if (!checked) {
      setValue(day, []);
      setTimeSlotTags((prev) => ({ ...prev, [day]: [] }));
    }
  };

  const handleTimeChange = (day, type, value) => {
    if (type === "from") {
      const fromTime = value;
      const fromHours = parseInt(fromTime.hours, 10);
      const toMinutes = parseInt(fromTime.minutes, 10) + 30;
      let toHours = fromHours;
      let toAmPm = fromTime.ampm;

      if (toMinutes >= 60) {
        toHours = (toHours + 1) % 12 || 12;
        toAmPm = toHours === 12 ? (toAmPm === "AM" ? "PM" : "AM") : toAmPm;
      }

      const toTime = {
        hours: toHours.toString().padStart(2, "0"),
        minutes: (toMinutes % 60).toString().padStart(2, "0"),
        ampm: toAmPm,
      };

      setTimeInputs((prev) => ({
        ...prev,
        [day]: { ...prev[day], from: fromTime, to: toTime },
      }));
    } else {
      setTimeInputs((prev) => ({
        ...prev,
        [day]: { ...prev[day], [type]: value },
      }));
    }
  };

  const handleOkClick = (day) => {
    const { from, to, date, recurring } = timeInputs[day];

    if (
      !from.hours ||
      !from.minutes ||
      !from.ampm ||
      !to.hours ||
      !to.minutes ||
      !to.ampm ||
      !date.Mentor_timeslot_rec_end_date ||
      !recurring.Mentor_timeslot_rec_indicator
    ) {
      return toast.error(
        "Please fill in all the fields before adding the slot.",
        {
          position: "top-right",
        }
      );
    }

    const timeSlot = { from, to, date, recurring };
    const updatedTags = [...timeSlotTags[day], timeSlot];
    setTimeSlotTags((prev) => ({ ...prev, [day]: updatedTags }));
    setValue(day, updatedTags);
    setTimeInputs((prev) => ({
      ...prev,
      [day]: {
        from: initialTime,
        to: initialTime,
        date: initialDate,
        recurring: initialDate,
      },
    }));
  };

  const handleRemoveTag = (day, index) => {
    const updatedTags = timeSlotTags[day].filter((_, i) => i !== index);
    setTimeSlotTags((prev) => ({ ...prev, [day]: updatedTags }));
    setValue(day, updatedTags);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = "" + (d.getMonth() + 1);
    const day = "" + d.getDate();
    const year = d.getFullYear();

    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
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

  return (
    <div>
      <GoToTop />
      <div className="whole">
        <div className="doiherner_wrapper">
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>
                  Your Timezone <span className="RedColorStarMark">*</span>
                </b>
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
              {errors.mentor_timezone && (
                <p className="Error-meg-login-register">
                  {errors.mentor_timezone.message}
                </p>
              )}
            </div>
          </div>
          <div className="linesepration">
            <div className="line-2">Select Day</div>

            <span className="line-3">
              Choose your preferred time slots for the selected day
              <span className="RedColorStarMark">*</span>
            </span>
          </div>
          <div className="main">
            <div className="dayColumn">
              {daysOfWeek.map((day) => (
                <div style={styles.dayRow} className="daycolumns" key={day}>
                  <label htmlFor={day} style={styles.dayLabel}>
                    {day}
                  </label>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id={day}
                      checked={selectedDays[day]}
                      onChange={(e) => handleDaySwitch(day, e.target.checked)}
                      onClick={defaultShow}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              ))}
            </div>
            <div className="Timecolumn">
              {condition ? (
                <>
                  <div
                    style={{
                      width: "85%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "3px solid #bdbdbd",
                      borderRadius: "3rem",
                      flexDirection: "column",
                      marginLeft: "2.5rem",
                      gap: "1.5rem",
                    }}
                  >
                    <i
                      className="fa-solid fa-calendar-check "
                      style={{ color: " #bdbdbd", fontSize: "200px" }}
                    >
                      {" "}
                    </i>
                    <div className="line-1">Set Your Availability</div>{" "}
                  </div>
                </>
              ) : (
                <>
                  {daysOfWeek.map(
                    (day) =>
                      selectedDays[day] && (
                        <div key={day} className="innertimeslot">
                          <div className="slotrow">
                            <h6>{day}</h6>

                            <div className="timeslots">
                              {/* <label>From</label> */}
                              <CustomTimePicker
                                label="From"
                                value={timeInputs[day].from}
                                onChange={(newValue) =>
                                  handleTimeChange(day, "from", newValue)
                                }
                              />
                              <span style={styles.toLabel}>to</span>
                              <div>
                                <CustomTimePicker
                                  label="To"
                                  value={timeInputs[day].to}
                                  onChange={(newValue) =>
                                    handleTimeChange(day, "to", newValue)
                                  }
                                />
                              </div>
                            </div>
                            <div className="label-input">
                              <label>Recurring</label>
                              <select
                                value={
                                  timeInputs[day].recurring
                                    .Mentor_timeslot_rec_indicator
                                }
                                onChange={(e) =>
                                  handleTimeChange(day, "recurring", {
                                    ...timeInputs[day].recurring,
                                    Mentor_timeslot_rec_indicator:
                                      e.target.value,
                                  })
                                }
                              >
                                <option value="">None</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                              </select>
                            </div>

                            <div className="label-input">
                              <label>End date</label>
                              <DatePicker
                                selected={
                                  timeInputs[day].date
                                    .Mentor_timeslot_rec_end_date
                                }
                                onChange={(date) =>
                                  handleTimeChange(day, "date", {
                                    ...timeInputs[day].date,
                                    Mentor_timeslot_rec_end_date:
                                      formatDate(date),
                                  })
                                }
                                dateFormat="MM/dd/yyyy"
                                placeholderText="End Date"
                                minDate={new Date()} // Prevent past dates
                                style={styles.datePicker}
                              />
                            </div>

                            <button
                              onClick={() => handleOkClick(day)}
                              style={styles.okButton}
                            >
                              ADD
                            </button>
                          </div>

                          {timeSlotTags[day].map((slot, index) => (
                            <div className="time-slot-tags">
                              {timeSlotTags[day].map((slot, index) => (
                                <div key={index} className="tag">
                                  <span>{`${slot.from.hours}:${
                                    slot.from.minutes
                                  } ${slot.from.ampm} - ${slot.to.hours}:${
                                    slot.to.minutes
                                  } ${slot.to.ampm}, Recurring: ${
                                    slot.recurring.Mentor_timeslot_rec_indicator
                                  }, End Date: ${
                                    slot.date.Mentor_timeslot_rec_end_date ||
                                    "N/A"
                                  }`}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveTag(day, index)}
                                    style={styles.removeButton}
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dayRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  dayLabel: {
    flexGrow: 1,
  },
  toLabel: {
    margin: "0 10px",
  },
  datePicker: {
    width: "100%",
  },
  timeSelect: {
    width: "50px",
    marginRight: "5px",
  },
  ampmSelect: {
    marginLeft: "5px",
  },
  okButton: {
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  removeButton: {
    marginLeft: "10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default MentorPage3;
