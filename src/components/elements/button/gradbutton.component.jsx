import React from 'react';
import {Link} from 'gatsby';

const GradButton = ({text, url, color}) => (
    <Link to={url} className={`button__grad text-center bg-gradient-to-b from-${color}-default to-${color}-dark relative text-sm px-6 py-3 rounded-full leading-none inline-block min-w-sm`}>
        <span className={`inline-block pb-px text-white-default z-10 relative font-medium`}>{text}</span>
    </Link>
)

export default GradButton;