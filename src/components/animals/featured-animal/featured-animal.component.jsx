import React from 'react';
import {Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import InStock from '../../elements/in-stock/in-stock.component';

const FeaturedAnimal = ({title, slug, inStock, colour, image, price, type, latin, additionalText}) => {

    
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
                <header className="pt-10 pb-8 relative z-10 px-6 flex-1 flex flex-col items-center justify-center">
                    {(title || latin) && <div className="mb-4">
                      {title &&<h4 className="text-xl md:text-2xl font-black italic leading-none mb-2">{title}</h4>}
                      {latin &&<span className="text-sm md:text-lg font-black italic leading-none block mb-2">"{latin}"</span>}
                      {type &&<span className="text-sm md:text-md font-black italic leading-none">{type}</span>}

                    </div>}
                    {price &&<span className="text-lg md:text-xl font-black underline italic text-secondary-default leading-none">£{price}</span>}
                    {additionalText &&<span className="text-sm font-black italic leading-none mt-1">{additionalText}</span>}
                </header>
            </article>
        </Link>
    )
};

export default FeaturedAnimal;