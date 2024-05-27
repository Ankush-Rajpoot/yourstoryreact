import React, { useEffect } from "react";
import "./App.css";
import BodyBackground from "./components/BodyBackground";
import NavigationBar from "./components/NavigationBar";
import Categories from "./components/CategoriesWrite";
// import AboutUs from "./components/AboutUs";
import { Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import SignUp from "./components/SignUp";
import LoginSignUp from "./components/LoginSignUp";

function App() {
  return (
    <>
      {/* { <BodyBackground/>} */}
      <Routes>
        <Route path="/" element={<NavigationBar />}></Route>
        {/* <Route index element={<BodyBackground />}></Route> */}
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/register" element={<LoginSignUp />}></Route>
        {/* <Route path="/SignUpPage" element={<SignUp />}></Route>  */}
      </Routes>

      {/* <AboutUs/> */}
    </>
  );
}

export default App;
