import React from "react";
import "./paymentcourse.css";
import Payment from "../../../Images/Courses/vb4.jpg";
import Paypal from "../../../Images/Courses/paypal1.png";
import Stripe from "../../../Images/Courses/stripe1.png";
import MasterCard from "../../../Images/Courses/MasterCard_Logo.svg.png";
import Visa from "../../../Images/Courses/visa1.png";
const CoursePayment = () => {
  return (
    <>
      <div class="khgdfyhjgdfgfhftg854">
        <div class="container">
          <div class="fbghfgfg">
            <div class="row">
              <div class="col-lg-5">
                <div class="dfjhgzdgdf">
                  <div class="gfgfgg">
                    <h4>Jumpstart To It Business Analyst</h4>
                    <div class="jhbfdf">
                      <img src={Payment} alt="" />
                    </div>
                    <div class="nfhjgf2">
                      <h6>Course Details:</h6>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>

                    <div class="hjcbghfg2">
                      <h6>
                        {" "}
                        <i class="fa-solid fa-graduation-cap"></i> Course
                        Duration
                      </h6>
                      <p>6 Months</p>
                    </div>

                    <div class="hjcbghfg2">
                      <h6>
                        {" "}
                        <i class="fa-solid fa-sack-dollar"></i> Course Price
                      </h6>
                      <p>$ 20k</p>
                    </div>

                    <div class="hjcbghfg2">
                      <h6>
                        {" "}
                        <i class="fa-solid fa-money-bill"></i> GST
                      </h6>
                      <p>$ 1k</p>
                    </div>
                    <hr class="hrnm28" />
                    <div class="hjcbghfg2">
                      <h6>
                        {" "}
                        <i class="fa-solid fa-money-bill"></i> Total Price
                      </h6>
                      <p>$ 21k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-6">
                <div class="gnhdfgfdgf">
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
                        <img src={Visa} alt="visa" />
                      </label>
                    </div>
                    <div class="gjggfhfgh">
                      <form action="">
                        <div class="gfgfggf">
                          <label for="">Card Holder Name</label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Arain Malitya"
                          />
                        </div>
                        <div class="gfgfggf">
                          <label for="">Card Number</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="xxxx xxxx xxxx"
                          />
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="gfgfggf">
                              <label for="">Exp. Date</label>
                              <input
                                type="date"
                                class="form-control"
                                placeholder="xxxx xxxx xxxx"
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="gfgfggf">
                              <label for="">CVV Number</label>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="xxxx xxxx xxxx"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
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
                                CONFIRM <i class="fa-solid fa-check"></i>
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
      </div>
    </>
  );
};

export default CoursePayment;
