import React, { useState } from "react";
import Logo from "../../Images/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo2 from "../../Images/logo.png";
const Navbar = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const [menutoggle, setmenutoggle] = useState(false);
  const [menuOn, setmenuOn] = useState(false);

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 70) {
      setVisible(true);
    } else if (scrolled <= 70) {
      setVisible(false);
    }
  };
  const registermenuOn = () => {
    setmenuOn(true);
  };
  const registermenuOff = () => {
    setmenuOn(false);
  };

  const gotoMenteepage = () => {};
  const [BurgerMenu, SetBurgerMenu] = useState(false);
  const handleBurgerMenu = () => {
    SetBurgerMenu(!BurgerMenu);
  };
  const [SignUpMenu, setSignUpMenu] = useState(false);
  const handleSignUpMenu = () => {
    setSignUpMenu(!SignUpMenu);
  };

  window.addEventListener("scroll", toggleVisible);
  const technologyOptions = [
    {
      id: 1,
      value: "CXOs",
      label: "CXOs",
    },
    {
      id: 2,
      value: "Business-leaders",
      label: "Business leaders",
    },
    {
      id: 3,
      value: "Technology-Leaders",
      label: "Technology Leaders",
    },
    {
      id: 4,
      value: "Start-Up-Leaders",
      label: "Start-Up Leaders",
    },
    {
      id: 5,
      value: "Technology-Experts",
      label: "Technology Experts",
    },
    {
      id: 6,
      value: "Domain-Experts",
      label: "Domain Experts",
    },
    {
      id: 7,
      value: "Marketing-&-Sales",
      label: "Marketing & Sales",
    },
  ];
  return (
    <>
      <header className={visible ? "headeractive" : ""}>
        <div className="header-wrapper">
          <div className="container-fluid">
            <nav
              className="navbar fixed-top mx-4 px-3 mt-2 navbar-expand-sm navbar-light 
          navbarcolor
            "
            >
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
                  onClick={handleBurgerMenu}
                >
                  <span
                    id="bar-icon"
                    className="navbar-toggler-icon hrncenhjbf"
                  ></span>

                  <i
                    id="close-mark-icon"
                    className="fa-solid fa-xmark d-none"
                  ></i>
                </button>
                {BurgerMenu && (
                  <div className="dbwudgw">
                    <div className="djgjefgndke">
                      <Link to={"/mentor-club"}>Mentor Connect</Link>{" "}
                    </div>
                    <div className="djgjefgndke">
                      <Link to={"/login"}>Login</Link>
                    </div>

                    <div className="djgjefgndke" onClick={handleSignUpMenu}>
                      Sign-Up
                    </div>
                    {SignUpMenu && (
                      <ul className="ulMobile">
                        <li
                          className="djgjefgndke"
                          // className="MenuBox-item1"
                          // onClick={gotoMenteepage}
                        >
                          <a
                            // className="inOneLine"
                            href="/mentee-registration"
                          >
                            {/* <i className="fa-solid fa-chalkboard-user"></i>{" "} */}
                            <h5>Mentee</h5>
                          </a>
                        </li>
                        <li
                          className="djgjefgndke"
                          // className="MenuBox-item1"
                          // onClick={gotoMentorpage}
                        >
                          <a
                            // className="inOneLine"
                            href="mentor-registration"
                          >
                            {/* <i className="fa-solid fa-graduation-cap"></i>{" "} */}
                            <h5>Mentor</h5>
                          </a>
                        </li>
                        <li
                          className="djgjefgndke"
                          // className="MenuBox-item1"
                          // onClick={gotoInstitute}
                        >
                          <a
                            // className="inOneLine"
                            href="/institute-registration"
                          >
                            {/* <i className="fa-solid fa-building-columns"></i>{" "} */}
                            <h5>Institute</h5>
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                )}

                <div
                  className="navbarmenucollapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navbar-nav "
                    onMouseLeave={() => {
                      setmenutoggle(false);
                    }}
                  >
                    <li
                      className="nav-item regmenuR"
                      onMouseOver={() => {
                        setmenutoggle(true);
                      }}
                    >
                      <a className="nav-link" href="/mentor-club">
                        Mentor Connect{" "}
                        <i
                          className="fa-solid fa-plus"
                          style={{ color: "#1b63de" }}
                        ></i>
                      </a>
                    </li>
                    {menutoggle && (
                      <div className="PositionAB">
                        <div className="menushowbox">
                          {technologyOptions?.map((option, index) => {
                            return (
                              <div className="MenuBox-item2">
                                <h6>
                                  <Link
                                    to={`/mentor-club/${option.value.toLowerCase()}/${
                                      option.id
                                    }`}
                                  >
                                    {option.label}
                                  </Link>
                                </h6>
                              </div>
                            );
                          })}{" "}
                          <div className="MenuBox-item2">
                            <h6></h6>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* <li className="nav-item">
                      <svg
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.166 1.333 3.23 8.458c-.233.28-.35.42-.351.537-.002.102.044.2.124.264.091.074.273.074.636.074H8.5l-.667 5.334L13.77 7.54c.232-.279.348-.418.35-.536a.333.333 0 0 0-.124-.264c-.091-.074-.273-.074-.636-.074H8.5l.666-5.334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <a className="nav-link" href="/case-studies">
                        Case Studies
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/case-studies"
                        onMouseOver={() => {
                          setmenutoggle(false);
                        }}
                      >
                        Case Studies
                        <span className="ai-button">
                          AI<i className="fas fa-bolt"></i>
                        </span>
                      </a>
                    </li>

                    {/* <li className="nav-item">
                      <a className="nav-link" href="/jobs">
                        Jobs
                      </a>
                    </li> */}

                    {/* <li className="nav-item">
                      <a className="nav-link" href="/aboutus">
                        About Us
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact Us
                      </a>
                    </li> */}
                  </ul>
                  {user ? (
                    <div className="udgehrr">
                      <button className="btn fvjhdf_btn btn-main mt-0">
                        <Link to={`${user.user_type}/dashboard`}>
                          {user.user_firstname.charAt(0).toUpperCase() +
                            user.user_lastname.charAt(0).toUpperCase()}
                        </Link>
                      </button>
                    </div>
                  ) : (
                    <div className="udgehrr" onMouseLeave={registermenuOff}>
                      <button className="btn fvjhdf_btn btn-main mt-0 btn-mainHome">
                        <Link to="/login">LogIn</Link>
                      </button>
                      <div>
                        <button
                          className="btn fvjhdf_btn btn-main mt-0 btn-mainHome"
                          onMouseOver={registermenuOn}
                        >
                          Sign Up
                        </button>
                        <div className="regmenu">
                          {menuOn && (
                            <div className="MenuBox">
                              <button
                                className="MenuBox-item1"
                                // onClick={gotoMenteepage}
                              >
                                <a
                                  className="inOneLine"
                                  href="/mentee-registration"
                                >
                                  <i className="fa-solid fa-chalkboard-user"></i>{" "}
                                  <h5>Mentee</h5>
                                </a>
                              </button>
                              <button
                                className="MenuBox-item1"
                                // onClick={gotoMentorpage}
                              >
                                <a
                                  className="inOneLine"
                                  href="mentor-registration"
                                >
                                  <i className="fa-solid fa-graduation-cap"></i>{" "}
                                  <h5>Mentor</h5>
                                </a>
                              </button>
                              <button
                                className="MenuBox-item1"
                                // onClick={gotoInstitute}
                              >
                                <a
                                  className="inOneLine"
                                  href="/institute-registration"
                                >
                                  <i className="fa-solid fa-building-columns"></i>{" "}
                                  <h5>Institute</h5>
                                </a>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* <form className="d-flex iugeuirrr align-items-center">
                  <div className="udgehrr pe-3">
                    <div className="cdsfsdvnghff ijaihnifrtt position-relative">
                        <input id="myInput" className="form-control" name="myCountry" type="text" placeholder="Discover Your Mentor...">

                        <i className="fas fa-search position-absolute" id="searchIcon"></i>

                        <div id="autosuggestions"></div>
                    </div>
                  </div>                      
                  <div className="udgehrr ps-3">
                    <button className="btn btn-main mt-0" type="button">Register</button>
                  </div>                     
                </form> */}
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
