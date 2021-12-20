import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreatePage from "./pages/UserCreatePage";

function App() {
  return (
    <div>
      App.js
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-user" element={<UserCreatePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/customer/:id" element={<CustomerDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
