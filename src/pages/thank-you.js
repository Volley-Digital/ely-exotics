import React from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/blocks/hero/hero.component";
import ReviewSnippit from "../components/elements/review-snippit/review-snippit.component";

const ThankYouPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Thank You!" />
      <Hero 
        subTitle="We'll be in touch shortly"
        title="Thank You"
        image={data.herofull.childImageSharp.fluid}
        getDirections={false}
        fullHeight={true}
        showSocial={false}
        primaryButtonText={'Back to home'}
        primaryButtonTo={'/'}
        showDropdown={false}
        marginBottom={false}
      />
      <ReviewSnippit/>
    </Layout>
  );
}

const ThankYouComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ThankYouPage props data={data} {...props} />
    )}
  />
);

ThankYouComponent.displayName = "ThankYouComponent";

const indexQuery = graphql`
  query {
    herofull: file(relativePath: { eq: "newt-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`

export default ThankYouComponent;