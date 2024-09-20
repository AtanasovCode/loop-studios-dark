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
        <div className="w-full flex items-center justify-between p-6 z-10">
            <div className="flex items-center justify-center w-[45%]">
                <img
                    src={logo}
                    alt="loop studios logo"
                    className="w-full"
                />
            </div>
            <div
                className="flex items-center justify-center w-6 cursor-pointer"
                onClick={() => toggleNav()}
            >
                <img
                    src={menuIcon}
                    alt="menu icon used for opening the mobile navigation"
                    className="w-full"
                />
            </div>
            <div className={`
                w-[100%] h-[100vh] flex flex-col items-start justify-start p-6 bg-black absolute top-0 right-0
                transition ease-in-out duration-400 z-50
                ${showNav ? "translate-x-0" : "translate-x-[100%]"}
            `}>
                <div className="w-full flex items-center justify-between mb-32">
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
                <div className="w-full flex flex-col items-start justify-center">
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