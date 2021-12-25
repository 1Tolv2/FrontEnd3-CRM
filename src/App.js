import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreatePage from "./pages/UserCreatePage";
import StartPage from "./pages/StartPage";

const CustomerContext = createContext([]);
const UserContext = createContext([]);
function App() {
  const [customerList, setCustomerList] = useState(null);
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <CustomerContext.Provider value={{ customerList, setCustomerList }}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-user" element={<UserCreatePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/customer/:id" element={<CustomerDetailPage />} />
          </Routes>
        </CustomerContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { CustomerContext, UserContext };
