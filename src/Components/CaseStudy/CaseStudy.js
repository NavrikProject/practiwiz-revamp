import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CaseStudyDisplay.css";
import CaseStudies from "../data/CaseStudies.json";

const CaseStudy = () => {
  return (
    <div className="case-study-display-container">
      <h1 className="head-clr">AI Case Studies</h1>
      {CaseStudies.map((caseStudy) => (
        <>
          <div key={caseStudy.id} className="case-study-card bright-border">
            <h2 className="head-clr">{caseStudy.caseTopic}</h2>
            <hr />
            <div className="case-study-content">
              <div className="case-study-text">
                <p>
                  <strong>Lesson:</strong> {caseStudy.lession}
                </p>

                <p>
                  <strong>Future Skills:</strong> {caseStudy.fututreSkils}
                </p>

                <p>
                  <strong>Roles:</strong>
                  <ul>
                    {caseStudy.roles.length > 0 &&
                      Object.entries(caseStudy.roles[0]).map(([key, value]) => (
                        <li key={key}>{value}</li>
                      ))}
                  </ul>
                </p>

                <p>
                  <strong>Main Character Role:</strong>{" "}
                  {caseStudy.roleOfMainCharacter}
                </p>

                <p>
                  <strong>Challenge:</strong> {caseStudy.challenge}
                </p>

                <Link
                  target="_blank"
                  to={`/case-studies/view-case-study/${caseStudy.caseTopic
                    .replace(" ", "-")
                    .toLowerCase()}/${caseStudy.id} `}
                >
                  <button className="see-case-btn">See Case</button>
                </Link>
              </div>
              <div className="case-study-video">
                <video controls>
                  <source src={caseStudy.videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>{" "}
          <hr />
        </>
      ))}
    </div>
  );
};

export default CaseStudy;
