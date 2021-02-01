import React from 'react';
import Img from 'gatsby-image';

import Button from '../../elements/button/button.component';
import GradButton from '../../elements/button/gradbutton.component';
import BgEl from '../../elements/misc/bg-el.component';



const Banner = ({noMargin, title, text, image, link1, link2}) =>(
    <div className={`bg-gradient-to-b from-primary-light to-primary-dark ${!noMargin && 'mb-10 md:mb-20 lg:mb-28' } overflow-hidden relative`}>
        <BgEl classes="absolute -left-24 -top-24 select-none" type="rectangle" colour="#705CA4" opacity="opacity-50" />
        <BgEl classes="hidden md:block absolute left-24 bottom-24 select-none" type="circle" colour="#3F2E7F" />
        <section className="flex flex-wrap items-center max-w-screen-xl mx-auto py-10 md:py-12 px-6 md:px-8">
            <div className="relative z-10 w-full md:w-1/3 lg:w-1/2 md:pr-8 lg:pr-12">
                {image && <Img className="w-full h-64 rounded-3xl  mb-5 md:mb-0" alt={image.alt} fluid={image.src} />}
            </div>
            <div className="relative w-full md:w-2/3 lg:w-1/2 md:pl-8">
                <div className="max-w-sm relative z-10 text-center">
                    {title && <h2 className="text-3xl md:text-4xl text-white-default font-semibold mb-4">{title}</h2>}
                    {text && <p className="mb-5 text-white-200">{text}</p>}
                    <div className="flex flex-wrap items-center justify-center">
                        {link1 && <div className="pr-4 md:mb-0"><GradButton {...link1} /></div>}
                        {link2 && <Button {...link2} />}
                    </div>
                </div>
                <BgEl classes="absolute -top-8 -left-6 select-none" type="circle" colour="#705CA4" />
                <BgEl classes="absolute -right-64 md:-right-96 -top-64 md:-top-24 select-none" type="rectangle" colour="#705CA4" opacity="opacity-50" />
                <BgEl classes="absolute right-0 md:-right-24 -bottom-5 md:-bottom-10 select-none" type="circle" colour="#3F2E7F" />
            </div>
        </section>
    </div>
)

export default Banner;