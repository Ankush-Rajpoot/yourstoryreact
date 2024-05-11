import React from 'react'
//importing gsap library 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

//importing the images
import logo from  'C:/Users/Lenovo/OneDrive/Desktop/c++/.vscode/yourstory/yourstoryimages/logo.png'
import logo1 from  'C:/Users/Lenovo/OneDrive/Desktop/c++/.vscode/yourstory/yourstoryimages/logo1.png'

function NavigationBar() {
    useGSAP(() => {
        var tl=gsap.timeline();
        tl.from(".logo",{
            opacity:0,
            y:-30,
            duration:1,
            delay:2,
        })
        tl.from("nav ul li button",{
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
                <button id='AboutUs'>About</button>
            </li>
            <li>
                <button id='Write'>Write</button>
            </li>
            <li>
                <button id='Read'>Read</button>
            </li>
            <li>
            <button id='Login/SignUp'>Login/SignUp</button>
            </li>
            <li className="profile">
                
            </li>
            </ul>
        </nav>
        </div>
        </>
    )
}

export default NavigationBar
