import React from 'react';

import Tip from './tip.component';

const TipsList = ({title, tips}) => (
    <section className="max-w-screen-2xl mx-auto mb-10 md:mb-16 lg:mb-20 relative z-10 px-6 md:px-8">
        {title && <h4 className="text-2xl md:text-3xl font-black italic mb-5 leading-tight">{title}</h4>}
        {tips && tips.map((tip, i) => <Tip tip={tip} key={i} />)}
    </section>
);

export default TipsList;