import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import "./register.css";
import MentorForm1 from "./MentorForm1";
import MentorForm2 from "./MentorForm2";

import MentorForm3 from "./MentorForm3";
import MentorForm4 from "./MentorForm4";
import axios from "axios";
import { ApiURL } from "../../../../Utils/ApiURL";
// const LOCAL_STORAGE_KEY = "form-data";

const MentorStepForm = () => {
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
    
    console.log(data);
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
        const res = await axios.post(
          `http://localhost:1337/api/v1/mentor/registration/test`,
          newData
        );
        console.log(res.data);
      } catch (error) {
        console.error(error);
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
