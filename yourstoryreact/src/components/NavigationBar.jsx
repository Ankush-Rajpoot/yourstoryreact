import React, { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CategoriesWrite from "./CategoriesWrite"; // Updated import
import CategoriesRead from "./CategoriesRead"; // Updated import
import { Link } from "react-router-dom";
import AuthModal from "./LoginSignUp";

// import logo from "../assets/yourstoryimages/logo.png";
import logo1 from "../assets/yourstoryimages/logo1.png";
import { UserContext } from "./UserContext";
const NavigationBar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo.username);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const [modalIsOpenWrite, setModalIsOpenWrite] = useState(false);
  const [modalIsOpenRead, setModalIsOpenRead] = useState(false);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuthOpen = () => setIsAuthModalOpen(true);
  const handleAuthClose = () => setIsAuthModalOpen(false);

  const handleOpenModalWrite = () => {
    setModalIsOpenWrite(true);
  };
  const handleCloseModalWrite = () => {
    setModalIsOpenWrite(false);
  };
  const handleOpenModalRead = () => {
    setModalIsOpenRead(true);
  };
  const handleCloseModalRead = () => {
    setModalIsOpenRead(false);
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

  const username = userInfo?.username;

  return (
    <>
      <div id="logo-container">
        <img src={logo1} alt="Logo" />
      </div>
      <div className="navContent" id="content">
        <nav>
          <div className="logo">
            <img src={logo1} alt="YourStory Logo" />
          </div>
          <ul>
            <li>
              <button id="AboutUs">About</button>
            </li>
            <li>
              <button id="Write" onClick={handleOpenModalWrite}>
                Write
              </button>
            </li>
            <li>
              <button id="Read" onClick={handleOpenModalRead}>
                Read
              </button>
            </li>
            {username && (
              <>
                <button id="Profile">
                  <Link to="/userDetails">Profile</Link>
                </button>
                <button id="Logout" onClick={logout}>
                  Logout
                </button>
              </>
            )}
            {!username && (
              <>
                <li>
                  <button id="Login/SignUp" onClick={handleAuthOpen}>
                    Login/SignUp
                  </button>
                  <AuthModal
                    open={isAuthModalOpen}
                    handleClose={handleAuthClose}
                  />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <CategoriesWrite
        open={modalIsOpenWrite}
        handleCloseModalWrite={handleCloseModalWrite}
      />{" "}
      {/* Updated usage */}
      <CategoriesRead
        open={modalIsOpenRead}
        handleCloseModalRead={handleCloseModalRead}
      />{" "}
      {/* Updated usage */}
    </>
  );
};

export default NavigationBar;
