import React from 'react'
import {graphql} from 'gatsby'

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/animals//hero/hero.component";
import Newsletter from '../../components/blocks/newsletter/newsletter.component';
import CareSheetsListings from '../../components/animals/care-sheets/care-sheets-listings.component';

export default ({data}) => {
  const {animal} = data
  return (
    <Layout noOverlayHeader>
      <SEO
      title={animal.title}
    />
      <Hero 
        title={animal.title}
        inStock={animal.inStock}
        subTitle={animal.sideText}
        text={animal.content}
        image={animal.backgroundImage.localFile.childImageSharp.fluid}
        colour={animal.parentCategory.colour.colour}
        phone="01353 655 794"
      />
      <CareSheetsListings careSheets={animal.careSheets} />
      <Newsletter 
        title={animal.newsletter.heading} 
        text={animal.newsletter.text}
        image={animal.newsletter.image.localFile.childImageSharp.fluid} 
        bgColour={animal.parentCategory.colour.colour}
      />
    </Layout>
  )
}

export const query = graphql`
query($id: String!) {
  animal: contentfulAnimal(id: {eq: $id}) {
    title
    inStock
    sideText
    content {
        raw
    }
    careSheets {
        animalTitle
        slug
    }
    parentCategory {
        colour {
          colour
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
    }
  }
}`