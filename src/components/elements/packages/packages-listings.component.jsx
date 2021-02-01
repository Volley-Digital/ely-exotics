import React from 'react';

import Package from './package.component';

const PackagesListings = ({title, text, packages}) =>  (
    <div className="mb-5 md:mb-20 xl:mb-28">
        <section className="max-w-screen-xl mx-auto">
            <header className="px-6 md:px-8 text-center mb-8 md:mb-12">
                {title &&<h1 className="text-primary-default inline-block mb-2 md:mb-4 text-3xl sm:text-4xl font-semibold leading-tight" dangerouslySetInnerHTML={{__html: title}}/>}
                {text && <p className="max-w-xl mx-auto" dangerouslySetInnerHTML={{__html: text}} />}
            </header>
            {packages && <div className="flex flex-wrap sm:px-6 lg:px-4">
            {packages.map((item, i) => <div key={i} className="w-full sm:w-1/3 px-6 sm:px-2 lg:px-4 mb-5 sm:mb-0">
                <Package {...item} />
            </div>)}
        </div>}
        </section>
    </div>
);

export default PackagesListings;