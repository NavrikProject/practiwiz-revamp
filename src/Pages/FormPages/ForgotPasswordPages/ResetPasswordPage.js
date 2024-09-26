import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ResetPassword from "../../../Components/Forms/ForgotPassword/ResetPassword";
import GoToTop from "../../../Utils/GoToTop";

const ResetPasswordPage = () => {
  return (
    <>
      <Navbar />
      <ResetPassword />
      <Footer />
      <GoToTop />
    </>
  );
};

export default ResetPasswordPage;
