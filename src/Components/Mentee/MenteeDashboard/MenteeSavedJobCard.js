import React from "react";
import JobImage from "../../../Images/Mentee/download (21).webp";
const MenteeSavedJobCard = () => {
  return (
    <div class="col-lg-6 mb-4">
      <div class="kjdhhjgd p-3">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 mb-4">
            <div class="hjgfdfg">
              <img src={JobImage} alt="" />
            </div>
          </div>

          <div class="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
            <div class="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
              <div class="jhgjgf">
                <h4 class="mb-0">Sr. PHP Developer</h4>
              </div>

              <div class="jhgjgf1">
                <div class="mhgf position-relative text-center">
                  <i class="fa-regular fa-bookmark position-absolute"></i>
                </div>
              </div>
            </div>

            <div class="nfhjdfghfdghf mb-3">
              <button class="rlknjhgjfg ps-0 btn btn-transparent">
                <p class="mb-0">
                  <i class="fa-solid fa-location-arrow me-1"></i>{" "}
                  Newtown,kolkata
                </p>
              </button>

              <button class="rlknjhgjfg ps-0 btn btn-transparent">
                <p class="mb-0">
                  <i class="fa-solid fa-sack-dollar me-1"></i> $24k-$30k
                </p>
              </button>

              <button class="rlknjhgjfg ps-0 btn btn-transparent">
                <p class="mb-0">
                  <i class="fa-solid fa-bag-shopping me-1"></i> 4yr. Exp.
                </p>
              </button>

              <button class="rlknjhgjfg1 oidefrgtry px-2 py-1">
                Full Time
              </button>
            </div>

            <div class="hjgfjgfgf">
              <button>PHP</button>

              <button>Java</button>

              <button>Magento</button>

              <button>Laravel</button>

              <button>Photoshop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeSavedJobCard;
