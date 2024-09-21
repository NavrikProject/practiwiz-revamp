import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./MentorCaseStudyInput.css";
import { toast } from "react-toastify";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import { ApiURL } from "../../../../Utils/ApiURL";
import { useDispatch } from "react-redux";

function MentorCaseStudyInput({ user, token, data }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [numRoles, setNumRoles] = useState(0);
  const [roleObject, setRoleObject] = useState({});
  const [loading, setLoading] = useState(false);
  const url = ApiURL();
  const dispatch = useDispatch();
  const handleNumRolesChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumRoles(num);

    const newRoleObject = {};
    for (let i = 1; i <= num; i++) {
      newRoleObject[`role${i}`] = "";
    }
    setRoleObject(newRoleObject);
  };

  const onSubmit = async (caseData) => {
    const caseStudyData = {
      ...caseData,
      roles: [roleObject],
    };
    try {
      dispatch(showLoadingHandler());
      const response = await Promise.race([
        axios.post(
          `${url}api/v1/mentor/dashboard/case-study/create-case-study`,
          {
            data: caseStudyData,
            roles: JSON.stringify(caseStudyData.roles),
            mentorUserId: user?.user_id,
            mentorDtlsId: data[0]?.mentor_dtls_id,
          },
          {
            headers: { authorization: "Bearer " + token },
          }
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 45000)
        ),
      ]);
      if (response.data.success) {
        dispatch(hideLoadingHandler());
        toast.success("Thanks for submitting the case study");
      }
      if (response.data.error) {
        dispatch(hideLoadingHandler());
        toast.error("There is some error while submitting the case study");
      }
    } catch (error) {
      toast.error("There is some error while submitting the case study"); // Stop loading
      dispatch(hideLoadingHandler());
    } finally {
      dispatch(hideLoadingHandler());
    }
  };

  const handleRoleChange = (e) => {
    const { name, value } = e.target;

    setRoleObject((prevRoles) => ({
      ...prevRoles,
      [name]: value,
    }));
  };

  const handleClear = () => {
    reset({
      caseTopic: "",
      lesson: "",
      futureSkills: "",
      characters: "",
      roles: [],
      roleOfMainCharacter: "",
      challenge: "",
    });
    setNumRoles(0);
    setRoleObject({});
  };

  return (
    <div id="CaseStudyBg">
      <div className="container-of-case-study">
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "36px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
            }}
          >
            Input form for Case study
          </h1>
        </div>{" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <label className="space-between label-case-input">
            <h5>Choose the Case Topic Category</h5>
            <select
              className="label-case-input-fields"
              {...register("caseTopic", { required: "Case topic is required" })}
            >
              <option value="">Select case Topic</option>
              <option value="option1">Topic 1</option>
              <option value="option2">Topic 2</option>
              <option value="option3">Topic 3</option>
              <option value="option4">Topic 4</option>
              <option value="option4">Topic 5</option>
              <option value="option4">Topic 6</option>
              <option value="option4">Topic 7</option>
              <option value="option4">Topic 8</option>
              <option value="option4">Topic 9</option>
              <option value="option4">Topic 10</option>
            </select>
            {errors.caseTopic && (
              <p className="Error-meg-login-register">
                {errors.caseTopic.message}
              </p>
            )}{" "}
          </label>
          <label className="space-between label-case-input">
            <h5>Title for Case Topic</h5>
            <input
              className="input-border-radius label-case-input-fields"
              {...register("caseTopicTitle", {
                required: "Main character's role is required",
              })}
              type="text"
              placeholder="Enter main character's role"
            />
            {errors.caseTopicTitle && (
              <p className="Error-meg-login-register">
                {errors.caseTopicTitles.message}
              </p>
            )}{" "}
          </label>
          <label className="space-between label-case-input">
            <h5>What is the lesson you want the user to learn</h5>
            <textarea
              className="label-case-input-fields"
              {...register("lesson", { required: "Lesson is required" })}
              placeholder="Enter text here..."
            />
            {errors.lesson && (
              <p className="Error-meg-login-register">
                {errors.lesson.message}
              </p>
            )}{" "}
          </label>
          <label className="space-between label-case-input">
            <h5>
              What skill do you want people to have after they read the case?
            </h5>
            <textarea
              className="label-case-input-fields"
              {...register("futureSkills", {
                required: "Future skill is required",
              })} // Add required rule
              placeholder="Enter text here..."
            />
            {errors.futureSkills && (
              <p className="Error-meg-login-register">
                {errors.futureSkills.message}
              </p>
            )}{" "}
          </label>
          <label className="space-between label-case-input">
            <h5>How many characters are there in the case?</h5>
            <input
              className="label-case-input-fields"
              type="number"
              {...register("characters", {
                required: "Number of characters is required",
              })}
              min="0"
              onChange={handleNumRolesChange}
            />
            {errors.characters && (
              <p className="Error-meg-login-register">
                {errors.characters.message}
              </p>
            )}{" "}
          </label>
          {numRoles > 0 && (
            <div>
              <h5>Add the role of each character</h5>
              {Array.from({ length: numRoles }).map((_, i) => {
                const roleKey = `role${i + 1}`;
                return (
                  <label
                    key={roleKey}
                    className="space-between label-case-input"
                  >
                    <h5>{`Role ${i + 1}`}</h5>
                    <input
                      className="input-border-radius label-case-input-fields"
                      name={roleKey}
                      type="text"
                      placeholder={`Enter role ${i + 1}`}
                      value={roleObject[roleKey]}
                      onChange={handleRoleChange}
                      required
                    />
                  </label>
                );
              })}
            </div>
          )}
          <label className="space-between label-case-input">
            <h5>Role of Main Character</h5>
            <input
              className="input-border-radius label-case-input-fields"
              {...register("roleOfMainCharacter", {
                required: "Main character's role is required",
              })}
              type="text"
              placeholder="Enter main character's role"
            />
            {errors.roleOfMainCharacter && (
              <p className="Error-meg-login-register">
                {errors.roleOfMainCharacter.message}
              </p>
            )}{" "}
          </label>
          <label className="space-between label-case-input">
            <h5>What is the main challenge you want to put there?</h5>
            <textarea
              className="label-case-input-fields"
              {...register("challenge", {
                required: "The main challenge field is required",
              })}
              placeholder="Enter text here..."
            />
            {errors.challenge && (
              <p className="Error-meg-login-register">
                {errors.challenge.message}
              </p>
            )}{" "}
          </label>
          <div className="button-container-case-input">
            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MentorCaseStudyInput;
