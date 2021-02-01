import React from 'react';
import {Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import './service-block.style.scss';

const ServiceBlock = ({image, icon, title, url}) => (
    <Link to={url}>
        <BackgroundImage 
            tag="div"
            fluid={image}
            className="service-item h-56 p-6 flex flex-col items-start justify-between"
        >   
            {icon && <img className="relative z-10" src={icon}/> }
            {title && <h4 className="text-white-default font-semibold text-2xl leading-tight relative z-10">{title}</h4>}
            <div className="service-item__overlay absolute inset-0 bg-black-default opacity-50"></div>
        </BackgroundImage>
    </Link>
);

export default ServiceBlock;