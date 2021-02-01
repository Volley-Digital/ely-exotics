import React from 'react';
import Img from 'gatsby-image';

import GradButton from '../../elements/button/gradbutton.component';

import './hero.style.scss';

const Hero = ({title, text, image, link}) => (
    <div className="home-hero__wrapper">
        <section className="home-hero max-w-screen-2xl mx-auto px-6 md:px-8 flex flex-wrap justify-between min-h-screen items-center pt-16">
            <div className="max-w-md mx-auto md:pr-12">
                {title &&<h1 className="inline-block mb-6 text-4xl sm:text-5xl font-semibold text-primary-default leading-tight" dangerouslySetInnerHTML={{__html: title}}/>}
                {text && <p className="leading-tight text-lg sm:text-2xl mb-8" dangerouslySetInnerHTML={{__html: text}} />}
                {link && <GradButton text={link.text} color="secondary" url={link.url} />}
            </div>
            <div className="hidden sm:block max-w-md bg-white lg:ml-12 rounded-3xl shadow-2xl w-full bg-white-default flex-1">
                {image && <Img
                alt="Man looking at a website"
                className="block w-full mx-auto px-5 lg:px-10 my-6 md:my-16 mb-0"
                imgStyle={{ objectFit: 'contain' }}
                fluid={image}
                />}
            </div>
        </section>
    </div>
);

export default Hero;