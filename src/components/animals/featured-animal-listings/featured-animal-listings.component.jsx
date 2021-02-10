import React from 'react';
import FeaturedAnimal from '../featured-animal/featured-animal.component';

const FeaturedAnimalListings = ({animals, colour}) => (
    <section className="flex flex-wrap max-w-screen-2xl mx-auto pb-4 md:pb-8 lg:pb-12 px-3 md:px-4 relative z-10">
        {animals && animals.map(animal => {
            let formattedSlug;
            if(animal.parentCategory.parents && animal.parentCategory.parents[0].parents) {
                formattedSlug = `/${animal.parentCategory.parents[0].parents[0].slug}/${animal.parentCategory.parents[0].slug}/${animal.parentCategory.slug}/${animal.slug}`
            } else if (animal.parentCategory.parents) {
                formattedSlug = `/${animal.parentCategory.parents[0].slug}/${animal.parentCategory.slug}/${animal.slug}`
            } else if (animal.parentCategory) {
                formattedSlug = `/${animal.parentCategory.slug}/${animal.slug}`
            } else {
                formattedSlug = `/${animal.slug}`
            }
            return <div key={animal.slug} className="px-3 md:px-4 w-full sm:w-1/2 md:w-1/3 pb-6 md:pb-8">
                    <FeaturedAnimal 
                        title={animal.title}
                        slug={formattedSlug}
                        colour={colour}
                        inStock={animal.inStock}
                        image={animal.featuredImage.localFile.childImageSharp.fluid}
                    />
            </div>
        })}
    </section>
);

export default FeaturedAnimalListings;