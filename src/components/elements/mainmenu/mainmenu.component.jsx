import React, {useState} from 'react';
import { Link } from "gatsby";

import './mainmenu.style.scss'

const MainMenu = ({menu}) => {
    const [isExpanded, toggleExpansion] = useState(false);
    return (
        <div>
            <button
                className="items-center block px-3 py-2 text-white rounded md:hidden"
                onClick={() => toggleExpansion(!isExpanded)}
            >
                <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
            <nav
            className={`mainmenu ${
                isExpanded ? `mainmenu--out` : ``
            } md:block md:items-center w-full lg:w-auto text-sm p-12 md:p-0`}
            >
                <button
                    className="items-center block rounded md:hidden flex items-center font-light heading-font mb-8"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <svg
                    fill="#F7F6FA"
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    close
                </button>
                {menu && menu.map((link) => (
                    <Link
                    className="block mt-4 md:inline-block md:mt-0 md:ml-6 lg:ml-8 xl:ml-16 heading-font duration-300 md:hover:text-primary-dark"
                    key={link.text}
                    to={link.url}
                    activeClassName="font-semibold text-white-default md:text-primary-dark heading-font"
                    >
                    {link.text}
                    </Link>
                ))}
            </nav>
        </div>
    )
};

export default MainMenu;