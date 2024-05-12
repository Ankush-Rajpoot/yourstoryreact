import React, { useEffect } from "react";
import "./App.css";
import BodyBackground from "./components/BodyBackground";
import NavigationBar from "./components/NavigationBar";
import Categories from "./components/Categories";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <BodyBackground/> */}
      <Routes>
        <Route path="/" element={<NavigationBar />}></Route>
        {/* <Route index element={<BodyBackground />}></Route> */}
        <Route path="/categories" element={<Categories />}></Route>
      </Routes>
    </>
  );
}

export default App;
