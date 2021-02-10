import React from "react";
import { Link, graphql} from "gatsby"

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/blocks/hero/hero.component";

import FilteredSearch from "../../components/posts/filtered-search.component.jsx/filtered-search.component";
import ReviewSnippit from "../../components/elements/review-snippit/review-snippit.component";

export default ({data, pageContext}) => {
    const {taxonomy, posts} = data
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/news/${taxonomy.slug}` : `/news/${taxonomy.slug}/${(currentPage - 1).toString()}`
    const nextPage = `/news/${taxonomy.slug}/${(currentPage + 1).toString()}`

    return (
      <Layout noOverlayHeader>
        <SEO
          title={`News - ${taxonomy.title}`}
        />
        <Hero 
            title={`News - ${taxonomy.title}`}
            image={taxonomy.backgroundImage.localFile.childImageSharp.fluid}
            small
        />
        <ReviewSnippit marginBottom />
        {posts.nodes && <FilteredSearch posts={posts.nodes} />}
        <div className="flex flex-wrap text-white-0 px-4 md:px-6 max-w-screen-2xl mx-auto justify-start items-center mb-10 md:mb-16 lg:mb-20">
            {(!isFirst && !isLast) &&<div className="px-2 py-1 bg-primary-default heading-font font-black italic mx-2">{currentPage}</div>}
            {!isFirst && (
                <Link className="px-2" to={prevPage} rel="prev">
                <svg className="transform rotate-90 cursor-pointer duration-300 hover:opacity-50 scale-105" width="17.46" height="9.953" viewBox="0 0 17.46 9.953">
                    <path id="Path_24" data-name="Path 24" d="M8.73,9.953a1.219,1.219,0,0,1-.864-.358L.358,2.087A1.223,1.223,0,0,1,2.087.358L8.73,7,15.373.358A1.223,1.223,0,0,1,17.1,2.088L9.594,9.6A1.219,1.219,0,0,1,8.73,9.953Z" transform="translate(0 0)" fill="#272D3D"/>
                </svg>
                </Link>
            )}
            {!isLast && (
                <Link className="px-2" to={nextPage} rel="next">
                <svg className="transform -rotate-90 cursor-pointer duration-300 hover:opacity-50 scale-105" width="17.46" height="9.953" viewBox="0 0 17.46 9.953">
                    <path id="Path_24" data-name="Path 24" d="M8.73,9.953a1.219,1.219,0,0,1-.864-.358L.358,2.087A1.223,1.223,0,0,1,2.087.358L8.73,7,15.373.358A1.223,1.223,0,0,1,17.1,2.088L9.594,9.6A1.219,1.219,0,0,1,8.73,9.953Z" transform="translate(0 0)" fill="#272D3D"/>
                </svg>
                </Link>
            )}
        </div>
      </Layout>
    )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!, $id: String!) {
    taxonomy: contentfulTaxonomy(id: {eq: $id}) {
        title
        slug
        colour {
            colour
        }
        backgroundImage {
            localFile {
                childImageSharp {
                    fluid(fit: CONTAIN, maxWidth: 1920, quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    }
    posts: allContentfulPosts(skip: $skip, limit: $limit, filter: {taxonomyParent: {id: {eq: $id}}}) {
        nodes {
            title
            slug
            date
            categories {
              slug
              title
            }
            image {
              localFile {
                childImageSharp {
                    fluid(fit: CONTAIN, maxWidth: 550, quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
        }
    }
  }
`