import React from 'react';

import BgEl from '../misc/bg-el.component';

const TitleBanner = ({title, subTitle, colour}) => (
    <div className={`bg-gradient-to-b from-${colour}-light to-${colour}-dark mb-10 md:mb-20 lg:mb-28 relative overflow-hidden`}>
        <section className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <header className="max-w-xl py-12 md:py-20 relative z-10">
                {subTitle && <p className="text-white-200 leading-tight text-lg sm:text-2xl relative z-10" dangerouslySetInnerHTML={{__html: subTitle}} />}
                {title &&<h1 className="text-white-default inline-block mb-4 text-4xl sm:text-5xl font-semibold leading-tight relative z-10" dangerouslySetInnerHTML={{__html: title}}/>}
                <BgEl classes="absolute top-8 md:top-16 -left-12 select-none" type="circle" colour="#705CA4" />
            </header>
            <BgEl classes="hidden md:block absolute -right-48 top-8 select-none" type="rectangle" colour="#705CA4" opacity="opacity-50" />
            <BgEl classes="absolute right-24 md:right-64 md:bottom-12 select-none" type="circle" colour="#3F2E7F" />
            <BgEl classes="hidden lg:block absolute -left-32 transform scale-75 -bottom-16 select-none" type="rectangle" colour="#3F2E7F" opacity="opacity-50" />
            <BgEl classes="hidden 2xl:block absolute right-0 md:left-8 md:top-4 transform scale-90 select-none" type="circle" colour="#705CA4" />
        </section>
    </div>
);

export default TitleBanner;