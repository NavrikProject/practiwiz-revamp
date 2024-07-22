// import React from "react";

// const MenteeRegistration = () => {
//   return (
//     <>
//       <main>
//         <div className="regis_background">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 mb-4">
//                 <div className="iuhieiuihaw_left sticky-top">
//                   <h3>
//                     Grow Your Professional Career with
//                     <span className="span222">Top-Rated</span> Mentors
//                   </h3>

//                   <p>
//                     Join us to upgrade your professional career with our
//                     mentor’s guidance. We provide a personalised training
//                     approach to improve your project management skills. Master
//                     the skill to work under pressure on various projects within
//                     tight deadlines. At Practiwiz we have courses for working
//                     professionals, MBA students, and aspiring IT business
//                     analysts. Hurry up and reserve your mentorship className today.
//                   </p>

//                   <h5 className="mt-4">Benefits of Our Mentorship Course:</h5>

//                   <ul className="ps-0 mt-3">
//                     <li className="mb-3">
//                       <div className="d-flex align-items-center">
//                         <i className="fa-solid fa-circle-check"></i>

//                         <p className="mb-0">Self-paced training</p>
//                       </div>
//                     </li>

//                     <li className="mb-3">
//                       <div className="d-flex align-items-center">
//                         <i className="fa-solid fa-circle-check"></i>

//                         <p className="mb-0">Flexible timing and scheduling</p>
//                       </div>
//                     </li>

//                     <li className="mb-3">
//                       <div className="d-flex align-items-center">
//                         <i className="fa-solid fa-circle-check"></i>

//                         <p className="mb-0">
//                           Career guidance from experienced mentors
//                         </p>
//                       </div>
//                     </li>

//                     <li className="mb-3">
//                       <div className="d-flex align-items-center">
//                         <i className="fa-solid fa-circle-check"></i>

//                         <p className="mb-0">Expert advice and guidance</p>
//                       </div>
//                     </li>

//                     <li className="mb-3">
//                       <div className="d-flex align-items-center">
//                         <i className="fa-solid fa-circle-check"></i>

//                         <p className="mb-0">
//                           <a href="/">Sign Up Now!</a>
//                         </p>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="iuhieiuihaw_right bg-white p-3">
//                   <div className="uherrr_text text-center">
//                     <h4>Sign up</h4>
//                   </div>

//                   <form id="multi-step-form">
//                     <div className="step active" id="step1">
//                       <h4 className="text-center">
//                         <img
//                           src="images/icons8-account-96.webp"
//                           alt=""
//                           className="me-1"
//                         />
//                         Step 1: Account Information
//                       </h4>

//                       <div className="ihduwfr_form_wrapper mt-4">
//                         <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
//                           <label for="exampleInputEmail1" className="form-label">
//                             I Want To Register As
//                           </label>
//                           <br />
//                           <input
//                             type="radio"
//                             id="rdo2"
//                             className="radio-input"
//                             name="radio-group"
//                           />
//                           <label for="rdo2" className="radio-label">
//                             <span className="radio-border"></span>
//                             <i
//                               className="fa-solid fa-graduation-cap me-1"
//                               style={{ color: "#1B759A" }}
//                             ></i>
//                             Mentee
//                           </label>
//                           <input
//                             type="radio"
//                             id="rdo3"
//                             className="radio-input"
//                             name="radio-group"
//                           />
//                           <label for="rdo3" className="radio-label">
//                             <span className="radio-border"></span>
//                             <i
//                               className="fa-solid fa-briefcase me-1"
//                               style={{ color: "#1B759A" }}
//                             ></i>
//                             Job Seeker
//                           </label>
//                           <input
//                             type="radio"
//                             id="rdo4"
//                             className="radio-input"
//                             name="radio-group"
//                             onclick="handleInstituteSelection()"
//                           />
//                           <label for="rdo4" className="radio-label">
//                             <span className="radio-border"></span>
//                             <i
//                               className="fa-solid fa-building-columns me-1"
//                               style={{ color: "#1B759A" }}
//                             ></i>
//                             Institute
//                           </label>
//                         </div>
//                         <div className="row">
//                           <div className="col-lg-6">
//                             <div className="mb-3">
//                               <label
//                                 for="exampleInputEmail1"
//                                 className="form-label"
//                               >
//                                 First Name
//                               </label>
//                               <input
//                                 type="email"
//                                 className="form-control"
//                                 id="exampleInputEmail1"
//                                 placeholder="First Name"
//                                 aria-describedby="emailHelp"
//                               />
//                             </div>
//                           </div>

//                           <div className="col-lg-6">
//                             <div className="mb-3">
//                               <label
//                                 for="exampleInputPassword1"
//                                 className="form-label"
//                               >
//                                 Last Name
//                               </label>
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 id="exampleInputPassword1"
//                                 placeholder="Last Name"
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mb-3">
//                           <label for="exampleInputEmail1" className="form-label">
//                             Phone Number
//                           </label>

//                           <input id="phone" type="tel" name="phone" />
//                         </div>

//                         <div className="csfvgdtrfs mb-3 position-relative">
//                           <label for="exampleInputEmail1" className="form-label">
//                             Email
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             placeholder="Email"
//                             aria-describedby="emailHelp"
//                           />

//                           <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
//                         </div>

//                         <div className="csfvgdtrfs mb-3 position-relative">
//                           <label for="exampleInputEmail1" className="form-label">
//                             Password
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             placeholder="Password must be at least 8 characters"
//                             aria-describedby="emailHelp"
//                           />

//                           <i className="fa-solid fa-eye position-absolute"></i>
//                         </div>

//                         <div className="csfvgdtrfs mb-3 position-relative">
//                           <label for="exampleInputEmail1" className="form-label">
//                             Confirm Password
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             placeholder="Type your password again"
//                             aria-describedby="emailHelp"
//                           />

//                           <i className="fa-solid fa-eye position-absolute"></i>
//                         </div>
//                       </div>

//                       <div className="d-flex justify-content-between pt-3">
//                         <div className="uherrr_text text-center">
//                           <p className="mb-0">
//                             Already Have An Account? <a href="/login">Log In</a>
//                           </p>
//                         </div>

//                         <button
//                           type="button"
//                           className="btn dgheuih_btn_next btn-main"
//                           onclick="nextStep()"
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div>

//                     {/* <!-- Step 2 --> */}
//                     <div className="step" id="step2">
//                       <h4 className="text-center">
//                         <img
//                           src="images/icons8-account-96.webp"
//                           alt=""
//                           className="me-1"
//                         />
//                         Step 2: More About You
//                       </h4>

//                       <div className="ihduwfr_form_wrapper mt-4">
//                         <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
//                           <label for="exampleInputEmail1" className="form-label">
//                             I Am A
//                           </label>
//                           <br />
//                           <input
//                             type="radio"
//                             id="rdo4"
//                             checked
//                             className="radio-input"
//                             name="radio-group1"
//                           />
//                           <label for="rdo4" className="radio-label">
//                             <span className="radio-border"></span> Student
//                           </label>
//                           <input
//                             type="radio"
//                             id="rdo5"
//                             className="radio-input"
//                             name="radio-group1"
//                           />
//                           <label for="rdo5" className="radio-label">
//                             <span className="radio-border"></span> Working
//                             Professional
//                           </label>
//                           <input
//                             type="radio"
//                             id="rdo6"
//                             className="radio-input"
//                             name="radio-group1"
//                           />
//                           <label for="rdo6" className="radio-label">
//                             <span className="radio-border"></span> Corporate
//                           </label>
//                           <input
//                             type="radio"
//                             id="rdo10"
//                             className="radio-input"
//                             name="radio-group1"
//                           />
//                           <label for="rdo10" className="radio-label">
//                             <span className="radio-border"></span> Fresher
//                           </label>
//                         </div>

//                         <div className="csfvgdtrfs cihseriniewr mb-3 position-relative">
//                           <label for="exampleInputEmail1" className="form-label">
//                             Gender
//                           </label>
//                           {/* </br> */}

//                           <input
//                             type="radio"
//                             id="rdo7"
//                             checked
//                             className="radio-input"
//                             name="radio-group2"
//                           />
//                           <label for="rdo7" className="radio-label">
//                             <span className="radio-border"></span> Male
//                           </label>

//                           <input
//                             type="radio"
//                             id="rdo8"
//                             className="radio-input"
//                             name="radio-group2"
//                           />
//                           <label for="rdo8" className="radio-label">
//                             <span className="radio-border"></span> Female
//                           </label>

//                           <input
//                             type="radio"
//                             id="rdo9"
//                             className="radio-input"
//                             name="radio-group2"
//                           />
//                           <label for="rdo9" className="radio-label">
//                             <span className="radio-border"></span> Other
//                           </label>
//                         </div>

//                         <div className="fiurhetit_tag_input mb-4">
//                           <label for="" className="form-label">
//                             Your Skill *
//                           </label>

//                           <input
//                             name="tags"
//                             className="form-control"
//                             placeholder="Eg., Business Analyst, Data Scientist..."
//                             autofocus
//                           />
//                         </div>

//                         <div className="mb-4">
//                           <label for="" className="form-label">
//                             About Yourself *
//                           </label>

//                           <textarea
//                             type="text"
//                             className="form-control"
//                             placeholder="Write something about yourself"
//                           ></textarea>
//                         </div>
//                       </div>

//                       <div className="d-flex justify-content-between pt-3">
//                         <button
//                           type="button"
//                           className="btn dgheuih_btn_prev btn-main"
//                           onclick="prevStep()"
//                         >
//                           Previous
//                         </button>

//                         <button
//                           type="button"
//                           className="btn dgheuih_btn_next btn-main"
//                           onclick="nextStep()"
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div>

//                     {/* <!-- Step 3 --> */}
//                     <div className="step" id="step3">
//                       <h4 className="text-center">
//                         <img
//                           src="images/icons8-account-96.webp"
//                           alt=""
//                           className="me-1"
//                         />
//                         Step 3: Confirmation
//                       </h4>

//                       <div className="ihduwfr_form_wrapper mt-3">
//                         <div className="oijfoie_image text-center">
//                           <img src="images/NAME.png" width="60%" alt="" />
//                         </div>

//                         <div className="form-check">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="exampleCheck1"
//                           />
//                           <label className="form-check-label" for="exampleCheck1">
//                             Creating your account and you accepting
//                             <a href="/terms-condition">Terms & Conditions</a>
//                           </label>
//                         </div>

//                         {/* <!--<button type="submit" className="btn btn-main py-3 mt-3">Create Account</button>--> */}

//                         <div className="digheirer text-center py-3">
//                           <h4 className="mb-0">
//                             <b>OR</b>
//                           </h4>
//                         </div>

//                         <div className="dieyhr_iuhfiderr mt-2">
//                           <div className="d-flex align-items-center">
//                             <div className="btn btn-main">
//                               <img
//                                 className="me-1"
//                                 src="images/facebooklog.webp"
//                                 alt=""
//                               />
//                               Facebook
//                             </div>

//                             <div className="btn btn-main">
//                               <img
//                                 className="me-1"
//                                 src="images/googlelog.webp"
//                                 alt=""
//                               />
//                               Google
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="d-flex justify-content-between pt-3">
//                         <button
//                           type="button"
//                           className="btn dgheuih_btn_prev btn-main"
//                           onclick="prevStep()"
//                         >
//                           Previous
//                         </button>

//                         <button
//                           type="submit"
//                           className="btn dgheuih_btn_next btn-main"
//                         >
//                           Create Account
//                         </button>
//                       </div>
//                     </div>
//                     {/* <!-- Step Institute fields --> */}
//                     {/* <!-- Additional input fields for Institute registration --> */}
//                     <div className="step" id="instituteInputFields">
//                       <h4 className="text-center">
//                         <img
//                           src="images/icons8-account-96.webp"
//                           alt=""
//                           className="me-1"
//                         />
//                         Registration For Institutions
//                       </h4>

//                       <div className="ihduwfr_form_wrapper mt-3">
//                         <div className="row">
//                           <div className="col-lg-12">
//                             <div className="mb-3">
//                               <label
//                                 for="exampleInputEmail1"
//                                 className="form-label"
//                               >
//                                 Name Of Institute
//                               </label>
//                               <input
//                                 type="email"
//                                 className="form-control"
//                                 id="exampleInputEmail1"
//                                 placeholder="Name Of Institute"
//                                 aria-describedby="emailHelp"
//                               />
//                             </div>
//                           </div>

//                           <div className="col-lg-12">
//                             <div className="mb-3">
//                               <label
//                                 for="exampleInputPassword1"
//                                 className="form-label"
//                               >
//                                 Contact Person
//                               </label>
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 id="exampleInputPassword1"
//                                 placeholder="Contact Person"
//                               />
//                             </div>
//                           </div>

//                           <div className="col-lg-12">
//                             <div className="mb-3">
//                               <label
//                                 for="exampleInputPassword1"
//                                 className="form-label"
//                               >
//                                 Email Id
//                               </label>
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 id="exampleInputPassword1"
//                                 placeholder="Email Id"
//                               />
//                             </div>
//                           </div>

//                           <div className="col-lg-12">
//                             <div className="mb-3">
//                               <label
//                                 for="exampleInputPassword1"
//                                 className="form-label"
//                               >
//                                 Membership Plan
//                               </label>
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 id="exampleInputPassword1"
//                                 placeholder="Membership Plan"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="d-flex justify-content-between pt-3">
//                         <button
//                           type="button"
//                           className="btn dgheuih_btn_prev btn-main"
//                           onclick="prevStep()"
//                         >
//                           Previous
//                         </button>

//                         <button
//                           type="submit"
//                           className="btn dgheuih_btn_next btn-main"
//                         >
//                           Create Account
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default MenteeRegistration;
