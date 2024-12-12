import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import "./MentorForm3.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { option_fro_timezone } from "../../../data/Timezones";

const AvailabilityForm = () => {
  const { setValue, register } = useFormContext();
  const today = new Date(); // Get today's date
  // Load saved data or initialize with default
  const loadSavedData = () => {
    const savedData = localStorage.getItem("slots");

    return savedData
      ? JSON.parse(savedData)
      : [
          {
            days: [],
            startHour: "12",
            startMinute: "00",
            startPeriod: "AM",
            endHour: "12",
            endMinute: "00",
            endPeriod: "PM",
            fromDate: "",
            toDate: "",
            duration: "60 min",
          },
        ];
  };

  const [slots, setSlots] = useState(loadSavedData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    Array(slots.length).fill(false)
  );
  const toggleDropdown = (index) => {
    const updatedDropdownState = [...isDropdownOpen];
    updatedDropdownState[index] = !updatedDropdownState[index];
    setIsDropdownOpen(updatedDropdownState);
  };
  const toggleDropdownforClose = (index) => {
    const updatedDropdownState = [...isDropdownOpen];
    updatedDropdownState[index] = false;
    setIsDropdownOpen(updatedDropdownState);
  };
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const durations = ["30", "60", "Both"];
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = ["00", "30"];
  const periods = ["AM", "PM"];

  // Save slots to localStorage
  const saveToLocalStorage = (updatedSlots) => {
    localStorage.setItem("slots", JSON.stringify(updatedSlots));
  };

  // Convert time to 24-hour format for validation
  const convertTo24Hour = (hour, minute, period) => {
    let hours24 = parseInt(hour);
    if (period === "PM" && hours24 !== 12) hours24 += 12;
    if (period === "AM" && hours24 === 12) hours24 = 0;
    return hours24 * 60 + parseInt(minute);
  };

  // Handle day selection logic
  const handleDayChange = (index, day) => {
    const updatedSlots = [...slots];
    const isSelected = updatedSlots[index].days.includes(day);

    // Toggle the selected day
    if (isSelected) {
      updatedSlots[index].days = updatedSlots[index].days.filter(
        (selectedDay) => selectedDay !== day
      );
    } else {
      updatedSlots[index].days = [...updatedSlots[index].days, day];
    }

    setSlots(updatedSlots);
    saveToLocalStorage(updatedSlots);
  };

  // Handle input change for specific fields
  const handleInputChange = (index, field, value) => {
    const updatedSlots = [...slots];
    updatedSlots[index][field] = value;
    setSlots(updatedSlots);
    saveToLocalStorage(updatedSlots);
  };

  // Add a new slot
  const addSlot = () => {
    const newSlot = {
      days: [],
      startHour: "12",
      startMinute: "00",
      startPeriod: "AM",
      endHour: "12",
      endMinute: "00",
      endPeriod: "PM",
      fromDate: "",
      toDate: "",
      duration: "60 min",
    };
    const updatedSlots = [...slots, newSlot];
    setSlots(updatedSlots);
    saveToLocalStorage(updatedSlots);
  };

  // Select all days, weekdays, or weekends
  const handleSelectAllDays = (index) => {
    const updatedSlots = [...slots];
    updatedSlots[index].days =
      updatedSlots[index].days.length === days.length ? [] : [...days];
    setSlots(updatedSlots);
    saveToLocalStorage(updatedSlots);
  };

  const handleSelectWeekdays = (index) => {
    const updatedSlots = [...slots];
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    updatedSlots[index].days = weekdays.every((day) =>
      updatedSlots[index].days.includes(day)
    )
      ? []
      : weekdays;
    setSlots(updatedSlots);
    saveToLocalStorage(updatedSlots);
  };

  const handleSelectWeekends = (index) => {
    const updatedSlots = [...slots];
    const weekends = ["Saturday", "Sunday"];
    updatedSlots[index].days = weekends.every((day) =>
      updatedSlots[index].days.includes(day)
    )
      ? []
      : weekends;
    setSlots(updatedSlots);
    saveToLocalStorage(updatedSlots);
  };

  // Remove a specific slot
  const removeSlot = (index) => {
    const updatedSlots = slots.filter((_, slotIndex) => slotIndex !== index);
    setSlots(updatedSlots);
    saveToLocalStorage(updatedSlots);
    setValue("mentorAvailability", updatedSlots);
  };

  // Validation for slot fields
  const validateSlot = (slot) => {
    let errors = {};
    const startTime = convertTo24Hour(
      slot.startHour,
      slot.startMinute,
      slot.startPeriod
    );
    const endTime = convertTo24Hour(
      slot.endHour,
      slot.endMinute,
      slot.endPeriod
    );

    if (!slot.days.length) errors.days = "Days must be selected.";
    if (!slot.fromDate) errors.fromDate = "Start date is required.";
    if (!slot.toDate) errors.toDate = "End date is required.";
    if (startTime === endTime)
      errors.timeMismatch = "Start and end times cannot be the same.";
    if (endTime <= startTime)
      errors.invalidTimeOrder = "End time must be later than start time.";
    if (new Date(slot.toDate) <= new Date(slot.fromDate))
      errors.invalidDateOrder = "End date must be later than start date.";

    return errors;
  };

  // Save all slots after validation
  const saveSlotForIndex = (index) => {
    const slot = slots[index];
    const errors = validateSlot(slot);

    if (Object.keys(errors).length > 0) {
      alert(`Error in Slot ${index + 1}: ${Object.values(errors).join(", ")}`);
      return;
    }

    // Update and save the validated slot
    const updatedSlots = [...slots];
    updatedSlots[index] = slot;
    setSlots(updatedSlots);
    saveToLocalStorage(updatedSlots);
    setValue("mentorAvailability", updatedSlots);
    alert(`Slot ${index + 1} saved successfully!`);
  };

  useEffect(() => {
    const savedSlots = localStorage.getItem("slots");
    if (savedSlots) {
      try {
        const parsedData = JSON.parse(savedSlots);
        setValue("mentorAvailability", parsedData);
      } catch (error) {
        console.error("Error parsing saved slots:", error);
      }
    }
  }, []);

  return (
    <div>
      <div className="col-lg-12">
        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <b>
              Your Timezone <span className="RedColorStarMark">*</span>
            </b>
          </label>

          <select
            className="form-select"
            name="mentorTimezone"
            {...register("mentorTimezone", {
              required: "Please select the Time zone",
            })}
          >
            <option
              defaultValue={
                "UTC+05:30: Indian Standard Time (IST), Sri Lanka Time (SLT)"
              }
            >
              {" "}
              UTC+05:30: Indian Standard Time (IST), Sri Lanka Time (SLT)
            </option>
            {option_fro_timezone?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
      //  onSubmit={handleSubmit}
      >
        {slots.map((slot, index) => {
          const errors = validateSlot(slot);
          return (
            <div key={index} className="AvailabilityMainContainer">
              <div
                className="Availability-container"
                onClick={() => toggleDropdownforClose(index)}
              >
                {" "}
                <h3>Slot {index + 1}</h3>
                <div
                  onClick={() => removeSlot(index)}
                  style={{ marginLeft: "10px" }}
                >
                  {" "}
                  <i className="fa-solid fa-xmark cross-btn"></i>
                </div>
              </div>

              <div className="slot-container1">
                {" "}
                <div className="slot-container1">
                  <div className="availability-day">
                    <label>Days:</label>
                    <div className="custom-dropdown">
                      <div
                        onClick={() => toggleDropdown(index)}
                        className="dropdown-header"
                      >
                        {slot.days.length === 0 ? (
                          <div className="dropdownDayBox">
                            {" "}
                            <div>Select Days</div>
                            <div>
                              {" "}
                              <i className="fa-solid fa-chevron-down"></i>
                            </div>
                          </div>
                        ) : slot.days.length === days.length ? (
                          "All Days"
                        ) : (
                          slot.days.join(", ")
                        )}
                      </div>
                      {isDropdownOpen[index] && (
                        <div className="dropdownDay">
                          <div className="dropdown-actions">
                            <div>
                              {" "}
                              <button
                                type="button"
                                className="dropdownDayOption btnDays"
                                onClick={() => handleSelectAllDays(index)}
                              >
                                {slot.days.length === days.length
                                  ? "Clear All"
                                  : "Select All"}
                              </button>
                            </div>
                            <div>
                              {" "}
                              <button
                                type="button"
                                className="dropdownDayOption btnDays"
                                onClick={() => handleSelectWeekdays(index)}
                              >
                                Weekdays
                              </button>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="dropdownDayOption btnDays"
                                onClick={() => handleSelectWeekends(index)}
                              >
                                Weekends
                              </button>
                            </div>
                          </div>
                          {days.map((day) => (
                            <div key={day} className="checkbox-item">
                              <input
                                type="checkbox"
                                id={`${index}-${day}`}
                                checked={slot.days.includes(day)}
                                onChange={() => handleDayChange(index, day)}
                              />
                              <label htmlFor={`${index}-${day}`}>{day}</label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Display Days Validation Error */}
                    {errors.days && (
                      <p style={{ color: "red" }}>{errors.days}</p>
                    )}
                  </div>
                </div>
                <div onClick={() => toggleDropdownforClose(index)}>
                  {/* Start Time Fields */}
                  <label>Start Time:</label>
                  <div className="timeslot">
                    <select
                      value={slot.startHour}
                      onChange={(e) =>
                        handleInputChange(index, "startHour", e.target.value)
                      }
                    >
                      {hours.map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </select>
                    <select
                      value={slot.startMinute}
                      onChange={(e) =>
                        handleInputChange(index, "startMinute", e.target.value)
                      }
                    >
                      {minutes.map((minute) => (
                        <option key={minute} value={minute}>
                          {minute}
                        </option>
                      ))}
                    </select>
                    <select
                      value={slot.startPeriod}
                      onChange={(e) =>
                        handleInputChange(index, "startPeriod", e.target.value)
                      }
                    >
                      {periods.map((period) => (
                        <option key={period} value={period}>
                          {period}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.startTime && (
                    <p style={{ color: "red" }} className="errorfont">
                      {errors.startTime}
                    </p>
                  )}
                </div>
                <div onClick={() => toggleDropdownforClose(index)}>
                  {" "}
                  {/* End Time Fields */}
                  <label>End Time:</label>
                  <div className="timeslot">
                    <select
                      value={slot.endHour}
                      onChange={(e) =>
                        handleInputChange(index, "endHour", e.target.value)
                      }
                    >
                      {hours.map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </select>
                    <select
                      value={slot.endMinute}
                      onChange={(e) =>
                        handleInputChange(index, "endMinute", e.target.value)
                      }
                    >
                      {minutes.map((minute) => (
                        <option key={minute} value={minute}>
                          {minute}
                        </option>
                      ))}
                    </select>
                    <select
                      value={slot.endPeriod}
                      onChange={(e) =>
                        handleInputChange(index, "endPeriod", e.target.value)
                      }
                    >
                      {periods.map((period) => (
                        <option key={period} value={period}>
                          {period}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.endTime && (
                    <p style={{ color: "red" }} className="errorfont">
                      {errors.endTime}
                    </p>
                  )}
                </div>
                {/* Start Date */}
                <div className="dateAvialbility ">
                  <label>Start Date:</label>
                  <DatePicker
                    selected={slot.fromDate ? new Date(slot.fromDate) : null}
                    onChange={(date) =>
                      handleInputChange(index, "fromDate", date)
                    }
                    dateFormat="yyyy-MM-dd"
                    minDate={today} // Disable past dates
                    className="date-picker"
                  />
                  {errors.fromDate && (
                    <p style={{ color: "red" }} className="errorfont">
                      {errors.fromDate}
                    </p>
                  )}
                </div>
                {/* End Date */}
                <div className="dateAvialbility">
                  <label>End Date:</label>
                  <DatePicker
                    selected={slot.toDate ? new Date(slot.toDate) : null}
                    onChange={(date) =>
                      handleInputChange(index, "toDate", date)
                    }
                    dateFormat="yyyy-MM-dd"
                    minDate={today} // Disable past dates
                    className="date-picker"
                  />
                  {errors.toDate && (
                    <p style={{ color: "red" }} className="errorfont">
                      {errors.toDate}
                    </p>
                  )}
                  {errors.dateMismatch && (
                    <p style={{ color: "red" }} className="errorfont">
                      {errors.dateMismatch}
                    </p>
                  )}
                  {errors.invalidDateOrder && (
                    <p style={{ color: "red" }} className="errorfont">
                      {errors.invalidDateOrder}
                    </p>
                  )}
                </div>
                <div
                  className="availability-duration"
                  onClick={() => toggleDropdownforClose(index)}
                >
                  {" "}
                  <label>Duration:</label>
                  <select
                    value={slot.duration}
                    onChange={(e) =>
                      handleInputChange(index, "duration", e.target.value)
                    }
                  >
                    {durations.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div
                className="availability-saveDiv"
                onClick={() => toggleDropdownforClose(index)}
              >
                {" "}
                <button
                  type="button"
                  onClick={() => saveSlotForIndex(index)}
                  className="save-btn"
                >
                  Save Slot
                </button>
              </div>
            </div>
          );
        })}
        <div className="addBtnAvailability">
          {" "}
          <button type="button" onClick={addSlot} className="add-slot-btn">
            Add Slot
          </button>
        </div>

        {/* <button type="submit">Save Availability</button> */}
      </div>
    </div>
  );
};

export default AvailabilityForm;
