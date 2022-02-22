import React from 'react';
import {Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from "gatsby";

import GetDirections from '../elements/get-directions/get-directions.component';
import MainMenu from './menu.component';

import logo from '../../images/ely-exotics-logo.png';
import phone from '../../images/Icons/phone.svg'
import email from '../../images/Icons/email.svg'

const Footer = ({menu, menu2}) => {
  const { bgImage } = useStaticQuery(graphql`
  query {
    bgImage: file(relativePath: { eq: "home-hero.jpg" }) {
      childImageSharp {
        fluid(fit: CONTAIN, maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`);
  return (
    <div>
      <BackgroundImage 
        tag="footer"
        className="text-center md:text-left relative text-white-0"
        fluid={bgImage.childImageSharp.fluid}
      >
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between px-6 md:px-8 max-w-screen-2xl mx-auto py-10 py-16 lg:py-20 relative z-10">
          <div className="mb-5 md:mb-10 lg:mb-0 w-full lg:w-auto mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            <img className="mb-2 mx-auto lg:mx-0 lg:w-auto" src={logo} alt="Ely Exotics Logo" />
            <div className="mx-auto lg:mx-0 inline-block">
              <GetDirections helperBottom address="Sedgeway Business Park, Common Road,Witchford, Ely, CB6 2HY" />
            </div>
          </div> 
          <div className="mb-5 md:mb-0">
            <h4 className="text-2xl font-black italic heading-font leading-none mb-2">Address</h4>
            <p className="md:mb-0 text-sm leading-5">
              Sedgeway Business Park,<br/>
              Common Road,
              Witchford,<br/>
              Ely,
              CB6 2HY
          </p>
          </div>
          <div className="mb-5 md:mb-0">
            <h4 className="text-2xl font-black italic heading-font leading-none mb-2">Animals</h4>
            {menu2 && <MainMenu menu={menu2} />}
          </div>
          <div className="mb-5 md:mb-0">
            <h4 className="text-2xl font-black italic heading-font leading-none mb-2">Pages</h4>
            {menu && <MainMenu menu={menu} />}
          </div>
          <div className="w-full md:w-1/5">
            <div className="w-full lg:flex-1 flex flex-col">
              <h4 class="text-2xl font-black italic heading-font leading-none mb-2">Opening Hours</h4>
              <p class="font-black italic heading-font"><strong>Mon - Fri:</strong> 10am – 6pm</p>
              <p class="font-black italic heading-font mb-5"><strong>Sat - Sun:</strong> 10am – 4pm</p>
              <a className="hover:opacity-75 duration-300 hover:text-primary-default flex items-center justify-center md:justify-start font-black italic heading-font mb-2" href="tel:01353655794"><img className="mr-2" src={phone} alt="Phone" /> 01353 655 794</a>
              <a className="hover:opacity-75 duration-300 hover:text-primary-default flex items-center justify-center md:justify-start font-black italic heading-font" href="mailto:info@elyexotics.co.uk"><img className="mr-2"  src={email} alt="Email" /> info@elyexotics.co.uk</a>
            </div>
          </div>
        </div>
        <div className="inset-0 absolute bg-black-default opacity-75" />
      </BackgroundImage>
      <div className="bg-black-default text-center md:text-left">
        <div className="lg:flex flex-wrap justify-between text-xs max-w-screen-2xl mx-auto py-4 md:py-8 w-full px-6 md:px-8 text-white-0">
            <div className="mb-4 lg:mb-0 text-xs">
              © {new Date().getFullYear()} Ely Exotics all rights reserved <span className="text-xs px-2 hidden md:inline-block">|</span> <span className="text-xs block md:inline-block">Website by <a href="https://volley.digital" target="_blank" className="font-bold text-secondary-default text-xs">volley.digital</a></span>
            </div>
            <div className="text-xs">
              <Link className="text-xs duration-300 hover:text-primary-default" to="/privacy-policy">Privacy Policy</Link><span className="px-2 text-xs">|</span><Link className="text-xs  duration-300 hover:text-primary-default" to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer