import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import MentorForm1 from "./MentorPage2.js";
import MentorForm2 from "./MentorPage3.js";
import { ApiURL } from "../../../../Utils/ApiURL";
import { toast } from "react-toastify";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import FeedbackModel from "../../../FeedbackModel/FeedbackModel.js";
const MentorRegProgressForm = ({
  singleMentor,
  user,
  token,
  mentorTotalProgress,
}) => {
  const navigate = useNavigate();
  const url = ApiURL();
  const methods = useForm({});
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { trigger, getValues } = methods;
  const FormTitles = ["ABOUT YOURSELF", "YOUR SUPER POWER"];
  const [showFeedbackModel, setShowFeedbackModel] = useState(false);
  const [step, setStep] = useState(1);
  const PageDisplay = () => {
    if (page === 0) {
      return <MentorForm1 />;
    } else if (page === 1) {
      return <MentorForm2 />;
    }
  };

  const setPageCount = () => {
    if (page === 0) {
      setPage((currPage) => currPage + 1);
    } else if (page === 1) {
      setPage((currPage) => currPage + 1);
    }
  };
  const tab1 = () => {
    setPage(0);
  };
  const tab2 = () => {
    setPage(1);
  };

  const validateAvailabilityStep = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // Adjust according to your days of the week setup
    const values = getValues();
    // Check if any day has time slots
    for (let day of days) {
      const slots = values[day];
      if (slots && slots.length > 0) {
        return true; // Valid if at least one time slot exists
      }
    }

    return false; // Invalid if no time slots exist
  };

  const nextStep = async () => {
    if (page === 0) {
      const result = await trigger(); // Validate form data
      if (result) {
        const specificValue = getValues("ForSkillValidation"); // Get value of the 'name' field

        if (specificValue !== "ok") {
          toast.error(
            "Please fill out all required fields: Core Skill, Sub-option, and Area of Expertise. Don't forget to save your changes using the 'Save' button.",
            {
              position: "top-right",
            }
          );

          return;
        }
        if (specificValue === "ok") {
          setPageCount();
          setStep((prev) => prev + 1);
        }
      }
    }
  };
  const showFeedbackModelHandler = () => {
    return setShowFeedbackModel(!showFeedbackModel);
  };
  const onSubmit = async (data) => {
    if (page === 1) {
      const isValid = await validateAvailabilityStep();
      if (!isValid) {
        toast.error("Please add at least one time slot before proceeding.", {
          position: "top-right",
        });
        return;
      }
      if (isValid) {
        try {
          const newData = new FormData();
          newData.append("mentorEmail", singleMentor[0].mentor_email);
          newData.append(
            "mentorName",
            singleMentor[0].mentor_firstname +
              " " +
              singleMentor[0].mentor_lastname
          );
          newData.append("jobtitle", data.mentor_job_title);
          newData.append("experience", data.years_of_experience);
          newData.append("mentorDomain", JSON.stringify(data.Mentor_Domain));
          newData.append("companyName", data.mentor_company_name);
          newData.append(
            "AreaOfexpertise",
            JSON.stringify(data.Core_Skills.expertise)
          );
          newData.append(
            "passionateAbout",
            JSON.stringify(data.passionate_about)
          );
          newData.append("headline", data.mentor_Headline);
          newData.append(
            "areaofmentorship",
            data.recommended_area_of_mentorship
          );
          newData.append("Timezone", data.mentor_timezone);
          newData.append("Mon", JSON.stringify(data.Mon));
          newData.append("Tue", JSON.stringify(data.Tue));
          newData.append("Wed", JSON.stringify(data.Wed));
          newData.append("Thu", JSON.stringify(data.Thu));
          newData.append("Fri", JSON.stringify(data.Fri));
          newData.append("Sat", JSON.stringify(data.Sat));
          newData.append("Sun", JSON.stringify(data.Sun));
          newData.append("userDtlsId", user?.user_id);
          newData.append("mentorDtlsId", singleMentor[0].mentor_dtls_id);
          dispatch(showLoadingHandler());
          const res = await Promise.race([
            axios.post(
              `${url}api/v1/mentor/update/additional-details`,
              newData
            ),
            new Promise(
              (_, reject) =>
                setTimeout(() => reject(new Error("Request timed out")), 45000) // 45 seconds timeout
            ),
          ]);
          dispatch(hideLoadingHandler());
          if (res.data.success) {
            return (
              toast.success(
                "Thank you for applying for the mentor application."
              ),
              showFeedbackModelHandler()
            );
          } else if (res.data.error) {
            toast.error(
              "There is some error while applying for the mentor application."
            );
          }
        } catch (error) {
          if (error.message === "Request timed out") {
            toast.error("Request timed out. Please try again.");
          } else {
            toast.error(
              "There is some error while applying for the mentor application. We will get back to you via email."
            );
          }
        } finally {
          dispatch(hideLoadingHandler());
          localStorage.removeItem("formData1");
          localStorage.removeItem("mentorData");
          localStorage.removeItem("mentorPageData");
        }
        localStorage.removeItem("formData1");
        localStorage.removeItem("mentorData");
        localStorage.removeItem("mentorPageData");
      }
    }
  };
  const nextbtn = () => {
    nextStep();
  };
  return (
    <>
      {showFeedbackModel && (
        <FeedbackModel
          user={user}
          showFeedbackModelHandler={showFeedbackModelHandler}
        />
      )}
      <>
        <div className="jdoieoir_wrapper sadlfjsldfjoi">
          <div
            id="tabs"
            className="d-flex justify-content-between align-items-center mb-4"
          >
            {page === 0 ? (
              <button
                className="btn btn-primary tablinks active"
                data-tab="form1"
              >
                <i className="fa-solid me-1 fa-bolt"></i>YOUR SUPER POWER
              </button>
            ) : (
              <button
                className="btn btn-primary tablinks "
                data-tab="form1"
                onClick={tab1}
              >
                <i className="fa-solid me-1 fa-bolt"></i> YOUR SUPER POWER
              </button>
            )}
            {page === 1 ? (
              <button
                className="btn btn-primary tablinks active"
                data-tab="form2"
              >
                <i class="fa-solid fa-calendar-check"></i> AVAILABILITY
              </button>
            ) : (
              <button
                className="btn btn-primary tablinks "
                data-tab="form2"
                onClick={tab2}
              >
                <i class="fa-solid fa-calendar-check"></i> AVAILABILITY
              </button>
            )}
          </div>
          <FormProvider {...methods}>
            <div id="form1" className="tab active">
              {PageDisplay()}
              <div className="bjuerirr_btn diuher d-flex justify-content-between mb-4">
                {page === 0 ? (
                  ""
                ) : (
                  <div className="bjuerirr_btn diuher d-flex mt-4">
                    <button
                      type="button"
                      className="btn iudhehrnbeer_btn btn-primary"
                      disabled={page === 0}
                      onClick={() => {
                        setPage((currPage) => currPage - 1);
                      }}
                    >
                      <i className="fa-solid me-2 fa-left-long"></i> Previous
                    </button>
                  </div>
                )}
                {page === FormTitles.length - 1 ? (
                  <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    encType="multipart/form-data"
                  >
                    <div className="bjuerirr_btn diuher d-flex mt-4">
                      <button
                        type="submit"
                        className="btn juybeubrer_btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bjuerirr_btn diuher d-flex mt-4">
                    <button
                      className="btn juybeubrer_btn btn-primary"
                      onClick={nextbtn}
                    >
                      Next Step
                      <i className="fa-solid ms-2 fa-right-long"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </FormProvider>
        </div>
      </>
    </>
  );
};

export default MentorRegProgressForm;
