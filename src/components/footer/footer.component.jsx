import React from 'react';
import {Link} from 'gatsby';

import logo from '../../images/Website/logo.svg'

const Footer = ({menu}) => (
    <footer className="bg-white-100">
      <div className="md:flex justify-between items-center max-w-screen-2xl px-6 py-10 mx-auto text-sm md:p-8 text-center ">
       <img src={logo} className="mb-4 md:mb-0 mx-auto md:mx-0" alt="Volley Digital" />
       <nav className={`md:block md:items-center w-full md:w-auto text-sm mb-4 md:mb-0`} >
            {menu && menu.map((link) => (
              <Link
                className="block md:inline-block px-0 md:px-2 xl:px-6 heading-font duration-300 hover:text-primary-dark"
                key={link.text}
                to={link.url}
                activeClassName="font-semibold text-primary-dark heading-font"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        <p>
         © All rights reserved
        </p>
      </div>
    </footer>
)

export default Footer