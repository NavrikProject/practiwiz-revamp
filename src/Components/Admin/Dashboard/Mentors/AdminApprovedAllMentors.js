import React, { useEffect, useState } from "react";
import "./InstituteguestlctSearch.css";
import { Link } from "react-router-dom";
import ListStatusSkeleton from "../SkeltonLoaders/ListStatusSkeleton";
import axios from "axios";
import { ApiURL } from "../../../../Utils/ApiURL";
import { toast } from "react-toastify";
import "./MentorList.css";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../../Redux/loadingRedux";
import { useDispatch } from "react-redux";
const AdminApprovedAllMentors = () => {
  const token = localStorage.getItem("accessToken");
  const [filters, setFilters] = useState({
    location: "",
    skill: "",
    institute: "",
    qualification: "",
    areaOfMentorship: "",
    experience: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  const [allMentors, setAllMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = ApiURL();
  useEffect(() => {
    const fetchMentors = async () => {
      setLoading(true);
      const response = await axios.get(
        `${url}api/v1/admin/dashboard/mentors/approved/all-list`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      setLoading(false);
      if (response.data.success) {
        return setAllMentors(response.data.success), setLoading(false);
      }
      if (response.data.error) {
        return (
          setAllMentors([]), setLoading(false), toast.error(response.data.error)
        );
      }
    };
    fetchMentors();
  }, [url, token]);

  useEffect(() => {
    const filterMentors = () => {
      let filtered = allMentors;
      if (filters.location) {
        filtered = filtered.filter(
          (mentor) => mentor.mentor_country === filters.location
        );
      }
      if (filters.skill) {
        filtered = filtered.filter((mentor) =>
          JSON.parse(mentor.expertise_list).some(
            (expertise) => expertise.mentor_expertise === filters.skill
          )
        );
      }
      if (filters.institute) {
        filtered = filtered.filter(
          (mentor) => mentor.institute === filters.institute
        );
      }
      if (filters.qualification) {
        filtered = filtered.filter(
          (mentor) => mentor.qualification === filters.qualification
        );
      }
      if (filters.areaOfMentorship) {
        filtered = filtered.filter(
          (mentor) => mentor.area_of_mentorship === filters.areaOfMentorship
        );
      }
      if (filters.experience) {
        filtered = filtered.filter(
          (mentor) => mentor.experience === filters.experience
        );
      }

      setFilteredMentors(filtered);
    };

    filterMentors();
  }, [filters, allMentors]);
  const [setAppliedFilters] = useState(filters);

  const handleApplyFilter = () => {
    setAppliedFilters(filters);
  };
  const dispatch = useDispatch();

  const MentorDisApproveHandler = async (id, email, mentorName, userId) => {
    dispatch(showLoadingHandler());
    const response = await axios.post(
      `${url}api/v1/admin/dashboard/mentors/update/not-approve`,
      {
        mentorDtlsId: id,
        mentorEmail: email,
        mentorName: mentorName,
        userId: userId,
      },
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    setLoading(false);
    dispatch(hideLoadingHandler());
    if (response.data.success) {
      return (
        toast.success("Mentor disapproved successfully"),
        setLoading(false),
        dispatch(hideLoadingHandler())
      );
    }
    if (response.data.error) {
      return (
        toast.error("There is some error while approving the mentor"),
        setLoading(false),
        dispatch(hideLoadingHandler())
      );
    }
  };
  return (
    <div className="col-lg-10 ps-0">
      <div className="mentor_dash_msge">
        <div>
          <div className="containerOfGueste">
            <div className="containerOfFilter">
              <label htmlFor="location">
                <h6 className="inline">Location</h6>
                <select name="location" id="location" onChange={handleChange}>
                  <option value="">Select Location</option>
                  <option value="India">India</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="haryana">Haryana</option>
                  <option value="grugram">Grugram</option>
                </select>
              </label>
              <label htmlFor="skill">
                <h6 className="inline">Skill</h6>
                <select name="skill" id="skill" onChange={handleChange}>
                  <option value="">Select skill</option>
                  <option value="AI">AI</option>
                  <option value="Agile">Agile</option>
                  <option value="Cloud">Cloud</option>
                  <option value="webDevloper">Web Devloper</option>
                  <option value="frontendDevloper">Frontend Devloper</option>
                  <option value="backendDevloper">Backend Devloper</option>
                </select>
              </label>
              <label htmlFor="institute">
                <h6 className="inline">Institute</h6>
                <select name="institute" id="institute" onChange={handleChange}>
                  <option value="">Select Institute</option>
                  <option value="du">DU</option>
                  <option value="jnu">JNU</option>
                </select>
              </label>
              <label htmlFor="qualification">
                <h6 className="inline">Qualification</h6>
                <select
                  name="qualification"
                  id="qualification"
                  onChange={handleChange}
                >
                  <option value="">Select Qualification</option>
                  <option value="graduate">Graduate</option>
                  <option value="post-graduate">Post-Graduate</option>
                </select>
              </label>
              <label htmlFor="areaOfMentorship">
                <h6 className="inline">Area Of Mentorship</h6>
                <select
                  name="areaOfMentorship"
                  id="areaOfMentorship"
                  onChange={handleChange}
                >
                  <option value="">Select Area Of Mentorship</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="haryana">Haryana</option>
                  <option value="grugram">Grugram</option>
                </select>
              </label>
              <label htmlFor="experience">
                <h6 className="inline">Experience</h6>
                <select
                  name="experience"
                  id="experience"
                  onChange={handleChange}
                >
                  <option value="">Select Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="10">10 Years</option>
                  <option value="20">20 Years</option>
                </select>
              </label>
              <div></div>
              <button onClick={handleApplyFilter}>Apply Filter</button>
            </div>
            <div className="containerOfCard">
              <div className="table-container">
                <table className="mentor-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Skill</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Profile</th>
                      <th>Button</th>
                      <th>Approval Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading && (
                      <>
                        <ListStatusSkeleton columns={8} />
                      </>
                    )}
                    {allMentors?.length === 0 ? (
                      <h1>No mentor found</h1>
                    ) : (
                      filteredMentors?.map((mentor) => (
                        <tr key={mentor.id}>
                          <td style={{ textTransform: "capitalize" }}>
                            {mentor.user_firstname + " " + mentor.user_lastname}
                          </td>
                          <td>{mentor.mentor_country}</td>
                          <td>
                            {JSON.parse(mentor.expertise_list).map(
                              (passion, index, array) => {
                                return (
                                  <span key={index}>
                                    {passion.mentor_expertise}
                                    {index < array.length - 1 && ", "}
                                  </span>
                                );
                              }
                            )}
                          </td>
                          <td>{mentor.mentor_email}</td>
                          <td>{"+" + mentor.mentor_phone_number}</td>
                          <td>
                            <button className="profile-button">
                              <Link
                                to={`/mentor-club/mentor-profile/${
                                  mentor.user_firstname +
                                  "-" +
                                  mentor.user_lastname
                                    .replace(" ", "-")
                                    .toLowerCase()
                                }/${mentor.user_dtls_id}`}
                              >
                                Profiles
                              </Link>
                            </button>
                          </td>
                          <td>
                            <button
                              className="disapprove-button"
                              onClick={() => {
                                MentorDisApproveHandler(
                                  mentor.mentor_dtls_id,
                                  mentor.mentor_email,
                                  mentor.user_firstname +
                                    " " +
                                    mentor.user_lastname,
                                  mentor.user_dtls_id
                                );
                              }}
                            >
                              Disapprove
                            </button>
                          </td>
                          <td>
                            <i
                              className="fa-solid fa-circle-check fa-lg"
                              style={{ color: "#4cee49" }}
                            ></i>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminApprovedAllMentors;
