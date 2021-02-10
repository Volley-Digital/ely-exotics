import React, {useState} from 'react';
import { Link } from "gatsby";

import './mobile-menu.style.scss'

const MobileMenu = ({menu}) => {
    const [isExpanded, toggleExpansion] = useState(false);
    return (
        <div>
            <div
                className="items-center block px-3 py-2 text-white rounded md:hidden"
                onClick={() => toggleExpansion(!isExpanded)}
            >
                <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </div>
            <nav
            className={`mainmenu ${
                isExpanded ? `mainmenu--out` : ``
            } md:hidden md:items-center w-full lg:w-auto text-sm p-12 md:p-0`}
            >
                <div
                    className="items-center block rounded flex items-center font-light heading-font mb-8"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <svg
                    fill="#F7F6FA"
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    close
                </div>
                {menu && menu.map((link) => (
                    <Link
                    className="block mt-4 duration-300 md:hover:text-primary-dark flex flex-wrap items-center"
                    key={link.text}
                    to={link.url}
                    activeClassName="font-bold text-white-default md:text-primary"
                    >
                    {link.icon && <img className="w-3 mr-2" src={link.icon} alt={link.text} />}  {link.text}
                    </Link>
                ))}
            </nav>
        </div>
    )
};

export default MobileMenu;