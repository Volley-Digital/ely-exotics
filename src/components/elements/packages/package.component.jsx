import React from 'react';

import './package.style.scss';

const Package = ({title, icon, price, list, colour}) => (
    <article className="package">
        <header className={`bg-gradient-to-b from-${colour}-light to-${colour}-dark p-6 md:p-8 text-center`}>
            {title && <span className="block text-sm text-white-default mb-2 md:mb-4 leading-none">{title}</span>}
            {icon && <img className="mx-auto block h-24 m-0" src={icon} />}
        </header>
        <div className="p-6 md:p-8">
            {list && <ul className="mb-2 md:mb-4 text-center">
                {list.map((item, i) => <li key={i} className="leading-none mb-2">
                    {item}
                </li>)}
            </ul>}
            {price && <span className={`block text-center text-${colour}-default text-3xl md:text-4xl font-medium mb-0 leading-none`}>£{price}</span>}
            <span className={`block text-center text-${colour}-default text-sm`}>Per month</span>
        </div>
    </article>
);

export default Package;