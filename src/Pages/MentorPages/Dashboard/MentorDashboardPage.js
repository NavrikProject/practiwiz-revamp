import React from "react";
import MentorDashboard from "../../../Components/Mentor/MentorDashboard/MentorDashboard";
const MentorDashboardPage = ({ user, token }) => {
  return (
    <>
      <MentorDashboard user={user} token={token} />
    </>
  );
};

export default MentorDashboardPage;
