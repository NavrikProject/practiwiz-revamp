import React from "react";
import "./allcourse.css";
import CourseCard from "./CourseCard";
const AllCourses = () => {
  return (
    <>
      <div class="aslkhghj2">
        <div class="jbbhvf55">
          <div class="container-fluid px-5">
            <div class="jgfgfg">
              <h2>All Courses</h2>
              <p>
                Home <i class="fa-solid fa-greater-than"></i> All Courses
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="kjfghdgvfgfghfh">
        <div class="container-fluid px-5">
          <div class="jdfhygdff">
            <div class="row align-items-center">
              <div class="col-lg-9">
                <div class="kdrhgjddf">
                  <h5 class="mb-0">
                    <b>Showing 10 Courses</b>
                  </h5>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="nhjfg position-relative">
                  <input
                    class="form-control"
                    placeholder="What are you interested in?.."
                  />

                  <i class="fa-solid fa-2x fa-circle-right position-absolute"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="kjfhhreghft">
        <div class="container-fluid px-5">
          <div class="uikjghfh">
            <div class="row">
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
