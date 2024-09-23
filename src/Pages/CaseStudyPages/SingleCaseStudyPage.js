import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SingleCaseStudy from "../../Components/CaseStudy/SingleCaseStudy/SingleCaseStudy.jsx";
const SingleCaseStudyPage = ({ user, token }) => {
  return (
    <>
      <Navbar />
      <SingleCaseStudy user={user} token={token} />
      <Footer />
    </>
  );
};

export default SingleCaseStudyPage;
