import React from "react";
import "./SkeltonLoadingStyles.css";
const MentorCardSkelton = () => {
  return (
    <>
      <div class="mentorDiv">
        <div class="mentorDownDiv">
          <img
            class="mentorImage skeleton"
            style={{ width: "50%", marginTop: "12px" }}
            src=""
            alt=""
          />
          <h3
            class="mentorName skeleton"
            style={{ width: "50%", margin: "10px auto" }}
          >
            <div class="skelton-text"></div>
          </h3>
          <div
            class="mentorDescP skeleton"
            style={{ width: "80%", margin: "0 auto 10px auto" }}
          >
            <div class="skelton-text"></div>
          </div>
          <div
            class="mentorDescP skeleton"
            style={{ width: "40%", margin: "0 auto 10px auto" }}
          >
            <div class="skelton-text"></div>
          </div>
          <div
            class="mentorDescP skeleton"
            style={{ width: "50%", margin: "0 auto 10px auto" }}
          >
            <div class="skelton-text"></div>
          </div>
          <div class="bookNowButtonDiv">
            <div
              class="mentorName skeleton"
              style={{ width: "50%", margin: "auto" }}
            >
              <div
                class="skelton-text"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorCardSkelton;
