import React, { useEffect } from 'react';
import './App.css'
// import BodyBackground from './components/BodyBackground';
import NavigationBar from './components/NavigationBar';
import Categories from './components/Categories';


function App(){
  return (
    <>
    {/* <BodyBackground/> */}
    <NavigationBar />
    <Categories/>
    </>
  );
}

export default App;