import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./styles/App.scss";
import HomeContextProvider from "./context/HomeContext";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";
import Protect from "./components/Protect/Protect";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomeContextProvider>
              <Home />
            </HomeContextProvider>
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
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
