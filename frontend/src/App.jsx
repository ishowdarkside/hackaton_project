import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import "./styles/App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
