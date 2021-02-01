import React from 'react';

import Standout from './standout.component';
import GradButton from '../button/gradbutton.component';

const StandoutsListings = ({title, standouts, link}) =>  (
    <section className="max-w-screen-xl mx-auto mb-10 md:mb-20 xl:mb-28">
        <header className="px-6 md:px-8 text-center mb-8 md:mb-12">
            {title &&<h1 className="text-primary-default inline-block text-3xl sm:text-4xl font-semibold leading-none" dangerouslySetInnerHTML={{__html: title}}/>}
        </header>
        {standouts && <div className="flex flex-wrap md:mb-12">
            {standouts.map(( standout, i ) => <div key={i} className="mb-8 md:mb-0 w-full md:w-1/3 px-6 md:px-8">
                <Standout {...standout} />
            </div>)}
        </div>}
        <div className="px-6 md:px-8 flex justify-center">
            {link && <GradButton text={link.text} color={link.colour} url={link.url} />}
        </div>
    </section>
);

export default StandoutsListings;