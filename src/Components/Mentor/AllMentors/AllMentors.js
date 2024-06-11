import React, { useState } from "react";
import AllMentorCard from "./AllMentorCard";

const AllMentors = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };
  const toggleDropdown4 = () => {
    setShowDropdown4(!showDropdown4);
  };
  return (
    <>
      <div className="aslkhghj2">
        <div className="jbbhvf55">
          <div className="container-fluid px-5">
            <div className="jgfgfg">
              <h2>Mentor club</h2>
              <p>
                Home <i className="fa-solid fa-angles-right"></i> Mentor Club
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="kghfbgfgbhfg pb-0">
        <div className="ighefirr bg-white py-2">
          <div className="container-fluid px-5">
            <div className="uilhdier_filter_wrap d-flex slign-items-center justify-content-between">
              <div className="dieirherr_btn bhduebbuger">
                <span className="cjdsuibfsdf_btn position-relative">
                  <button
                    className="custom-select sfgrwwe_btn btn btn-main me-2"
                    id="bmfltrbtn"
                    onClick={toggleDropdown1}
                  >
                    <span>Mentor Availability</span>
                  </button>
                  {showDropdown1 && (
                    <ul
                      className="diugerbihr p-3 bg-white position-absolute text-left"
                      id="bm-filter-drpdwn"
                    >
                      <h6>Mentors available within</h6>

                      <div className="row dgeubr mt-3">
                        <div className="col-lg-6 mb-2">
                          <input type="radio" id="cat" name="animal" value="" />
                          <label htmlFor="cat">7 Days</label>
                        </div>

                        <div className="col-lg-6 mb-2">
                          <input type="radio" id="dog" name="animal" value="" />
                          <label htmlFor="dog">14 Days</label>
                        </div>

                        <div className="col-lg-6 mb-2">
                          <input type="radio" id="pig" name="animal" value="" />
                          <label htmlFor="pig">21 Days</label>
                        </div>

                        <div className="col-lg-6">
                          <input
                            type="radio"
                            id="vdsf"
                            name="animal"
                            value=""
                          />
                          <label htmlFor="vdsf">30 Days</label>
                        </div>
                      </div>
                    </ul>
                  )}
                </span>

                <span className="cjdsuibfsdf_btn position-relative">
                  <button
                    className="custom-select sfgrwwe_btn btn btn-main mx-2"
                    id="bmfltrbtn2"
                    onClick={toggleDropdown2}
                  >
                    <span>Experience</span>
                  </button>
                  {showDropdown2 && (
                    <ul
                      className="diugerbihr p-3 bg-white position-absolute text-left"
                      id="bm-filter-drpdwn2"
                    >
                      <h6>Mentors with the experience (Yrs) of</h6>

                      <div className="row dgeubr mt-3">
                        <div className="col-lg-6 mb-2">
                          <input
                            type="radio"
                            id="sdsd"
                            name="csdfdwrtt"
                            value=""
                          />
                          <label htmlFor="sdsd">3 - 5</label>
                        </div>

                        <div className="col-lg-6 mb-2">
                          <input
                            type="radio"
                            id="sadf"
                            name="csdfdwrtt"
                            value=""
                          />
                          <label htmlFor="sadf">5 - 7</label>
                        </div>

                        <div className="col-lg-6 mb-2">
                          <input
                            type="radio"
                            id="gdfg"
                            name="csdfdwrtt"
                            value=""
                          />
                          <label htmlFor="gdfg">7 - 9</label>
                        </div>

                        <div className="col-lg-6">
                          <input
                            type="radio"
                            id="gftsr"
                            name="csdfdwrtt"
                            value=""
                          />
                          <label htmlFor="gftsr">9+</label>
                        </div>
                      </div>
                    </ul>
                  )}
                </span>

                <span className="cjdsuibfsdf_btn position-relative">
                  <button
                    className="custom-select sfgrwwe_btn btn btn-main mx-2"
                    id="bmfltrbtn3"
                    onClick={toggleDropdown3}
                  >
                    <span>
                      Price Range (
                      <i className="fa-solid fa-indian-rupee-sign"></i>)
                    </span>
                  </button>
                  {showDropdown3 && (
                    <ul
                      className="diugerbihr p-3 bg-white position-absolute"
                      id="bm-filter-drpdwn3"
                    >
                      <div className="wrapper">
                        <div className="price-input">
                          <div className="field">
                            <span>Min</span>
                            <input
                              type="number"
                              className="input-min"
                              value="2500"
                            />
                          </div>

                          <div className="separator">-</div>

                          <div className="field">
                            <span>Max</span>
                            <input
                              type="number"
                              className="input-max"
                              value="7500"
                            />
                          </div>
                        </div>
                      </div>
                    </ul>
                  )}
                </span>

                <span className="cjdsuibfsdf_btn position-relative">
                  <button
                    className="custom-select sfgrwwe_btn btn btn-main ms-2"
                    id="bmfltrbtn4"
                    onClick={toggleDropdown4}
                  >
                    <span>Rating</span>
                  </button>
                  {showDropdown4 && (
                    <ul
                      className="diugerbihr ohgiererr_list p-3 bg-white position-absolute"
                      id="bm-filter-drpdwn4"
                    >
                      <h6>Choose rating</h6>

                      <div className="row dgeubr mt-3">
                        <div className="col-lg-12 mb-2">
                          <input
                            type="radio"
                            id="dsad"
                            name="fcreter"
                            value=""
                          />
                          <label htmlFor="dsad">
                            1 (<i className="fa-solid fa-star"></i>)
                          </label>
                        </div>

                        <div className="col-lg-12 mb-2">
                          <input
                            type="radio"
                            id="sadsad"
                            name="fcreter"
                            value=""
                          />
                          <label htmlFor="sadsad">
                            2 (<i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>)
                          </label>
                        </div>

                        <div className="col-lg-12 mb-2">
                          <input
                            type="radio"
                            id="hgffgh"
                            name="fcreter"
                            value=""
                          />
                          <label htmlFor="hgffgh">
                            3 (<i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>)
                          </label>
                        </div>

                        <div className="col-lg-12 mb-2">
                          <input
                            type="radio"
                            id="kggfg"
                            name="fcreter"
                            value=""
                          />
                          <label htmlFor="kggfg">
                            4 (<i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>)
                          </label>
                        </div>

                        <div className="col-lg-12">
                          <input
                            type="radio"
                            id="poirer"
                            name="fcreter"
                            value=""
                          />
                          <label htmlFor="poirer">
                            5 (<i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>{" "}
                            <i className="fa-solid fa-star"></i>)
                          </label>
                        </div>
                      </div>
                    </ul>
                  )}
                </span>

                <button
                  className="custom-select sfgrwwe_btn oikahdbaed_filter btn btn-main d-none"
                  id="fuygernert"
                >
                  <span>Filter</span>
                </button>
              </div>

              <div className="ibhdiber_btn">
                <button className="btn btn-main">
                  Apply Filter <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kjgbhdfdfgfghfghfg">
        <div className="container-fluid px-5">
          <div className="nfhjgbgf">
            <AllMentorCard /> <AllMentorCard /> <AllMentorCard />
            <AllMentorCard /> <AllMentorCard /> <AllMentorCard />
            <AllMentorCard />
            <AllMentorCard />
            <AllMentorCard />
            <AllMentorCard /> <AllMentorCard /> <AllMentorCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMentors;
