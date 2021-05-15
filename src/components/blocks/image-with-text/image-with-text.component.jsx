import React from 'react';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Img from 'gatsby-image';

const ImageWithText = ({image, title, text, marginBottom}) => (
  <section  className={`max-w-screen-2xl mx-auto flex flex-wrap items-center px-6 md:px-8 ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}>
    <div className="w-full md:w-1/2 mb-5 md:mb-0">
      {image && <Img className="w-full" fluid={image} /> }
    </div>
    <div className="w-full md:w-1/2 pl-0 md:pl-16 lg:pl-24">
      {title && <h2 className="text-2xl md:text-3xl font-black italic mb-5 leading-tight">{title}</h2>}
      {text && <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: text}} />}
    </div>
  </section>
);

export default ImageWithText;