import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import {Link} from 'gatsby';

import infoIcon from '../../../images/Icons/info-icon.svg'
import arrow from '../../../images/Icons/left-arrow.svg'

const HeroCare = ({title, subTitle, image, relatedAnimal, colour = '272D3D', small}) => {
    return (
        <BackgroundImage
            tag="section"
            className={`hero--care-guide ${small && 'hero--care-guide-small'} relative z-10 text-white-0 flex flex-col items-bottom justify-end bg-right`}
            fluid={image}
        >   
            <div className={`pb-16 md:pb-24 pt-40 md:pt-72 max-w-screen-2xl mx-auto w-full px-6 md:px-8 relative z-10 flex flex-col justify-end`}>
                {subTitle && <span className="text-xl md:text-3xl heading-font italic font-light block mb-2">{subTitle}</span>}
                {title && <div className="flex flex-wrap items-center">
                    <h1 className={`max-w-4xl leading-none text-4xl lg:text-5xl font-black italic text-white-default mr-4 lg:mr-8 mb-2 md:mb-0`}>{title}</h1>
                    <img src={infoIcon} className="w-8 lg:w-auto" alt={`Care Guide for ${title}`}/>
                </div>}                        
            </div>
            {relatedAnimal && <Link to={relatedAnimal} style={{backgroundColor: `#${colour}`}} className="hovericon z-10 right-0 bottom-0 absolute px-6 md:px-8 py-2 md:py-4 font-black heading-font italic md:text-base flex items-center">
                See buying options
                <img src={arrow} className="hovericon__icon pl-4" alt={`buying options for ${title}`}/>
            </Link>
            }
            <div className="inset-0 absolute bg-black-default opacity-50" />
        </BackgroundImage>
    );
}

export default HeroCare;