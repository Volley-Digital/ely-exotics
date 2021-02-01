import React from 'react';

const Standout = ({icon, title, text}) => (
    <article className="flex flex-col items-center text-center">
        <img className="mb-2" alt={title} src={icon} />
        {title && <h4 className="mb-2 md:mb-4 text-black-default text-font text-lg md:text-xl font-medium">{title}</h4>}
        {text && <p>{text}</p>}
    </article>
)

export default Standout;