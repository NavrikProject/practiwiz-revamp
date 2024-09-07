import React from "react";
import MenteeDashboard from "../../../Components/Mentee/MenteeDashboard/MenteeDashboard";
const MenteeDashboardPage = ({ user, token }) => {
  return (
    <>
      <MenteeDashboard user={user} token={token} />
    </>
  );
};

export default MenteeDashboardPage;
