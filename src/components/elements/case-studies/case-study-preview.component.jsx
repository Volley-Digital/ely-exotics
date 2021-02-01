import React from 'react';
import {Link} from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

import generateStars from '../../../utils/stars'

import './casestudy.style.scss'

const CaseStudyPreview = ({image, title, link, stars, height}) => {
    return (
        <Link to={`/case-studies/${link}`}>
            <BackgroundImage
                tag="article"
                fluid={image}
                className={`casestudy-preview ${height} w-full p-6 md:p-8 flex flex-col justify-end`}
            >   <header className="casestudy-preview__details relative z-10 text-white-default">
                    {stars && <div className="flex relative mb-2">
                        {generateStars(stars)}
                    </div>}
                    {title && <h2 className="text-font text-lg md:text-2xl leading-tight">{title}</h2>}
                    <span className="casestudy-preview__linktext block text-white-default font-light absolute left-0 -bottom-8 opacity-0">view project</span>
                </header>
                <div className="casestudy-preview__overlay absolute inset-0 bg-black-default opacity-50 "></div>
            </BackgroundImage>
        </Link>
    );
}

export default CaseStudyPreview;