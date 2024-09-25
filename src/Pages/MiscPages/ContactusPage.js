import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  ContactUs,
  GoogleMap,
  Section7,
} from "../../Components/Contactus/contact";
import GoToTop from "../../Utils/GoToTop";

const ContactusPage = () => {
  return (
    <>
      <Navbar />
      <ContactUs />
      <GoogleMap />
      <Section7 />
      <Footer />
      <GoToTop />
    </>
  );
};

export default ContactusPage;
