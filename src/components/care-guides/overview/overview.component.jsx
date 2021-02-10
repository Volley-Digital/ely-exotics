import React from 'react';

import OverviewItem from './overview-item.component';

const Overview = ({items}) => (
    <div className="bg-gradient-to-b from-primary-light to-primary-dark">
        <section className="max-w-screen-2xl mx-auto pt-10 md:pt-16 relative z-10 text-white-0 px-4 md:px-6">
            <div className="flex flex-wrap flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                {items && items.map((item, i) => <div className="overview-item flex-1 mb-10 md:mb-16" key={i}>
                    <OverviewItem {...item} />
                </div>)}
            </div>
        </section>
    </div>
);

export default Overview;