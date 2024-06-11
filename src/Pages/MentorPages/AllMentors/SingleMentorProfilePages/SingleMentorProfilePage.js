import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import SingleMentorProfile from "../../../../Components/Mentor/AllMentors/SingleMentorProfile/SingleMentorProfile";
const SingleMentorProfilePage = () => {
  return (
    <>
      <Navbar />
      <SingleMentorProfile />
      <Footer />
    </>
  );
};

export default SingleMentorProfilePage;
