import "./App.css";
// import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import DonationPage from "./pages/DonationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/users/Admin/Admin";
import ClientUser from "./pages/users/ClientUser/ClientUser";
import { useState, useEffect } from "react";

function App() {
  // const [User, setUser] = useState([{}]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/donations")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home donations={donations} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/donations"
          element={<Donations donations={donations} />}
        />
        <Route
          path="/donation/:id"
          element={<DonationPage donations={donations} />}
        />
        <Route path="/users">
          <Route path="admin" element={<Admin donations={donations} />} />
          <Route path="clientuser" element={<ClientUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
