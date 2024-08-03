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
import UpdateDonation from "./pages/users/Admin/UpdateDonation";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/donations")
      .then((res) => setDonations(res.data))
      .catch((error) => {
        console.log(error);
      });
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
          <Route path="admin">
            <Route index element={<Admin />} />
            <Route path="update/:id" element={<UpdateDonation />} />
            <Route
              path="donation/:id"
              element={<DonationPage donations={donations} />}
            />
          </Route>
          <Route path="clientuser" element={<ClientUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
