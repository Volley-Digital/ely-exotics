import React from 'react';
import {Link} from 'gatsby';

import './button.style.scss';

const Button = ({text, url, color}) => (
    <Link to={url} className={`button button__${color} relative text-sm border-2 border-solid px-6 py-2 rounded-full leading-none inline-block border-current text-${color}-default`}>
        <span className={`button__text inline-block pb-px text-${color}-default z-10 relative`}>{text}</span>
        <div className={`button__hover bg-${color}-default absolute`} />
    </Link>
)

export default Button;