import React from "react";
import Qqqq1 from "../../../Images/Mentors/qqq2.webp";
import { Link } from "react-router-dom";
const AllMentorCard = ({ mentor }) => {
  let mentorName = mentor.user_firstname + " " + mentor.user_lastname;
  return (
    <div className="ghfghgfhg">
      <div className="jghdfrg">
        <div className="kmg">
          <img
            src={mentor.mentor_profile_photo}
            alt={mentor.user_firstname + " " + mentor.user_lastname}
          />
        </div>
        <div className="dfhjbghfjgfgh22">
          <h4>{mentor.user_firstname + " " + mentor.user_lastname}</h4>
          <h6>{mentor.mentor_job_title}</h6>
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
                  .toLowerCase()}/${mentor.user_dtls_id}`}
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
