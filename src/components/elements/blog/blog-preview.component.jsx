import React from 'react';
import {Link} from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import './blog.style.scss';

const BlogPreview = ({image, title, link, height, category, date}) => {

    return (
        <Link to={`/news/${link}`}>
            <article className="blog-preview">
                <BackgroundImage
                    tag="figure"
                    fluid={image}
                    className={`blog-preview__image ${height} w-full mb-5 md:mb-10`}
                >
                    <div className="blog-preview__overlay absolute inset-0 bg-primary-default flex flex-wrap items-center justify-center opacity-0">
                        <span className="blog-preview__linktext text-white-default heading-font text-2xl">View post</span>
                    </div>
                </BackgroundImage>
                <header className="relative z-10 heading-font">
                    <div className="blog-preview__details flex flex-wrap items-center justify-between mb-1 md:mb-4">
                        <span className="blog-preview heading-font text-lg block text-primary-default font-bold">{category}</span>
                        <span className="blog-preview heading-font block text-primary-default">{date}</span>
                    </div>
                    {title && <h2 className="blog-preview__title text-black-default text-2xl md:text-3xl leading-tight font-semibold">{title}</h2>}
                </header>
            </article>
        </Link>
    );
}

export default BlogPreview;