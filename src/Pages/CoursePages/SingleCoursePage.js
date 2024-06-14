import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SingleCourse from "../../Components/Courses/SingleCourse/SingleCourse";

const SingleCoursePage = () => {
  return (
    <>
      <Navbar />
      <SingleCourse />
      <Footer />
    </>
  );
};

export default SingleCoursePage;
