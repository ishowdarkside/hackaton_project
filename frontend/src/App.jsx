import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import "./styles/App.scss";
import HomeContextProvider from "./context/HomeContext";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeContextProvider>
            <Home />
          </HomeContextProvider>
        }
      />
    </Routes>
  );
}

export default App;
