import { graphql, StaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';
import RelatedItem from '../related-posts/related-item.component';

const FilteredSearch = ({posts}) => {

    const [filteredPosts, setFilteredPosts] =  useState(posts)

    return (
        <StaticQuery
        query={query}
        render={data => (
            <section className="flex flex-wrap items-start max-w-screen-2xl mx-auto px-4 md:px-6">
                <div className="w-full md:w-3/4 md:pr-8 lg:pr-16">
                    <div className="flex flex-wrap items-start">
                        {filteredPosts ? filteredPosts.map(post => {
                            const date = new Date(post.date);
                            const slug = `/${post.categories[0].slug}/news/${post.slug}`

                            return <div key={post.slug} className="w-full md:w-1/2 px-2 mb-10">
                                <RelatedItem 
                                    title={post.title}
                                    height="h-64 md:h-80"
                                    image={post.image.localFile.childImageSharp.fluid}
                                    slug={slug}
                                    category={post.categories[0].title}
                                    date={date.toLocaleDateString()} 
                                />
                            </div>
                        }) :  
                            <span className="block text-xl md:px-4 mb-10">Sorry no posts where found</span> 
                        }
                    </div>
                </div>
                <div className="w-full md:w-1/4 md:px-2 mb-10 px-2">
                    <h4 className="text-lg md:text-xl font-black italic leading-none mb-2">Categories</h4>
                    <Link activeClassName="font-bold text-primary-default heading-font" className="block duration-300 hover:opacity-50 hover:text-primary-default" to={`/news`}>
                        All
                    </Link>
                    {data.taxonomies.nodes && data.taxonomies.nodes.map(taxonomy => <Link activeClassName="font-bold text-primary-default heading-font" className="block duration-300 hover:opacity-50 hover:text-primary-default" key={taxonomy.slug} to={`/news/${taxonomy.slug}`}>
                        {taxonomy.title}
                    </Link>)}
                </div>
            </section>
        )} />
    )
}

export default FilteredSearch;

const query = graphql`{
    taxonomies: allContentfulTaxonomy {
        nodes {
          title
          slug
        }
    }
}`;