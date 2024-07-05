import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import MenteeRegistration from "../../../Components/Forms/Register/Mentee/MenteeStepForm";

const MenteeRegistrationPage = () => {
  return (
    <>
      <Navbar />
      <MenteeRegistration />
      <Footer />
    </>
  );
};

export default MenteeRegistrationPage;
