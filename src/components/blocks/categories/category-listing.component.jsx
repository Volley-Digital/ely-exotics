import React from 'react';

import CategoryItem from '../../categories/category-item.component';

const CategoryListing = ({title, categories, marginBottom, light}) => (
    <section className={`max-w-screen-2xl mx-auto ${marginBottom && 'mb-4 md:mb-8 lg:mb-12'}`}>
        {title && <h3 className="highlighted-textfull text-2xl md:text-3xl font-black italic mb-5 md:mb-8 px-10 md:pr-8 md:pl-12 text-white-0 w-auto relative z-10"><span className="inline-block">{title}</span></h3>}
        {categories && <div className="flex flex-wrap px-3 md:px-4">
            {categories.map(category => <div key={category.slug} className="px-3 md:px-4 w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-8 ">
                <CategoryItem 
                image={category.featuredImage.localFile.childImageSharp.fluid}
                title={category.title}
                slug={category.slug}
                parents={category.parents}
                colour={category.colour.colour}
                light={light}
                showCare
                />
            </div>)}
        </div>}
    </section>
);

export default CategoryListing;