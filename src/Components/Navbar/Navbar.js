import React, { useState } from "react";
import Logo from "../../Images/practiwizNew Logo.png";
// import Logo2 from "../../Images/logo.png";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 70) {
      setVisible(true);
    } else if (scrolled <= 70) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <header className={visible ? "headeractive" : ""}>
        <div className="header-wrapper">
          <div className="container-fluid">
            <nav className="navbar fixed-top mx-4 px-3 mt-2 navbar-expand-sm navbar-light bg-white">
              <div className="container">
                <a className="navbar-brand" href="/" id="diorjer-logo">
                  <img src={Logo} alt="Logo" id="dbgheuirbr-image-a" />

                  <img
                    src="images/image - 2024-04-22T201352.571.png"
                    className="d-none"
                    alt=""
                    id="dbgheuirbr-image-b"
                  />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  id="nav-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span id="bar-icon" className="navbar-toggler-icon"></span>

                  <i
                    id="close-mark-icon"
                    className="fa-solid fa-xmark d-none"
                  ></i>
                </button>

                <div
                  className="navbarmenucollapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    {/* <li className="nav-item defdweregee">
                    <a className="nav-link" href="javascript:void(0)"
                      >IT Training
                      <!--<i className="fa-solid fa-angle-down"></i>-->

                      <!--<div className="duiehrr_dropdwn">-->
                      <!--    <ul className="edfrerteee_list bg-white p-3 d-none">-->
                      <!--        <li>IT TRAINING</li>-->

                      <!--        <li>BUSINESS TRAINING</li>-->
                      <!--    </ul>-->
                      <!--</div>-->
                    </a>
                  </li> */}

                    <li className="nav-item">
                      <a className="nav-link" href="ad">
                        Business Training
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="asd">
                        Methodology
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/mentor-club">
                        MentorClub
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/jobs">
                        Jobs
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/aboutus">
                        About Us
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>

                  {/* <!--<form className="d-flex iugeuirrr align-items-center">-->
                <!--  <div className="udgehrr pe-3">-->
                <!--    <div className="cdsfsdvnghff ijaihnifrtt position-relative">-->
                <!--        <input id="myInput" className="form-control" name="myCountry" type="text" placeholder="Discover Your Mentor...">-->

                <!--        <i className="fas fa-search position-absolute" id="searchIcon"></i>-->

                <!--        <div id="autosuggestions"></div>-->
                <!--    </div>-->
                <!--  </div>                      -->

                <!--  <div className="udgehrr">-->
                <!--    <button className="btn fvjhdf_btn btn-main mt-0">LogIn</button>-->
                <!--  </div>-->

                <!--  <div className="udgehrr ps-3">-->
                <!--    <button className="btn btn-main mt-0" type="button">Register</button>-->
                <!--  </div>                     -->
                <!--</form>--> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
