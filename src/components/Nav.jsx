import { useState } from 'react';

import NavLink from './NavLink';

import logo from '../assets/images/logo.svg';
import closeIcon from '../assets/images/icon-close.svg';
import menuIcon from '../assets/images/icon-hamburger.svg';

const Nav = () => {

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <div className="w-full flex items-center justify-between z-10 overflow-x-hidden md:pt-[4%]">
            <div className="flex items-center justify-center w-[45%] xs:w-[30%] sm:w-[25%] md:w-[25%] lg:w-[18%]">
                <img
                    src={logo}
                    alt="loop studios logo"
                    className="w-full"
                />
            </div>
            <div
                className="flex items-center justify-center w-6 cursor-pointer md:hidden"
                onClick={() => toggleNav()}
            >
                <img
                    src={menuIcon}
                    alt="menu icon used for opening the mobile navigation"
                    className="w-full"
                />
            </div>
            <div className={`
                w-[100%] h-[100vh]  xs:w-[65%] sm:w-[50%]
                flex flex-col items-start justify-start p-6 bg-black  
                fixed top-0 right-0
                transition ease-in-out duration-400 z-50
                md:relative md:h-auto md:flex-row  md:items-center md:justify-center  md:bg-transparent md:w-auto
                ${showNav ? "translate-x-0" : "translate-x-full"} md:translate-x-0
            `}>

                <div className="w-full flex items-center justify-between mb-32 md:hidden">
                    <div className="flex items-center justify-center w-[45%]">
                        <img
                            src={logo}
                            alt="loop studios logo"
                            className="w-full"
                        />
                    </div>
                    <div
                        className="flex items-center justify-center w-5 cursor-pointer"
                        onClick={() => toggleNav()}
                    >
                        <img
                            src={closeIcon}
                            alt="icon for closing the mobile navigation"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-start justify-center md:flex-row md:items-center md:justify-cente">
                    <NavLink text="About" />
                    <NavLink text="Careers" />
                    <NavLink text="Events" />
                    <NavLink text="Products" />
                    <NavLink text="Support" />
                </div>
            </div>
        </div>
    );
}

export default Nav;