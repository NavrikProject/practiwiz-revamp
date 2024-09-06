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
      <div ClassName="gnhvgfdfgfdgfd">
        <div ClassName="container">
          <div ClassName="row">
            <div ClassName="col-lg-6">
              <div ClassName="gdfzghfghgfh">
                <div ClassName="gdfgfg">
                  <div ClassName="row">
                    <div ClassName="col-lg-4">
                      <div ClassName="fhghfg">
                        <img src="./images/qqq1.webp" alt="qqq1" />
                      </div>
                    </div>
                    <div ClassName="col-lg-8">
                      <div ClassName="nhjvfgfg">
                        <div ClassName="ghvfvdfgg">
                          <div ClassName="gjnjfghg">
                            <h2>Tarun Gautam</h2>
                          </div>
                        </div>

                        <div ClassName="hfuydfgftgh">
                          <div ClassName="gjfhg">
                            <img src="./images/ee1.png" alt="sa" />
                          </div>
                          <p>Business Analyst</p>
                        </div>

                        <div ClassName="hfuydfgftgh">
                          <div ClassName="gjfhg">
                            <img src="./images/ee2.png" alt="" />
                          </div>
                          <div ClassName="fdjdfg">
                            <p>
                              {" "}
                              <span ClassName="span121">
                                <i ClassName="fa-solid fa-star"></i>
                                <i ClassName="fa-solid fa-star"></i>
                                <i ClassName="fa-solid fa-star"></i>
                                <i ClassName="fa-solid fa-star"></i>
                                <i ClassName="fa-solid fa-star"></i>
                              </span>
                              <span>(3 Reviews)</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div ClassName="fbghdfgdfg">
                  <h3>Skills</h3>
                  <div ClassName="fhfbfghg">
                    <button>Decision-Making</button>
                    <button>Communication</button>
                    <button>Adaptability</button>
                    <button>Emotional Intelligence</button>
                    <button>Critical and Analytical Thinking</button>
                  </div>
                </div>

                <div ClassName="dfbdfgfdf">
                  <h4>Work Experience</h4>

                  <div ClassName="ndfhjgdfrgdfgfd">
                    <div ClassName="row">
                      <div ClassName="col-lg-3">
                        <div ClassName="njhfd2">
                          <img src="./images/kom1.png" alt="" />
                        </div>
                      </div>
                      <div ClassName="col-lg-9">
                        <div ClassName="lfjguifhgftgh">
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

            <div ClassName="col-lg-6">
              <div ClassName="gnhdfgfdgf sticky-top">
                <div ClassName="kgfd">
                  <h4>Payment</h4>
                </div>
                <div ClassName="fgjffghfg">
                  <h6>Select Payment Method</h6>
                  <div ClassName="nghjfbgfgf">
                    <label ClassName="img-btn">
                      <input type="radio" name="country-flags" checked />
                      <img src={Paypal} alt="Paypal" />
                    </label>

                    <label ClassName="img-btn">
                      <input type="radio" name="country-flags" />
                      <img src={Stripe} alt="Stripe" />
                    </label>

                    <label ClassName="img-btn">
                      <input type="radio" name="country-flags" />
                      <img src={MasterCard} alt="Master Card" />
                    </label>

                    <label ClassName="img-btn">
                      <input type="radio" name="country-flags" />
                      <img src={Visa} alt="Visa" />
                    </label>
                  </div>
                  <div ClassName="gjggfhfgh">
                    <form action="">
                      <div ClassName="gjdfhu545">
                        <label for="">Card Holder Name</label>
                        <input
                          ClassName="form-control"
                          type="text"
                          placeholder="Arain Malitya"
                        />
                      </div>
                    </form>

                    <div ClassName="dfkjghjdffg">
                      <h6>Subtotal</h6>
                      <p>16000</p>
                    </div>
                    <div ClassName="dfkjghjdffg mt-2">
                      <h6>Tax</h6>
                      <p>16000</p>
                    </div>
                    <hr ClassName="hrgfg" />
                    <div ClassName="dfkjghjdffg mt-3">
                      <h6>Tax</h6>
                      <p>16000</p>
                    </div>

                    <div ClassName="dfvbdfdf">
                      <div ClassName="row">
                        <div ClassName="col-lg-5">
                          <div ClassName="khfdfgvf">
                            <button ClassName="btn254">
                              <i ClassName="fa-solid fa-angle-left"></i> BACK
                            </button>
                          </div>
                        </div>
                        <div ClassName="col-lg-7">
                          <div ClassName="kgfhbgfhfg">
                            <button ClassName="btynh58">
                              Pay <i ClassName="fa-solid fa-check"></i>
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
