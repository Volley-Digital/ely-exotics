import React from "react";

import Header from "./header/header.component";
import Footer from "./footer/footer.component";

import dropdown from '../images/Icons/dropdown.svg'
import info from '../images/Icons/info-icon.svg'

const Layout = ({ children }) => {

  const mainMenu = [
    {
      icon: dropdown,
      text: 'Animals',
      order: 'order-first',
      url: '#',
      sub: [
        {
          text: 'Amphibians',
          url: '/amphibians'
        },
        {
          text: 'Aquatics',
          url: '/aquatics'
        },
        {
          text: 'Invertebrates',
          url: '/invertebrates'
        },
        {
          text: 'Plant',
          url: '/plant'
        },
        {
          text: 'Reptiles',
          url: '/reptiles'
        }
      ]
    },
    {
      icon: info,
      text: 'Care Gudies',
      url: '/care-guides',
      order: 'order-first'
    },
    {
      text: 'Showcase',
      url: '/gallery',
      hidden: true
    },
    {
      text: 'About',
      url: '/about',
      hidden: true

    },
    {
      text: 'News',
      url: '/news'
    },
    {
      text: 'Contact',
      url: '/contact'
    },
    {
      text: 'Shop',
      url: 'https://shop.elyexotics.co.uk',
      order: 'order-first'
    },
  ]
  

  return (
    <div className="min-h-screen bg-white-default">
      <Header menu={mainMenu} />
      <main>
        {children}
      </main>
      <Footer menu={mainMenu} menu2={mainMenu[0].sub} />
    </div>
  );
}

export default Layout;
