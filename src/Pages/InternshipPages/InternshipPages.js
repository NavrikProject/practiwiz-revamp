import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Internships from "../../Components/Internships/Internships";
const InternshipPages = () => {
  return (
    <>
      <Navbar />
      <Internships title={"Internships"} />
      <Footer />
    </>
  );
};

export default InternshipPages;