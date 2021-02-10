import React from "react";
import { Link, graphql} from "gatsby"

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/care-guides/hero-care/hero-care.component";
import Newsletter from "../../components/blocks/newsletter/newsletter.component";
import CareGuideListings from "../../components/care-guides/listings/care-guide-listing.component";

export default ({data, pageContext}) => {
    const {careGuides, background, newsletter} = data
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/care-guides" : `/care-guides/${(currentPage - 1).toString()}`
    const nextPage = `/care-guides/${(currentPage + 1).toString()}`
    console.log(isLast, isFirst)
    return (
        <Layout noOverlayHeader>
        <SEO
          title="Care Guides"
        />
        <Hero 
            title="Care Guides"
            image={background.childImageSharp.fluid}
            small
        />
        <div className="bg-black-default pt-10 md:pt-16 lg:pt-20 pb-8 md:pb-14 lg:pb-18">
          <CareGuideListings careGudies={careGuides.nodes} />
          <div className="flex flex-wrap text-white-0 px-4 md:px-6 max-w-screen-2xl mx-auto items-center">
            {(!isFirst && !isLast) && <div className="px-2 py-1 bg-primary-default heading-font font-black italic mx-2">{currentPage}</div>}
            {!isFirst && (
              <Link className="px-2" to={prevPage} rel="prev">
                <svg className="transform rotate-90 cursor-pointer duration-300 hover:opacity-50 scale-105" width="17.46" height="9.953" viewBox="0 0 17.46 9.953">
                  <path id="Path_24" data-name="Path 24" d="M8.73,9.953a1.219,1.219,0,0,1-.864-.358L.358,2.087A1.223,1.223,0,0,1,2.087.358L8.73,7,15.373.358A1.223,1.223,0,0,1,17.1,2.088L9.594,9.6A1.219,1.219,0,0,1,8.73,9.953Z" transform="translate(0 0)" fill="#fff"/>
                </svg>
              </Link>
            )}
            {!isLast && (
              <Link className="px-2" to={nextPage} rel="next">
                <svg className="transform -rotate-90 cursor-pointer duration-300 hover:opacity-50 scale-105" width="17.46" height="9.953" viewBox="0 0 17.46 9.953">
                  <path id="Path_24" data-name="Path 24" d="M8.73,9.953a1.219,1.219,0,0,1-.864-.358L.358,2.087A1.223,1.223,0,0,1,2.087.358L8.73,7,15.373.358A1.223,1.223,0,0,1,17.1,2.088L9.594,9.6A1.219,1.219,0,0,1,8.73,9.953Z" transform="translate(0 0)" fill="#fff"/>
                </svg>
              </Link>
            )}
          </div>
        </div>
        <Newsletter 
            title={newsletter.heading} 
            text={newsletter.text}
            image={newsletter.image.localFile.childImageSharp.fluid} 
            bgColour="F2F7E9"
            light
        />
      </Layout>
    )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    careGuides: allContentfulCareGuides(skip: $skip, limit: $limit) {
        nodes {
          slug
          animalTitle
          relatedCategory {
            title
            id
          }
        }
    }
    background: file(relativePath: { eq: "newt-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    newsletter: contentfulNewsletterBlock(id: {eq: "32255973-9d5f-51b9-8033-a3b150698a5c"}) {
        heading
        text
        image {
            localFile {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }  
    }
  }
`