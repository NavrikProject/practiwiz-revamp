import React, { useState,useEffect } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import "./register.css";
import MentorForm1 from "./MentorForm1";
import MentorForm2 from "./MentorForm2";

import MentorForm3 from "./MentorForm3";
const LOCAL_STORAGE_KEY = 'form-data';


const MentorStepForm = () => {

   const methods = useForm({  
    // defaultValues: {
    //   // firstName: '',
    //   // lastName: '',
    //   // email: '',
    //   // password: ''
    // }
  });
  const [page, setPage] = useState(0);
  const { watch, setValue } = methods;

  const FormTitles = ["ABOUT YOURSELF", "YOUR SUPER POWER", "PREFERENCES"];
  const PageDisplay = () => {
    if (page === 0) {
      return <MentorForm1 />;
    } else if (page === 1) {
      return <MentorForm2 />;
    } else {
      return <MentorForm3 />;
    }
  };
  const setPageCount = (event) => {
    // event.preventDefault();
    if (page === 0) {
      setPage((currPage) => currPage + 1);
    } else if (page === 1) {
      setPage((currPage) => currPage + 1);
    } else if (page === 2) {
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
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = data => {
    if (step < 2) {
      nextStep();
    } else {
      console.log(data);
      localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear local storage on final submission
      downloadFormData(data);//for download
    }
  };



  // Load data from local storage on initial render
  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach(key => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);



  // Save form data to local storage on change
  useEffect(() => {
    const subscription = watch(value => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);



  const downloadFormData = (formData) => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  return (
    <main>
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="regis_background" id="mentorRegisterBg">
        <div className="jdoieoir_wrapper">
        <div
            id="tabs"
            className="d-flex justify-content-between align-items-center mb-4"
          >
            {page == 0 ? (
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
            {page == 1 ? (
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
            {page == 2 ? (
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
                onClick={tab3}
              >
                <i className="fa-solid me-1 fa-asterisk"></i> PREFERENCES
              </button>
            )}
          </div>


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
                  type="sumbit"
                  className="btn juybeubrer_btn btn-primary"
                  onSubmit={methods.handleSubmit(onSubmit)}
                >
                  Submit
                </button>
              ) : (
                <div className="bjuerirr_btn diuher d-flex mt-4">
                  <button
                    type="button"
                    className="btn juybeubrer_btn btn-primary"
                    onClick={setPageCount}
                  >
                    Next Step <i className="fa-solid ms-2 fa-right-long"></i>
                  </button>
                </div>
              )}
            </div>
            {/*Next button  */}
          </div>
        </div>
      </div>
      </form>
      </FormProvider>
    </main>
  );
};

export default MentorStepForm;
