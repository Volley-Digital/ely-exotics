import React from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleBanner from "../components/elements/title-banner/title-banner.component";
import FilteredPosts from "../components/elements/blog/filtered-posts.component"
import Banner from '../components/elements/banner/banner.component';
import Contact from '../components/pages/home/contact.component';



const NewsPage = () => (
  <StaticQuery  
    query={query}
    render={data => {
    const {posts, categories} = data
    return (
      <Layout noOverlayHeader>
        <SEO
          title="News"
        />
        <TitleBanner 
          title="Get the latest from us and the digital space"
          subTitle="News"
          colour="primary"
        />
        <FilteredPosts blogPosts={posts.nodes} categories={categories.nodes} />
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

export default NewsPage;

const query = graphql`
  query {
    website: file(relativePath: { eq: "Website/need-a-new.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    posts: allContentfulBlogPost {
        nodes {
            title
            slug
            categories {
                title
                id
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
    categories: allContentfulCategories {
        nodes {
            title
            id
            blog_post {
                id
            }
        }   
    }
  }
`