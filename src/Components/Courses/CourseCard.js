import React from "react";
import Vb4 from "../../Images/Courses/vb4.jpg";
import { Link } from "react-router-dom";
const CourseCard = () => {
  let courseName = "Jumpstart To It Business Analyst";
  return (
    <>
      <div ClassName="col-lg-4">
        <div ClassName="drhuydgfth position-relative overflow-hidden">
          <div ClassName="jgfg">
            <img src={Vb4} alt="" />
          </div>

          <div ClassName="ngdfhgfdg">
            <span ClassName="spn55">ALL LEVELS</span>
            <h4>Jumpstart To It Business Analyst</h4>
            <p>
              <span ClassName="span121">
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
                <i ClassName="fa-solid fa-star"></i>
              </span>
              <span ClassName="spn12">(5.0/3 Rating)</span>
            </p>
            <h3>$39</h3>
            <div ClassName="kjhgdfgfd">
              <span>
                <p>
                  <i ClassName="fa-solid fa-layer-group"></i> 11 Lessons
                </p>
              </span>
              <p ClassName="pl-3">
                <i ClassName="fa-solid fa-user"></i> 107 Students
              </p>
            </div>
          </div>

          <div ClassName="nhjgghhjhjhjg position-absolute">
            <div ClassName="nghjgfg55">
              <div ClassName="kdfhfgfg55">
                <p>Beginner</p>
              </div>
              <div ClassName="mdfhjgbg">
                <h2>Jumpstart To It Business Analyst</h2>
                <p>
                  <span ClassName="span121">
                    <i ClassName="fa-solid fa-star"></i>
                    <i ClassName="fa-solid fa-star"></i>
                    <i ClassName="fa-solid fa-star"></i>
                    <i ClassName="fa-solid fa-star"></i>
                    <i ClassName="fa-solid fa-star"></i>
                  </span>
                  <span>(3 Reviews)</span>
                </p>
                <h2>$39</h2>
              </div>
              <div ClassName="jufbgyfr">
                <p>
                  Lorem ipsum dolor sit amet consectur adipisicing elit, sed do
                  eiusmod tempor inc idid unt ut labore et dolore...
                </p>
              </div>
              <div ClassName="kjhgdfgfd2">
                <span>
                  <p>
                    <i ClassName="fa-solid fa-layer-group"></i> 11 Lessons
                  </p>
                </span>
                <p ClassName="pl-3">
                  <i ClassName="fa-solid fa-user"></i> 107 Students
                </p>
              </div>
              <div ClassName="kjghgdg">
                <button>
                  <Link
                    to={
                      "/courses/single-course/Jumpstart-To-It-Business-Analyst"
                    }
                  >
                    ENROLL NOW <i ClassName="fa-solid fa-circle-right"></i>
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
