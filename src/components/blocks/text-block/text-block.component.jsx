import React from 'react';
import { renderRichText } from "gatsby-source-contentful/rich-text"

const TextBlock = ({text, marginBottom}) => (
  <section className={`blog  max-w-screen-2xl mx-auto px-6 md:px-8 ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}>
    {text && <div className="whitespace-pre-wrap">{renderRichText(text)}</div>}
  </section>
);

export default TextBlock;