import React from 'react';
import FeaturedAnimal from '../featured-animal/featured-animal.component';

const FeaturedAnimalListings = ({animals, colour}) => (
    <section className="flex flex-wrap max-w-screen-2xl mx-auto pb-4 md:pb-8 lg:pb-12 px-3 md:px-4 relative z-10">
        {animals && animals.map(animal => {
            return <div key={animal.slug} className="px-3 md:px-4 w-full sm:w-1/2 md:w-1/3 pb-6 md:pb-8">
                    <FeaturedAnimal 
                        title={animal.title}
                        latin={animal.latin}
                        price={animal.price}
                        type={animal.type}
                        additionalText={animal.additionalPriceText}
                        colour={colour}
                        inStock={animal.inStock}
                        image={animal.featuredImage.localFile.childImageSharp.fluid}
                    />
            </div>
        })}
    </section>
);

export default FeaturedAnimalListings;