import React from 'react';

import generateStars from '../../../utils/stars'

const Testimonial = ({stars, name, company, logo, text}) => {
    return (
        <figure className="testimonial bg-white-default p-8 mx-6 md:mx-4">
            <div className="flex mb-4">
                {stars && generateStars(stars)}
            </div>
            <div className="flex flex-wrap md:flex-nowrap mb-4 md:mb-6">
                <img className="w-10 h-10 mb-0 mr-4" src={logo} />
                <figcaption className="">
                    {name && <span className="font-regular text-primary-dark">{name}</span>}
                    {company && <em className="block text-xs text-black-light">{company}</em>}
                </figcaption>
            </div>
            {text && <p className="font-light text-sm">{text}</p>}
        </figure>
    );
}

export default Testimonial;