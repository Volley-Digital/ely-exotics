import React, {useEffect, useState} from 'react';
import { Link } from "gatsby";

import './mobile-menu.style.scss'

const MobileMenu = ({menu}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  useEffect(() => {
    const parentEls = Array.from(document.querySelectorAll('.mobile-parent'));
    if (parentEls) {
      parentEls.forEach(el => {
        el.addEventListener('click', () => {
          if(el.querySelector('.mobile-sub')) el.querySelector('.mobile-sub').classList.toggle('hidden')
        })
      })
    }
  }, [])

    return (
        <div className="flex items-center md:hidden">
          <a className="mr-4" href="https://shop.elyexotics.co.uk/my-account/">
            <svg xmlns="http://www.w3.org/2000/svg" width="15.998" height="19.032" viewBox="0 0 15.998 19.032">
              <g id="account" transform="translate(-20.625)">
                <circle id="Ellipse_13" data-name="Ellipse 13" cx="4.413" cy="4.413" r="4.413" transform="translate(24.211)" fill="#fff"></circle>
                <path id="Path_625" data-name="Path 625" d="M28.624,150a8,8,0,0,0-8,8h16A8,8,0,0,0,28.624,150Z" transform="translate(0 -138.967)" fill="#fff"></path>
              </g>
            </svg>
          </a>
          <a href="https://shop.elyexotics.co.uk/cart/" className="mr-2 relative menu__cart-button cursor-pointer">
            <span className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="23.998" height="21.572" viewBox="0 0 23.998 21.572">
                <path id="shopping-cart" d="M11.592,127.669A1.993,1.993,0,1,1,9.6,125.676,1.993,1.993,0,0,1,11.592,127.669Zm6.077-1.993a1.993,1.993,0,1,0,1.993,1.993A1.993,1.993,0,0,0,17.669,125.676Zm6.186-9.356L21.4,123.609a1.316,1.316,0,0,1-1.237,1.082H7.782c-1.234,0-1.286-1.356-1.286-1.356s-1.316-9.762-1.381-10.352-.819-1.027-.819-1.027l-3.245-1.516c-1.777-.929-.969-2.7,0-2.291,4.115,1.941,6.026,2.9,6.149,3.661s.341,2.611.341,2.611v.012l.043-.012H22.751C24.582,114.422,23.855,116.323,23.855,116.32Zm-3.547,4.059H8.277l.247,1.962h11.2Zm1.169-3.956H7.781l.264,2.1H20.857Z" transform="translate(0 -108.09)" fill="#fff"></path>
              </svg>
            </span>
          </a>
            <div
                className="items-center px-3 py-2 text-white rounded"
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
            } md:hidden md:items-center w-full lg:w-auto text-sm p-12 md:p-0 flex flex-col`}
            >
                <div
                    className="items-center block rounded flex items-center font-light heading-font mb-4 order-first"
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
                {menu && menu.map((link, i) => (
                    <Link
                    className={`${link.order} mobile-parent block mt-4 duration-300 md:hover:text-primary-dark flex flex-wrap items-center`}
                    key={link.text}
                    to={link.url}
                    activeClassName="font-bold text-white-default md:text-primary"
                    >
                    {link.icon && <img className="w-3 mr-2" src={link.icon} alt={link.text} />}  {link.text}
                      {link.sub && <div className="mobile-sub pt-4 hidden duration-300 w-full">
                          {link.sub.map(link => (
                              <Link
                              className={`md:mt-0 duration-300 md:hover:opacity-50 font-light text-sm flex flex-wrap items-center mb-2 pb-1 border-b border-solid`}
                              key={link.text}
                              to={link.url}
                              activeClassName="font-regular text-white-default md:text-white-default heading-font"
                              >
                                  {link.icon && <img className="w-3 mr-2" src={link.icon} alt={link.text} />} {link.text}
                              </Link>
                          ))}
                      </div>}
                    </Link>
                ))}
            </nav>
        </div>
    )
};

export default MobileMenu;