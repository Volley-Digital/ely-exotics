import React from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/blocks/hero/hero.component";
import ReviewSnippit from "../components/elements/review-snippit/review-snippit.component";

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Hero 
        title="Opps this page cant be found"
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

const NotFoundComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <NotFoundPage props data={data} {...props} />
    )}
  />
);

NotFoundComponent.displayName = "NotFoundComponent";

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

export default NotFoundComponent;