import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { ApiURL } from "../../../../Utils/ApiURL";
import { Link } from "react-router-dom";
const MentorUpcomingSessionCard = ({ allBookingSessions, user, token }) => {
  const url = ApiURL();
  const ApproveMentorSessionHandler = async (
    BookingId,
    mentorUserDtlsId,
    menteeUserDtlsId
  ) => {
    if (BookingId) {
      try {
        const response = await axios.post(
          `${url}api/v1/mentor/booking/appointment/update`,
          { bookingId: BookingId, mentorUserDtlsId, menteeUserDtlsId }
        );
        if (response.data.success) {
          toast.success("Successfully updated mentor booking session.");
        }
        if (response.data.error) {
          toast.error("There was an error while updating the mentor session.");
        }
      } catch (error) {
        toast.error("There was an error while updating the mentor session.");
      }
    } else {
      toast.error(
        "There was an error while updating the booking. Please try again after sometime!"
      );
    }
  };
  return (
    <>
      {allBookingSessions?.map((session) => {
        const bookingDate = new Date(session.mentor_session_booking_date);
        let bookingStartTime = null;

        if (session.mentor_booking_starts_time) {
          const [time, meridian] =
            session.mentor_booking_starts_time.split(" ");
          if (time && meridian) {
            let [hours, minutes] = time.split(":");
            hours = parseInt(hours, 10);
            minutes = parseInt(minutes, 10);

            if (meridian === "PM" && hours < 12) hours += 12;
            if (meridian === "AM" && hours === 12) hours = 0;

            bookingStartTime = new Date(
              bookingDate.getFullYear(),
              bookingDate.getMonth(),
              bookingDate.getDate(),
              hours,
              minutes
            );
          }
        }

        const currentDate = new Date();

        const isToday =
          bookingDate.toDateString() === currentDate.toDateString(); // Check if booking date is today
        const isFutureTime = bookingStartTime && bookingStartTime > currentDate; // Check if time is in the future
        const isPastTime = bookingStartTime && bookingStartTime <= currentDate; // Check if time is in the past

        return (
          <div className="col-lg-3 mb-3" key={session.mentor_booking_appt_id}>
            <div className="ghfghgfhg iuhuh__enruiere mb-0">
              <div className="jghdfrg">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="doiejrer_left">
                      <div className="kmg">
                        <img src={session.mentor_profile_photo} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="doiejrer_right mt-3">
                      <div className="dfhjbghfjgfgh22">
                        <h4>
                          {session.user_firstname + " " + session.user_lastname}
                        </h4>
                        <h5>{session.mentor_job_title}</h5>
                        <hr />
                        <div className="row mt-3 justify-content-center">
                          <div className="col-lg-6 mb-2">
                            <div className="ierjuhrt_left">
                              <h5 className="mb-0">
                                <i className="fa-regular me-1 fa-clock"></i>{" "}
                                Time:
                              </h5>
                              <p className="my-0">
                                {session.mentor_booking_time}
                              </p>
                            </div>
                          </div>

                          <div className="col-lg-6 mb-2">
                            <div className="ierjuhrt_left">
                              <h5 className="mb-0">
                                <i className="fa-solid me-1 fa-calendar-days"></i>{" "}
                                Date:
                              </h5>
                              <p className="my-0">
                                {bookingDate.toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="kbfhgfgfg d-flex justify-content-center mt-3">
                          {/* Approve Now Message */}
                          {session.mentor_booking_confirmed === "No" &&
                            isToday &&
                            isFutureTime && (
                              <>
                                <div className="error-box">
                                  Please approve this Mentor session to connect
                                  with Mentee for the session.
                                </div>
                                <button
                                  className="btn-main me-1"
                                  onClick={() =>
                                    ApproveMentorSessionHandler(
                                      session.mentor_booking_appt_id,
                                      session.mentor_user_dtls_id,
                                      session.mentee_user_dtls_id
                                    )
                                  }
                                >
                                  Approve Now!
                                </button>
                              </>
                            )}

                          {/* Already Passed Message */}
                          {session.mentor_booking_confirmed === "No" &&
                            (bookingDate < currentDate ||
                              (isToday && isPastTime)) && (
                              <div className="error-box">
                                You cannot accept this appointment. The date has
                                already passed.
                              </div>
                            )}

                          {/* Already Approved Message */}
                          {session.mentor_booking_confirmed === "Yes" &&
                            isToday &&
                            isFutureTime && (
                              <>
                                <div className="error-box-green">
                                  You have already approved this mentor session.
                                  Please host the session on the booking time
                                  and date!
                                </div>
                                <button className="btn-main">
                                  <Link
                                    to={`${session.mentor_host_url}`}
                                    target="_blank"
                                  >
                                    Host Meeting!
                                  </Link>
                                </button>
                              </>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MentorUpcomingSessionCard;
