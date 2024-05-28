import React, { useEffect } from "react";
import "./App.css";
// import BodyBackground from "./components/BodyBackground";
// import NavigationBar from "./components/NavigationBar";
import Categories from "./components/CategoriesWrite";
import { Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import SignUp from "./components/SignUp";
import LoginSignUp from "./components/LoginSignUp";

// import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import WriteStory from "./components/WriteStory";
import UserDetails from "./components/UserDetails";
import { UserContextProvider } from "./components/UserContext";

function App() {
  return (
    <>
      {/* { <BodyBackground/>} */}
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          {/* <Route index element={<BodyBackground />}></Route> */}

          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/register" element={<LoginSignUp />}></Route>
          <Route path="/userDetails" element={<UserDetails />}></Route>
          {/* <Route path="/SignUpPage" element={<SignUp />}></Route>  */}

          {/* <Route index element={<Categories open={true} handleCloseModalWrite={() => {}} />} /> */}
          <Route
            path="/writestory/:categoryId/:categoryName"
            element={<WriteStory />}
          />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
