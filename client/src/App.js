import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import DonationPage from "./pages/DonationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/users/Admin/Admin";
import ClientUser from "./pages/users/ClientUser/ClientUser";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    // setData(data);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/donation/:id" element={<DonationPage />} />
        <Route path="/users">
          <Route path="admin" element={<Admin />} />
          <Route path="clientuser" element={<ClientUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
