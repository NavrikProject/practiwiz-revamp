import React from "react";
import Vb1 from "../../../Images/Mentee/vb1.png";
const MenteeCompCourseCard = () => {
  return (
    <div class="col-lg-4">
      <div class="drhuydgfth">
        <div class="jgfg">
          <img src={Vb1} alt="" />
        </div>
        <div class="ngdfhgfdg">
          <span class="spn55">ALL LEVELS</span>
          <h4>Jumpstart To It Business Analyst</h4>
          <p>
            {" "}
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
      </div>
    </div>
  );
};

export default MenteeCompCourseCard;
