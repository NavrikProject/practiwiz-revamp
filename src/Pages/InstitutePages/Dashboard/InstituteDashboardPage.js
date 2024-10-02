import React from "react";
import InstituteDashboard from "../../../Components/Institute/InstituteDashboard/InstituteDashboard";
import GoToTop from "../../../Utils/GoToTop";
const InstituteDashboardPage = () => {
  document.title = "Practywiz | Institute Dashboard";
  return (
    <>
      <InstituteDashboard />
      <GoToTop />
    </>
  );
};

export default InstituteDashboardPage;
