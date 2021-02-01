import React from 'react';

import Outcome from './outcome.component';

const OutcomesList = ({title, outcomes}) => (
    <section className="max-w-screen-xl mx-auto">
        <header className="px-6 md:px-8">
            {title && <h3 className="text-3xl md:text-4xl text-primary-default font-semibold max-w-sm mb-8 md:mb-12 leading-none">{title}</h3>}
        </header>
        <div className="flex flex-wrap items-start mb-0 md:mb-12 ">
            {outcomes && outcomes.map((outcome, i) => <Outcome key={i} {...outcome} />)}
        </div>
    </section>
)

export default OutcomesList;