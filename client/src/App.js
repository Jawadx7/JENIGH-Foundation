import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Donations from "./pages/Donations";
import DonationPage from "./pages/DonationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donations" element={<Donations />} />
        {/* <Route path="/donations/${id}" element={<DonationPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
