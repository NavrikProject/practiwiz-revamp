import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MentorForm3.css";
import { Controller, useFormContext } from "react-hook-form";
import GoToTop from "../../../../Utils/GoToTop";
import { toast } from "react-toastify";
import { option_fro_timezone } from "../../../data/Timezones";

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

// Main Mentor Page 3 Component
const MentorPage3 = () => {
  const {
    control,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const [condition, setCondition] = useState(true);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const initialTime = {
    hours: "00",
    minutes: "00",
    ampm: "PM",
  };

  const initialDate = {
    Mentor_timeslot_rec_end_date: null,
    Mentor_timeslot_rec_indicator: null,
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
        },
      }),
      {}
    )
  );

  const [timeSlotTags, setTimeSlotTags] = useState(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
  );
  const defaultShow = () => {
    if (condition) {
      setCondition(false);
    }
  };
  // Load saved data from localStorage on component mount
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

  // Save data to localStorage on state change
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
        toAmPm = toHours === 12 ? (toAmPm === "AM" ? "PM" : toAmPm) : toAmPm;
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
    const { from, to, date } = timeInputs[day];

    // Check if all fields are filled
    if (
      !from.hours ||
      !from.minutes ||
      !from.ampm ||
      !to.hours ||
      !to.minutes ||
      !to.ampm ||
      !date.Mentor_timeslot_rec_end_date ||
      !date.Mentor_timeslot_rec_indicator
    ) {
      return toast.error(
        "Please fill in all the fields before adding the slot.",
        {
          position: "top-right",
        }
      );
    }

    // Create the time slot object
    const timeSlot = {
      date: {
        Mentor_timeslot_rec_end_date: date.Mentor_timeslot_rec_end_date,
      },
      from: {
        hours: from.hours,
        minutes: from.minutes,
        ampm: from.ampm,
      },
      to: {
        hours: to.hours,
        minutes: to.minutes,
        ampm: to.ampm,
      },
      recurring: {
        Mentor_timeslot_rec_indicator: date.Mentor_timeslot_rec_indicator,
      },
    };

    // Update the timeSlotTags state for the selected day
    const updatedTags = [...timeSlotTags[day], timeSlot];
    setTimeSlotTags((prev) => ({ ...prev, [day]: updatedTags }));
    setValue(day, updatedTags);

    // Reset input fields after adding slot
    setTimeInputs((prev) => ({
      ...prev,
      [day]: {
        from: initialTime,
        to: initialTime,
        date: {
          Mentor_timeslot_rec_end_date: null,
          Mentor_timeslot_rec_indicator: "", // Reset recurrence
        },
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

  return (
    <div className="MentorForm3-container">
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
                <div key={day} className="daycolumns" style={styles.dayRow}>
                  <label htmlFor={day} style={styles.dayLabel}>
                    {day}
                  </label>

                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={selectedDays[day]}
                      onClick={defaultShow}
                      onChange={(e) => handleDaySwitch(day, e.target.checked)}
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
                              {/* <label>From:</label> */}
                              <CustomTimePicker
                                value={timeInputs[day].from}
                                onChange={(value) =>
                                  handleTimeChange(day, "from", value)
                                }
                              />

                              <span style={styles.toLabel}>to</span>
                              <CustomTimePicker
                                value={timeInputs[day].to}
                                onChange={(value) =>
                                  handleTimeChange(day, "to", value)
                                }
                              />
                            </div>
                            <div className="label-input">
                              <label>Recurrence:</label>
                              <select
                                {...register(
                                  `date.${day}.Mentor_timeslot_rec_indicator`
                                )}
                                value={
                                  timeInputs[day].date
                                    .Mentor_timeslot_rec_indicator
                                } // Bind value to state
                                onChange={(e) =>
                                  handleTimeChange(day, "date", {
                                    ...timeInputs[day].date,
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
                              <label>End Date:</label>
                              <Controller
                                control={control}
                                name={`date.${day}.Mentor_timeslot_rec_end_date`}
                                render={({ field }) => (
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
                                )}
                              />
                            </div>

                            <button
                              type="button"
                              onClick={() => handleOkClick(day)}
                              style={styles.okButton}
                            >
                              ADD
                            </button>
                          </div>

                          <div className="time-slot-tags">
                            {timeSlotTags[day].length === 0 ? (
                              <p>No time slots available for this day.</p>
                            ) : (
                              timeSlotTags[day].map((slot, index) => (
                                <div key={index} className="tag">
                                  {`${slot.from.hours}:${slot.from.minutes} ${
                                    slot.from.ampm
                                  } - ${slot.to.hours}:${slot.to.minutes} ${
                                    slot.to.ampm
                                  } | Recurring:${
                                    slot.recurring.Mentor_timeslot_rec_indicator
                                  } | End Date:${formatDate(
                                    slot.date.Mentor_timeslot_rec_end_date
                                  )}`}
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveTag(day, index)}
                                    style={styles.removeButton}
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))
                            )}
                          </div>
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
