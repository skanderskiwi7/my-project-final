import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/SignUp";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import AddCar from "./pages/addCar/AddCar";
import NavBar from "./components/Navbar/Navbar";

// import SearchBar from "./SearchBar";

function App() {
  return (
    <div>
      <NavBar />

      {/* // search={handleSearch} */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
