import React, { useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CategoriesWrite from './CategoriesWrite'; // Updated import
import CategoriesRead from './CategoriesRead'; // Updated import

import logo from  '../yourstoryimages/logo.png';
import logo1 from  '../yourstoryimages/logo1.png';

const NavigationBar = () => {
    const [modalIsOpenWrite, setModalIsOpenWrite] = useState(false);
    const [modalIsOpenRead, setModalIsOpenRead] = useState(false);

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
        var tl=gsap.timeline();
        tl.from(".logo",{
            opacity:0,
            y:-30,
            duration:1,
            delay:2,
        });
        tl.from("nav ul li button",{
            opacity:0,
            y:-30,
            duration:1,
            delay:0.1,
            stagger:0.3,
        });
    });

    return (
        <>
            <div id="logo-container">
                <img src={logo1} alt="Logo" />
            </div>
            <div className='navContent' id='content'>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="YourStory Logo" />
                    </div>
                    <ul>
                        <li>
                            <button id="AboutUs">About</button>
                        </li>
                        <li>
                            <button id='Write' onClick={handleOpenModalWrite}>Write</button>
                        </li>
                        <li>
                            <button id='Read' onClick={handleOpenModalRead}>Read</button>
                        </li>
                        <li>
                            <button id="Login/SignUp">Login/SignUp</button>
                        </li>
                        <li className="profile"></li>
                    </ul>
                </nav>
            </div>
            <CategoriesWrite open={modalIsOpenWrite} handleCloseModalWrite={handleCloseModalWrite} /> {/* Updated usage */}
            <CategoriesRead open={modalIsOpenRead} handleCloseModalRead={handleCloseModalRead} /> {/* Updated usage */}
        </>
    );
};

export default NavigationBar;
