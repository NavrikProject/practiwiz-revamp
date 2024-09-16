import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import "./caseStudy.css";

function CaseStudyInput({ user, token, data }) {
  const { register, handleSubmit, reset } = useForm();
  const [numRoles, setNumRoles] = useState(0); // Tracks number of roles
  const [roleObject, setRoleObject] = useState({}); // Initialize with a default role

  // Handles change in the number of characters (roles)
  const handleNumRolesChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumRoles(num);

    // Create an object with role1, role2, etc., dynamically based on number of roles
    const newRoleObject = {};
    for (let i = 1; i <= num; i++) {
      newRoleObject[`role${i}`] = ""; // Initialize each role with an empty string
    }
    setRoleObject(newRoleObject); // Update state with the new role object
  };

  const onSubmit = (data) => {
    // Combine roles into a single object inside the 'roles' array
    const caseStudyData = {
      ...data,
      roles: [roleObject], // Assign the roleObject to the first position of roles array
    };

    // console.log("Form submitted:", caseStudyData);

    axios
      .post("http://localhost:3001/case-study", caseStudyData)
      .then((response) => {
        handleClear();
        console.log("Data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  const handleRoleChange = (e) => {
    const { name, value } = e.target;

    // Dynamically update the roleObject as the user types
    setRoleObject((prevRoles) => ({
      ...prevRoles,
      [name]: value,
    }));
  };

  const handleClear = () => {
    reset({
      caseTopic: "",
      lession: "",
      fututreSkils: "",
      characters: "",
      roleOfMainCharacter: "",
      challenge: "",
    });
    setNumRoles(0); // Reset number of roles to 0
    setRoleObject({}); // Reset the roleObject to default role
  };

  return (
    <div className="container-of-case-study">
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>Case Study</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="space-between">
          <h5>Choose the Case Topic</h5>
          <select {...register("caseTopic")} required>
            <option value="">Select case Topic</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </label>

        <label className="space-between">
          <h5>What is the lesson you want the user to learn</h5>
          <textarea
            {...register("lession")}
            placeholder="Enter text here..."
            required
          />
        </label>

        <label className="space-between">
          <h5>
            What skill do you want people to have after they read the case?
          </h5>
          <textarea
            {...register("fututreSkils")}
            placeholder="Enter text here..."
            required
          />
        </label>

        <label className="space-between">
          <h5>How many characters are there in the case?</h5>
          <input
            type="number"
            {...register("characters")}
            min="0"
            onChange={handleNumRolesChange}
            required
          />
        </label>

        {numRoles > 0 && (
          <div>
            <h5>Add the role of each character</h5>
            {Array.from({ length: numRoles }).map((_, i) => {
              const roleKey = `role${i + 1}`;
              return (
                <label key={roleKey} className="space-between">
                  <h5>{`Role ${i + 1}`}</h5>
                  <input
                    className="input-border-radius"
                    name={roleKey}
                    type="text"
                    placeholder={`Enter role ${i + 1}`}
                    value={roleObject[roleKey]} // Bind value from roleObject
                    onChange={handleRoleChange} // Handle changes to role input
                    required
                  />
                </label>
              );
            })}
          </div>
        )}

        <label className="space-between">
          <h5>Role of Main Character</h5>
          <input
            className="input-border-radius"
            {...register("roleOfMainCharacter")}
            type="text"
            placeholder="Enter main character's role"
            required
          />
        </label>

        <label className="space-between">
          <h5>What is the main challenge you want to put there?</h5>
          <textarea
            {...register("challenge")}
            placeholder="Enter text here..."
            required
          />
        </label>

        <div className="button-container">
          <button type="submit">Save</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default CaseStudyInput;
