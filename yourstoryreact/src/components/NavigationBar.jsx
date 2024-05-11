import React from 'react'
//importing gsap library 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

//importing the images
import logo from  'C:/Users/Lenovo/OneDrive/Desktop/c++/.vscode/yourstory/yourstoryimages/logo.png'
import logo1 from  'C:/Users/Lenovo/OneDrive/Desktop/c++/.vscode/yourstory/yourstoryimages/logo1.png'

function NavigationBar() {
    window.onload = function() {
        // Hide the logo after a certain delay (e.g., 2 seconds) and display the content
        setTimeout(function() {
          document.getElementById('logo-container').style.display = 'none';
          document.getElementById('content').style.display = 'block';
        }, 1000); // Adjust delay as needed (in milliseconds)
    };

    useGSAP(() => {
        var tl=gsap.timeline();
        tl.from(".logo",{
            opacity:0,
            y:-30,
            duration:1,
            delay:2,
        })
        tl.from("nav ul li",{
            opacity:0,
            y:-30,
            duration:1,
            delay:0.1,
            stagger:0.3,
        })
    });
   
    return (
        <>
        <div id="logo-container">
            <img src={logo1} alt="Logo" />
        </div>
        <div id='content'>
        <nav>
            <div className="logo">
            <img src={logo} alt="YourStory Logo" />
            </div>
            <ul>
            <li>
                <a href="about.html">About</a>
            </li>
            <li>
                <a href="write.html">Write</a>
            </li>
            <li>
                <a href="read.html">Read</a>
            </li>
            <li>
                <a href="login.html">Login</a>
            </li>
            <li>
                <a href="signup.html">Sign Up</a>
            </li>
            <li className="profile">
                <a href="profile.html">Profile</a>
            </li>
            </ul>
        </nav>
        </div>
        </>
    )
}

export default NavigationBar
