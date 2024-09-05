import React from "react";

const MentorRatingCard = ({ feedbackCount, feedback_details }) => {
  return (
    <>
      {feedbackCount === 0 && (
        <h4 className="noReviewsFound">No reviews found</h4>
      )}
      {feedback_details !== null &&
        feedbackCount > 0 &&
        JSON.parse(feedback_details).map((feedback) => {
          return (
            <div className="hghgg mt-3">
              <div className="djbgdfdfgh d-flex justify-content-between align-items-center">
                <div className="fyhugdghg d-flex justify-content-between align-items-center">
                  <div className="kjghjfg me-2">
                    <img src="./images/rrrr2.png" alt="" />
                  </div>
                  <div className="ihceuirr mt-3">
                    <h4>Tithi Mishra</h4>
                    <div className="fgnhjghjgh">
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <p>
                        <i className="fa-solid fa-calendar-days"></i> 17/03/2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="gnhjbggf">
                  <a href="/mentor">View Profile</a>
                </div>
              </div>

              <div className="dfkjbghdfffg">
                <p>
                  I was at first in a confusion regarding the subject matter of
                  business analytics. The first-day introduction from Gautam
                  Sir’s part made all my confusion clear. He is in a true sense
                  a Pole star in the business analytics domain.
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default MentorRatingCard;
