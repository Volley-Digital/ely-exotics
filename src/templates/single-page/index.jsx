import React from 'react'
import {graphql} from 'gatsby'

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/blocks/hero/hero.component";
import FilteredBlocks from "../../components/blocks/filtered-blocks/filtered-blocks.component";

const index = ({data}) => {
  const {page} = data
  return (
    <Layout noOverlayHeader>
      <SEO
        title={page.metaTitle ? page.metaTitle : page.title}
        description={page.childContentfulPageMetaDescriptionTextNode ? page.childContentfulPageMetaDescriptionTextNode.metaDescription : null}
      />
      <Hero 
        title={page.hero.title} 
        image={page.hero.backgroundImage.localFile.childImageSharp.fluid} 
        getDirections={page.hero.showGetDirections}
        fullHeight={page.hero.makeFullHeight}
        showSocial={page.hero.showSocialIcons}
        primaryButtonText={page.hero.primaryButtonText}
        primaryButtonTo={page.hero.primaryButtonLink}
        showDropdown={page.hero.showDropdown}
        marginBottom={page.hero.spacingBottom}
      />
      <FilteredBlocks blocks={page.blocks} />
    </Layout>
  )
}

export const query = graphql`
query($id: String!) {
  page: contentfulPage(id: {eq: $id}) {
      title
      metaTitle
      childContentfulPageMetaDescriptionTextNode {
          metaDescription
      }          
      robots  
      hero {
          spacingBottom
          showSocialIcons
          showGetDirections
          primaryButtonText
          primaryButtonLink
          title
          makeFullHeight
          showDropdown
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
      blocks {
          ... on ContentfulBgImageWithTextAndImageBlock {
            id
            title
            internal {
              type
            }
            spacingBottom
            firstCol {
              raw
            }
            secondCol {
              raw
            }
            backgroundImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            internal {
              type
            }
          }
          ... on ContentfulCategoriesShowcaseBlock {
            id
            websiteTitle
            spacingBottom
            categories {
              title
              slug
              colour {
                colour
              }
              parents {
                slug
                parents {
                  slug
                }
              }
              featuredImage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 430, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            internal {
              type
            }
          }
          ... on ContentfulInstagramBlock {
            id
            apiKey
            title
            spacingBottom
            internal {
              type
            }
          }
          ... on ContentfulNewsletterBlock {
            id
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
            spacingBottom      
            internal {
              type
            }
          }
          ... on ContentfulPageLinksBlock {
            id
            spacingBottom
            links {
              title
              url
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 430, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              icon {
                localFile {
                  url
                }
              }
            }
            internal {
              type
            }
          }
          ... on ContentfulTextImageBlock {
            id
            title
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 430, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            spacingBottom
            textItem {
              textItem
            }
            internal {
              type
            }
          }
          ... on ContentfulReviewShowcaseBlock {
            id
            stars
            amountOfReviews
            spacingBottom
            url
            reviewPlatform {
              localFile {
                childImageSharp {
                  fixed(width: 210) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
            reviews {
              title
              rating
              name
              text {
                text
              }
            }
            internal {
              type
            }
          }
          ... on ContentfulGalleryBlock {
            images {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1700)
                  fluid(maxWidth: 500, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            spacingBottom
            internal {
              type
            }
          }
          ... on ContentfulMapBlock {
            embedLink {
              embedLink
            }
            showGetDirections
            spacingBottom
            internal {
              type
            }
          }
          ... on ContentfulContactDetailsAndFormBlock {
            textBlock {
              textBlock
            }
            address {
              address
            }
            email 
            phone
            openingHours
            spacingBottom
            internal {
              type
            }
          }
          ... on ContentfulTextBlock {
            textArea {
              raw
            }
            spacingBottom
            internal {
              type
            }
          }
      }
  }
}`

export default index