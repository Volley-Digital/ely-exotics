import React from 'react';

import Benefit from './benefit.component';

const BenefitsListings = ({title, text, benefits}) =>  (
    <div className="py-10 md:py-20 xl:py-28 bg-white-100">
        <section className="max-w-screen-xl mx-auto">
            <header className="px-6 md:px-8 text-center mb-4 md:mb-0">
                {title &&<h1 className="text-primary-default inline-block mb-2 md:mb-4 text-3xl sm:text-4xl font-semibold leading-tight" dangerouslySetInnerHTML={{__html: title}}/>}
                {text && <p className="max-w-xl mx-auto" dangerouslySetInnerHTML={{__html: text}} />}
            </header>
            {benefits && <div className="flex flex-wrap px-4 md:px-6">
                {benefits.map(benefit => <div key={benefit.title} className="w-full sm:w-1/2 md:w-1/4 px-2">
                    <Benefit {...benefit} />
                </div>)}
            </div>}
        </section>
    </div>
);

export default BenefitsListings;