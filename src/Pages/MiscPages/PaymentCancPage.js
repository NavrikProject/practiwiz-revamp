import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PaymentCancellation from "../../Components/Utils/PaymentCancellation";

const PaymentCancPage = () => {
  return (
    <>
      <Navbar />
      <PaymentCancellation />
      <Footer />
    </>
  );
};

export default PaymentCancPage;
