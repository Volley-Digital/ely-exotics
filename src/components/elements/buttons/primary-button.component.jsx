import React from 'react';
import {Link} from 'gatsby';

const PrimaryButton = ({text, to}) => (
    <Link className="mx-6 md:mx-4 duration-300 transform hover:-translate-y-2 text-center bg-gradient-to-b from-primary-light to-primary-dark heading-font font-black text-center px-6 py-2 text-lg md:text-xl inline-block" to={to}>
        {text}
    </Link>
)

export default PrimaryButton;