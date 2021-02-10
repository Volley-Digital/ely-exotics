import React from 'react';
import ReadMoreReact from 'read-more-react';

import generateStars from '../../../utils/stars';

const Review = ({name, title, rating, text}) => {
    return (
        <article className="text-white-0 flex flex-col flex-wrap items-center md:items-start px-3 lg:px-4">
            {rating && <div className="flex flex-wrap mb-2">
                {generateStars(rating)}
            </div>}
            {title && <span className="heading-font text-base font-black italic block mb-1">{title}</span>}
            {text && <ReadMoreReact text={text} ideal={110} />}
            {name && <span className="text-sm font-light opacity-50 block">{name}</span>}
        </article>  
    )
}

export default Review;