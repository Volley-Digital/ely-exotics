import React from 'react';
import {Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import InStock from '../../elements/in-stock/in-stock.component';

const FeaturedAnimal = ({title, slug, inStock, colour, image}) => {

    
    return (
        <Link to={slug}>
            <article className={`category-item bg-white-default text-black-default text-center duration-300 h-full flex flex-col`}>
                <div className="overflow-hidden -z-10">
                    <BackgroundImage  
                        tag="figure"
                        fluid={image}
                        className="category-item__image w-full h-64 -mb-px relative"
                    >
                        <div className={`category-item__care duration-300 absolute z-10 top-2 right-0`}>
                            <InStock inStock={inStock} />
                        </div>
                    </BackgroundImage>
                </div>
                <header className="pt-10 pb-8 relative z-10 px-6 md:px-8 flex-1 flex flex-col items-center justify-center">
                    {title &&<h4 className="text-2xl md:text-3xl font-black italic leading-none">{title}</h4>}
                    <div className="relative overflow-hidden inline-block heading-font text-lg p-2">
                        <span className="category-item__link inline-block relative z-10 duration-300">View page</span>
                        <span className="category-item__linkhover block absolute z-10 duration-300">GO!</span>
                        <div style={{backgroundColor: `#${colour}`}} className="category-item__linkbg absolute left-0 bottom-3 top-5 right-5 duration-300" />
                    </div>
                </header>
            </article>
        </Link>
    )
};

export default FeaturedAnimal;