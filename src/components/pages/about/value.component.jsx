import React from 'react';

const Value = ({title, text, number}) => (
    <article>
        {number && <span className="block text-3xl md:text-4xl font-bold heading-font text-secondary-default md:mb-2">{number}</span>}
        {title && <h4 className="md:mb-2 text-black-default text-font text-lg md:text-xl font-medium">{title}</h4>}
        {text && <span className="text-sm">{text}</span>}
    </article>
);

export default Value;