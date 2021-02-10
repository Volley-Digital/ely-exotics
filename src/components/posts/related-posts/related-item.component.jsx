import React from 'react';
import {Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import './post-item.style.scss';

const RelatedItem = ({image, title, slug, height, category, date}) => (
    <Link to={`${slug}`}>
        <article className="post-preview mb-10 md:mb-0">
            <BackgroundImage
                tag="figure"
                fluid={image}
                className={`post-preview__image ${height} w-full mb-5 md:mb-6`}
            >
                <div className="post-preview__overlay absolute inset-0 bg-primary-default flex flex-wrap items-center justify-center opacity-0">
                    <span className="post-preview__linktext text-white-default heading-font font-black italic text-2xl">View post</span>
                </div>
            </BackgroundImage>
            <header className="relative z-10 heading-font">
                <div className="post-preview__details flex flex-wrap items-center justify-between mb-1 md:mb-4">
                    <span className="post-preview heading-font block text-black-default font-light">{category}</span>
                    <span className="post-preview heading-font block text-black-default font-light">{date}</span>
                </div>
                {title && <h2 className="post-preview__title text-black-default text-2xl md:text-3xl leading-tight font-black italic">{title}</h2>}
            </header>
        </article>
    </Link>
);

export default RelatedItem;