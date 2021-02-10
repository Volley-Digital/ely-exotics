import React from 'react';

import stars from '../../../images/Icons/stars-white.svg'

const ReviewSnippit = ({bgColour, marginBottom}) => (
    <div style={{backgroundColor: `#${bgColour}`}} className={`bg-primary-default ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 py-4 text-white-0 md:text-lg md:flex flex-wrap items-center text-center justify-center leading-none">
            Our customers think we're <img className="block mx-auto md:mx-4 w-32 py-3 md:py-2" src={stars} alt="5 star reviews" /> 4.7 out of 5 Based on  <a className="ml-2 font-bold underline" href="">26 reviews</a>
        </div>
    </div>
);

export default ReviewSnippit;