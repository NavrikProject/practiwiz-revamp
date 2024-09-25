import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ForgotPassword from "../../../Components/Forms/ForgotPassword/ForgotPassword";
import GoToTop from "../../../Utils/GoToTop";

const ForgotPasswordPage = () => {
  return (
    <>
      <Navbar />
      <ForgotPassword />
      <Footer />
      <GoToTop />
    </>
  );
};

export default ForgotPasswordPage;
