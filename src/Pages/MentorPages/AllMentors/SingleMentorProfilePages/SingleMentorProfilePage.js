import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import SingleMentorProfile from "../../../../Components/Mentor/AllMentors/SingleMentorProfile/SingleMentorProfile";
import GoToTop from "../../../../Utils/GoToTop";
const SingleMentorProfilePage = () => {
  return (
    <>
      <Navbar />
      <SingleMentorProfile />
      <Footer />
      <GoToTop />
    </>
  );
};

export default SingleMentorProfilePage;
