import React from 'react';

import './benefit.style.scss'

const Benefit = ({title, icon}) => (
    <article className="p-10 bg-white-default mt-8 md:mt-12 h-32 relative">
        {icon && <img className="mx-auto -mt-16" alt={title} src={icon} />}
        <header className="benefit__title text-center absolute">
            {title &&<h3 className="text-lg md:text-2xl text-black-default leading-tight" dangerouslySetInnerHTML={{__html: title}}/>}
        </header>
    </article>
);

export default Benefit;