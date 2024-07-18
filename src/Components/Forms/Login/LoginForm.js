import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

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
                  analysts. Hurry up and reserve your mentorship className today.
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
                    Do Not Have An Account? <a href="#">Sign Up</a>
                  </p>
                </div>

                <div className="ihduwfr_form_wrapper mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        // id="exampleInputEmail1"
                        placeholder="Email"
                        // aria-describedby="emailHelp"
                        {...register("email")}
                      />

                      <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Password
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Password must be at least 8 characters"
                        aria-describedby="emailHelp"
                        {...register("password")}
                      />

                      <i className="fa-solid fa-eye position-absolute"></i>
                    </div>

                    <a href="#" className="uidherrrr_anchor">
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
