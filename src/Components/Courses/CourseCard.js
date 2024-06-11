import React from "react";
import Vb4 from "../../Images/Courses/vb4.jpg";
import { Link } from "react-router-dom";
const CourseCard = () => {
  let courseName = "Jumpstart To It Business Analyst";
  return (
    <>
      <div class="col-lg-4">
        <div class="drhuydgfth position-relative overflow-hidden">
          <div class="jgfg">
            <img src={Vb4} alt="" />
          </div>

          <div class="ngdfhgfdg">
            <span class="spn55">ALL LEVELS</span>
            <h4>Jumpstart To It Business Analyst</h4>
            <p>
              <span class="span121">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <span class="spn12">(5.0/3 Rating)</span>
            </p>
            <h3>$39</h3>
            <div class="kjhgdfgfd">
              <span>
                <p>
                  <i class="fa-solid fa-layer-group"></i> 11 Lessons
                </p>
              </span>
              <p class="pl-3">
                <i class="fa-solid fa-user"></i> 107 Students
              </p>
            </div>
          </div>

          <div class="nhjgghhjhjhjg position-absolute">
            <div class="nghjgfg55">
              <div class="kdfhfgfg55">
                <p>Beginner</p>
              </div>
              <div class="mdfhjgbg">
                <h2>Jumpstart To It Business Analyst</h2>
                <p>
                  <span class="span121">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <span>(3 Reviews)</span>
                </p>
                <h2>$39</h2>
              </div>
              <div class="jufbgyfr">
                <p>
                  Lorem ipsum dolor sit amet consectur adipisicing elit, sed do
                  eiusmod tempor inc idid unt ut labore et dolore...
                </p>
              </div>
              <div class="kjhgdfgfd2">
                <span>
                  <p>
                    <i class="fa-solid fa-layer-group"></i> 11 Lessons
                  </p>
                </span>
                <p class="pl-3">
                  <i class="fa-solid fa-user"></i> 107 Students
                </p>
              </div>
              <div class="kjghgdg">
                <button>
                  <Link
                    to={
                      "/courses/single-course/Jumpstart-To-It-Business-Analyst"
                    }
                  >
                    ENROLL NOW <i class="fa-solid fa-circle-right"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
