import React from 'react';

import Value from './value.component';

const Values = ({title, text, values}) => (
    <div className="bg-white-100">
        <section className="lg:px-0 max-w-screen-xl mx-auto pt-10 pb-5 md:py-20 lg:py-28">
            <header className="px-6 md:px-8 mb-4 md:mb-6">
                {title && <h2 className="text-3xl md:text-4xl text-primary-default font-semibold max-w-sm mb-4 md:mb-6 leading-none">{title}</h2>}
                {text && <p className="text-lg md:text-2xl">
                   {text}
                </p>}
            </header>
            {values && <div className="px-3 md:px-0 flex flex-wrap">
                {values.map(value => <div className="w-1/2 md:w-1/4 mb-5 md:mb-0 px-3 md:px-8 min" key={value.number}>
                    <Value {...value} />
                </div>)}
            </div>}
        </section>
    </div>
);

export default Values