import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { loginFailure, loginSuccess } from "../../../Redux/userRedux.js";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../Redux/loadingRedux.js";
import { toast } from "react-toastify";
import { ApiURL } from "../../../Utils/ApiURL.js";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: formErrors },
  } = useForm();
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = ApiURL();
  const parseJwt = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error parsing token:", error);
      return null;
    }
  };
  const loginFormSubmitHandler = async (data) => {
    try {
      dispatch(showLoadingHandler());
      const res = await axios.post(`${url}api/v1/auth/login`, {
        email: data.email,
        password: data.password,
      });
      dispatch(hideLoadingHandler());
      if (res.data.success) {
        const token = res.data.token;
        const userData = parseJwt(token);
        return (
          localStorage.setItem("token", JSON.stringify(token)),
          dispatch(loginSuccess(userData)),
          toast.success("Logged in successfully"),
          navigate(`/`)
        );
      }
      if (res.data.error) {
        return (
          dispatch(loginFailure(res.data.error)), toast.error(res.data.error)
        );
      }
    } catch (error) {
      return (
        dispatch(loginFailure(error.message)),
        toast.error("Login failed, Please try again!")
      );
    }
  };
  const showPwdHandler = () => {
    setShowIcon(!showIcon);
  };
  return (
    <main>
      <div className="regis_background " id="loginBg">
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
                  guidance. We provide a personalised training approach to
                  improve your project management skills. Master the skill to
                  work under pressure on various projects within tight
                  deadlines. At Practiwiz we have courses for working
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

                <div className="ihduwfr_form_wrapper mt-3">
                  <form onSubmit={handleSubmit(loginFormSubmitHandler)}>
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
                        placeholder="Enter your email address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
                    </div>
                    {formErrors.email && (
                      <p className="text-danger">{formErrors.email.message}</p>
                    )}
                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type={!showIcon ? "password" : "text"}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter your password"
                        aria-describedby="emailHelp"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      <i
                        i="true"
                        onClick={showPwdHandler}
                        className={
                          showIcon
                            ? "fa-solid fa-eye position-absolute"
                            : "fa-solid fa-eye-slash position-absolute"
                        }
                      ></i>
                    </div>
                    {formErrors.password && (
                      <span className="text-danger">
                        {formErrors.password.message}
                      </span>
                    )}
                    <a href="/forgot-password" className="uidherrrr_anchor">
                      Forget password?
                    </a>

                    <button type="submit" className="btn btn-main py-3 mt-4">
                      Log in
                    </button>
                  </form>
                  <div className="digheirer text-center pt-3 pb-2">
                    <h4 className="mb-0" style={{ fontSize: "1.2rem" }}>
                      <b>OR</b>
                    </h4>
                  </div>

                  <div className="dieyhr_iuhfiderr mt-2">
                    <div className="d-flex align-items-center">
                      <div className="btn btn-main">
                        <img
                          className="me-1"
                          src="images/facebooklog.webp"
                          alt=""
                        />{" "}
                        Facebook
                      </div>
                      <div className="btn btn-main">
                        <img
                          className="me-1"
                          src="images/googlelog.webp"
                          alt=""
                        />{" "}
                        Google
                      </div>
                    </div>
                  </div>
                  {/* </form> */}
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
