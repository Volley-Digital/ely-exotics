import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import {Link} from 'gatsby';

import './link-item.style.scss';

const LinkItem = ({title, slug, image, icon}) => (
    <Link to={`${slug}`}>
        <article className="link-item text-white-0 duration-300">
            <header className="flex flex-wrap p-6 items-center justify-between bg-black-default">
                {title && <h4 className="italic font-black text-lg md:text-xl">{title}</h4>}
                {icon && <img src={icon} className="h-auto w-5" alt={title} />}
            </header>
            <BackgroundImage  
                tag="figure"
                fluid={image}
                className="link-item__image w-full h-64 -mb-px relative overflow-hidden"
            />
        </article>
    </Link>
);

export default LinkItem;