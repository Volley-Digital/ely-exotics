import React from 'react';
import { Link } from "gatsby";

const MainMenu = ({menu}) => {
    return (
        <nav className={`block`}>
            {menu && menu.map((link) => (
                <Link
                className={`block md:mt-0 duration-300 md:hover:text-primary-dark font-light text-sm`}
                key={link.text}
                to={link.url}
                activeClassName="font-bold text-white-default md:text-primary"
                >
                {link.text}
                </Link>
            ))}
        </nav>
    )
};

export default MainMenu;