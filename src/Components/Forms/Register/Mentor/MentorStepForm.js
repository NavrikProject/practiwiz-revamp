import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import "./register.css";
import MentorForm1 from "./MentorForm1";
import MentorForm2 from "./MentorForm2";

import MentorForm3 from "./MentorForm3";
import MentorForm4 from "./MentorForm4";
import axios from "axios";
import { ApiURL } from "../../../../Utils/ApiURL";
import { toast } from "react-toastify";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
// const LOCAL_STORAGE_KEY = "form-data";

const MentorStepForm = () => {
  const dispatch = useDispatch();
  const url = ApiURL();
  const methods = useForm({});

  const [page, setPage] = useState(0);
  const { watch, setValue, trigger, getValues } = methods;

  const FormTitles = [
    "ABOUT YOURSELF",
    "YOUR SUPER POWER",
    "AVAILABILITY",
    "PREFERENCES",
  ];
  const [step, setStep] = useState(1);
  const PageDisplay = () => {
    if (page === 0) {
      return <MentorForm1 />;
    } else if (page === 1) {
      return <MentorForm2 />;
    } else if (page == 2) {
      return <MentorForm3 />;
    } else {
      return <MentorForm4 />;
    }
  };

  const setPageCount = () => {
    if (page === 0) {
      setPage((currPage) => currPage + 1);
    } else if (page === 1) {
      setPage((currPage) => currPage + 1);
    } else if (page === 2) {
      setPage((currPage) => currPage + 1);
    } else if (page === 3) {
      setPage((currPage) => currPage + 1);
    }
  };
  const tab1 = () => {
    setPage(0);
  };
  const tab2 = () => {
    setPage(1);
  };
  const tab3 = () => {
    setPage(2);
  };
  const tab4 = () => {
    setPage(3);
  };

  const nextStep = async () => {
    setStep((prev) => prev + 1);

    const result = await trigger();
    if (result) {
      setPageCount();
    }
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data) => {
    if (step < 4) {
      const isValid = await trigger(); // Validate current step
      if (isValid) {
        console.log("error");
      }
    } else {
      try {
        const newData = new FormData();
        newData.append("firstName", data.mentor_firstname);
        newData.append("lastName", data.mentor_lastname);
        newData.append("email", data.mentor_email);
        newData.append("image", data.linkedin_photo[0]);
        newData.append("UserType", data.user_type);
        newData.append("phoneNumber", data.mentor_phone_number);
        newData.append("password", data.mentor_password);
        newData.append("Cpassword", data.mentor_confirm_password);
        newData.append("sociallink", data.social_media_profile);
        newData.append("jobtitle", data.mentor_job_title);
        newData.append("experience", data.years_of_experience);
        newData.append("companyName", data.mentor_company_name);
        newData.append(
          "passionateAbout",
          JSON.stringify(data.passionate_about)
        );
        newData.append("AreaOfexpertise", data.areas_of_expertise);
        newData.append("academicQualification", data.academic_qualification);
        newData.append("areaofmentorship", data.recommended_area_of_mentorship);
        newData.append("headline", data.mentor_Headline);
        newData.append("lecturesInterest", data.guest_lectures_interest);
        newData.append("caseInterest", data.curating_case_studies_interest);
        newData.append("freeCharge", data.sessions_free_of_charge);
        newData.append("Timezone", data.mentor_timezone);
        newData.append("Language", data.mentor_language);
        newData.append("Country", data.mentor_country);
        newData.append("pricing", data.pricing);
        newData.append("Mon", JSON.stringify(data.Mon));
        newData.append("Tue", JSON.stringify(data.Tue));
        newData.append("Wed", JSON.stringify(data.Wed));
        newData.append("Thu", JSON.stringify(data.Thu));
        newData.append("Fri", JSON.stringify(data.Fri));
        newData.append("Sat", JSON.stringify(data.Sat));
        newData.append("Sun", JSON.stringify(data.Sun));
        dispatch(showLoadingHandler());
        const res = await axios.post(`${url}api/v1/mentor/register`, newData);
        dispatch(hideLoadingHandler());
        if (res.data.success) {
          dispatch(hideLoadingHandler());
          toast.success("Thank you for applying the mentor application.");
        }
        if (res.data.error) {
          dispatch(hideLoadingHandler());
          toast.error(
            "There is some error while applying the mentor application. We will get back you over the email."
          );
        }
      } catch (error) {
        dispatch(hideLoadingHandler());
        toast.error(
          "There is some error while applying the mentor application. We will get back you over the email."
        );
      }
    }
  };
  const nextbtn = () => {
    nextStep();
  };
  return (
    <main>
      <div className="regis_background" id="mentorRegisterBg">
        <div className="jdoieoir_wrapper">
          <div
            id="tabs"
            className="d-flex justify-content-between align-items-center mb-4"
          >
            {page === 0 ? (
              <button
                className="btn btn-primary tablinks active"
                data-tab="form1"
              >
                <i className="fa-solid me-1 fa-user"></i> ABOUT YOURSELF
              </button>
            ) : (
              <button
                className="btn btn-primary tablinks "
                data-tab="form1"
                onClick={tab1}
              >
                <i className="fa-solid me-1 fa-user"></i> ABOUT YOURSELF
              </button>
            )}
            {page === 1 ? (
              <button
                className="btn btn-primary tablinks active"
                data-tab="form2"
              >
                <i className="fa-solid me-1 fa-bolt"></i> YOUR SUPER POWER
              </button>
            ) : (
              <button
                className="btn btn-primary tablinks "
                data-tab="form2"
                onClick={tab2}
              >
                <i className="fa-solid me-1 fa-bolt"></i> YOUR SUPER POWER
              </button>
            )}
            {page === 2 ? (
              <button
                className="btn btn-primary tablinks active"
                data-tab="form3"
              >
                <i className="fa-solid me-1 fa-asterisk"></i> AVAILABILITY
              </button>
            ) : (
              <button
                className="btn btn-primary tablinks "
                data-tab="form3"
                onClick={tab3}
              >
                <i className="fa-solid me-1 fa-asterisk"></i> AVAILABILITY
              </button>
            )}
            {page === 3 ? (
              <button
                className="btn btn-primary tablinks active"
                data-tab="form3"
              >
                <i className="fa-solid me-1 fa-asterisk"></i> PREFERENCES
              </button>
            ) : (
              <button
                className="btn btn-primary tablinks "
                data-tab="form3"
                onClick={tab4}
              >
                <i className="fa-solid me-1 fa-asterisk"></i> PREFERENCES
              </button>
            )}
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div id="form1" className="tab active">
                {PageDisplay()}
                <div className="bjuerirr_btn diuher d-flex justify-content-between mt-4">
                  {page === 0 ? (
                    ""
                  ) : (
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
                  )}
                  {page === FormTitles.length - 1 ? (
                    <button
                      type="submit"
                      className="btn juybeubrer_btn btn-primary"
                      onSubmit={methods.handleSubmit(onSubmit)}
                    >
                      Submit
                    </button>
                  ) : (
                    <div className="bjuerirr_btn diuher d-flex mt-4">
                      <button
                        type="submit"
                        className="btn juybeubrer_btn btn-primary"
                        onClick={nextbtn}
                      >
                        Next Step{" "}
                        <i className="fa-solid ms-2 fa-right-long"></i>
                      </button>
                    </div>
                  )}
                </div>
                {/*Next button  */}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
};

export default MentorStepForm;
