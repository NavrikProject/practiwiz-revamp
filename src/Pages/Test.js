import React from "react";
import "./OptionExtractor.css"; // Import the CSS file

const OptionsExtractor = () => {
  const jsonString = `[
    {
        "id": 2,
        "name": "Business & Management",
        "subOptions": [
            {
                "id": 202,
                "name": "Project Management",
                "skills": [
                    {
                        "id": 20201,
                        "name": "Agile/Scrum methodologies"
                    },
                    {
                        "id": 20202,
                        "name": "Gantt charts, roadmaps"
                    },
                    {
                        "id": 20203,
                        "name": "Risk management"
                    },
                    {
                        "id": 20204,
                        "name": "Stakeholder communication"
                    }
                ]
            },
            {
                "id": 204,
                "name": "Financial Planning & Analysis",
                "skills": []
            }
        ]
    },
    {
        "id": 3,
        "name": "Finance & Accounting",
        "subOptions": []
    }
  ]`;

  const options = JSON.parse(jsonString);

  return (
    <div className="options-container">
      {options.map((option) => (
        <div key={option.id} className="main-option box">
          <h2>{option.name}</h2>
          {option.subOptions.length > 0 ? (
            option.subOptions.map((subOption) => (
              <div key={subOption.id} className="sub-option">
                <h3>{subOption.name}</h3>
                {subOption.skills.length > 0 ? (
                  <ul>
                    {subOption.skills.map((skill) => (
                      <li key={skill.id}>{skill.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No skills available</p>
                )}
              </div>
            ))
          ) : (
            <p>No sub-options available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default OptionsExtractor;
