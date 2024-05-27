import React, { useEffect } from "react";
import "./App.css";
// import BodyBackground from "./components/BodyBackground";
// import NavigationBar from "./components/NavigationBar";
import Categories from "./components/CategoriesWrite";
import { Routes, Route } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import WriteStory from "./components/WriteStory";

function App() {
  return (
    <>
      {/* { <BodyBackground/>} */}
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        {/* <Route index element={<BodyBackground />}></Route> */}
        {/* <Route index element={<Categories open={true} handleCloseModalWrite={() => {}} />} /> */}
        <Route path="/writestory/:categoryId/:categoryName" element={<WriteStory />} />
      </Routes>
    </>
  );
}

export default App;
