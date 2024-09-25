import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import InstituteProfile from "../../../Components/Institute/InstituteProfile/InstituteProfile";
import GoToTop from "../../../Utils/GoToTop";

const InstituteProfilePage = () => {
  return (
    <>
      <Navbar />
      <InstituteProfile />
      <Footer />
      <GoToTop />
    </>
  );
};

export default InstituteProfilePage;
