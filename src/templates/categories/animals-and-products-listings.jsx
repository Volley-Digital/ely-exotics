import React from 'react'
import {graphql} from 'gatsby'

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/categories/category-hero.component";
import Newsletter from '../../components/blocks/newsletter/newsletter.component';
import FeaturedAnimalListings from '../../components/animals/featured-animal-listings/featured-animal-listings.component';

export default ({data}) => {
  const {category} = data
  return (
    <Layout noOverlayHeader>
      <SEO
      title={category.title}
    />
      <Hero 
        title={category.title}
        text={category.text.text}
        image={category.backgroundImage.localFile.childImageSharp.fluid}
        pdf={category.pdfLink ? category.pdfLink.file.url : null}
      />
       {category.animal ? 
        <div className="bg-black-default -mt-24 md:-mt-32">
          <FeaturedAnimalListings animals={category.animal} colour={category.colour.colour}/>
        </div>
      :  
        <div className="pt-10 pb-10 md:pt-20 md:pb-20 px-4 text-center">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black italic">{category.title} Coming Soon!</h2>
          <p>Sorry we currently don't have our stock avaliable on the website- visit us in store or give us a call to see our stock</p>
        </div> 
      }
      <Newsletter 
        title={category.newsletter.heading} 
        text={category.newsletter.text}
        image={category.newsletter.image.localFile.childImageSharp.fluid} 
        bgColour={category.colour.colour}
      />
    </Layout>
  )
}

export const query = graphql`
query($id: String!) {
  category: contentfulCategories(id: {eq: $id}) {
    title
    colour {
      colour
    }
    subItemsText
    text {
      text
    }
    pdfLink {
      file {
        url
      }
    }
    animal {
      title
      slug
      latin
      type
      price
      additionalPriceText
      inStock
      parentCategory {
        colour {
          colour
        }
        slug
        parents {
          slug
          parents {
            slug
            parents {
              slug
            }
          }
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
    backgroundImage {
        localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
    }
    newsletter {
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
  }
}`