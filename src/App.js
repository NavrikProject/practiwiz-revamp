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
import "./index.css";
import "./Styles/DashBoard.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollButton from "./Utils/ScrollToTop";
import PublicRoute from "./Utils/PublicRoute";
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
import SingleJobPage from "./Pages/JobPages/SingleJobPage";
import CoursePayment from "./Components/Courses/SingleCourse/CoursePayment";
import MentorPayment from "./Components/Mentor/AllMentors/SingleMentorProfile/MentorPayment";
import AllJobPage from "./Pages/JobPages/AllJobPage";
import InstituteDashboardPage from "./Pages/InstitutePages/Dashboard/InstituteDashboardPage";
import InstituteProfilePage from "./Pages/InstitutePages/Profile/InstituteProfilePage";
import MenteeProfilePage from "./Pages/MenteePages/MenteeProfilePage";
import PaymentCancPage from "./Pages/MiscPages/PaymentCancPage";
import MenteeRegistrationPage from "./Pages/FormPages/RegisterPages/MenteeRegistrationPage";
import ProtectedRoute from "./Utils/ProtectedRoutes";
import { useSelector } from "react-redux";
import Spinner from "./Utils/Spinner"; // Your spinner component
import Test from "./Pages/Test";
import MenteeFeedbackForm from "./Components/Mentee/MenteeFeedback/MenteeFeedbackForm";
import AdminDashboardPage from "./Pages/AdminPages/AdminDashboardPage";
import ForgotPasswordPage from "./Pages/FormPages/ForgotPasswordPages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/FormPages/ForgotPasswordPages/ResetPasswordPage";
import CaseStudyPage from "./Pages/CaseStudyPages/CaseStudyPage";
import SingleCaseStudyPage from "./Pages/CaseStudyPages/SingleCaseStudyPage";
import InstituteRegistrationPage from "./Pages/FormPages/RegisterPages/InstituteRegistrationPage";
import InternshipPages from "./Pages/InternshipPages/InternshipPages";
// import ReactDate from "./Components/Mentor/AllMentors/CustomDatepicker/MainComponent";

function App() {
  const user = useSelector((state) => state.user?.currentUser);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const token = localStorage.getItem("accessToken");

  return (
    <>
      {isLoading && <Spinner />}
      <ToastContainer position="top-center" />
      <Router>
        <Routes>
          <Route path="/image/test" element={<Test />} />
          <Route path="/" exact element={<Homepage />} />
          <Route path="/aboutus" exact element={<AboutusPage />} />
          <Route path="/contact" exact element={<ContactusPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/login"
            exact
            element={
              <PublicRoute>
                <LoginFormPage />
              </PublicRoute>
            }
          />
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
            path="/mentor-club/mentor-profile/:name/:id"
            element={<SingleMentorProfilePage />}
          />
          <Route path="/test" element={<Test />} />
          <Route path="/date" element={<MenteeFeedbackForm />} />
          {/* passing of the user and token to dashboard is completed */}
          {user?.user_type === "mentor" && (
            <Route
              path="/mentor/dashboard"
              element={
                <ProtectedRoute>
                  <MentorDashboardPage user={user} token={token} />
                </ProtectedRoute>
              }
            />
          )}
          {/* Mentor Links ends */}
          <Route
            path="/courses/single-course/:id"
            element={<SingleCoursePage />}
          />
          {user?.user_type === "mentee" && (
            <Route
              path="/mentee/dashboard"
              element={
                <ProtectedRoute>
                  <MenteeDashboardPage user={user} token={token} />
                </ProtectedRoute>
              }
            />
          )}
          {user?.user_role === 1 && (
            <Route
              path="/user/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboardPage user={user} token={token} />
                </ProtectedRoute>
              }
            />
          )}
          <Route
            path="/mentee/view-profile/:id"
            element={
              <ProtectedRoute>
                <MenteeProfilePage user={user} token={token} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentee-registration"
            element={<MenteeRegistrationPage />}
          />
          <Route
            path="/institute-registration"
            element={<InstituteRegistrationPage />}
          />
          <Route path="/test1" element={<CoursePayment />} />
          {/* Jobs links start */}
          <Route path="/jobs" element={<AllJobPage />} />
          <Route path="/jobs/view-job/:id" element={<SingleJobPage />} />
          {/* Jobs links ends */}
          {/* Institute links start */}
          <Route
            path="/institute/view-profile/:id"
            element={<InstituteProfilePage />}
          />
          {/* {user?.user_type === "institute" && ( */}
          <Route
            path="/institute/dashboard"
            element={<InstituteDashboardPage user={user} token={token} />}
          />
          {/* )} */}
          {/* Institute links ends */}
          <Route path="/payment-error" element={<PaymentCancPage />} />
          <Route path="/internships" element={<InternshipPages />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/user/activate/reset-password/:token"
            element={<ResetPasswordPage />}
          />
          <Route
            path="/case-studies"
            element={<CaseStudyPage user={user} token={token} />}
          />
          <Route
            path="/case-studies/view-case-study/:topic/:id"
            element={<SingleCaseStudyPage user={user} token={token} />}
          />
        </Routes>
      </Router>
      <ScrollButton />
    </>
  );
}

export default App;
