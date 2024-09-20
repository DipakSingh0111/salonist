import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// File import
import Home from "./pages/home/Home";
import SalonDetail from "./pages/SalonDetail/SalonDetail";
import Footer from "./components/footer/Footer";
import MybeShowFooter from "./components/mybeShowFooter/MybeShowFooter";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
import Category from "./pages/category/Category";
import Booking from "./pages/booking/Booking";
import Profile from "./pages/setting/profile/Profile";
import Favourites from "./pages/setting/favourites/Favourites";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/booking/:domainName" element={<Booking />} />
          <Route path="/salons/:domainName" element={<SalonDetail />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>

        <MybeShowFooter>
          <Footer />
        </MybeShowFooter>
      </Router>
      <ToastContainer autoClose={4000} />
    </>
  );
};

export default App;
