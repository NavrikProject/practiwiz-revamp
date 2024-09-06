import React from "react";
import D21 from "../../../Images/Courses/download (21).webp";
const SingleJobCard = () => {
  return (
    <>
      {" "}
      <div ClassName="kjdhhjgd mb-3 p-3">
        <div ClassName="row">
          <div ClassName="col-lg-3 col-md-3 col-sm-12 mb-4">
            <div ClassName="hjgfdfg">
              <img src={D21} alt="" />
            </div>
          </div>

          <div ClassName="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
            <div ClassName="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
              <div ClassName="jhgjgf">
                <h4 ClassName="mb-0">Sr. PHP Developer</h4>
              </div>

              <div ClassName="jhgjgf1">
                <div ClassName="mhgf position-relative text-center">
                  <i ClassName="fa-regular fa-bookmark position-absolute"></i>
                </div>
              </div>
            </div>

            <div ClassName="nfhjdfghfdghf mb-3">
              <button ClassName="rlknjhgjfg ps-0 btn btn-transparent">
                <p ClassName="mb-0">
                  <i ClassName="fa-solid fa-location-arrow me-1"></i>{" "}
                  Newtown,kolkata
                </p>
              </button>

              <button ClassName="rlknjhgjfg ps-0 btn btn-transparent">
                <p ClassName="mb-0">
                  <i ClassName="fa-solid fa-sack-dollar me-1"></i> $24k-$30k
                </p>
              </button>

              <button ClassName="rlknjhgjfg ps-0 btn btn-transparent">
                <p ClassName="mb-0">
                  <i ClassName="fa-solid fa-bag-shopping me-1"></i> 4yr. Exp.
                </p>
              </button>
            </div>

            <div ClassName="hjgfjgfgf">
              <button>PHP</button>

              <button>Java</button>

              <button>Magento</button>

              <button>Laravel</button>

              <button>Photoshop</button>
            </div>
            <div ClassName="fkjhgjfgf">
              <button ClassName="rlknjhgjfg1 oidefrgtry px-2 py-1">
                Full Time
              </button>
              <p>
                <i ClassName="fa-solid fa-clock"></i> 11 hours Ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJobCard;
