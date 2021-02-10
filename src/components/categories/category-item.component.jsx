import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import {Link} from 'gatsby';

import './category-item.style.scss'

import info from '../../images/Icons/info-icon.svg'


const CategoryItem = ({image, title, light, slug, parents, colour, showCare}) => {

    let colourClasses = !light ? 'bg-black-default text-white-0' : 'bg-white-default text-black-default';

    let formattedSlug;
    if(parents && parents[0].parents) {
        formattedSlug = `/${parents[0].parents[0].slug}/${parents[0].slug}/${slug}`
    } else if (parents) {
        formattedSlug = `/${parents[0].slug}/${slug}`
    } else {
        formattedSlug = `/${slug}`
    }

    return (
        <Link to={formattedSlug}>
            <article className={`category-item ${colourClasses} text-center duration-300 h-full flex flex-col`}>
                <div className="overflow-hidden -z-10">
                    <BackgroundImage  
                        tag="figure"
                        fluid={image}
                        className="category-item__image w-full h-64 -mb-px relative"
                    >
                        <Link to={`/care-guides#${slug}`} style={{backgroundColor: `#${colour}`}} className="category-item__care duration-300 flex items-center px-2 py-1 absolute text-white-0 z-10 top-2 right-0 font-bold">
                            <img src={info} className="mr-2 w-4" alt={`Care Gudies Icon for ${title}`} />
                            View care gudies
                        </Link>
                    </BackgroundImage>
                </div>
                <header className="pt-10 pb-8 relative z-10 px-6 md:px-8 flex-1 flex flex-col items-center justify-center">
                    {title &&<h4 className="text-2xl md:text-3xl font-black italic leading-none">{title}</h4>}
                    <div className="relative overflow-hidden inline-block heading-font text-lg p-2">
                        <span className="category-item__link inline-block relative z-10 duration-300">Find out more</span>
                        <span className="category-item__linkhover block absolute z-10 duration-300">GO!</span>
                        <div style={{backgroundColor: `#${colour}`}} className="category-item__linkbg absolute left-0 bottom-3 top-5 right-5 duration-300" />
                    </div>
                </header>
            </article>
        </Link>
    )
}

export default CategoryItem;