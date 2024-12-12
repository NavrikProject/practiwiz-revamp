// Date: 11-11-24 Tushar
import React from "react";
import "../InternshipCss/SingleInternshipDetails.css";
import { useParams, useNavigate } from "react-router-dom";

const InternshipDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data remains the same as before (for the internship post list)
  const internship = {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp",
    location: "Delhi, India",
    stipend: "15000",
    duration: "6 months",
    perks: [
      "Certificate",
      "Letter of Recommendation",
      "Flexible Hours",
      "PPO Opportunity",
    ],
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    replyRate: "92%",
    status: "New",
    aboutRole: `We are looking for a passionate Frontend Developer Intern to join our dynamic team. You'll work on real-world projects, collaborate with experienced developers, and contribute to building innovative web applications.

    As an intern, you'll be involved in:
    • Developing new user-facing features using React.js
    • Building reusable components for future use
    • Optimizing applications for maximum speed and scalability
    • Collaborating with back-end developers and designers`,

    responsibilities: [
      "Write clean, maintainable code for web applications",
      "Implement responsive design and ensure cross-browser compatibility",
      "Participate in code reviews and contribute to team discussions",
      "Debug and fix issues in existing applications",
      "Document your code and development processes",
    ],

    requirements: [
      "Currently pursuing B.Tech/B.E. in Computer Science or related field",
      "Strong understanding of JavaScript, HTML, and CSS",
      "Basic knowledge of React.js and modern JavaScript libraries",
      "Good problem-solving skills and attention to detail",
      "Excellent communication and teamwork abilities",
    ],

    aboutCompany: `TechCorp is a leading software development company specializing in creating innovative web solutions. With over 500 employees worldwide, we're committed to delivering high-quality products while fostering a culture of learning and growth.

    Our tech stack includes the latest technologies, and we believe in mentoring fresh talent to become industry leaders.`,

    companyWebsite: "www.techcorp.com",
    companySize: "500+ employees",
    companyEmail: "careers@techcorp.com",
  };

  // Your JSON data
  const menteeData1 = {
    mentee_Twitter_link: null,
    mentee_aboutyouself:
      "Contributed to the frontend development of an education platform using React.js, focusing on building responsive and user-friendly interfaces.",
    mentee_email: "gaganv958@gmail.com",
    mentee_firstname: "Gagan",
    mentee_gender: "Male",
    mentee_instagram_link: null,
    mentee_language: [
      { value: "Bosnian", label: "Bosnian" },
      { value: "Bulgarian", label: "Bulgarian" },
      { value: "Catalan", label: "Catalan" },
      { value: "Cebuano", label: "Cebuano" },
    ],
    mentee_lastname: "Verma",
    mentee_linkedin_link: "https://www.linkedin.com/in/gagancodee/",
    mentee_phone_number: "911212121212",
    mentee_profile_photo:
      "https://practiwizstorage.blob.core.windows.net/practiwizcontainer/blue-circle-with-white-user_78370-4707.webp",
  };

  const menteeData2 = {
    education: [
      {
        collage_name: "Indira Gandhi Degree College",
        educationType: "college",
        mentee_courseName: "MCA",
        mentee_institute_End_Year: "2024",
        mentee_institute_Percentage: "80",
        mentee_institute_Start_Year: "2023",
        searchTerm: "",
      },
      {
        collage_name: "Abhinav Institute of Management & Technology",
        educationType: "college",
        mentee_courseName: "BCA",
        mentee_institute_End_Year: "2022",
        mentee_institute_Percentage: "61",
        mentee_institute_Start_Year: "2019",
        searchTerm: "",
      },
      {
        educationType: "school",
        schoolBoard: "CBSE",
        schoolClass: "12",
        schoolEndYear: "2019",
        schoolStartYear: "2018",
        school_Percentage: "64",
        school_name: "SGtb khalsa Boys School Dev nagar",
      },
    ],
    certificates: [
      {
        mentee_Certificate_Desc: "React js development project-based learning",
        mentee_Certificate_End_Year: "2024",
        mentee_Certificate_Name: "React js",
        mentee_Certificate_Start_Year: "2022",
        mentee_Certificate_level: "Intermediate",
      },
    ],
    workExperience: [
      {
        mentee_workexp_CompanyName: "Navrik Software Solution",
        mentee_workexp_Desc:
          "Contributed to the frontend development of an education platform using React.js, focusing on building responsive and user-friendly interfaces.",
        mentee_workexp_End_Year: "2029",
        mentee_workexp_Location: "New Delhi",
        mentee_workexp_Role: "Software Engineer",
        mentee_workexp_Start_Year: "2024",
      },
      {
        mentee_workexp_CompanyName: "Home Tutor",
        mentee_workexp_Desc: "I like to teach Maths & Science",
        mentee_workexp_End_Year: "2024",
        mentee_workexp_Location: "New Delhi",
        mentee_workexp_Role: "Maths and Science Tutor",
        mentee_workexp_Start_Year: "2019",
      },
    ],
    additionalDetails: [
      {
        additionalDec:
          "I built the academic project titled 'Quick Shop' for e-commerce, focusing on a responsive shopping experience.",
        additionalHeadline: "Project",
      },
      {
        additionalDec:
          "Worked on various academic and personal projects in web development.",
        additionalHeadline: "Personal Projects",
      },
    ],
    skills: [
      { value: "sql", label: "SQL" },
      { value: "html", label: "HTML" },
      { value: "javascript", label: "JavaScript" },
      { value: "php", label: "PHP" },
      { value: "ruby", label: "Ruby" },
    ],
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleGoToPersonalDetailsPage = () => {
    // Store the data in localStorage
    localStorage.setItem("menteeData1", JSON.stringify(menteeData1));
    localStorage.setItem("menteeData2", JSON.stringify(menteeData2));
    navigate("/showmenteepersonaldetails");
  };

  return (
    <div className="col-lg-10 ps-0">
      <div className="gtyfdgfgf">
        <div className="single-intern-container">
          <button onClick={handleBack} className="single-intern-back-btn">
            <i class="fa-solid fa-arrow-left"></i>
            {/* <ArrowLeft className="w-4 h-4" /> Back to Listings */}
          </button>

          <div className="single-intern-header">
            <div className="single-intern-header-content">
              <h1 className="single-intern-title">{internship.title}</h1>
              <div className="single-intern-company">
                {/* <Building2 className="w-4 h-4" /> */}
                <span>{internship.company}</span>
              </div>
              <div className="single-intern-meta">
                <div className="single-intern-meta-item">
                  {/* <MapPin className="w-4 h-4" /> */}
                  <span>{internship.location}</span>
                </div>
                <div className="single-intern-meta-item">
                  {/* <Clock className="w-4 h-4" /> */}
                  <span>{internship.duration}</span>
                </div>
                <div className="single-intern-meta-item">
                  {/* <Wallet className="w-4 h-4" /> */}
                  <span>₹{internship.stipend}/month</span>
                </div>
              </div>
            </div>
            <button
              className="single-intern-apply-btn"
              onClick={handleGoToPersonalDetailsPage}
            >
              Apply Now
            </button>
          </div>

          <div className="single-intern-content">
            <div className="single-intern-main">
              <section className="single-intern-section">
                <h2 className="single-intern-section-title">Skills Required</h2>
                <div className="single-intern-skills">
                  {internship.skills.map((skill, index) => (
                    <span key={index} className="single-intern-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
              <section className="single-intern-section">
                <h2 className="single-intern-section-title">About the Role</h2>
                <p className="single-intern-text">{internship.aboutRole}</p>
              </section>

              {/* <section className="single-intern-section">
            <h2 className="single-intern-section-title">
              Key Responsibilities
            </h2>
            <ul className="single-intern-list">
              {internship.responsibilities.map((resp, index) => (
                <li key={index} className="single-intern-list-item">
                  {resp}
                </li>
              ))}
            </ul>
          </section> */}

              <section className="single-intern-section">
                <h2 className="single-intern-section-title">Requirements</h2>
                <ul className="single-intern-list">
                  {internship.requirements.map((req, index) => (
                    <li key={index} className="single-intern-list-item">
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="single-intern-section">
                <h2 className="single-intern-section-title">
                  Perks & Benefits
                </h2>
                <div className="single-intern-perks">
                  {internship.perks.map((perk, index) => (
                    <span key={index} className="single-intern-perk-tag">
                      {perk}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <aside className="single-intern-sidebar">
              <h2 className="single-intern-section-title">
                About {internship.company}
              </h2>
              <p className="single-intern-text">{internship.aboutCompany}</p>

              <div className="single-intern-company-meta">
                <div className="single-intern-company-meta-item">
                  {/* <Globe className="w-4 h-4" /> */}
                  <span>{internship.companyWebsite}</span>
                </div>
                <div className="single-intern-company-meta-item">
                  {/* <Users className="w-4 h-4" /> */}
                  <span>{internship.companySize}</span>
                </div>
                <div className="single-intern-company-meta-item">
                  {/* <Mail className="w-4 h-4" /> */}
                  <span>{internship.companyEmail}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetail;
