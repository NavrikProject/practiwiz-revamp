import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HomePageBanner from "../../Components/Home/HomePageBanner";
import Section2 from "../../Components/Home/Section2";
// import Section3 from "../../Components/Home/Section3";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HomePageBanner />
      <Section2 />
      <Footer />
    </>
  );
};

export default Homepage;
