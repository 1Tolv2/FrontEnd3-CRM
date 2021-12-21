import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreatePage from "./pages/UserCreatePage";

const CustomerContext = createContext([]);
const UserContext = createContext([]);
function App() {
  const [customerList, setCustomerList] = useState(null);
  const [user, setUser] = useState("");
  return (
    <div>
      App.js
      <UserContext.Provider value={{ user, setUser }}>
        <CustomerContext.Provider value={{ customerList, setCustomerList }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/create-user" element={<UserCreatePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/customer/:id" element={<CustomerDetailPage />} />
          </Routes>
        </CustomerContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
export { CustomerContext, UserContext };
