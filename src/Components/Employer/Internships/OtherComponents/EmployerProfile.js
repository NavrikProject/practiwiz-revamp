import React from "react";
import "../InternshipCss/EmployerProfile.css";

const EmployerProfile = () => {
  const employerData = {
    name: "Tushar Khanagwal",
    position: "HR Manager",
    email: "john.smith@company.com",
    phone: "+1 (555) 123-4567",
    company: {
      name: "Tech Innovations Inc.",
      industry: "Information Technology",
      website: "www.techinnovations.com",
      size: "500-1000 employees",
      location: "New Delhi, India",
      about:
        "Leading technology solutions provider specializing in enterprise software development and digital transformation. We help businesses to innovate and grow by leveraging cutting-edge technologies and industry best practices. Our team of experts is dedicated to delivering high-quality solutions that drive business growth and improve operational efficiency.",
      address: "123 Innovation Drive, San Francisco, CA 94105",
    },
    totalPostings: 12,
    activeListing: 5,
    hired: 3,
  };

  return (
    <div className="emp-profile">
      {/* Profile Header Section */}
      <div className="emp-profile_header">
        <div className="emp-profile_header-content">
          <div className="emp-profile_avatar">TK</div>
          <h1 className="emp-profile_name mb-0">{employerData.name}</h1>
          <p className="emp-profile_position mb-5">
            {`${employerData.position} AT ${employerData.company.name}`}
          </p>
        </div>
      </div>

      {/* Information Cards */}
      <div className="emp-profile_main">
        <div className="emp-profile_info-grid">
          {/* Company Information */}
          <div className="emp-profile_card">
            <h2 className="emp-profile_card-title">
              {employerData.company.name}
            </h2>
            <div className="emp-profile_card-content">
              <div className="emp-profile_about">
                <h3 className="emp-profile_subtitle">About Company</h3>
                <p>{employerData.company.about}</p>
              </div>
              <div className="emp-profile_detail">
                <i className="fas fa-building"></i>
                <span>{employerData.company.name}</span>
              </div>
              <div className="emp-profile_detail">
                <i className="fas fa-globe"></i>
                <span>{employerData.company.website}</span>
              </div>
              <div className="emp-profile_detail">
                <i className="fas fa-users"></i>
                <span>{employerData.company.size}</span>
              </div>
              <div className="emp-profile_detail">
                <i className="fas fa-map-marker-alt"></i>
                <span>{employerData.company.address}</span>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="emp-profile_card">
            <h2 className="emp-profile_card-title">Personal Information</h2>
            <div className="emp-profile_card-content">
              <div className="emp-profile_detail">
                <i className="fas fa-envelope"></i>
                <span>{employerData.email}</span>
              </div>
              <div className="emp-profile_detail">
                <i className="fas fa-phone"></i>
                <span>{employerData.phone}</span>
              </div>
              <div className="emp-profile_detail">
                <i className="fas fa-briefcase"></i>
                <span>{employerData.position}</span>
              </div>
              <div className="emp-profile_detail">
                <i className="fas fa-map-marker-alt"></i>
                <span>{employerData.company.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="emp-profile_stats_section">
          <h2 className="emp-profile_card-title">Quick Stats</h2>
          <div className="emp-profile_stats">
            <div className="emp-profile_stat-card">
              <p className="emp-profile_stat-number">
                {employerData.totalPostings}
              </p>
              <p className="emp-profile_stat-label">Total Postings</p>
            </div>
            <div className="emp-profile_stat-card">
              <p className="emp-profile_stat-number">
                {employerData.activeListing}
              </p>
              <p className="emp-profile_stat-label">Active Listing</p>
            </div>
            <div className="emp-profile_stat-card">
              <p className="emp-profile_stat-number">{employerData.hired}</p>
              <p className="emp-profile_stat-label">Hired</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;
