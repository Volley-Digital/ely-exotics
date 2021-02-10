import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import phoneIcon from '../../../images/Icons/phone-white.svg'
import InStock from '../../elements/in-stock/in-stock.component';

const Hero = ({title, text, image, subTitle, phone, colour = "272D3D", inStock}) => {
    return (
        <BackgroundImage
            tag="section"
            className={`relative z-10 text-white-0 flex justify-start`}
            fluid={image}
            style={{backgroundPosition: '60% center'}}
            
        >   
            <div className={`pb-24 md:pb-32 pt-40 md:pt-64 max-w-screen-2xl mx-auto w-full px-3 md:px-4 relative z-10`}>
                <div className="flex flex-wrap items-center mb-7">
                    <div className="px-3 md:px-4">
                        <InStock inStock={inStock} />
                    </div>
                    {subTitle && <span className={`leading-none md:text-lg italic text-white-0 px-3 md:px-4`}>{subTitle}</span>}   
                </div>
                {title && <h1 className={`max-w-4xl leading-none text-3xl sm:text-4xl lg:text-5xl font-black italic text-white-default mb-5 px-3 md:px-4`}>{title}</h1>}  
                {text && <div className="font-light block max-w-3xl flex flex-wrap">{renderRichText(text, options)}</div>}
            </div>
            {phone && <div style={{backgroundColor: `#${colour}`}} className="hero__phone hovericon z-10 right-0 bottom-0 absolute px-6 md:px-8 py-2 md:py-4 flex items-center">
                <a className="text-lg font-black heading-font italic text-white-0" href={`tel:${phone}`} >{phone}</a>
                <img className="hero__phoneicon hovericon__icon flex-grow-0 ml-4" src={phoneIcon} alt="Phone Us" />
            </div>
            }
            <div className="inset-0 absolute bg-black-default opacity-60" />
        </BackgroundImage>
    );
}

const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="w-full md:w-1/2 flex-grow px-3 md:px-4">{children}</p>
      ),
    },
  }

export default Hero;