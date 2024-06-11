import React from "react";
import AllMentors from "../../../Components/Mentor/AllMentors/AllMentors";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { Section7 } from "../../../Components/Contactus/contact";

const AllMentorsPage = () => {
  return (
    <>
      <Navbar />
      <AllMentors />
      <Section7 />
      <Footer />
    </>
  );
};

export default AllMentorsPage;
