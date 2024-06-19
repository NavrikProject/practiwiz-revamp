import React from "react";
import "./payment&paymentcancellation.css";
import PaymentError from "../../Images/basic-rgb_605959-395.jpg";
const PaymentCancellation = () => {
  return (
    <div class="dsjujfghdfgdfghf">
      <div class="container-fluid px-5">
        <div class="fgjhfgg">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5">
              <div class="ihdneirr_image">
                <img src={PaymentError} alt="" />
              </div>
            </div>

            <div class="col-lg-5">
              <div class="mndhjgbghfgh">
                <div class="ui middle aligned center aligned grid">
                  <div class="ui eight wide cstm-wdth">
                    <form class="ui large form">
                      <div class="ui icon negative message">
                        <i class="fa-regular fa-exclamation"></i>
                        <div class="content">
                          <div class="header">Oops! Something went wrong.</div>
                          <p>While trying to reserve money from your account</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <button class="btn-main">GO TO DASHBOARD</button>
                <button class="btn-main">GO TO HOMEPAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancellation;
