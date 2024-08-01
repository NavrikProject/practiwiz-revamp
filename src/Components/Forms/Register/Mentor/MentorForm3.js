import { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";
// import "./reg4Style.css";
import "./MentorForm3.css";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { current } from "@reduxjs/toolkit";
// import { useFormContext } from "react-hook-form";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const availabilityperiod = [
  "Daily",
  "Weekly",
  "Monthly",
  // "Quarterly",
  // "Half yearly",
  // "yearly",
];

const initialTime = {
  hours: "00",
  minutes: "00",
  ampm: "AM",
  
};

const MentorForm3 = () => {
  const [condition, setcondition] = useState(true);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

  const defaultshow = () => {
    if (condition) {
      setcondition(false);
    } else if (condition) {
      setcondition(true);
    }
  };
  const handleDropdownChange = (value) => {
    setShowAdditionalOptions(value === "Yes");
    if (value === "No") {
      resetField("mentor_timeslot_rec_indicator");
      resetField("Mentor_timeslot_rec_cr_date");
      resetField("Mentor_timeslot_rec_end_date");
    }
  };

  const {
    register,
    control,
    resetField,
    handleSubmit,
    watch,
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

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  const handleDaySwitch = (day, checked) => {
    setSelectedDays((prev) => ({ ...prev, [day]: checked }));
    if (checked) {
      setValue(day, [
        {
          from: initialTime,
          to: initialTime,
        },
      ]);
    }
  };

  // const ed =watch("Mentor_")

  return (
    <>
      <div>
        {/* <div className="jdoieoir_wrapper"> */}
        <div className="line-1">Set your availability</div>
        <div className="topfield">
          {/* <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>RECURRING</b>
              </label>

              <select className="form-select"  
              {...register("Mentor_")}
              >
                <option>No</option>
                <option > Yes</option>
                
              </select>
            </div> */}
          {/* <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
                <b>RECURRING</b>
              </label>
            <Controller
                    name="Mentor_"
                    control={control}
                    
                    defaultValue=""
                    render={({ field }) => (
                        <select {...field} onChange={(e) => {
                            field.onChange(e);
                            handleDropdownChange(e.target.value);
                        }} className="form-select">
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    )}
                />
                </div> */}

          {/* { showAdditionalOptions && ( <> */}

          {/* <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>AVAILABILITY CHECK </b>
              </label>

              <select
                className="form-select"
                {...register("mentor_timeslot_rec_indicator", {
                  required: "Please select the option",
                })} //1
              >
                <option  value={""}>Please select</option>
                {availabilityperiod.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.mentor_timeslot_rec_indicator && (
                <p className="Error-meg-login-register">
                  {errors.mentor_timeslot_rec_indicator.message}
                </p>
              )}
            </div> */}
          {/* <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>From Date </b>
              </label>

              <input
                    type="date"
                    className="form-control"
                    // id="exampleInputEmail1"
                    placeholder="current Date"
                    aria-describedby="emailHelp"
                    {...register("Mentor_timeslot_rec_cr_date", {
                      required: "current date",
                    })} //1
                  />
                  {errors.Mentor_timeslot_rec_cr_date && (
                    <p className="Error-meg-login-register">
                      {errors.Mentor_timeslot_rec_cr_date.message}
                    </p>
                  )}
            </div> */}
          {/* <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>To Date</b>
              </label>
              <input
                    type="date"
                    defaultValue={current}
                    className="form-control"
                    // id="exampleInputEmail1"
                    placeholder="current Date"
                    aria-describedby="emailHelp"
                    {...register("Mentor_timeslot_rec_end_date", {
                      required: "current date",
                    })} //1
                  />
                  {errors.Mentor_timeslot_rec_end_date && (
                    <p className="Error-meg-login-register">
                      {errors.Mentor_timeslot_rec_end_date.message}
                    </p>
                  )}
            
            </div> */}

          {/* </>  )} */}
        </div>
        <div className="whole">
          <div
            onSubmit={handleSubmit(onSubmit)}
            // style={styles.form}
            className="doiherner_wrapper"
          >
            <div className="linesepration">
              <div className="line-2">Select Days</div>

              <span className="line-3">
                Choose your preferred time slots for the selected day
              </span>
            </div>

            <div style={styles.container} className="main">
              <div className="dayColumn">
                {daysOfWeek.map((day) => (
                  <div className="daycolumns" key={day} style={styles.dayRow}>
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
              <div style={styles.slotsColumn} className="timeSlotRow">
                {!condition ? (
                  daysOfWeek.map(
                    (day) =>
                      selectedDays[day] && (
                        <div
                          className="innertimeslot"
                          key={day}
                          style={styles.daySlots}
                        >
                          <h6>{day}</h6>
                          <TimeSlots control={control} day={day} />
                        </div>
                      )
                  )
                ) : (
                  <div className="Timecolumn">
                    <div style={styles.timeSlotRow} className="timeslots">
                      <span style={styles.toLabel} className="tolabel">
                        FROM :
                      </span>
                      <input type="time" />

                      <span style={styles.toLabel} className="tolable">
                        TO:
                      </span>

                      <input type="time" />
                      <button type="button" style={styles.addButton}>
                        Add Time Slot
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* <button type="submit" className="btn juybeubrer_btn btn-primary">
                Next Step<i className="fa-solid ms-2 fa-right-long"></i>
              </button> */}
          </div>
        </div>{" "}
      </div>
      {/* </div> */}
    </>
  );
};

const TimeSlots = ({ control, day,onDropdownChange }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: day,
  });

  // const handlebox=()=>{
  //   const data = watch({day});
  //   const hello = data.filter(data=> data.Mon)
  //   console.log({hello})
  // }

  const {
    register,
    getValues,
    watch,
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

  return (
    <div className="Timecolumn">
      <div>
        {fields.map((item, index) => (
          <div key={item.id} style={styles.timeSlotRow} className="timeslots">
            <Controller
              name={`${day}[${index}].from`}
              control={control}
              render={({ field }) => (
                <CustomTimePicker
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <span style={styles.toLabel}>to</span>
            <Controller
              name={`${day}[${index}].to`}
              control={control}
              render={({ field }) => (
                <CustomTimePicker
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {/* <Controller
              name={`${day}[${index}].mentor_timeslot_rec_indicator`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                // <input {...field} placeholder="Option 1" style={styles.input} />
              //   <select
              //   className="form-select"
              //   {...register("mentor_timeslot_rec_indicator", {
              //     required: "Please select the option",
              //   })} //1
              // >
              //   <option value={""}>Please select</option>
              //   {availabilityperiod.map((option) => (
              //     <option key={option} value={option}>
              //       {option}
              //     </option>
              //   ))}
              // </select>

              <select {...field} onChange={(e) => {
                field.onChange(e);
                onDropdownChange(day, index, e.target.value);
            }} style={styles.select}>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>
              )}
            /> */}
             <Controller
                                name={`${day}[${index}].mentor_timeslot_rec_indicator`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <select {...field} style={styles.select}>
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Monthly</option>
                                    </select>
                                )}
                            />
            <Controller
              name={`${day}[${index}].recurring`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input  type="date"
                {...field} style={styles.input} />
              )}
            />

            <button
              type="button"
              onClick={() => remove(index)}
              style={styles.removeButton}
              className="btn btn-secondary float-left text-uppercase shadow-sm"
            >
              {/* Remove */}
              <i className="fa fa-minus fa-fw"></i>
            </button>
          </div>
        ))}
      </div>
      {/* <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <b>AVAILABILITY CHECK </b>
        </label>

        <select
          className="form-select"
          {...register("mentor_timeslot_rec_indicator", {
            required: "Please select the option",
          })} //1
        >
          <option value={""}>Please select</option>
          {availabilityperiod.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.mentor_timeslot_rec_indicator && (
          <p className="Error-meg-login-register">
            {errors.mentor_timeslot_rec_indicator.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <b>To Date</b>
        </label>
        <input
          type="date"
          defaultValue={current}
          className="form-control"
          // id="exampleInputEmail1"
          placeholder="current Date"
          aria-describedby="emailHelp"
          {...register("Mentor_timeslot_rec_end_date", {
            required: "current date",
          })} //1
        />
        {errors.Mentor_timeslot_rec_end_date && (
          <p className="Error-meg-login-register">
            {errors.Mentor_timeslot_rec_end_date.message}
          </p>
        )}
      </div> */}

      <button
        type="button"
        onClick={() => append({ from: "", to: "" })}
        // onClick={handlebox}

        className="btn btn-secondary float-left text-uppercase shadow-sm"
      >
        {/* Add Time Slot */}
        <i className="fa fa-plus fa-fw"></i>
      </button>
    </div>
  );
};

const EndDate = ({ value, onChange }) => {
  const handledatePmChange = (e) => {
    onChange({ ...value,Mentor_timeslot_rec_end_date : e.target.value });
  };
  // const handlerecChange = (e) => {
  //   onChange({ ...value, mentor_timeslot_rec_indicator: e.target.value });
  // };

  return (
    <>
      {/* <select
        // {...field}
        onChange={handlerecChange}
        style={styles.select}
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select> */}

      <input
        type="date"
        // {...field}
        onChange={handledatePmChange}
        style={styles.input}
      />
    </>
  );
};
const Reccuring = ({ value, onChange }) => {
  // const handledatePmChange = (e) => {
  //   onChange({ ...value, Date: e.target.value });
  // };
  const handlerecChange = (e) => {
    onChange({ ...value, mentor_timeslot_rec_indicator: e.target.value });
  };

  return (
    <>
      <select
        // {...field}
        onChange={handlerecChange}
        style={styles.select}
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>

      {/* <input
        type="date"
        // {...field}
        onChange={handledatePmChange}
        style={styles.input}
      /> */}
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
        {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
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
        {[0, 15, 30, 45].map((minute) => (
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
    // height: '100vh'
  },
  daysColumn: {
    flex: "1",
    marginRight: "20px",
    display: "flex",
    gap: "6px",
    marginRight: "24px",
    flex: "column",
  },
  slotsColumn: {
    flex: "4",
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
    marginBottom: "5px",
  },
  // timeSlotRow: {
  //   // display: "flex",
  //   // alignItems: "center",
  //   // marginBottom: "10px",
  // },
  toLabel: {
    // margin: '0 10px',
  },
  removeButton: {
    marginLeft: "10px",
  },
  addButton: {
    display: "block",
    marginTop: "10px",
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
};

export default MentorForm3;
