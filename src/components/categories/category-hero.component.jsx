import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import Socials from '../elements/socials/socials.compomemt';
import PrimaryButton from '../elements/buttons/primary-button.component';

import phoneIcon from '../../images/Icons/phone-white.svg'

const Hero = ({title, text, image, showSocial, phone, colour = "272D3D", pdf}) => {
    return (
        <BackgroundImage
            tag="section"
            className={`relative z-10 text-white-0 flex items-center justify-start`}
            fluid={image}
            style={{backgroundPosition: '60% center'}}
            
        >   
            <div className={`pb-24 md:pb-48 pt-40 md:pt-64 max-w-screen-2xl mx-auto w-full px-6 md:px-8 relative z-10`}>
                {title && <h1 className={`max-w-4xl leading-none text-3xl sm:text-4xl lg:text-5xl font-black italic text-white-default mb-5`}>{title}</h1>}   
                {text && <p className="font-light md:text-base block max-w-xl" dangerouslySetInnerHTML={{__html: text}} />}
                {pdf && <a href={pdf} target="_blank" className="mt-5 duration-300 transform hover:-translate-y-2 text-center bg-gradient-to-b from-primary-light to-primary-dark heading-font font-black text-center px-6 py-2 text-lg md:text-xl inline-block">
                  View stock list
                </a>}
            </div>
            {showSocial && <div className="z-10 w-full max-w-screen-2xl mx-auto bottom-4 absolute px-6 md:px-8 py-4 hidden md:block">
                <Socials instagram="https://www.instagram.com/elyexotics/?hl=en" facebook="https://www.facebook.com/Ely-Exotics-107393574639300/"/>
            </div>
            }
            {phone && <div style={{backgroundColor: `#${colour}`}} className="hero__phone hovericon z-10 right-0 bottom-0 absolute px-6 md:px-8 py-2 md:py-4 flex items-center">
                <a className="text-lg font-black heading-font italic text-white-0" href={`tel:${phone}`} >{phone}</a>
                <img className="hero__phoneicon hovericon__icon flex-grow-0 ml-4" src={phoneIcon} alt="Phone Us" />
            </div>
            }
            <div className="inset-0 absolute bg-black-default opacity-50" />
        </BackgroundImage>
    );
}

export default Hero;