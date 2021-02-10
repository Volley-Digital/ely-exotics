import React from 'react';

import LinkItem from './link-item.component';

const LinkSection = ({links, marginBottom}) => (
    <section className={`max-w-screen-2xl mx-auto ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}>
        {links && <div className="flex flex-wrap px-3 md:px-4">
            {links.map((link, i) => <div key={i} className="px-3 md:px-4 w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0 ">
                <LinkItem 
                image={link.image.localFile.childImageSharp.fluid}
                title={link.title}
                slug={link.url}
                icon={link.icon.localFile.url}
                />
            </div>)}
        </div>}
    </section>
);

export default LinkSection;