import React from 'react';
import RelatedItem from './related-item.component';

const RelatedPosts = ({title, related}) => (
    <section className="">
        {title && <h3 className="leading-tight text-3xl md:text-4xl font-black italic mb-5 px-2">{title}</h3>}
        {related && <div className="flex flex-wrap items-start">
            {related.map(item => {
            const date = new Date(item.date);
            const slug = `/${item.categories[0].slug}/news/${item.slug}`

            return <div key={item.slug} className="w-full md:w-1/2 px-2">
                <RelatedItem 
                title={item.title}
                height="h-64 md:h-80"
                image={item.image.localFile.childImageSharp.fluid}
                slug={slug}
                category={item.categories[0].title}
                date={date.toLocaleDateString()} 
                />
            </div>
            })}
        </div>}
    </section>
);

export default RelatedPosts;