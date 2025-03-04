import React from 'react'
import {graphql} from 'gatsby'

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/categories/category-hero.component";
import CategoryListing from '../../components/blocks/categories/category-listing.component';
import Newsletter from '../../components/blocks/newsletter/newsletter.component';
import ReviewsList from '../../components/blocks/reviews/reviews-list.component';
import ReviewSnippit from '../../components/elements/review-snippit/review-snippit.component';

export default ({data}) => {
  const {category, reviews} = data
  return (
    <Layout noOverlayHeader>
      <SEO
      title={category.title}
    />
      <Hero 
        title={category.title}
        text={category.text.text}
        image={category.backgroundImage.localFile.childImageSharp.fluid}
        showSocial
        phone="01353 655 794"
        pdf={category.pdfLink ? category.pdfLink.file.url : null}
      />
      <ReviewSnippit bgColour={category.colour.colour} />
      {category.categories ? 
        <div className="pt-10 pb-6 md:pt-20 md:pb-10">
          <CategoryListing 
            title={category.subItemsText} 
            categories={category.categories}
          />
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
      <ReviewsList 
        image={reviews.reviewPlatform.localFile.childImageSharp.fixed} 
        reviews={reviews.reviews} 
        amountOfReviews={reviews.amountOfReviews} 
        stars={reviews.stars}
        marginBottom={reviews.spacingBottom}
        url={reviews.url}
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
    categories {
        title
        slug
        colour {
          colour
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
        parents {
          slug
          parents {
            slug
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
    }
  }
  reviews: contentfulReviewShowcaseBlock(id: {eq: "db5413bf-9b9f-5b63-92e8-517379fa305f"}) {
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
  }
}`