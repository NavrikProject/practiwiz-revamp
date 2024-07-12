import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
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
      <div class="regis_background " id="loginBg">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-4">
              <div class="iuhieiuihaw_left sticky-top">
                <h3>
                  Grow Your Professional Career with{" "}
                  <span class="span222">Top-Rated</span> Mentors
                </h3>

                <p>
                  Join us to upgrade your professional career with our mentor’s
                  guidance. We provide a personalised training approach to
                  improve your project management skills. Master the skill to
                  work under pressure on various projects within tight
                  deadlines. At Practiwiz we have courses for working
                  professionals, MBA students, and aspiring IT business
                  analysts. Hurry up and reserve your mentorship class today.
                </p>

                <h5 class="mt-4">Benefits of Our Mentorship Course:</h5>

                <ul class="ps-0 mt-3">
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-check"></i>

                      <p class="mb-0">Self-paced training</p>
                    </div>
                  </li>

                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-check"></i>

                      <p class="mb-0">Flexible timing and scheduling</p>
                    </div>
                  </li>

                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-check"></i>

                      <p class="mb-0">
                        Career guidance from experienced mentors
                      </p>
                    </div>
                  </li>

                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-check"></i>

                      <p class="mb-0">Expert advice and guidance</p>
                    </div>
                  </li>

                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-check"></i>

                      <p class="mb-0">
                        <a href="/register">Sign Up Now!</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="iuhieiuihaw_right bg-white p-5">
                <div class="uherrr_text text-center">
                  <h4>Log in</h4>

                  <p class="mb-0">
                    Do Not Have An Account? <a href="#">Sign Up</a>
                  </p>
                </div>

                <div class="ihduwfr_form_wrapper mt-3">
                  <form>
                    <div class="csfvgdtrfs mb-3 position-relative">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        aria-describedby="emailHelp"
                      />

                      <i class="fa-solid fa-envelopes-bulk position-absolute"></i>
                    </div>

                    <div class="csfvgdtrfs mb-3 position-relative">
                      <label for="exampleInputEmail1" class="form-label">
                        Password
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Password must be at least 8 characters"
                        aria-describedby="emailHelp"
                      />

                      <i class="fa-solid fa-eye position-absolute"></i>
                    </div>

                    <a href="#" class="uidherrrr_anchor">
                      Forget password?
                    </a>

                    <button type="submit" class="btn btn-main py-3 mt-4">
                      Log in
                    </button>

                    <div class="digheirer text-center pt-3 pb-2">
                      <h4 class="mb-0" style={{ fontSize: "1.2rem" }}>
                        <b>OR</b>
                      </h4>
                    </div>

                    <div class="dieyhr_iuhfiderr mt-2">
                      <div class="d-flex align-items-center">
                        <div class="btn btn-main">
                          <img
                            class="me-1"
                            src="images/facebooklog.webp"
                            alt=""
                          />{" "}
                          Facebook
                        </div>

                        <div class="btn btn-main">
                          <img
                            class="me-1"
                            src="images/googlelog.webp"
                            alt=""
                          />{" "}
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
