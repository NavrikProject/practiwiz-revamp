import React from "react";
import StarRating from "../../../../Utils/StartRating";

const MentorRatingCard = ({ feedbackCount, feedback_details }) => {
  console.log(feedbackCount, feedback_details);
  return (
    <>
      {feedbackCount === 0 && (
        <h4 className="noReviewsFound">No reviews found</h4>
      )}
      {feedback_details !== null &&
        feedbackCount > 0 &&
        JSON.parse(feedback_details).map((feedback) => {
          return (
            <div className="hghgg mt-3 feedbackBorder">
              <div className="djbgdfdfgh d-flex justify-content-between align-items-center">
                <div className="fyhugdghg d-flex justify-content-between align-items-center">
                  <div className="kjghjfg me-2">
                    <img
                      src={feedback.mentee_profile}
                      alt={
                        feedback.mentee_firstname +
                        " " +
                        feedback.mentee_lastname
                      }
                    />
                  </div>
                  <div className="ihceuirr mt-3">
                    <h4 style={{ textTransform: "uppercase" }}>
                      {feedback.mentee_firstname +
                        " " +
                        feedback.mentee_lastname}
                    </h4>
                    <div className="fgnhjghjgh">
                      <span>
                        <StarRating
                          rating={
                            feedback.mentor_feedback_session_overall_rating
                          }
                        />
                      </span>
                      <p>
                        <i
                          className="fa-solid fa-calendar-days"
                          style={{ marginRight: "10px" }}
                        ></i>
                        {new Date(
                          feedback.mentor_feedback_dtls_cr_date
                        ).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="gnhjbggf">
                  <a href="/mentor-club">View Profile</a>
                </div>
              </div>
              <hr />
              <div className="dfkjbghdfffg">
                <p>{feedback.mentor_feedback_detailed_fb}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default MentorRatingCard;
