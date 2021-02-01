import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import {Link} from 'gatsby'
import generateStars from '../../../utils/stars'

import './title-banner-image.style.scss';

const TitleBgImageBanner = ({title, image, subTitle, stars, parent, overlay, website}) => (
    <section className="mb-5 md:mb-6">
        <BackgroundImage 
            Tag="div"
            fluid={image}
            className={`relative overflow-hidden mb-10 md:mb-16`}
        >
            <div className="title-banner-image-bg max-w-screen-xl mx-auto px-6 md:px-8 flex flex-col justify-end">
                {overlay && <div className="absolute inset-0 opacity-50 bg-black-default" />}
            </div>
        </BackgroundImage>
        <header className="relative z-10 flex flex-wrap justify-between items-start max-w-screen-xl mx-auto px-6 md:px-8">
            <div className="max-w-xl pr-8">
                {subTitle && <p className="leading-tight text-lg sm:text-2xl relative z-10" dangerouslySetInnerHTML={{__html: subTitle}} />}
                {title &&<h1 className="text-primary-default inline-block mb-4 text-4xl sm:text-5xl font-semibold leading-tight relative z-10" dangerouslySetInnerHTML={{__html: title}}/>}
                <div className="flex">
                    {stars && generateStars(stars)}
                </div>
            </div>
            <div className="text-right">
                {parent && <Link className="title-banner-image__back md:text-xl flex items-center mb-2" to={`/${parent}`}>
                    <svg className="title-banner-image__arrow mr-3" xmlns="http://www.w3.org/2000/svg" width="29.368" height="14.225" viewBox="0 0 29.368 14.225">
                        <g id="left-arrow">
                            <g id="Group_880" data-name="Group 880" transform="translate(0 0)">
                            <path id="Path_388" data-name="Path 388" d="M.336,138.3h0l5.994-5.965A1.147,1.147,0,0,1,7.95,133.96l-4.025,4.005h24.3a1.147,1.147,0,1,1,0,2.294H3.926l4.025,4.005a1.147,1.147,0,0,1-1.619,1.626L.337,139.926h0A1.148,1.148,0,0,1,.336,138.3Z" transform="translate(0 -132)" fill="#999999"/>
                            </g>
                        </g>
                    </svg>
                    Go back 
                </Link>}
                {website && <a target="_blank" className="underline text-lg hover:text-primary-default duration-300" href={website} >Visit Website</a>}
            </div>
        </header>   
    </section>
);

export default TitleBgImageBanner;

