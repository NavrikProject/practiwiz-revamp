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
  const [HideFromTime, setHideFromTime] = useState(false);
  const [condition, setCondition] = useState(true);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const initialTime = {
    hours: "00",
    minutes: "00",
    ampm: "PM",
  };
  const initialSlot = {};

  const initialDate = {};

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
          TimeslotDuration: 30,
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
  const [SlotDuration, setSlotDuration] = useState(30); // Default slot duration is 30 minutes

  const handleTimeChange = (day, type, value) => {
    if (type === "from") {
      const fromTime = value;
      const fromHours = parseInt(fromTime.hours, 10);
      const fromMinutes = parseInt(fromTime.minutes, 10);

      // Determine slot duration; assuming SlotDuration can be either 30 or 60
      const slotDuration = SlotDuration; // SlotDuration should be defined (30 or 60)
      if (slotDuration == 30) {
        if (fromMinutes === 30) {
          // Calculate 'to' time based on the slot duration
          let toMinutes = fromMinutes;
          let toHours = fromHours + 1;
          let toAmPm = fromTime.ampm;
          // Handle minutes exceeding 60

          // Handle 12-hour format and AM/PM switch
          if (toHours > 12) {
            toHours = toHours - 12; // Wrap hours to 12-hour format
            toAmPm = toAmPm === "AM" ? "PM" : "AM"; // Switch AM/PM if crossing 12
          } else if (toHours === 12 && fromMinutes + slotDuration > 60) {
            // Special case for transitioning at 12 PM
            toAmPm = toAmPm === "AM" ? "PM" : "AM";
          }
          // Format hours and minutes to ensure two-digit representation
          const toTime = {
            hours: toHours.toString().padStart(2, "0"),
            minutes: toMinutes.toString().padStart(2, "0"),
            ampm: toAmPm,
          };

          // Update the timeInputs state with the new 'from' and 'to' times
          setTimeInputs((prev) => ({
            ...prev,
            [day]: { ...prev[day], from: fromTime, to: toTime },
          }));
        }
        if (fromMinutes === 0) {
          // Calculate 'to' time based on the slot duration
          let toMinutes = slotDuration;
          let toHours = fromHours;
          let toAmPm = fromTime.ampm;
          // Handle minutes exceeding 60
          // Handle 12-hour format and AM/PM switch
          if (toHours > 12) {
            toHours = toHours - 12; // Wrap hours to 12-hour format
            toAmPm = toAmPm === "AM" ? "PM" : "AM"; // Switch AM/PM if crossing 12
          } else if (toHours === 12 && fromMinutes + slotDuration > 60) {
            // Special case for transitioning at 12 PM
            toAmPm = toAmPm === "AM" ? "PM" : "AM";
          }

          // Format hours and minutes to ensure two-digit representation
          const toTime = {
            hours: toHours.toString().padStart(2, "0"),
            minutes: toMinutes.toString().padStart(2, "0"),
            ampm: toAmPm,
          };

          // Update the timeInputs state with the new 'from' and 'to' times
          setTimeInputs((prev) => ({
            ...prev,
            [day]: { ...prev[day], from: fromTime, to: toTime },
          }));
        }
      }
      // Handle minutes exceeding 60
      if (slotDuration == 60) {
        // Calculate 'to' time based on the slot duration
        let toMinutes = fromMinutes;
        let toHours = fromHours + 1;
        let toAmPm = fromTime.ampm;

        // Handle 12-hour format and AM/PM switch
        if (toHours > 12) {
          toHours = toHours - 12; // Wrap hours to 12-hour format
          toAmPm = toAmPm === "AM" ? "PM" : "AM"; // Switch AM/PM if crossing 12
        } else if (toHours === 12 && fromMinutes + slotDuration > 60) {
          // Special case for transitioning at 12 PM
          toAmPm = toAmPm === "AM" ? "PM" : "AM";
        }

        // Format hours and minutes to ensure two-digit representation
        const toTime = {
          hours: toHours.toString().padStart(2, "0"),
          minutes: toMinutes.toString().padStart(2, "0"),
          ampm: toAmPm,
        };

        // Update the timeInputs state with the new 'from' and 'to' times
        setTimeInputs((prev) => ({
          ...prev,
          [day]: { ...prev[day], from: fromTime, to: toTime },
        }));
      }
    } else {
      // Handle updating other times, like 'to', directly
      setTimeInputs((prev) => ({
        ...prev,
        [day]: { ...prev[day], [type]: value },
      }));
    }
  };
  const calculateMinutesDifference = (from, to, endDate) => {
    const fromHours = parseInt(from.hours, 10);
    const toHours = parseInt(to.hours, 10);

    let fromMinutes = parseInt(from.minutes, 10);
    let toMinutes = parseInt(to.minutes, 10);

    // Convert from 'AM/PM' to total minutes from midnight
    fromMinutes +=
      from.ampm === "PM" && fromHours !== 12
        ? (fromHours + 12) * 60
        : fromHours === 12
        ? 0
        : fromHours * 60;
    toMinutes +=
      to.ampm === "PM" && toHours !== 12
        ? (toHours + 12) * 60
        : toHours === 12
        ? 0
        : toHours * 60;

    // Calculate the difference
    let minutesDifference = toMinutes - fromMinutes;

    // Handle the case where the 'to' time is on the next day
    // if (minutesDifference < 0) {
    //     // Check if the end date is greater than the current date
    //     const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format
    //     if (endDate > today) {
    //         // Add 24 hours worth of minutes (1440) to account for next day
    //         minutesDifference += 1440; // 24 hours * 60 minutes
    //     } else {
    //         // If the end date is today or past, it's an invalid time slot
    //         throw new Error("Invalid time slot: 'to' time cannot be earlier than 'from' time.");
    //     }
    // }

    return minutesDifference;
  };

  const checkDuplicateTimeSlot = (day, newSlot) => {
    const existingSlots = timeSlotTags[day] || [];

    // Check if the new slot matches any existing slot's from and to times
    return existingSlots.some(
      (slot) =>
        slot.from.hours === newSlot.from.hours &&
        slot.from.minutes === newSlot.from.minutes &&
        slot.from.ampm === newSlot.from.ampm
    );
  };

  const handleOkClick = (day) => {
    console.log(timeInputs);
    const { from, to, date, recurring, slotDuration } = timeInputs[day];
    if (from.hours == 0 && from.ampm == "PM") {
      console.log("hello");
      return toast.error("Please Enter valide slot.");
    }

    // Check if all fields are filled before adding the slot
    if (
      !from.hours ||
      !from.minutes ||
      !from.ampm ||
      !to.hours ||
      !to.minutes ||
      !to.ampm ||
      !date.Mentor_timeslot_rec_end_date ||
      !recurring.mentor_timeslot_rec_indicator
    ) {
      return toast.error(
        "Please fill in all the fields before adding the slot."
      );
    }
    const minutesDiff = calculateMinutesDifference(from, to);

    if (minutesDiff !== 30 && minutesDiff !== 60) {
      return toast.error(
        "Please select a time slot of either 30 or 60 minutes."
      );
    }

    const timeSlot = { from, to, date, recurring, slotDuration };

    // Log the selected slot duration

    // Check for duplicate time slot
    if (checkDuplicateTimeSlot(day, timeSlot)) {
      return toast.error("This time slot already exists for the selected day.");
    }

    // Initialize timeSlotTags[day] as an array if it's undefined
    const updatedTags = [...(timeSlotTags[day] || []), timeSlot];

    // Update timeSlotTags with the new array
    setTimeSlotTags((prev) => ({ ...prev, [day]: updatedTags }));

    // Set the value in react-hook-form
    setValue(day, updatedTags);

    // Reset the time inputs for the day
    setTimeInputs((prev) => ({
      ...prev,
      [day]: {
        from: initialTime,
        to: initialTime,
        date: { Mentor_timeslot_rec_end_date: "" },
        recurring: { mentor_timeslot_rec_indicator: "" },
        slotDuration: { slotDuration: "" },
      },
    }));
    setHideFromTime(false);
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
                              <Controller
                                control={control}
                                name={`${day}.slotDuration`}
                                render={({ field }) => (
                                  <select
                                    {...field}
                                    value={
                                      timeInputs[day]?.slotDuration
                                        ?.slotDuration || ""
                                    } // Ensure correct value access with optional chaining
                                    onChange={(e) => {
                                      const newDuration = e.target.value;

                                      // Update the slot duration state
                                      setSlotDuration(newDuration);

                                      // Update the timeInputs state for the specific day
                                      handleTimeChange(day, "slotDuration", {
                                        ...timeInputs[day]?.slotDuration,
                                        slotDuration: newDuration,
                                      });

                                      // Reset other values for the selected day and update timeInputs
                                      setTimeInputs((prev) => ({
                                        ...prev,
                                        [day]: {
                                          ...prev[day], // Keep existing values intact
                                          from: initialTime,
                                          to: initialTime,
                                          date: {
                                            Mentor_timeslot_rec_end_date: "", // Reset to initial values
                                          },
                                          recurring: {
                                            mentor_timeslot_rec_indicator: "", // Reset to initial values
                                          },
                                        },
                                      }));

                                      // Optionally hide the 'From Time' field
                                      setHideFromTime(true);
                                    }}
                                  >
                                    <option value="">
                                      Select slot Duration
                                    </option>
                                    <option value={30}>30 Min</option>
                                    <option value={60}>60 Min</option>
                                  </select>
                                )}
                              />

                              {/* <Controller
                                control={control}
                                name={`${day}.slotDuration`}
                                render={({ field }) => (
                                  <select
                                    {...field}
                                    value={
                                      timeInputs[day].slotDuration
                                        .SlotDuration 
                                    } // Ensure correct value access with optional chaining
                                    onChange={(e) => {
                                      const newDuration = e.target.value;

                                      // Update the slot duration state
                                      setSlotDuration(newDuration);

                                      // Update the timeInputs state for the specific day
                                      handleTimeChange(day, "slotDuration", {
                                        ...timeInputs[day]?.slotDuration,
                                        TimeslotDuration: newDuration,
                                      });

                                      // Reset other values for the selected day and update timeInputs
                                      setTimeInputs((prev) => ({
                                        ...prev,
                                        [day]: {
                                          ...prev[day], // Keep existing values intact
                                          from: initialTime,
                                          to: initialTime,
                                          date: {
                                            Mentor_timeslot_rec_end_date: "", // Reset to initial values
                                          },
                                          recurring: {
                                            mentor_timeslot_rec_indicator: "", // Reset to initial values
                                          },
                                        },
                                      }));

                                      // Optionally hide the 'From Time' field
                                      setHideFromTime(true);
                                    }}
                                  >
                                    <option value="">
                                      Select slot Duration
                                    </option>
                                    <option value={30}>30 Min</option>
                                    <option value={60}>60 Min</option>
                                  </select>
                                )}
                              /> */}

                              {HideFromTime && (
                                <CustomTimePicker
                                  value={timeInputs[day].from}
                                  onChange={(value) =>
                                    handleTimeChange(day, "from", value)
                                  }
                                />
                              )}
                            </div>
                            <div className="label-input">
                              <label>Recurring</label>
                              <Controller
                                control={control}
                                name={`${day}.recurring`}
                                render={({ field }) => (
                                  <select
                                    {...field}
                                    value={
                                      timeInputs[day].recurring
                                        .mentor_timeslot_rec_indicator
                                    }
                                    onChange={(e) =>
                                      handleTimeChange(day, "recurring", {
                                        ...timeInputs[day].recurring,
                                        mentor_timeslot_rec_indicator:
                                          e.target.value,
                                      })
                                    }
                                  >
                                    <option value="">None</option>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                  </select>
                                )}
                              />
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
                              timeSlotTags[day] &&
                              timeSlotTags[day].map((slot, index) => (
                                <div key={index} className="tag">
                                  <span>{`${slot.from.hours}:${
                                    slot.from.minutes
                                  } ${slot.from.ampm} - ${slot.to.hours}:${
                                    slot.to.minutes
                                  } ${slot.to.ampm}, Recurring: ${
                                    slot.recurring.mentor_timeslot_rec_indicator
                                  }, End Date: ${
                                    slot.date.Mentor_timeslot_rec_end_date ||
                                    "N/A"
                                  }`}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveTag(day, index)}
                                    className="removeButton"
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
