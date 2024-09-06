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
      <div ClassName="khgdfyhjgdfgfhftg854">
        <div ClassName="container">
          <div ClassName="fbghfgfg">
            <div ClassName="row">
              <div ClassName="col-lg-5">
                <div ClassName="dfjhgzdgdf">
                  <div ClassName="gfgfgg">
                    <h4>Jumpstart To It Business Analyst</h4>
                    <div ClassName="jhbfdf">
                      <img src={Payment} alt="" />
                    </div>
                    <div ClassName="nfhjgf2">
                      <h6>Course Details:</h6>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>

                    <div ClassName="hjcbghfg2">
                      <h6>
                        {" "}
                        <i ClassName="fa-solid fa-graduation-cap"></i> Course
                        Duration
                      </h6>
                      <p>6 Months</p>
                    </div>

                    <div ClassName="hjcbghfg2">
                      <h6>
                        {" "}
                        <i ClassName="fa-solid fa-sack-dollar"></i> Course Price
                      </h6>
                      <p>$ 20k</p>
                    </div>

                    <div ClassName="hjcbghfg2">
                      <h6>
                        {" "}
                        <i ClassName="fa-solid fa-money-bill"></i> GST
                      </h6>
                      <p>$ 1k</p>
                    </div>
                    <hr ClassName="hrnm28" />
                    <div ClassName="hjcbghfg2">
                      <h6>
                        {" "}
                        <i ClassName="fa-solid fa-money-bill"></i> Total Price
                      </h6>
                      <p>$ 21k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div ClassName="col-lg-1"></div>
              <div ClassName="col-lg-6">
                <div ClassName="gnhdfgfdgf">
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
                        <img src={Visa} alt="visa" />
                      </label>
                    </div>
                    <div ClassName="gjggfhfgh">
                      <form action="">
                        <div ClassName="gfgfggf">
                          <label for="">Card Holder Name</label>
                          <input
                            ClassName="form-control"
                            type="text"
                            placeholder="Arain Malitya"
                          />
                        </div>
                        <div ClassName="gfgfggf">
                          <label for="">Card Number</label>
                          <input
                            type="text"
                            ClassName="form-control"
                            placeholder="xxxx xxxx xxxx"
                          />
                        </div>
                        <div ClassName="row">
                          <div ClassName="col-lg-6">
                            <div ClassName="gfgfggf">
                              <label for="">Exp. Date</label>
                              <input
                                type="date"
                                ClassName="form-control"
                                placeholder="xxxx xxxx xxxx"
                              />
                            </div>
                          </div>
                          <div ClassName="col-lg-6">
                            <div ClassName="gfgfggf">
                              <label for="">CVV Number</label>
                              <input
                                type="number"
                                ClassName="form-control"
                                placeholder="xxxx xxxx xxxx"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
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
                                CONFIRM <i ClassName="fa-solid fa-check"></i>
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
