import React, { useEffect, useState } from 'react'
import "./style.css";
import logo from "logo.svg"

export default function Nav() {
    const [show , setShow] = useState(false);

    const transitionNavBar = () => {
        if ( window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect (() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'>
                <img src={logo} alt="logo" className="nav__logo"/>

                <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="logo" className="nav__avatar"/>
            </div>
        </div>
    )
}
