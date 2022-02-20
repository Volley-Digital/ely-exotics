import React from 'react';

import stars from '../../../images/Icons/stars-white.svg'

const ReviewSnippit = ({bgColour, marginBottom}) => (
    <div style={{backgroundColor: `#${bgColour}`}} className={`bg-primary-default ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 py-4 text-white-0 md:text-lg md:flex flex-wrap items-center text-center justify-center leading-none">
            Our customers think we're <img className="block mx-auto md:mx-4 w-32 py-3 md:py-2" src={stars} alt="5 star reviews" /> 5 out of 5 Based on <a className="ml-2 font-bold underline" target="_blank" href="https://www.google.com/search?q=ely+exotics&oq=ely+e&aqs=chrome.0.69i59j69i57j46i512j46i67i175i199j46i175i199i512j69i60j69i61j69i60.1057j0j1&sourceid=chrome&ie=UTF-8#lrd=0x47d8133f05d602af:0xbd16cdf4efbcd886,1,,,">45 reviews</a>
        </div>
    </div>
);

export default ReviewSnippit;