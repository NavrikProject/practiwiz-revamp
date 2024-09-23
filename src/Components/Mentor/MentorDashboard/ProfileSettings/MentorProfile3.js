import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import "../../../Forms/Register/Mentor/MentorForm3.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ApiURL } from "../../../../Utils/ApiURL";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import { toast } from "react-toastify";

// CustomTimePicker component

const styles = {
  form: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  },
  customTimePicker: {
    display: "flex",
    alignItems: "center",
  },
  timeSelect: {
    width: "60px",
    margin: "0 5px",
  },
  container: {
    display: "flex",
  },
  daysColumn: {
    flex: "1",
    marginRight: "20px",
  },
  slotsColumn: {
    flex: "3",
  },
  dayRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  dayLabel: {
    width: "50px",
  },
  daySlots: {
    marginBottom: "20px",
  },
  timeSlotRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  toLabel: {
    margin: "0 10px",
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
  submitButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  customTimePicker: {
    display: "flex",
    alignItems: "center",
  },
  timeSelect: {
    margin: "0 5px",
  },
  tag: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    backgroundColor: "#e9ecef",
    padding: "5px 10px",
    borderRadius: "4px",
  },
  select: {
    margin: "0 10px",
  },
  datePicker: {
    margin: "0 10px",
    width: "80px",
  },
};

const CustomTimePicker = ({ value, onChange }) => {
  const handleHoursChange = (e) => {
    onChange({ ...value, hours: e.target.value });
  };

  const handleMinutesChange = (e) => {
    onChange({ ...value, minutes: e.target.value });
  };

  const handleAmPmChange = (e) => {
    onChange({ ...value, ampm: e.target.value });
  };

  return (
    <div style={styles.customTimePicker}>
      <select
        value={value.hours}
        onChange={handleHoursChange}
        style={styles.timeSelect}
      >
        {Array.from({ length: 13 }, (_, i) => i).map((hour) => (
          <option key={hour} value={hour < 10 ? "0" + hour : hour}>
            {hour < 10 ? "0" + hour : hour}
          </option>
        ))}
      </select>
      <span>:</span>
      <select
        value={value.minutes}
        onChange={handleMinutesChange}
        style={styles.timeSelect}
      >
        {[0, 30].map((minute) => (
          <option key={minute} value={minute < 10 ? "0" + minute : minute}>
            {minute < 10 ? "0" + minute : minute}
          </option>
        ))}
      </select>
      <select
        value={value.ampm}
        onChange={handleAmPmChange}
        style={styles.timeSelect}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

const daysOfWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

// const initialTime = { hours: "09", minutes: "00", ampm: "AM" };
// const initialDate = { Mentor_timeslot_rec_end_date: "2024-12-31" };
const initialTime = {
  hours: "",
  minutes: "00",
  ampm: "PM",
};
const initialDate = {};

const MentorProfile3 = ({ profiledata, user, token }) => {
  const dispatch = useDispatch();
  const url = ApiURL();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedDays, setSelectedDays] = useState({
    // Mon: false,
    // Fri: false,
    // Sat: false,
  });

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

  const [timeSlotTags, setTimeSlotTags] = useState({});

  useEffect(() => {
    if (profiledata?.timeslot_list) {
      const timeslotData = JSON.parse(profiledata?.timeslot_list);
      const tags = {};
      const selected = {};

      timeslotData.forEach((slot) => {
        const day = slot.mentor_timeslot_day;
        if (!tags[day]) {
          tags[day] = [];
          selected[day] = true;
        }

        const [fromHours, fromMinutes] =
          slot.mentor_timeslot_from.match(/\d+/g);
        const [toHours, toMinutes] = slot.mentor_timeslot_to.match(/\d+/g);
        const fromAmPm = slot.mentor_timeslot_from.includes("PM") ? "PM" : "AM";
        const toAmPm = slot.mentor_timeslot_to.includes("PM") ? "PM" : "AM";

        tags[day].push({
          from: {
            hours: fromHours.padStart(2, "0"),
            minutes: fromMinutes.padStart(2, "0"),
            ampm: fromAmPm,
          },
          to: {
            hours: toHours.padStart(2, "0"),
            minutes: toMinutes.padStart(2, "0"),
            ampm: toAmPm,
          },
          recurring: {
            mentor_timeslot_rec_indicator: slot.mentor_timeslot_rec_indicator,
          },
          date: {
            Mentor_timeslot_rec_end_date:
              slot.mentor_timeslot_rec_end_timeframe,
          },
        });
      });

      setTimeSlotTags(tags);
      setSelectedDays((prev) => ({ ...prev, ...selected }));
    }
  }, [profiledata]);

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

  const checkDuplicateTimeSlot = (day, newSlot) => {
    const existingSlots = timeSlotTags[day] || [];

    // Check if the new slot matches any existing slot's from and to times
    return existingSlots.some(
      (slot) =>
        slot.from.hours === newSlot.from.hours &&
        slot.from.minutes === newSlot.from.minutes &&
        slot.from.ampm === newSlot.from.ampm &&
        slot.to.hours === newSlot.to.hours &&
        slot.to.minutes === newSlot.to.minutes &&
        slot.to.ampm === newSlot.to.ampm
    );
  };

  const handleOkClick = (day) => {
    const { from, to, date, recurring } = timeInputs[day];

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

    const timeSlot = { from, to, date, recurring };

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
      },
    }));
  };

  const handleRemoveTag = (day, index) => {
    const updatedTags = timeSlotTags[day].filter((_, i) => i !== index);
    setTimeSlotTags((prev) => ({ ...prev, [day]: updatedTags }));
    setValue(day, updatedTags);
  };

  const handleSave = async () => {
    // Check if at least one day is selected
    if (!Object.keys(selectedDays).some((day) => selectedDays[day])) {
      return toast.error("Please select at least one day.");
    }
    // Check if there are non-empty time slot arrays
    const nonEmptyTimeSlots = Object.entries(timeSlotTags).reduce(
      (acc, [day, slots]) => {
        if (slots.length > 0) {
          acc[day] = slots;
        }
        return acc;
      },
      {}
    );
    // Alert if no time slots are added
    if (Object.keys(nonEmptyTimeSlots).length === 0) {
      return toast.error("Please add at least one time slot.");
    }

    try {
      dispatch(showLoadingHandler());
      const res = await Promise.race([
        axios.post(
          `${url}api/v1/mentor/dashboard/update/profile-3`,
          {
            Mon: JSON.stringify(nonEmptyTimeSlots.Mon),
            Tue: JSON.stringify(nonEmptyTimeSlots.Tue),
            Wed: JSON.stringify(nonEmptyTimeSlots.Wed),
            Thu: JSON.stringify(nonEmptyTimeSlots.Thu),
            Fri: JSON.stringify(nonEmptyTimeSlots.Fri),
            Sat: JSON.stringify(nonEmptyTimeSlots.Sat),
            Sun: JSON.stringify(nonEmptyTimeSlots.Sun),
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
        toast.success("Time slots Details updated successfully");
      } else if (res.data.error) {
        toast.error(res.data.error);
      }
    } catch (error) {
      if (error.message === "Request timed out") {
        toast.error("Update failed due to a timeout. Please try again.");
      } else {
        toast.error(
          "Error in updating the Time slots details, please try again!"
        );
      }
    } finally {
      dispatch(hideLoadingHandler());
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className="line-1">Edit your availability</div>
      <div className="whole">
        <div className="doiherner_wrapper">
          <div className="linesepration">
            <div className="line-2">Select Days</div>
            <span className="line-3">
              Choose your preferred time slots for the selected day
            </span>
          </div>
          <div className="main">
            <div className="dayColumn">
              {daysOfWeek.map((day) => (
                <div key={day} style={styles.dayRow} className="daycolumns">
                  <h6 style={styles.dayLabel}>{day}</h6>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={selectedDays[day] || false}
                      onChange={(e) => handleDaySwitch(day, e.target.checked)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              ))}
            </div>

            <div
              className="Timecolumn"
              style={{ height: "30rem", overflowY: "auto" }}
            >
              {daysOfWeek.map(
                (day) =>
                  selectedDays[day] && (
                    <div
                      key={day}
                      className="innertimeslot"
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      <div className="slotrow">
                        <h6>{day}</h6>

                        <div className="timeslots">
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
                          <label>End date</label>
                          <Controller
                            control={control}
                            name={`${day}.date`}
                            render={({ field }) => (
                              <DatePicker
                                {...field}
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
                      {timeSlotTags[day] &&
                        timeSlotTags[day].map((slot, index) => (
                          <div key={index} className="tag">
                            <span>{`${slot.from.hours}:${slot.from.minutes} ${
                              slot.from.ampm
                            } - ${slot.to.hours}:${slot.to.minutes} ${
                              slot.to.ampm
                            }, Recurring: ${
                              slot.recurring.mentor_timeslot_rec_indicator
                            }, End Date: ${
                              slot.date.Mentor_timeslot_rec_end_date || "N/A"
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
                        ))}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        {/* Save Button at the Bottom */}
        <div className="save-button-container">
          <button
            type="button"
            onClick={handleSave}
            className="btn juybeubrer_btn btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default MentorProfile3;
