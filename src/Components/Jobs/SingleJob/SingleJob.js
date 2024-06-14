import React from "react";
import "./SingleJob.css";
import SingleJobCard from "./SingleJobCard";
import C4 from "../../../Images/Jobs/c4.webp";
const SingleJob = () => {
  return (
    <>
      <div class="aslkhghj border-none">
        <div class="container-fluid px-5">
          <div class="kndfghjfb">
            <div class="dfknghffg">
              <div class="row">
                <div class="col-lg-6">
                  <div class="kjdhhjgd p-3">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 mb-4">
                        <div class="hjgfdfg">
                          <img src={C4} alt="" />
                        </div>
                      </div>

                      <div class="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
                        <div class="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
                          <div class="jhgjgf">
                            <h4 class="mb-0">
                              Software Engineer (Android), Libraries{" "}
                              <i class="fa-solid fa-up-right-from-square"></i>
                            </h4>
                          </div>
                        </div>

                        <div class="nfhjdfghfdghf mb-3">
                          <button class="rlknjhgjfg ps-0 btn btn-transparent">
                            <p class="mb-0">
                              <i class="fa-solid fa-location-arrow me-1"></i>{" "}
                              London,Uk
                            </p>
                          </button>

                          <button class="rlknjhgjfg ps-0 btn btn-transparent">
                            <p class="mb-0">
                              <i class="fa-solid fa-sack-dollar me-1"></i>{" "}
                              $24k-$30k
                            </p>
                          </button>

                          <button class="rlknjhgjfg ps-0 btn btn-transparent">
                            <p class="mb-0">11 hours ago</p>
                          </button>
                        </div>
                        <button class="rlknjhgjfg1 oidefrgtry px-2 py-1">
                          Full Time
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                  <div class="kjhfhffd">
                    <button class="btn-main">Apply To This Job</button>
                    <div class="jhgjgf1">
                      <div class="mhgf1 position-relative text-center">
                        <i class="fa-regular fa-bookmark position-absolute"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="kjdfvghjdrbgdfgfd">
        <div class="container-fluid px-5">
          <div class="kjdfhdf">
            <div class="row">
              <div class="col-lg-8">
                <div class="kjguydg">
                  <div class="lghjgt">
                    <h5>Job Description</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>

                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>

                  <div class="lghjgt">
                    <h5>Key Responsibilities</h5>
                    <ul>
                      <li>
                        Be involved in every step of the product design cycle
                        from discovery to developer handoff and user acceptance
                        testing.
                      </li>
                      <li>
                        Be involved in every step of the product design cycle
                        from discovery to developer handoff and user acceptance
                        testing.
                      </li>
                      <li>
                        Be involved in every step of the product design cycle
                        from discovery to developer handoff and user acceptance
                        testing.
                      </li>
                      <li>
                        Be involved in every step of the product design cycle
                        from discovery to developer handoff and user acceptance
                        testing.
                      </li>
                    </ul>
                  </div>
                  <hr />

                  <div class="lghjgt">
                    <h5>Skill & Experience</h5>
                    <ul>
                      <li>
                        Be involved in every step of the product design cycle
                        from discovery to developer handoff and user acceptance
                        testing.
                      </li>
                      <li>
                        Be involved in every step of the product design cycle
                        from discovery to developer handoff and user acceptance
                        testing.
                      </li>
                      <li>
                        Be involved in every step of the product design cycle
                        from discovery to developer handoff and user acceptance
                        testing.
                      </li>
                    </ul>
                  </div>
                  <hr />

                  <div class="jfgngjfgh">
                    <p>Share This Job</p>
                    <div class="kfgjh">
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                  </div>
                  <div class="kjdhjdrgfg">
                    <h5>Related Jobs</h5>
                    <p>154 new jobs added today.</p>
                  </div>
                  <div class="gdfgdfg">
                    <SingleJobCard />
                    <SingleJobCard /> <SingleJobCard /> <SingleJobCard />
                    <SingleJobCard />
                  </div>
                </div>
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-3">
                <div class="kjdfhjdfdffg ">
                  <h5>Job Overview</h5>
                  <div class="fkghfgnhgjhg">
                    <div class="fjhg">
                      <h6>Date Posted:</h6>
                      <p>1 hour ago</p>
                    </div>
                    <div class="fjhg">
                      <h6>Location:</h6>
                      <p>Kolkata</p>
                    </div>
                    <div class="fjhg">
                      <h6>Job Title:</h6>
                      <p>Designer</p>
                    </div>
                    <div class="fjhg">
                      <h6>Hours:</h6>
                      <p>50h/ week</p>
                    </div>
                    <div class="fjhg">
                      <h6>Salary:</h6>
                      <p>$10k - $15k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJob;
