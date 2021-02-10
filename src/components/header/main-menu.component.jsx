import React from 'react';
import { Link } from "gatsby";

import './main-menu.style.scss'

const MainMenu = ({menu, right}) => {

    let menuItemClasses = right ? 'md:ml-4 lg:ml-8 xl:ml-16' : 'md:mr-4 lg:mr-8 xl:mr-16'
    let menuClasses = right ? 'justify-end' : 'justify-start'

    return (
        <nav className={`${menuClasses} hidden md:flex md:flex-wrap md:items-center z-10 relative`}>
            {menu && menu.map((link) => (
                <Link
                className={`menu__parent ${menuItemClasses} md:mt-0 duration-300 md:hover:text-primary-dark font-bold text-sm flex flex-wrap items-center relative`}
                key={link.text}
                to={link.url}
                activeClassName="font-black text-white-default md:text-primary-default heading-font"
                >
                    {link.icon && <img className="w-3 mr-2" src={link.icon} alt={link.text} />} {link.text}
                    {link.sub && <div className="menu__childlist absolute left-0 p-4 opacity-0 duration-300 bg-primary-default">
                        {link.sub.map(link => (
                            <Link
                            className={`menu__child ${menuItemClasses} md:mt-0 duration-300 md:hover:opacity-50 font-bold text-sm flex flex-wrap items-center mb-2 text-base`}
                            key={link.text}
                            to={link.url}
                            activeClassName="font-black text-white-default md:text-white-default heading-font"
                            >
                                {link.icon && <img className="w-3 mr-2" src={link.icon} alt={link.text} />} {link.text}
                            </Link>
                        ))}
                    </div>}
                </Link>
            ))}
        </nav>
    )
};

export default MainMenu;