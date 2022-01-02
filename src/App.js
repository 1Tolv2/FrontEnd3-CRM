import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreatePage from "./pages/UserCreatePage";
import StartPage from "./pages/StartPage";
import ModeSwitch from "./components/ModeSwitch";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
height: 100%;
margin: 0;
font-family: "calibri";
background-color: ${(props) => (props.isDarkMode ? "#212121" : "#ebebeb")};
color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "black")};
transition: background-color 0.4s;
};
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}
.delete {
  background-color: ${(props) => (props.isDarkMode ? "white" : "#ff3300")};
}
h3 {
  padding: 0 20px;
}
`;
const DarkThemeContext = createContext([]);
const CustomerContext = createContext([]);
const UserContext = createContext([]);
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [customerList, setCustomerList] = useState(null);
  const [user, setUser] = useState(null);
  return (
    <>
      <DarkThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
        <GlobalStyle isDarkMode={isDarkMode} />
        <ModeSwitch />
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
      </DarkThemeContext.Provider>
    </>
  );
}

export default App;
export { CustomerContext, UserContext, DarkThemeContext };
