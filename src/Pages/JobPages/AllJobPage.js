import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AllJobs from "../../Components/Jobs/AllJobs";
import { Section7 } from "../../Components/Contactus/contact";

const AllJobPage = () => {
  return (
    <>
      <Navbar />
      <AllJobs />
      <Section7 />
      <Footer />
    </>
  );
};

export default AllJobPage;
