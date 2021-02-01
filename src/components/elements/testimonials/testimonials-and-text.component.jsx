import React from 'react';

import Testimonial from './testimonial.component';

import reviews from './data.reviews';

const TestimonialsWithText = ({title, text, colour}) => (
    <div className={`bg-gradient-to-b from-${colour}-light to-${colour}-dark mb-10 md:mb-32 lg:mb-40 relative`}>
        <section className="max-w-screen-xl mx-auto flex flex-wrap py-10 md:py-20 lg:py-28">
            <header className="w-full md:w-1/2 px-6 md:px-8 mb-8 md:mb-0 xl:pr-16">
                {title && <h3 className="text-3xl md:text-4xl text-white-default font-semibold mb-4 md:mb-6">{title}</h3>}
                {text && <p dangerouslySetInnerHTML={{__html: text}} className="text-white-100" />}
            </header>
            <div className="w-full md:w-1/2 md:-mb-64 xl:-mb-80 md:mt-8 xl:mt-16">
                <Testimonial {...reviews[0]}/>
                <div className="mb-5" />
                <Testimonial {...reviews[1]}/>
            </div>
        </section>
    </div>
)

export default TestimonialsWithText