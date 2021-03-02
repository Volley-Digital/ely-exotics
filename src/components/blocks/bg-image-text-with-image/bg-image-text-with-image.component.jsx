import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { renderRichText } from "gatsby-source-contentful/rich-text"

const BgImageTextWithImage = ({bgImage, image, title, text1, text2, marginBottom}) => (
    <BackgroundImage
        tag="section"
        fluid={bgImage}
        className={`relative ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}
    >
        <div className="max-w-screen-2xl mx-auto py-10 md:py-16 lg:py-28 relative z-10 text-white-0">
            <div className="px-6 md:px-8 w-full md:w-3/5">
                {title && <h2 className="highlighted-text text-2xl md:text-3xl font-black italic mb-5" dangerouslySetInnerHTML={{__html: title}} />}
                <div className="flex flex-wrap">
                    {text1 && <div className="w-full md:w-1/2 md:pr-5 lg:pr-8 mb-5 md:mb-0">{renderRichText(text1)}</div>}
                    {text2 && <div className="w-full md:w-1/2 md:pl-5 lg:pl-8">{renderRichText(text2)}</div>}
                </div>
            </div>
        </div>
        {image && <div className="w-full h-72 relative md:absolute md:h-full md:w-2/5 right-0 top-0 z-10">
            <BackgroundImage tag="div" fluid={image} className="w-full h-full"/>
        </div>}
        <div className="absolute bg-black-default inset-0 opacity-70" />
    </BackgroundImage>
);

export default BgImageTextWithImage;