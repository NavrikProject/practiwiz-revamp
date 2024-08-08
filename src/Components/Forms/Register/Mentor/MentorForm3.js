import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./MentorForm3.css";
import { Controller, useFormContext } from "react-hook-form";

const daysOfWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const initialTime = {
  hours: "00",
  minutes: "00",

  ampm: "PM",
};

const initialDate = {
  // mentor_timeslot_rec_indicator: '',
  // Mentor_timeslot_rec_end_date: null
};

const MentorForm3 = () => {
  const [condition, setcondition] = useState(true);

  const defaultshow = () => {
    if (condition) {
      setcondition(false);
    } else if (condition) {
      setcondition(true);
    }
  };

  const {
    control,


    setValue,
    formState: { errors },
  } = useFormContext({
    defaultValues: daysOfWeek.reduce(
      (acc, day) => ({
        ...acc,
        [day]: [
          {
            from: initialTime,
            to: initialTime,
          },
        ],
      }),
      {}
    ),
  });

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

  const handleDaySwitch = (day, checked) => {
    setSelectedDays((prev) => ({ ...prev, [day]: checked }));
    if (!checked) {
      setValue(day, []);
      setTimeSlotTags((prev) => ({ ...prev, [day]: [] }));
    }
  };

  const handleTimeChange = (day, type, value) => {
    setTimeInputs((prev) => ({
      ...prev,
      [day]: { ...prev[day], [type]: value },
    }));
  };


  const handleOkClick = (day) => {
    const { from, to, date, recurring } = timeInputs[day];
    
    // Check if all fields are filled
    if (!from.hours || !from.minutes || !from.ampm || !to.hours || !to.minutes || !to.ampm || !date.Mentor_timeslot_rec_end_date || !recurring.mentor_timeslot_rec_indicator) {
        // alert('Please fill in all the fields before adding the slot.');
        return;
    }

    const timeSlot = { from, to, date, recurring };
    const updatedTags = [...timeSlotTags[day], timeSlot];
    setTimeSlotTags(prev => ({ ...prev, [day]: updatedTags }));
    setValue(day, updatedTags);
    setTimeInputs(prev => ({ ...prev, [day]: { from: initialTime, to: initialTime, date: {  Mentor_timeslot_rec_end_date: '' }, recurring: { mentor_timeslot_rec_indicator: ''} } }));
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
    <>

      <div className="line-1">Set your availability</div>
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
                      checked={selectedDays[day]}
                      onChange={(e) => handleDaySwitch(day, e.target.checked)}
                      onClick={defaultshow}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              ))}
            </div>
            <div className="Timecolumn">
              {daysOfWeek.map(
                (day) =>
                  selectedDays[day] && (
                    <div key={day} className="innertimeslot">
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
                        <div  className="label-input">
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
                                  mentor_timeslot_rec_indicator: e.target.value,
                                })
                              }
                              // style={styles.select}
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
                              minDate={new Date()}  // Prevent past dates
                              style={styles.datePicker}
                            />
                          )}
                        /></div>
                        <button
                          type="button"
                          onClick={() => handleOkClick(day)}
                          style={styles.okButton}
                        >
                          ADD
                        </button>
                      </div>
                      </div>

                      {timeSlotTags[day].map((slot, index) => (
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
        </div>
     
    </>
  );
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
        {Array.from({ length: 13 }, (_, i) => i ++).map((hour) => (
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
        <option value="PM">PM</option>
        <option value="AM">AM</option>
      </select>
    </div>
  );
};

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

    marginBottom: "8px",

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
export default MentorForm3;
