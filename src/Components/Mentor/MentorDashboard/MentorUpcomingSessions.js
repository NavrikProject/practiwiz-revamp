import React, { useEffect, useState } from "react";
import "./mentorupcomingsession.css";
import MentorUpcomingSessionCard from "./MentorUpcomingSessionCard";
import { ApiURL } from "../../../Utils/ApiURL";
import axios from "axios";
import { useSelector } from "react-redux";
const MentorUpcomingSessions = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const [allBookingSessions, setAllBookingSessions] = useState([]);
  const url = ApiURL();
  useEffect(() => {
    const fetchMentors = async () => {
      const response = await axios.post(
        `${url}api/v1/mentor/booking/appointment/upcoming`,
        { userDtlsId: user?.user_id }
      );
      if (response.data.success) {
        setAllBookingSessions(response.data.success);
      }
      if (response.data.error) {
        setAllBookingSessions([]);
      }
    };
    fetchMentors();
  }, [url, user?.user_id]);
  return (
    <div className="col-lg-10 ps-0">
      <div className="difuhtre_content bkjihinewrewr">
        <div className="flkhgjfgf">
          <div className="fgfdg">
            <h2>Your Upcoming Mentor Sessions</h2>
          </div>
          <div className="row">
            <MentorUpcomingSessionCard
              allBookingSessions={allBookingSessions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorUpcomingSessions;
