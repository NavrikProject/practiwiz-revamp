import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CaseStudyDisplay.css";
const CaseStudy = () => {
  const [caseStudies] = useState([
    {
      id: 1,
      caseTopic: "Topic 1",
      lession: "Some lesson text",
      fututreSkils: "Some skill",
      characters: "2",
      roles: [
        {
          role1: "Leader",
          role2: "Support",
        },
      ],
      roleOfMainCharacter: "Leader",
      challenge: "Overcome a difficult challenge",
      videoLink: "https://www.example.com/video1.mp4",
    },
    {
      id: 2,
      caseTopic: "Topic 2",
      lession: "Increase intelligence.",
      fututreSkils: "They should become more experienced and more intelligent.",
      characters: "3",
      roles: [
        {
          role1: "React Developer",
          role2: "Node Developer",
          role3: "Full-stack Developer",
        },
      ],
      roleOfMainCharacter: "Full-stack Developer",
      challenge: "Twists in projects.",
      videoLink: "https://www.example.com/video2.mp4",
    },
    {
      id: 3,
      caseTopic: "Topic 3",
      lession: `In this case study, we explore how modern software development 
      processes have evolved over the years....`,
      fututreSkils: "Understanding Agile development, improving collaboration.",
      characters: "4",
      roles: [
        {
          role1: "Scrum Master",
          role2: "Product Owner",
          role3: "Software Engineer",
          role4: "QA Engineer",
        },
      ],
      roleOfMainCharacter: "Scrum Master",
      challenge: "Managing complex, cross-functional teams.",
      videoLink: "https://www.example.com/video3.mp4",
    },
    {
      id: 4,
      caseTopic: "Topic 4",
      lession: "Some lesson text",
      fututreSkils: "Some skill",
      characters: "2",
      roles: [
        {
          role1: "Leader",
          role2: "Support",
        },
      ],
      roleOfMainCharacter: "Leader",
      challenge: "Overcome a difficult challenge",
      videoLink: "https://www.example.com/video1.mp4",
    },
    {
      id: 5,
      caseTopic: "Topic 5",
      lession: "Increase intelligence.",
      fututreSkils: "They should become more experienced and more intelligent.",
      characters: "3",
      roles: [
        {
          role1: "React Developer",
          role2: "Node Developer",
          role3: "Full-stack Developer",
        },
      ],
      roleOfMainCharacter: "Full-stack Developer",
      challenge: "Twists in projects.",
      videoLink: "https://www.example.com/video2.mp4",
    },
    {
      id: 6,
      caseTopic: "Topic 6",
      lession: `In this case study, we explore how modern software development 
      processes have evolved over the years....`,
      fututreSkils: "Understanding Agile development, improving collaboration.",
      characters: "4",
      roles: [
        {
          role1: "Scrum Master",
          role2: "Product Owner",
          role3: "Software Engineer",
          role4: "QA Engineer",
        },
      ],
      roleOfMainCharacter: "Scrum Master",
      challenge: "Managing complex, cross-functional teams.",
      videoLink: "https://www.example.com/video3.mp4",
    },
    {
      id: 7,
      caseTopic: "Topic 7",
      lession: "Some lesson text",
      fututreSkils: "Some skill",
      characters: "2",
      roles: [
        {
          role1: "Leader",
          role2: "Support",
        },
      ],
      roleOfMainCharacter: "Leader",
      challenge: "Overcome a difficult challenge",
      videoLink: "https://www.example.com/video1.mp4",
    },
    {
      id: 8,
      caseTopic: "Topic 8",
      lession: "Increase intelligence.",
      fututreSkils: "They should become more experienced and more intelligent.",
      characters: "3",
      roles: [
        {
          role1: "React Developer",
          role2: "Node Developer",
          role3: "Full-stack Developer",
        },
      ],
      roleOfMainCharacter: "Full-stack Developer",
      challenge: "Twists in projects.",
      videoLink: "https://www.example.com/video2.mp4",
    },
    {
      id: 9,
      caseTopic: "Topic 9",
      lession: `In this case study, we explore how modern software development 
      processes have evolved over the years....`,
      fututreSkils: "Understanding Agile development, improving collaboration.",
      characters: "4",
      roles: [
        {
          role1: "Scrum Master",
          role2: "Product Owner",
          role3: "Software Engineer",
          role4: "QA Engineer",
        },
      ],
      roleOfMainCharacter: "Scrum Master",
      challenge: "Managing complex, cross-functional teams.",
      videoLink: "https://www.example.com/video3.mp4",
    },
  ]);

  return (
    <div className="case-study-display-container">
      <h1 className="head-clr">Case Studies</h1>
      {caseStudies.map((caseStudy) => (
        <>
          <div key={caseStudy.id} className="case-study-card bright-border">
            <h2 className="head-clr">
              {/* <span>Case Topic:</span> */}
              {caseStudy.caseTopic}
            </h2>
            <h2 className="head-clr">
              {/* <span>Case Topic:</span> */}
              How to become a Case Topic
            </h2>
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
