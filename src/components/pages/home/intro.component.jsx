import React from 'react';
import BackgroundImage from 'gatsby-background-image'

import Button from '../../elements/button/button.component';


const Intro = ({title, subTitle, icons, image, text, link}) => (
    <section className="flex flex-wrap mb-10 md:mb-20 lg:mb-28">
        <BackgroundImage 
            Tag="div"
            fluid={image}
            className="h-64 md:h-auto w-full md:w-1/3 xl:w-1/2"
        />
        <div className="w-full md:w-2/3 xl:w-1/2 py-10 md:py-20 xl:py-28 bg-white-100 px-6 md:px-8">
            <div className="max-w-5xl">
                <div className="mx-auto max-w-lg">
                    {subTitle && <span className="text-sm md:text-xl mb-2 block" dangerouslySetInnerHTML={{__html: subTitle}} />}
                    {title && <h2 className="text-3xl md:text-4xl text-primary-default font-semibold max-w-sm mb-8">{title}</h2>}
                    <div className="flex flex-wrap">
                        {icons && icons.map(icon => (
                            <div key={icon.title} className="text-center pr-5 md:pr-10 mb-4">
                                <img className="w-16 md:w-auto mb-0" key={icon.title} src={icon.icon} />
                                <span className="md:text-xl text-black-default">{icon.title}</span>
                            </div>
                        ))}
                    </div>
                    {text && <p className="mb-4">{text}</p>}
                    {link && <Button text={link.text} url={link.url} color={link.color} />}
                </div>
            </div>
        </div>
    </section>
);

export default Intro;