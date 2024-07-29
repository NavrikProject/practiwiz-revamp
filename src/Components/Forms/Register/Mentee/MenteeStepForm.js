import React, { useState } from "react";
import "./menteeregistration.css";
import "./MenteeReg.css";
import InstituteForm from "./InstituteForm";
import MenteeRegStep1 from "./MenteeRegStep1";
import MenteeRegStep2 from "./MenteeRegStep2";
import MenteeRegStep3 from "./MenteeRegStep3";
import { useForm, FormProvider } from "react-hook-form";

const MenteeStepForm = () => {
  const [instituteStatus, setInstituteStatus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("mentee");
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === "institute") {
      return (
        setSelectedOption(event.target.value),
        setInstituteStatus(!instituteStatus)
      );
    } else {
      return setSelectedOption(event.target.value), setInstituteStatus(false);
    }
  };

  const InstitutePreviousHandler = (event, option) => {
    if (option === "institute") {
      return setInstituteStatus(false), setSelectedOption("mentee");
    }
  };

  const methods = useForm({});
  const [step, setStep] = React.useState(1);
  const { watch, setValue, trigger, getValues } = methods;
  const onSubmit = async (data) => {
    console.log(data);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <MenteeRegStep1
            selectedOption={selectedOption}
            handleChange={handleChange}
          />
        );
      case 2:
        return <MenteeRegStep2 />;
      case 3:
        return <MenteeRegStep3 />;
      default:
        return <MenteeRegStep1 />;
    }
  };

  const nextStep = async () => {
    const result = await trigger();
    if (result) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <main>
        <div className="regis_background " id="menteeRegBackground">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="iuhieiuihaw_left sticky-top">
                  <h3>
                    Grow Your Professional Career with
                    <span className="span222">Top-Rated</span> Mentors
                  </h3>

                  <p>
                    Join us to upgrade your professional career with our
                    mentor’s guidance. We provide a personalised training
                    approach to improve your project management skills. Master
                    the skill to work under pressure on various projects within
                    tight deadlines. At Practiwiz we have courses for working
                    professionals, MBA students, and aspiring IT business
                    analysts. Hurry up and reserve your mentorship className
                    today.
                  </p>

                  <h5 className="mt-4">Benefits of Our Mentorship Course:</h5>

                  <ul className="ps-0 mt-3">
                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-circle-check"></i>

                        <p className="mb-0">Self-paced training</p>
                      </div>
                    </li>

                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-circle-check"></i>

                        <p className="mb-0">Flexible timing and scheduling</p>
                      </div>
                    </li>

                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-circle-check"></i>

                        <p className="mb-0">
                          Career guidance from experienced mentors
                        </p>
                      </div>
                    </li>

                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-circle-check"></i>

                        <p className="mb-0">Expert advice and guidance</p>
                      </div>
                    </li>

                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-circle-check"></i>

                        <p className="mb-0">
                          <a href="/">Sign Up Now!</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="iuhieiuihaw_right bg-white p-3">
                  <div className="uherrr_text text-center">
                    <h4>Sign up</h4>
                  </div>
                 
                      {instituteStatus ? (
                        <InstituteForm
                          InstitutePreviousHandler={InstitutePreviousHandler}
                        />
                      ) : (
                        <> <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                          {renderStep()}
                          <div className="d-flex justify-content-between">
                            {step === 1 ? (
                              ""
                            ) : (
                              <button
                                type="button"
                                onClick={() => setStep(step - 1)}
                                disabled={step === 1}
                                className="btn dgheuih_btn_prev btn-main"
                              >
                                Previous
                              </button>
                            )}

                            {step === 3 ? (
                              ""
                            ) : (
                              <button
                                type="submit"
                                onClick={nextStep}
                                disabled={step === 3}
                                className="btn dgheuih_btn_next btn-main"
                              >
                                Next
                              </button>
                            )}
                            {step === 3 && (
                              // <form
                              //   id="multi-step-form"
                              //   onSubmit={methods.handleSubmit(onSubmit)}
                              // >
                                <button
                                  type="submit"
                                  className="btn dgheuih_btn_next btn-main"
                                >
                                  Submit
                                </button>
                              // </form>
                            )}
                          </div>
                          </form>
                  </FormProvider>
                        </>
                      )}
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MenteeStepForm;
