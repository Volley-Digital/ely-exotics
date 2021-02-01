import React from 'react';

import Button from '../../elements/button/button.component';
import GradButton from '../../elements/button/gradbutton.component';
import BgEl from '../../elements/misc/bg-el.component';

import vlogo from '../../../images/Website/icons/v-icon-white.svg'

const Banner = ({title, text, link1, link2}) =>  (
    <div className="bg-gradient-to-b from-primary-light to-primary-dark mb-10 md:mb-20 lg:mb-28 overflow-hidden">
        <section className="flex flex-wrap items-center lg:items-start max-w-screen-2xl mx-auto py-10 md:py-20 xl:py-28">
            <div className="relative z-10 w-full md:w-1/3 lg:w-1/2">
                <img className="select-none pl-4 md:pl-0 w-32 md:w-auto lg:absolute left-0 -top-20 mb-3 md:mb-0 -mt-1" alt="Volley Icon" src={vlogo} />
            </div>
            <div className="relative w-full md:w-2/3 lg:w-1/2 px-6 md:px-8">
                <div className="max-w-md relative z-10">
                    {title && <h2 className="text-3xl md:text-4xl text-white-default font-semibold mb-4">{title}</h2>}
                    {text && <p className="mb-5 text-white-200">{text}</p>}
                    <div className="flex flex-wrap items-center">
                        {link1 && <div className="pr-4 md:mb-0"><GradButton {...link1} /></div>}
                        {link2 && <Button {...link2} />}
                    </div>
                </div>
                <BgEl classes="absolute -top-8 -left-6 select-none" type="circle" colour="#705CA4" />
                <BgEl classes="absolute -right-72 -top-24 select-none" type="rectangle" colour="#705CA4" opacity="opacity-50" />
                <BgEl classes="absolute right-0 -bottom-10 select-none" type="circle" colour="#3F2E7F" />
            </div>
        </section>
    </div>
);

export default Banner;