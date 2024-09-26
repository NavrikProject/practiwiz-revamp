import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import LoginForm from "../../../Components/Forms/Login/LoginForm";
import GoToTop from "../../../Utils/GoToTop";

const LoginFormPage = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
      <GoToTop />
    </>
  );
};

export default LoginFormPage;
