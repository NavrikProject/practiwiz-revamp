import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const [type, setType] = useState("member");
  const [error, setError] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeState, setActiveState] = useState({
    mentee: true,
    mentor: false,
    jobSeeker: false,
  });

  const loginFormSubmitHandler = async (data) => {
    setError("");
    // dispatch(showLoadingHandler());
    // try {
    //   dispatch(loginStart());
    //   const res = await axios.post(
    //     "https://practiwiz-backend.azurewebsites.net/api/auth/login",
    //     {
    //       data: data,
    //       type: type,
    //     }
    //   );
    //   dispatch(hideLoadingHandler());
    //   if (res.data.success) {
    //     dispatch(loginSuccess(res.data.success));
    //     navigate(`/`);
    //   }

    //   if (res.data.notFound) {
    //     dispatch(loginFailure(res.data.notFound));
    //     setError(res.data.notFound);
    //   }
    //   if (res.data.wrong) {
    //     dispatch(loginFailure(res.data.wrong));
    //     setError(res.data.wrong);
    //   }
    // } catch (error) {
    //   return;
    // }
  };
  return (
    <main>
      <div
        className="regis_background"
        style={{
          background: "url(/images/fsdssdd.webp) no-repeat",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="iuhieiuihaw_left sticky-top">
                <h3>
                  Grow Your Professional Career with{" "}
                  <span className="span222">Top-Rated</span> Mentors
                </h3>
                <p>
                  Join us to upgrade your professional career with our mentor’s
                  guidance. We provide a personalized training approach to
                  improve your project management skills. Master the skill to
                  work under pressure on various projects within tight
                  deadlines. At Practiwiz, we have courses for working
                  professionals, MBA students, and aspiring IT business
                  analysts. Hurry up and reserve your mentorship class today.
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
                        <a href="/register">Sign Up Now!</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iuhieiuihaw_right bg-white p-5">
                <div className="uherrr_text text-center">
                  <h4>Log in</h4>
                  <p className="mb-0">
                    Do Not Have An Account? <a href="/register">Sign Up</a>
                  </p>
                </div>
                <div className="csfvgdtrfs mb-3 position-relative">
                  <br />
                  <input
                    type="radio"
                    id="mentee1"
                    name="userType"
                    defaultChecked
                    className={activeState.mentee === true ? "active" : " "}
                    onClick={() => {
                      setActiveState({ mentee: true });
                      setType("member");
                    }}
                    value="mentee"
                  />
                  <label htmlFor="mentee1" className="radio-label">
                    <span className="radio-border"></span> Mentee{" "}
                  </label>
                  <input
                    type="radio"
                    id="mentor1"
                    name="userType"
                    value="mentor"
                    className={activeState.mentor === true ? "active" : " "}
                    onClick={() => {
                      setActiveState({ mentor: true });
                      setType("mentor");
                    }}
                  />
                  <label htmlFor="mentor1" className="radio-label">
                    {" "}
                    <span className="radio-border"></span> Mentor{" "}
                  </label>
                  <input
                    type="radio"
                    id="jobSeeker1"
                    name="userType"
                    className={activeState.jobSeeker === true ? "active" : " "}
                    onClick={() => {
                      setActiveState({ jobSeeker: true });
                      setType("job-seeker");
                    }}
                    value="jobSeeker"
                    required
                  />
                  <label htmlFor="jobSeeker1" className="radio-label">
                    <span className="radio-border"></span> Job Seeker{" "}
                  </label>
                </div>

                <div className="ihduwfr_form_wrapper mt-3">
                  <form>
                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Email"
                        required
                        {...register("email", {
                          required: "Enter an email to login",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("email");
                        }}
                      />
                      {errors.email && (
                        <span className="errorMsg">{errors.email.message}</span>
                      )}
                      <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
                    </div>
                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        placeholder="Password must be at least 8 characters"
                        required
                        type={showIcon ? "text" : "password"}
                        {...register("password", {
                          required: "Enter a Password to login",
                        })}
                        onKeyUp={() => {
                          trigger("password");
                        }}
                      />
                      <i
                        onClick={() => setShowIcon(!showIcon)}
                        className={
                          showIcon
                            ? "fa-solid fa-eye position-absolute"
                            : "fa-solid fa-eye-slash position-absolute"
                        }
                      ></i>
                      {errors.password && (
                        <span className="errorMsg">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <a href="/login" className="uidherrrr_anchor">
                      Forget password?
                    </a>
                    <button
                      type="submit"
                      className="btn btn-main py-3 mt-4"
                      onClick={handleSubmit(loginFormSubmitHandler)}
                    >
                      Log in
                    </button>
                    {error ? <p className="res-errorlog">{error}</p> : null}
                    <div className="dieyhr_iuhfiderr mt-4">
                      <div className="d-flex align-items-center">
                        <div className="btn btn-main">
                          <img className="me-1" src="images/fb.webp" alt="" />{" "}
                          Facebook
                        </div>
                        <div className="btn btn-main">
                          <img className="me-1" src="images/ggle.webp" alt="" />{" "}
                          Google
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
