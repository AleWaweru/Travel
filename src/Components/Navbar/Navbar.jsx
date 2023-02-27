import React from 'react';
import './navbar.css';
import { useState } from 'react';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

const Navbar = () => {

    const [active, setActive] = useState('navBar')

    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    const removeNav = () => {
        setActive('navBar')
    }

    return(
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href='#' className='logo flex'>
                        <h1>< MdOutlineTravelExplore className="icon"/>Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navlists flex'>
                        <li className='navItem'>
                            <a href='#' className='navlink-active'>Home</a>
                            
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navlink'>Packages</a>
                            
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navlink'>Shop</a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navlink'>About</a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navlink'>Pages</a>
                        </li>
                        <li className='navItem'>
                            <a href='#' className='navlink'>News</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navlink'>Contact</a>
                        </li>

                        <button className='btn'>
                            <a href='#'>BOOK NOW</a>
                        </button>

                    </ul>
                    <div onClick={removeNav} className='closeNavbar'>
                            <AiFillCloseCircle className='icon'/>

                        </div>

                </div>
                <div onClick={showNav} className='toggleNavbar'>
                    <TbGridDots className='icon'/>

                </div>

            </header>

        </section>
    )
}
export default Navbar;



