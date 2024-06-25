import React from "react";
import "./menteeupcomingsession.css";
import MenteeUpcomingSessionCard from "./MenteeUpcomingSessionCard";
const MenteeUpcomingSessions = () => {
  return (
    <div className="col-lg-10 ps-0">
      <div className="difuhtre_content bkjihinewrewr">
        <div className="flkhgjfgf">
          <div className="fgfdg">
            <h2>Your Upcoming Mentor Sessions</h2>
          </div>

          <div className="row">
            <MenteeUpcomingSessionCard />
            <MenteeUpcomingSessionCard /> <MenteeUpcomingSessionCard />{" "}
            <MenteeUpcomingSessionCard /> <MenteeUpcomingSessionCard />{" "}
            <MenteeUpcomingSessionCard /> <MenteeUpcomingSessionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeUpcomingSessions;
