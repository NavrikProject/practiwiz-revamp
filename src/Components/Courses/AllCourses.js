import React from "react";
import "./allcourse.css";
import CourseCard from "./CourseCard";
const AllCourses = () => {
  return (
    <>
      <div ClassName="aslkhghj2">
        <div ClassName="jbbhvf55">
          <div ClassName="container-fluid px-5">
            <div ClassName="jgfgfg">
              <h2>All Courses</h2>
              <p>
                Home <i ClassName="fa-solid fa-greater-than"></i> All Courses
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ClassName="kjfghdgvfgfghfh">
        <div ClassName="container-fluid px-5">
          <div ClassName="jdfhygdff">
            <div ClassName="row align-items-center">
              <div ClassName="col-lg-9">
                <div ClassName="kdrhgjddf">
                  <h5 ClassName="mb-0">
                    <b>Showing 10 Courses</b>
                  </h5>
                </div>
              </div>

              <div ClassName="col-lg-3">
                <div ClassName="nhjfg position-relative">
                  <input
                    ClassName="form-control"
                    placeholder="What are you interested in?.."
                  />

                  <i ClassName="fa-solid fa-2x fa-circle-right position-absolute"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ClassName="kjfhhreghft">
        <div ClassName="container-fluid px-5">
          <div ClassName="uikjghfh">
            <div ClassName="row">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
