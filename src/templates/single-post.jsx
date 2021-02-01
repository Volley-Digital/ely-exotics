import React from 'react'
import {graphql} from 'gatsby'
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'

import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleBgImageBanner from "../components/elements/title-banner/title-banner-bg-image.component";
import BlogIntro from '../components/elements/blog/blog-intro.component';
import Banner from '../components/elements/banner/banner.component';

export default ({data}) => {
    const {page} = data
    return (
        <Layout noOverlayHeader>
            <SEO
            keywords={[`Website Design`, `Web Design`, `Web Apps`, `Digtial Marketing`]}
            title={page.title}
            />
             <TitleBgImageBanner 
                title={page.title}
                subTitle={page.categories[0].title}
                image={page.featuredImage.localFile.childImageSharp.fluid}
                parent="news"
            />
            <div className="blog max-w-screen-xl mx-auto px-6 md:px-8 mb-10 md:mb-20 lg:mb-28">
                {page.content && renderRichText(page.content, options)}
            </div>
            <Banner 
                noMargin={!page.relatedPosts}
                title="Need a new website?" 
                text="Find out how you could increase sales and conversions and grow your business."
                image={{
                    alt: "Laptop with a website on it",
                    src: data.website.childImageSharp.fluid
                }}
                link1={{
                    text: "find out more",
                    url: "/websites",
                    color: "secondary"
                }}
                link2={{
                    text: "contact",
                    url: "/contact",
                    color: "white"
                }}
            />
            {page.relatedPosts && 
                <div className="max-w-screen-xl mx-auto">
                    <BlogIntro title="Related Posts" blogPosts={page.relatedPosts} />
                </div>
            }
        </Layout>
    )
}

const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const {
            localFile: { childImageSharp },
          title,
        } = node.data.target

        return <Img fluid={childImageSharp.fluid} alt={title} />
      },
    },
  }

export const query = graphql`
    query($id: String!) {
        website: file(relativePath: { eq: "Website/need-a-new.jpg" }) {
            childImageSharp {
              fluid(quality: 50, maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
        page: contentfulBlogPost(id: {eq: $id}) {
            title
            content {
                raw
                references {
                    ... on ContentfulAsset {
                      contentful_id
                      __typename
                      title
                      localFile {
                        childImageSharp {
                                fluid(fit: CONTAIN, maxWidth: 1100, quality: 80) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
            categories {
                title
            }
            featuredImage {
                localFile {
                    childImageSharp {
                        fluid(fit: CONTAIN, maxWidth: 1920, quality: 80) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            relatedPosts {
                title
                slug
                categories {
                  title
                }
                featuredImage {
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