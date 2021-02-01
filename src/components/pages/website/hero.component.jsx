import React from 'react';
import Img from "gatsby-image";

import BgEl from '../../elements/misc/bg-el.component';

import './hero.style.scss';

const Hero = ({title, text, image}) => (
    <div className="about-hero mb-4 md:mb-10 lg:mb-12 relative">
        <section className="max-w-screen-2xl mx-auto px-6 md:px-8 text-center">
            <header className="max-w-xl mx-auto pt-12 md:pt-24 pb-4 relative z-10">
                {title &&<h1 className="text-white-default inline-block mb-5 text-4xl sm:text-5xl font-semibold leading-tight relative z-10" dangerouslySetInnerHTML={{__html: title}}/>}
                {text && <p className="text-white-200 leading-tight text-lg sm:text-2xl max-w-sm mx-auto relative z-10" dangerouslySetInnerHTML={{__html: text}} />}
                <BgEl classes="absolute top-32 md:top-20 -left-16 md:-left-2 select-none" type="circle" colour="#705CA4" />

            </header>
            {image && <Img className="max-w-4xl mx-auto relative z-10" fluid={image} />}
            <BgEl classes="hidden md:block absolute -right-32 top-16 select-none" type="rectangle" colour="#705CA4" opacity="opacity-50" />
            <BgEl classes="absolute right-0 md:right-32 top-56 md:top-96 select-none" type="circle" colour="#3F2E7F" />
            <BgEl classes="hidden md:block absolute -left-32 transform scale-110 top-48 select-none" type="rectangle" colour="#3F2E7F" opacity="opacity-50" />
            <BgEl classes="absolute right-0 top-8 md:-left-8 md:top-8 transform scale-150 select-none" type="circle" colour="#705CA4" />
        </section>
    </div>
);

export default Hero;