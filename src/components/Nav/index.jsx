import React, { useEffect, useState } from 'react'
import "./style.css";
import logo from "logo.svg"
import { useCallback } from 'react';
import useSearch from 'hooks/useSearch';
import { useLocation } from 'wouter';

export default function Nav() {
    const [showNav, setshowNav] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [path, push] = useLocation();

    const handlerChange = (e) => {
        setKeyword(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        push(`/search/${keyword}`);
    }

    const transitionNavBar = useCallback(() => {
        if (window.scrollY > 100) {
            setshowNav(true);
        } else {
            setshowNav(false);
        }
    }, [setshowNav]);

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [transitionNavBar]);

    return (
        <div className={`nav ${showNav && "nav__black"}`}>
            <div className='nav__contents'>
                <img src={logo} alt="logo" className="nav__logo" />
                <div className='formHeader'>
                    <form onSubmit={handlerSubmit}>
                        <input type="search" name="search" id="search" placeholder="Buscar..." onChange={handlerChange} value={keyword} />
                    </form>
                    <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="logo" className="nav__avatar" />
                </div>
            </div>
        </div>
    )
}
