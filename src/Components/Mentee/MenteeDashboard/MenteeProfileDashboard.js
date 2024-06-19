import React from "react";
import "./menteeprofile.css";
import Annesa from "../../../Images/Mentee/annesa.webp";
import Ll1 from "../../../Images/Mentee/ll1.png";
import Ll2 from "../../../Images/Mentee/ll2.png";
import Ll3 from "../../../Images/Mentee/ll3.png";
import Ll4 from "../../../Images/Mentee/ll4.png";
import Ll5 from "../../../Images/Mentee/ll5.png";
import Ii1 from "../../../Images/Mentee/ii1.png";
import Ii2 from "../../../Images/Mentee/ii2.png";
import Ii3 from "../../../Images/Mentee/ii3.png";
import Ii4 from "../../../Images/Mentee/ii4.png";
import Edu from "../../../Images/Mentee/edu.png";
import Certification from "../../../Images/Mentee/certification.png";
import Experience from "../../../Images/Mentee/experiece.png";
const MenteeProfileDashboard = () => {
  return (
    <div class="col-lg-10 ps-0">
      <div class="difuhtre_content">
        <div
          class="duiegrer_bck position-relative mb-3"
          id="menteeBackgroundCover"
        >
          <div class="container">
            <div class="csdpeijf kjbdbeuirrr d-flex justify-content-between">
              <div class="ihuerorktrt ujgereter position-relative">
                <div class="iijieirr_left overflow-hidden">
                  <img src={Annesa} width="100%" alt="" />
                </div>
              </div>

              <div class="ihurtf_btn">
                <button class="btn btn-main">
                  <i class="fa-solid pe-2 fa-envelope-open-text"></i> Message
                </button>

                <button class="btn btn-main">
                  <i class="fa-solid pe-2 fa-share"></i> Share Profile
                </button>
              </div>

              <div class="ljrfhf">
                <i class="fa-solid fa-upload"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="lndfhjfvgdvbfgfghgf pt-5">
          <div class="container">
            <div class="skhfdfdfg">
              <div class="row justify-content-between">
                <div class="col-lg-7">
                  <div class="dfnjghjggh">
                    <div class="ghvfvdfgg">
                      <div class="gjnjfghg">
                        <h2 class="mb-2">Anwesha Sinha</h2>
                      </div>

                      <div class="njfgfghf">
                        <i class="fa-brands me-2 fa-linkedin-in"></i>

                        <i class="fa-brands fa-x-twitter"></i>
                      </div>
                    </div>

                    <div class="hfuydfgftgh d-flex align-items-center mb-2">
                      <div class="gjfhg me-2">
                        <img src={Ii1} alt="" />
                      </div>

                      <p class="mb-0">Digital Marketing</p>
                    </div>

                    <div class="hfuydfgftgh d-flex align-items-center mb-2">
                      <div class="gjfhg me-2">
                        <img src={Ii2} alt="" />
                      </div>

                      <p class="mb-0">
                        Working Professional{" "}
                        <span class="spnrr">(Working at XYZ company)</span>
                      </p>
                    </div>

                    <div class="hfuydfgftgh d-flex mb-2">
                      <div class="gjfhg me-2">
                        <img src={Ii4} alt="" />
                      </div>

                      <p class="mb-0">
                        I am currently working as a digital marketing intern,
                        have a passion for copy...{" "}
                        <span class="spnn45">Show More</span>
                      </p>
                    </div>

                    <div class="jgufgfhghjg my-5">
                      <h4 class="mb-3">Skills</h4>

                      <div class="hjuyfgdfggh">
                        <button>PHP</button>

                        <button>Laravel</button>

                        <button>Javascript</button>

                        <button>jquery</button>

                        <button>React</button>

                        <button>Flutter</button>

                        <button>Wordpress</button>
                      </div>
                    </div>

                    <div class="jnfhujydfgfghfh">
                      <div class="lgjgf align-items-center mb-3">
                        <div class="mgjhg me-3">
                          <img src={Experience} alt="" />
                        </div>

                        <h3 class="mb-0">Work Experience</h3>
                      </div>

                      <div class="gkjnhfgfg">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="gfgh">
                              <h6>Product Designer</h6>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="gfgh">
                              <h6>Product Designer</h6>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="jnfhujydfgfghfh py-3">
                      <div class="lgjgf3 align-items-center mb-3">
                        <div class="mgjhg me-3">
                          <img src={Certification} alt="" />
                        </div>

                        <h3 class="mb-0">Certification</h3>
                      </div>

                      <div class="gkjnhfgfg">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="gfgh">
                              <h6>Certification in Content Writing</h6>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="gdfgghjhhjkjh">
                    <div class="dfkjbgdfgg">
                      <div class="nggh mb-3">
                        <h5>Personal Details</h5>
                      </div>

                      <div class="mfbghffghg py-2">
                        <div class="doiherer d-flex align-items-center">
                          <div class="jnhfgjhf me-2">
                            <img src={Ll1} alt="" />
                          </div>

                          <h6 class="mb-0">Experience:</h6>
                        </div>

                        <p class="mb-0">0-2 Years</p>
                      </div>

                      <div class="mfbghffghg py-2">
                        <div class="doiherer d-flex align-items-center">
                          <div class="jnhfgjhf me-2">
                            <img src={Ll2} alt="" />
                          </div>

                          <h6 class="mb-0">Age:</h6>
                        </div>

                        <p class="mb-0">25 Years</p>
                      </div>

                      <div class="mfbghffghg py-2">
                        <div class="doiherer d-flex align-items-center">
                          <div class="jnhfgjhf me-2">
                            <img src={Ll3} alt="" />
                          </div>

                          <h6 class="mb-0">Gender:</h6>
                        </div>

                        <p class="mb-0">Female</p>
                      </div>

                      <div class="mfbghffghg py-2">
                        <div class="doiherer d-flex align-items-center">
                          <div class="jnhfgjhf me-2">
                            <img src={Ll4} alt="" />
                          </div>

                          <h6 class="mb-0">Language:</h6>
                        </div>

                        <p class="mb-0">English,Hindi,Bengali</p>
                      </div>

                      <div class="mfbghffghg py-2">
                        <div class="doiherer d-flex align-items-center">
                          <div class="jnhfgjhf me-2">
                            <img src={Ll5} alt="" />
                          </div>

                          <h6 class="mb-0">Educational Level:</h6>
                        </div>

                        <p class="mb-0">Master Degree</p>
                      </div>
                    </div>

                    <div class="jnfhujydfgfghfh my-4">
                      <div class="lgjgf2 align-items-center mb-3">
                        <div class="mgjhg me-3">
                          <img src={Edu} alt="" />
                        </div>

                        <h3 class="mb-0">Education</h3>
                      </div>

                      <div class="gkjnhfgfg">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="gfgh">
                              <h6>Bachelors in Fins Arts</h6>
                              <p>College/ School 2010-2012</p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="gfgh">
                              <h6>Bachelors in Fins Arts</h6>
                              <p>College/ School 2010-2012</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfileDashboard;
