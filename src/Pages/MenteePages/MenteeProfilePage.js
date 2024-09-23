import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MenteeProfile from "../../Components/Mentee/MenteeDashboard/OtherComponents/MenteeProfile";
const MenteeProfilePage = () => {
  return (
    <>
      <Navbar />
      <MenteeProfile />
      <Footer />
    </>
  );
};

export default MenteeProfilePage;
