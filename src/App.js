import LoginFormPage from "./Pages/FormPages/LoginPages/LoginFormPage";
import RegisterFormPage from "./Pages/FormPages/RegisterPages/RegisterFormPage";
import Homepage from "./Pages/HomePages/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./Styles/custombs.css";
import "./Styles/responsive.css";
import "./Styles/style.css";
import AboutusPage from "./Pages/MiscPages/AboutusPage";
import ContactusPage from "./Pages/MiscPages/ContactusPage";
import AllCoursePage from "./Pages/CoursePages/AllCoursePage";
import SingleCoursePage from "./Pages/CoursePages/SingleCoursePage";
import MentorDashboardPage from "./Pages/MentorPages/Dashboard/MentorDashboardPage";
import MenteeDashboardPage from "./Pages/MenteePages/Dashboard/MenteeDashboardPage";
import AllMentorsPage from "./Pages/MentorPages/AllMentors/AllMentorsPage";
import BusinessMentorsPage from "./Pages/MentorPages/AllMentors/BusinessMentorsPage";
import TechnologyMentorsPage from "./Pages/MentorPages/AllMentors/TechnologyMentorsPage";
import SingleMentorProfilePage from "./Pages/MentorPages/AllMentors/SingleMentorProfilePages/SingleMentorProfilePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/aboutus" exact element={<AboutusPage />} />
          <Route path="/contact" exact element={<ContactusPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/login" exact element={<LoginFormPage />} />
          <Route path="/register" exact element={<RegisterFormPage />} />
          <Route path="/courses" exact element={<AllCoursePage />} />
          {/* Mentor Links starts */}
          <Route path="/mentor-club" element={<AllMentorsPage />} />
          <Route
            path="/mentor-club/business-mentors"
            element={<BusinessMentorsPage />}
          />
          <Route
            path="/mentor-club/technology-mentors"
            element={<TechnologyMentorsPage />}
          />
          <Route path="/mentor-club" element={<AllMentorsPage />} />
          <Route
            path="/mentor-club/mentor-profile/:id"
            element={<SingleMentorProfilePage />}
          />
          <Route path="/mentor/dashboard" element={<MentorDashboardPage />} />
          {/* Mentor Links ends */}
          <Route
            path="/courses/single-course/:id"
            element={<SingleCoursePage />}
          />
          <Route path="/mentee/dashboard" element={<MenteeDashboardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
