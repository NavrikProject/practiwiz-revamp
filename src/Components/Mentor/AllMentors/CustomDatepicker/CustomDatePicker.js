import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../CustomeDatepciker.css";

const CustomDatePicker = ({
  timeslotList,
  bookingDetails,
  onDateSlotSelect,
  mentorTimeSlotDuration,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const getDayIndex = (day) => {
    switch (day) {
      case "Sun":
        return 0;
      case "Mon":
        return 1;
      case "Tue":
        return 2;
      case "Wed":
        return 3;
      case "Thu":
        return 4;
      case "Fri":
        return 5;
      case "Sat":
        return 6;
      default:
        return -1;
    }
  };

  const isDateSelectable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) return false;

    const daySlots = timeslotList?.filter((slot) => {
      const slotDay = getDayIndex(slot.mentor_timeslot_day);
      const endDate = new Date(slot.mentor_timeslot_rec_end_timeframe);
      endDate.setHours(0, 0, 0, 0);
      return (
        date.getDay() === slotDay && date <= endDate // Ensure duration matches
      );
    });

    return daySlots.length > 0;
  };

  const getSlotsForDate = (date) => {
    const selectedDay = date.toLocaleDateString("en-US", { weekday: "short" });
    return timeslotList?.filter(
      (slot) =>
        slot.mentor_timeslot_duration === mentorTimeSlotDuration && // Filter by selected duration
        slot.mentor_timeslot_day === selectedDay &&
        new Date(slot.mentor_timeslot_rec_end_timeframe) >= date
    );
  };

  const isSlotBooked = (date, slot) => {
    return bookingDetails?.some((booking) => {
      const bookingDate = new Date(booking.mentor_session_booking_date);
      bookingDate.setHours(0, 0, 0, 0);
      return (
        bookingDate.getTime() === date.getTime() &&
        (booking.mentor_booking_confirmed === "Yes" ||
          booking.mentor_booking_confirmed === "No") &&
        (booking.mentor_session_status === "pending" ||
          booking.mentor_session_status === "upcoming" ||
          booking.mentor_session_status === "completed") &&
        booking.mentor_booking_starts_time === slot.mentor_timeslot_from &&
        booking.mentor_booking_end_time === slot.mentor_timeslot_to
      );
    });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    const slots = getSlotsForDate(date);
    setAvailableSlots(slots);
    setSelectedSlot(null);
    onDateSlotSelect(date, null);
  };

  const handleSlotSelection = (slot) => {
    if (!isSlotBooked(startDate, slot)) {
      setSelectedSlot(slot);
      onDateSlotSelect(startDate, slot, slot.mentor_timeslot_id);
    }
  };

  // Use effect to reset date and available slots when the duration changes
  useEffect(() => {
    setStartDate(null);
    setAvailableSlots([]);
    setSelectedSlot(null);
    onDateSlotSelect(null, null); // Resetting the selection
  }, [mentorTimeSlotDuration]);

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        filterDate={isDateSelectable}
        inline
        dayClassName={(date) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (date < today) {
            return "grayed-out";
          }

          const slots = getSlotsForDate(date);
          if (slots.length === 0) return "";

          const allBooked = slots.every((slot) => isSlotBooked(date, slot));
          return allBooked ? "fully-booked" : "";
        }}
      />
      {availableSlots.length > 0 && (
        <div>
          <p className="selected-timeslotP">Select a Time Slot:</p>
          <ul className="unorderlist">
            {availableSlots.map((slot, index) => (
              <li
                key={index}
                className={`slot-item ${
                  isSlotBooked(startDate, slot) ? "booked-slot" : ""
                } ${selectedSlot === slot ? "selected-slot" : ""}`}
                onClick={() => handleSlotSelection(slot)}
                style={{
                  cursor: isSlotBooked(startDate, slot)
                    ? "not-allowed"
                    : "pointer",
                  borderColor: selectedSlot === slot ? "#007BFF" : "",
                }}
              >
                {slot.mentor_timeslot_from} - {slot.mentor_timeslot_to}
              </li>
            ))}
          </ul>
        </div>
      )}
      {startDate && availableSlots.length === 0 && (
        <p className="selected-timeslotP">
          No Slots available for the <b>{mentorTimeSlotDuration + " "}</b>
          minutes duration. <br /> Please select another date.
        </p>
      )}
      {!startDate && (
        <div>
          <p className="selected-timeslotP">Please select the date</p>
        </div>
      )}
      {selectedSlot && (
        <div>
          <p className="selected-timeslotP">You have chosen this slot :</p>
          <p className="selected-timeslot">
            {startDate?.toDateString() +
              " Time :" +
              selectedSlot.mentor_timeslot_from +
              "-" +
              selectedSlot.mentor_timeslot_to}
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
