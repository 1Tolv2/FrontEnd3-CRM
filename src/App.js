import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreatePage from "./pages/UserCreatePage";
import StartPage from "./pages/StartPage";
import ModeSwitch from "./components/ModeSwitch";
import tokens from "./components/Tokens";

const { lightTheme, darkTheme } = tokens;

const GlobalStyle = createGlobalStyle`
body {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
margin: 0;
height: 100%;
padding: 10px 10px;
font-family: "calibri";
background-color: ${(props) =>
  props.isDarkMode ? darkTheme.darkGrey1 : lightTheme.lightGrey};
color: ${(props) =>
  props.isDarkMode ? darkTheme.lightGrey : lightTheme.black};
transition: background-color 0.4s;
@media (max-width: 1200px) {
padding: 0;
}
};
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
label {
  margin: 5px 5px;
}
a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}
h3 {
  padding: 0 20px;
}
hr {
  border: solid 0.1px ${(props) =>
    props.isDarkMode ? darkTheme.darkGrey1 : lightTheme.darkGrey2};
}
.delete {
  background-color: ${(props) =>
    props.isDarkMode ? darkTheme.white : lightTheme.red};
}
.graph {
  display: block;
  width: 50%;
  margin: auto;
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
