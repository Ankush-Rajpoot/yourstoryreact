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
import StoryPage from "./components/StoryPage";
import ReadStory from "./components/ReadStory";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <>
      
      <UserContextProvider>
        {/* { <BodyBackground/>} */}
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          {/* <Route index element={<AboutUs />}></Route> */}

          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/register" element={<LoginSignUp />}></Route>
          <Route path="/userDetails" element={<UserDetails />}></Route>
          <Route path="/readStory" element={<ReadStory />}></Route>
          <Route path="/story/:id" element={<StoryPage />}></Route>
          <Route path="/writeStory" element={<WriteStory />}></Route>
          {/* <Route index element={<Categories open={true} handleCloseModalWrite={() => {}} />} /> */}
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
