import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CaseStudy from "../../Components/CaseStudy/CaseStudy";
const CaseStudyPage = ({ user, token }) => {
  return (
    <>
      <Navbar />
      <CaseStudy user={user} token={token} />
      <Footer />
    </>
  );
};

export default CaseStudyPage;
