import React from 'react';
import BackgroundImage from 'gatsby-background-image'

import GradButton from '../../elements/button/gradbutton.component';

const Intro = ({title, subTitle, icons, image, text, link}) => (
    <section className="flex flex-wrap">
        <BackgroundImage 
            Tag="div"
            fluid={image}
            className="h-64 md:h-auto w-full md:w-5/12"
        />
        <div className="w-full md:w-7/12 py-10 md:py-20 xl:py-28 px-6 md:px-8 max-w-5xl">
            <div className="mx-auto max-w-xl">
                {title && <h2 className="text-3xl md:text-4xl text-primary-default font-semibold max-w-sm mb-2 md:mb-4">{title}</h2>}
                {subTitle && <p className="text-lg md:text-2xl max-w-3xl mb-2 md:mb-4 text-black-default font-light">{subTitle}</p>}
                {text && <p className="mb-4">{text}</p>}
                {link && <GradButton text={link.text} url={link.url} color={link.color} />}
            </div>
        </div>
    </section>
);

export default Intro;