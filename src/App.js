import LoginFormPage from "./Pages/FormPages/LoginPages/LoginFormPage";
import RegisterFormPage from "./Pages/FormPages/RegisterPages/RegisterFormPage";
import Homepage from "./Pages/LandingPage/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />{" "}
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/login" exact element={<LoginFormPage />} />
          <Route path="/register" exact element={<RegisterFormPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
