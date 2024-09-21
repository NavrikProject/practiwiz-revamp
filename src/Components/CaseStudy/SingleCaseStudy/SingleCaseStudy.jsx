import React from "react";
import { useParams } from "react-router-dom";
import "./SingleCaseStudy.css";

function SingleCaseStudy() {
  const { id } = useParams();

  const caseStudies = [
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
  ];

  const caseStudy = caseStudies.find((study) => study.id === parseInt(id));

  if (!caseStudy) {
    return <h2>Case Study not found</h2>;
  }

  return (
    <div className="single-case-study-container">
      <div className="case-study-content">
        {/* Case study details on the left */}
        <div className="case-study-details">
          <h1>{caseStudy.caseTopic}</h1>
          <p>
            <strong>Lesson:</strong> {caseStudy.lession}
          </p>
          <p>
            <strong>Future Skills:</strong> {caseStudy.fututreSkils}
          </p>
          <p>
            <strong>Number of Characters:</strong> {caseStudy.characters}
          </p>
          <p>
            <strong>Roles:</strong>
            <ul>
              {Object.entries(caseStudy.roles[0]).map(([key, value]) => (
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
        </div>

        {/* Case study video on the right */}
        <div className="case-study-video">
          <video controls>
            <source src={caseStudy.videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default SingleCaseStudy;
