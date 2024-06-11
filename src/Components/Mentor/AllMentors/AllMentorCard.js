import React from "react";
import Qqqq1 from "../../../Images/Mentors/qqq2.webp";
import { Link } from "react-router-dom";
const AllMentorCard = () => {
  let mentorName = "Gourav Bhati";
  return (
    <div className="ghfghgfhg">
      <div className="jghdfrg">
        <div className="kmg">
          <img src={Qqqq1} alt="" />
        </div>

        <div className="dfhjbghfjgfgh22">
          <h4>Gourav Bhati</h4>

          <h6>Product Owner</h6>

          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>

          <p>07 Sessions (57 Reviews)</p>

          <div className="kbfhgfgfg">
            <button className="btn-main">
              <Link
                to={`/mentor-club/mentor-profile/${mentorName
                  .replace(" ", "-")
                  .toLowerCase()}`}
              >
                BOOK NOW
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMentorCard;
