import React, {useEffect} from "react";
import {Link} from 'gatsby';
import throttle from 'underscore/modules/throttle.js'

import MobileMenu from './mobile-menu.component';
import MainMenu from './main-menu.component';

import logo from '../../images/Icons/ely-exotics-logo-text.svg';

import './header.style.scss'

const Header = ({menu, noOverlay}) => {

  let halfOfMenu = Math.floor(menu.length / 2);
  let menuFirstHalf = menu.slice(0, halfOfMenu);
  let menuSecondHalf = menu.slice(halfOfMenu, menu.length);
  useEffect(() => {

    const headerScroll = throttle(() => {
      // Detect scroll position
      let scrollPosition = Math.round(window.scrollY);

      // If we've scrolled 100px, add "sticky" class to the header
      if (scrollPosition > 150){
          document.querySelector('.header').classList.add('header--scrolled');
      }
      // If not, remove "sticky" class from header
      else {
          document.querySelector('.header').classList.remove('header--scrolled');
      }
    
    }, 150)

    if (typeof window !== `undefined` || typeof document !== `undefined`) {
      window.addEventListener('scroll', headerScroll);
      document.addEventListener('DOMContentLoaded', headerScroll);
    }

  }, []);

  return (
    <header className="header duration-300 text-white-0 fixed z-50 flex justify-between items-center w-full px-6 py-4 md:px-8 md:py-6 bg-transparent">
      <div className="flex items-center justify-between md:w-full max-w-screen-3xl md:mx-auto">
        {menuFirstHalf && <MainMenu menu={menuFirstHalf} />}
        <Link className="mr-6 md:mr-0 flex-shrink" to="/">
          <div className="relative">
            <img className="header__logo duration-300 w-32" src={logo} alt="Ely Exotics Logo" />
            <svg className="header__icon absolute duration-300 opacity-0" width="155.966" height="146.803" viewBox="0 0 155.966 146.803">
              <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#fdc408"/>
                  <stop offset="0.478" stopColor="#fcc208"/>
                  <stop offset="0.65" stopColor="#fbbb0a"/>
                  <stop offset="0.773" stopColor="#f9af0c"/>
                  <stop offset="0.872" stopColor="#f59e11"/>
                  <stop offset="0.956" stopColor="#f18816"/>
                  <stop offset="1" stopColor="#ef7a1a"/>
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="0.546" y1="0.613" x2="0.535" y2="0.952" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#fcc308"/>
                  <stop offset="1" stopColor="#f08317"/>
                </linearGradient>
                <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#fff"/>
                  <stop offset="1" stopColor="#b0ddeb"/>
                </linearGradient>
                <linearGradient id="linear-gradient-5" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#fff"/>
                  <stop offset="1" stopColor="#fff"/>
                </linearGradient>
              </defs>
              <g id="eye-logo" transform="translate(-996.491 -197.764)">
                <path id="Path_617" data-name="Path 617" d="M1042.9,342.8q-19.818-3.663-30.942-16.726-12.933-15.573-15.027-44.757-1.5-20.868,2.116-35.8t12.672-24.947q9.059-10.02,24.049-15.478t37.081-7.042a98.5,98.5,0,0,1,32.8,2.945q19.126,5.348,30.453,18.385,13.944,15.5,15.866,42.253,2.241,31.215-5.832,49.314a51.42,51.42,0,0,1-25.327,24.633q-14,6.5-39.533,8.336Q1057.16,345.643,1042.9,342.8Zm38.981-21.744q2.574-6.7,2.785-20.772.3-12.857-.513-24.209l-.582-8.1-.364-5.069q-.639-8.919-2.774-21.6-2.2-13.693-5.753-20.57-1.872-3.325-4.1-3.168-4.46.319-5.874,8.979a126.488,126.488,0,0,0-.5,21.426q-.026,8.149,1.21,25.376.829,11.555,1.975,19.009a141.188,141.188,0,0,0,3.614,21.946q2.778,10.392,7.242,10.073Q1080.678,324.2,1081.881,321.053Z"/>
                <path id="Path_618" data-name="Path 618" d="M1045.373,335.109q-18.266-3.377-28.518-15.416-11.92-14.352-13.85-41.25-1.38-19.234,1.95-33a51.718,51.718,0,0,1,11.68-22.993q8.349-9.234,22.165-14.265t34.175-6.49a90.787,90.787,0,0,1,30.234,2.714q17.628,4.928,28.068,16.945,12.852,14.286,14.623,38.943,2.064,28.769-5.376,45.45a47.384,47.384,0,0,1-23.342,22.7q-12.9,5.992-36.436,7.682Q1058.516,337.732,1045.373,335.109Zm35.927-20.041q2.371-6.174,2.567-19.144.279-11.85-.473-22.313l-.536-7.468-.335-4.672q-.591-8.22-2.557-19.907-2.032-12.621-5.3-18.959-1.727-3.064-3.778-2.919-4.11.294-5.414,8.275a116.623,116.623,0,0,0-.461,19.748q-.024,7.511,1.115,23.388.765,10.65,1.821,17.52a130.07,130.07,0,0,0,3.33,20.226q2.561,9.578,6.675,9.285Q1080.191,317.967,1081.3,315.068Z" fill="#0b421f"/>
                <path id="Path_623" data-name="Path 623" d="M1048.179,327.027q-15.732-2.908-24.562-13.277-10.268-12.361-11.929-35.528-1.188-16.566,1.68-28.419a44.54,44.54,0,0,1,10.059-19.8q7.191-7.953,19.09-12.286t29.435-5.59a78.226,78.226,0,0,1,26.04,2.337q15.183,4.245,24.174,14.595,11.069,12.3,12.594,33.541,1.779,24.778-4.63,39.145a40.811,40.811,0,0,1-20.1,19.554q-11.112,5.161-31.382,6.617Q1059.5,329.286,1048.179,327.027Zm30.943-17.261q2.043-5.317,2.211-16.488.24-10.206-.407-19.218l-.462-6.432-.289-4.024q-.508-7.08-2.2-17.145-1.75-10.87-4.567-16.329-1.486-2.64-3.253-2.514-3.54.254-4.663,7.127a100.525,100.525,0,0,0-.4,17.008q-.02,6.469.961,20.144.658,9.173,1.568,15.089a111.994,111.994,0,0,0,2.869,17.421q2.2,8.248,5.748,8Q1078.169,312.263,1079.122,309.766Z" stroke="rgba(0,0,0,0)" strokeWidth="1" fill="url(#linear-gradient)"/>
                <ellipse id="Ellipse_12" data-name="Ellipse 12" cx="62" cy="55" rx="62" ry="55" transform="translate(1011.491 218.764)" fill="url(#linear-gradient-2)"/>
                <path id="Path_619" data-name="Path 619" d="M1048.179,327.027q-15.732-2.908-24.562-13.277-10.268-12.361-11.929-35.528-1.188-16.566,1.68-28.419a44.54,44.54,0,0,1,10.059-19.8q7.191-7.953,19.09-12.286t29.435-5.59a78.226,78.226,0,0,1,26.04,2.337q15.183,4.245,24.174,14.595,11.069,12.3,12.594,33.541,1.779,24.778-4.63,39.145a40.811,40.811,0,0,1-20.1,19.554q-11.112,5.161-31.382,6.617Q1059.5,329.286,1048.179,327.027Zm30.943-17.261q2.043-5.317,2.211-16.488.24-10.206-.407-19.218l-.462-6.432-.289-4.024q-.508-7.08-2.2-17.145-1.75-10.87-4.567-16.329-1.486-2.64-3.253-2.514-3.54.254-4.663,7.127a100.525,100.525,0,0,0-.4,17.008q-.02,6.469.961,20.144.658,9.173,1.568,15.089a111.994,111.994,0,0,0,2.869,17.421q2.2,8.248,5.748,8Q1078.169,312.263,1079.122,309.766Z" fill="url(#linear-gradient)"/>
                <g className="header__eye" id="Group_1421" data-name="Group 1421">
                  <path id="Path_620" data-name="Path 620" d="M1084.185,313.333q5.742-6.081,7.327-18.429a97.288,97.288,0,0,0,.956-21.169l-.506-7.053-.317-4.411a89.659,89.659,0,0,0-3.818-18.7q-3.318-11.817-9.908-17.55a11.207,11.207,0,0,0-8.005-2.438q-9.019.646-12.586,8.35-3.367,10.522-2.773,18.815-.722,7.142.354,22.134a92.371,92.371,0,0,0,2.419,16.493q.6,8.291,5.482,18.931,4.746,8.877,13.775,8.23A11.068,11.068,0,0,0,1084.185,313.333Z" fill="url(#linear-gradient-4)"/>
                  <path id="Path_621" data-name="Path 621" d="M1075.377,317.428c-5.74,0-10.213-2.929-13.311-8.721-3.308-7.2-5.178-13.667-5.579-19.268a92.252,92.252,0,0,1-2.42-16.491c-.717-10-.835-17.494-.351-22.283-.4-5.462.541-11.9,2.809-18.986,2.535-5.509,7.007-8.48,13.328-8.933a12.126,12.126,0,0,1,8.587,2.616c4.531,3.942,7.952,9.984,10.2,17.986a90.813,90.813,0,0,1,3.846,18.862l.823,11.464a98.553,98.553,0,0,1-.963,21.353c-1.074,8.359-3.613,14.716-7.546,18.884h0a11.93,11.93,0,0,1-8.155,3.471Q1076,317.427,1075.377,317.428Zm-4.512-93.032c-.293,0-.59.012-.892.033-5.741.41-9.627,2.982-11.879,7.861a49.832,49.832,0,0,0-2.7,18.4c-.476,4.837-.358,12.235.352,22.136a92.024,92.024,0,0,0,2.4,16.337q.618,8.332,5.433,18.8c3,5.6,7.236,8.187,12.948,7.741a10.32,10.32,0,0,0,7.046-2.944h0c3.684-3.9,6.074-9.944,7.1-17.958a96.9,96.9,0,0,0,.953-21l-.822-11.464a89.445,89.445,0,0,0-3.785-18.517c-2.162-7.691-5.409-13.459-9.655-17.155A10.186,10.186,0,0,0,1070.865,224.4Z" fill="url(#linear-gradient-5)"/>
                </g>
                <path className="header__eye" id="Path_622" data-name="Path 622" d="M1080.464,267.628l-.289-4.024c-.263-3.67-.773-7.958-1.514-12.831a4.754,4.754,0,0,1-1.583.3c-3.211,0-5.813-3.216-5.813-7.183,0-3.481,2.005-6.382,4.665-7.04a36.223,36.223,0,0,0-2.524-6.724q-1.485-2.64-3.253-2.515-3.54.255-4.663,7.128a100.525,100.525,0,0,0-.4,17.008q-.02,6.469.961,20.144.658,9.173,1.568,15.089a111.994,111.994,0,0,0,2.869,17.421q2.2,8.248,5.748,8,1.93-.138,2.884-2.635,2.043-5.317,2.211-16.488.24-10.206-.407-19.218Z" fill="#0a0a07"/>
              </g>
            </svg>
          </div>
        </Link>
        {menuSecondHalf && <MainMenu right shop menu={menuSecondHalf} />}
      </div>
      {menu && <MobileMenu menu={menu} />}
    </header>
  );
}

export default Header;
