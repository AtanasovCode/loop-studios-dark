import { useState } from 'react';

import logo from '../assets/images/logo.svg';
import iconClose from '../assets/images/icon-close.svg';
import menuIcon from '../assets/images/icon-hamburger.svg';

const Nav = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className="w-full flex items-center justify-between p-6 z-10">
            <div className="flex items-center justify-center w-[45%]">
                <img 
                    src={logo}
                    alt="loop studios logo"
                    className="w-full"
                />
            </div>
            <div className="flex items-center justify-center w-6 cursor-pointer">
                <img 
                    src={menuIcon}
                    alt="menu icon used for opening the mobile navigation"
                    className="w-full"
                />
            </div>
            <div className={`
                w-[30%] h-full flex flex-col items-start justify-start p-6 bg-black absolute top-0 left-0
                ${showNav ? "translate-x-0" : "-translate-x-[100%]"}
            `}>

                </div>
        </div>
    );
}

export default Nav;