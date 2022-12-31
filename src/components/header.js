import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useSticky from "./utils";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header () {
    const { sticky, stickyRef } = useSticky();
    const [active, setActive] = useState(false);

    return(
        <>
            <header ref={stickyRef} className={`${active && "active"} ${sticky && "fixed-nav"}`}>
                <div className="head">
                    <Link to="/" className="logo">
                        <img src="/assets/ARTSY..svg" alt="logo" className="img-logo" />
                    </Link>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/home" className={({isActive})=> isActive ? "activeLink" : null}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/place" className={({isActive})=> isActive ? "activeLink" : null}>
                                    Marketplace
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/auctions" className={({isActive})=> isActive ? "activeLink" : null}>
                                    Auctions
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/drop" className={({isActive})=> isActive ? "activeLink" : null}>
                                    Drop
                                </NavLink>
                            </li>

                            <li>
                                <Link to="/place">
                                    <BiSearch className="search" />
                                </Link>
                            </li>

                            <li>
                                <HiOutlineShoppingCart />
                            </li>

                            <li>
                                <IoMdNotificationsOutline />
                            </li>
                        </ul>
                    </nav>

                    <div className="overlay"></div>
                    
                    <div className="hamburger-menu" onClick={()=>setActive(!active)}>
                        <div className="bar"></div>
                    </div>
                </div>
            </header>

            <div style={{
            height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
            }} />
        </>
    );

}

export default Header;