import React from "react";
import { Link } from "gatsby";

import MainMenu from '../elements/mainmenu/mainmenu.component';
import Button from '../elements/button/button.component';
import GradButton from '../elements/button/gradbutton.component';

import logoIcon from '../../images/Website/logo-icon.svg'

const Header = ({menu, noOverlay}) => {
  return (
    <header className="relative z-first">
      <div className="flex items-center justify-between max-w-screen-2xl px-6 py-4 mx-auto md:px-8 md:py-6">
        <div className="flex items-center">
          <div className="mr-2 lg:mr-0 xl:mr-8">
            <Link className="" to="/">
              <img src={logoIcon} className="mb-0" alt="Volley Digital" />
            </Link>
          </div>
          <MainMenu menu={menu} />
        </div>
        {!noOverlay ? <Button url="/contact" color="white" text="contact" /> : <GradButton url="/contact" color="secondary" text="contant" />}
      </div>
    </header>
  );
}

export default Header;
