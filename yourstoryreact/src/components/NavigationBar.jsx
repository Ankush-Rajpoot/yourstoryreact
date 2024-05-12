import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Categories from "./Categories";

import logo from "../yourstoryimages/logo.png";
import logo1 from "../yourstoryimages/logo1.png";

const NavigationBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".logo", {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 2,
    });
    tl.from("nav ul li button", {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.1,
      stagger: 0.3,
    });
  });

  return (
    <>
      <div id="logo-container">
        <img src={logo1} alt="Logo" />
      </div>
      <div id="content">
        <nav>
          <div className="logo">
            <img src={logo} alt="YourStory Logo" />
          </div>
          <ul>
            <li>
              <button id="AboutUs">About</button>
            </li>
            <li>
              <button id="Write" onClick={handleOpenModal}>
                Write
              </button>
            </li>
            <li>
              <button id="Read" onClick={handleOpenModal}>
                Read
              </button>
            </li>
            <li>
              <button id="Login/SignUp">Login/SignUp</button>
            </li>
            <li className="profile"></li>
          </ul>
        </nav>
      </div>
      <Categories open={modalIsOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default NavigationBar;
