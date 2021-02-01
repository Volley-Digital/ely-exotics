import React from 'react';

import ServiceBlock from '../../elements/services/service-block.component';
import GradButton from '../../elements/button/gradbutton.component';

const Services = ({title, subTitle, services, text, link}) => (
    <section className="max-w-screen-xl mx-auto mb-10 md:mb-20 lg:mb-28">
        <div className="px-6 md:px-8">
            {subTitle && <span className="text-sm md:text-xl mb-2 block" dangerouslySetInnerHTML={{__html: subTitle}} />}
            {title && <h2 className="text-3xl md:text-4xl text-primary-default font-semibold max-w-xs mb-5 md:mb-10">{title}</h2>}
            {text && <p className="text-lg md:text-2xl max-w-3xl mb-8 md:mb-12 font-light">{text}</p>}
        </div>
        {services && <div className="flex flex-wrap px-6 md:px-6 mb-4 lg:mb-12">
            {services.map(service => <div key={service.title} className="md:px-2 w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-8 lg:mb-0 ">
                <ServiceBlock {...service} />
            </div>
            )}
        </div>}
        <div className="px-6 md:px-8">
            {link && <GradButton text={link.text} color="secondary" url={link.url} />}
        </div>
    </section>
);

export default Services;