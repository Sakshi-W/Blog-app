    
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from ".src/components/Profile/Profile";
import SocialCards from "./components/SocialCards/SocialCards";
import { getToken } from "./helpers";
import SignIn from ".src/pages/SignIn/SignIn";
import SignUp from ".src/pages/SignUp/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SocialCards />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/profile"
        element={getToken() ? <Profile /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
};

export default AppRoutes;