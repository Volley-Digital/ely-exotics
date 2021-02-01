import React from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleBanner from "../components/elements/title-banner/title-banner.component";
import CaseStudiesListing from "../components/elements/case-studies/case-studies-listings.component"
import Banner from '../components/elements/banner/banner.component';
import Contact from '../components/pages/home/contact.component';



const CaseStudies = () => (
  <StaticQuery  
    query={query}
    render={data => {
    const {caseStudies} = data
    return (
      <Layout noOverlayHeader>
        <SEO
          title="Case Studies"
        />
        <TitleBanner 
          title="Check out some of our latest work"
          subTitle="Case Studies"
          colour="primary"
        />
        <CaseStudiesListing caseStudies={caseStudies.nodes} />
        <Banner 
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
        <Contact 
          title="Lets talk"
          text="we would love to show you how we could help grow your business online."
          openingHours="Hours: Monday - Friday: 8:00am - 5:30pm"
          phone="07954 047 882"
          email="hello@volley.digital"
        />
      </Layout>
    )
  }} />
)

export default CaseStudies;

const query = graphql`
  query {
    website: file(relativePath: { eq: "Website/need-a-new.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    caseStudies: allContentfulCaseStudies {
        nodes {
            rating
            slug
            title
            thumbnail {
                localFile {
                    childImageSharp {
                        fluid(fit: CONTAIN, maxWidth: 430, quality: 60) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
  }
`