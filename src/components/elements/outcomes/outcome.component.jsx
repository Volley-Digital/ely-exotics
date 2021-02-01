import React from 'react';

const Outcome = ({title, value, description}) => (
    <article className="px-6 md:px-8 w-full md:w-1/3 mb-8 md:mb-0">
        {value && <span className="block text-secondary-default heading-font text-2xl md:text-3xl leading-none font-bold mb-3">{value}</span>}
        {title && <h4 className="text-primary-default text-xl md:text-2xl leading-tight text-font mb-2">{title}</h4>}
        {description && <p>
            {description}
        </p>}
    </article>
)

export default Outcome