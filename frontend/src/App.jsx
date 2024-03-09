import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./styles/App.scss";
import OnboardingContext from "./context/OnboardingContext";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";
import Protect from "./components/Protect/Protect";
<<<<<<< HEAD
import Course from "./pages/Course/Course";
=======
import Score from "./pages/Score/Score";
>>>>>>> 23ce09ba6237896e595b5631fb59f19fcdc2acb9

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <OnboardingContext>
              <Home />
            </OnboardingContext>
          }
        />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Protect>
              <Dashboard />
            </Protect>
          }
        />
<<<<<<< HEAD
        <Route path="/course/:courseName" element={<Course />} />
=======

        <Route
          path="/score"
          element={
            <Protect>
              <Score />
            </Protect>
          }
        />
>>>>>>> 23ce09ba6237896e595b5631fb59f19fcdc2acb9
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
