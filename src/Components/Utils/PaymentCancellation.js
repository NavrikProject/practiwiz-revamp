import React from "react";
import "./payment&paymentcancellation.css";
import PaymentError from "../../Images/basic-rgb_605959-395.jpg";
const PaymentCancellation = () => {
  return (
    <div ClassName="dsjujfghdfgdfghf">
      <div ClassName="container-fluid px-5">
        <div ClassName="fgjhfgg">
          <div ClassName="row align-items-center justify-content-center">
            <div ClassName="col-lg-5">
              <div ClassName="ihdneirr_image">
                <img src={PaymentError} alt="" />
              </div>
            </div>

            <div ClassName="col-lg-5">
              <div ClassName="mndhjgbghfgh">
                <div ClassName="ui middle aligned center aligned grid">
                  <div ClassName="ui eight wide cstm-wdth">
                    <form ClassName="ui large form">
                      <div ClassName="ui icon negative message">
                        <i ClassName="fa-regular fa-exclamation"></i>
                        <div ClassName="content">
                          <div ClassName="header">Oops! Something went wrong.</div>
                          <p>While trying to reserve money from your account</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <button ClassName="btn-main">GO TO DASHBOARD</button>
                <button ClassName="btn-main">GO TO HOMEPAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancellation;
