import React from "react";
import "./SkeltonLoadingStyles.css";
const MentorCardSkelton = () => {
  return (
    <>
      <div ClassName="mentorDiv">
        <div ClassName="mentorDownDiv">
          <img
            ClassName="mentorImage skeleton"
            style={{ width: "50%", marginTop: "12px" }}
            src=""
            alt=""
          />
          <h3
            ClassName="mentorName skeleton"
            style={{ width: "50%", margin: "10px auto" }}
          >
            <div ClassName="skelton-text"></div>
          </h3>
          <div
            ClassName="mentorDescP skeleton"
            style={{ width: "80%", margin: "0 auto 10px auto" }}
          >
            <div ClassName="skelton-text"></div>
          </div>
          <div
            ClassName="mentorDescP skeleton"
            style={{ width: "40%", margin: "0 auto 10px auto" }}
          >
            <div ClassName="skelton-text"></div>
          </div>
          <div
            ClassName="mentorDescP skeleton"
            style={{ width: "50%", margin: "0 auto 10px auto" }}
          >
            <div ClassName="skelton-text"></div>
          </div>
          <div ClassName="bookNowButtonDiv">
            <div
              ClassName="mentorName skeleton"
              style={{ width: "50%", margin: "auto" }}
            >
              <div
                ClassName="skelton-text"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorCardSkelton;
