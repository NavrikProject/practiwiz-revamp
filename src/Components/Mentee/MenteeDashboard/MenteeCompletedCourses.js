import React from "react";
import MenteeCompCourseCard from "./MenteeCompCourseCard";

const MenteeCompletedCourses = () => {
  return (
    <>
      <div class="col-lg-10 ps-0">
        <div class="difuhtre_content">
          <div class="flkhgjfgf">
            <div class="fgfdg">
              <h2>Your Completed Courses</h2>
            </div>
            <div class="row">
              <MenteeCompCourseCard />
              <MenteeCompCourseCard /> <MenteeCompCourseCard />{" "}
              <MenteeCompCourseCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenteeCompletedCourses;
