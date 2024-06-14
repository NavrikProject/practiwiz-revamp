import React from "react";
import "./paymentmentor.css";

import Payment from "../../../../Images/Courses/vb4.jpg";
import Paypal from "../../../../Images/Courses/paypal1.png";
import Stripe from "../../../../Images/Courses/stripe1.png";
import MasterCard from "../../../../Images/Courses/MasterCard_Logo.svg.png";
import Visa from "../../../../Images/Courses/visa1.png";
const MentorPayment = () => {
  return (
    <>
      <div class="gnhvgfdfgfdgfd">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="gdfzghfghgfh">
                <div class="gdfgfg">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="fhghfg">
                        <img src="./images/qqq1.webp" alt="qqq1" />
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="nhjvfgfg">
                        <div class="ghvfvdfgg">
                          <div class="gjnjfghg">
                            <h2>Tarun Gautam</h2>
                          </div>
                        </div>

                        <div class="hfuydfgftgh">
                          <div class="gjfhg">
                            <img src="./images/ee1.png" alt="sa" />
                          </div>
                          <p>Business Analyst</p>
                        </div>

                        <div class="hfuydfgftgh">
                          <div class="gjfhg">
                            <img src="./images/ee2.png" alt="" />
                          </div>
                          <div class="fdjdfg">
                            <p>
                              {" "}
                              <span class="span121">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </span>
                              <span>(3 Reviews)</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="fbghdfgdfg">
                  <h3>Skills</h3>
                  <div class="fhfbfghg">
                    <button>Decision-Making</button>
                    <button>Communication</button>
                    <button>Adaptability</button>
                    <button>Emotional Intelligence</button>
                    <button>Critical and Analytical Thinking</button>
                  </div>
                </div>

                <div class="dfbdfgfdf">
                  <h4>Work Experience</h4>

                  <div class="ndfhjgdfrgdfgfd">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="njhfd2">
                          <img src="./images/kom1.png" alt="" />
                        </div>
                      </div>
                      <div class="col-lg-9">
                        <div class="lfjguifhgftgh">
                          <h6>Product Supply Manager</h6>
                          <span>
                            <p>Wipro Technologies</p>
                          </span>
                          <p>2021 - present</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="gnhdfgfdgf sticky-top">
                <div class="kgfd">
                  <h4>Payment</h4>
                </div>
                <div class="fgjffghfg">
                  <h6>Select Payment Method</h6>
                  <div class="nghjfbgfgf">
                    <label class="img-btn">
                      <input type="radio" name="country-flags" checked />
                      <img src={Paypal} alt="Paypal" />
                    </label>

                    <label class="img-btn">
                      <input type="radio" name="country-flags" />
                      <img src={Stripe} alt="Stripe" />
                    </label>

                    <label class="img-btn">
                      <input type="radio" name="country-flags" />
                      <img src={MasterCard} alt="Master Card" />
                    </label>

                    <label class="img-btn">
                      <input type="radio" name="country-flags" />
                      <img src={Visa} alt="Visa" />
                    </label>
                  </div>
                  <div class="gjggfhfgh">
                    <form action="">
                      <div class="gjdfhu545">
                        <label for="">Card Holder Name</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Arain Malitya"
                        />
                      </div>
                    </form>

                    <div class="dfkjghjdffg">
                      <h6>Subtotal</h6>
                      <p>16000</p>
                    </div>
                    <div class="dfkjghjdffg mt-2">
                      <h6>Tax</h6>
                      <p>16000</p>
                    </div>
                    <hr class="hrgfg" />
                    <div class="dfkjghjdffg mt-3">
                      <h6>Tax</h6>
                      <p>16000</p>
                    </div>

                    <div class="dfvbdfdf">
                      <div class="row">
                        <div class="col-lg-5">
                          <div class="khfdfgvf">
                            <button class="btn254">
                              <i class="fa-solid fa-angle-left"></i> BACK
                            </button>
                          </div>
                        </div>
                        <div class="col-lg-7">
                          <div class="kgfhbgfhfg">
                            <button class="btynh58">
                              Pay <i class="fa-solid fa-check"></i>
                            </button>
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
    </>
  );
};

export default MentorPayment;
