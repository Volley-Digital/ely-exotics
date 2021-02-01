import React from 'react';

const TitleAndText = ({title, text}) => (
    <section className="px-6 md:px-8 mb-10 md:mb-12">
        {title && <h2 className="text-3xl md:text-4xl text-primary-default font-semibold max-w-sm mb-4 md:mb-6 leading-none">{title}</h2>}
        {text && <p dangerouslySetInnerHTML={{__html: text}} />}
    </section>
);

export default TitleAndText;