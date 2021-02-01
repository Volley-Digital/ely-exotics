import React from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/pages/home/hero.component';
import LogosList from '../components/elements/logos/logos-list.component';
import Intro from '../components/pages/home/intro.component';
import Services from '../components/pages/home/services.component';
import Testimonials from '../components/elements/testimonials/testimonials.component';
import CaseStudiesIntro from '../components/elements/case-studies/case-studies-intro.component';
import BlogIntro from '../components/elements/blog/blog-intro.component';
import Banner from '../components/pages/home/banner.component';
import Contact from '../components/pages/home/contact.component';

import logo1 from '../images/Website/clients/sidbibby.jpg';
import logo2 from '../images/Website/clients/pure.jpg';
import logo3 from '../images/Website/clients/rbl.jpg';
import logo4 from '../images/Website/clients/mabio.jpg';
import logo5 from '../images/Website/clients/yorwarths.jpg';

import growth from '../images/Website/icons/growth.svg'
import affordable from '../images/Website/icons/affordable.svg'
import results from '../images/Website/icons/results.svg'

import webDesign from '../images/Website/icons/web-design.svg'
import digitalMarketing from '../images/Website/icons/digital-marketing.svg'
import socialManagment from '../images/Website/icons/social-media-managment.svg'
import brandingGraphics from '../images/Website/icons/branding-and-graphics.svg'

const IndexPage = () => (
  <StaticQuery  
    query={query}
    render={data => {

    let content = {
      intro: [
        {title: 'Growth', icon: growth},
        {title: 'Affordable', icon: affordable},
        {title: 'Results', icon: results}
      ],
      serviceSection: {
        subTitle: "our services",
        title: "What we can do for your business",
        text: "We offer complete digital solutions for your business. From Websites & Hosting to Marketing & Branding, we'll tailor our services to you.",
        services: [
          {title: "Web Design", icon: webDesign, url: '/web-design', image: data.web.childImageSharp.fluid},
          {title: "Digital Marketing", icon: digitalMarketing, url: '/digital-marketing', image: data.digital.childImageSharp.fluid},
          {title: "Social Media Managment", icon: socialManagment, url: '/social-media-management', image: data.social.childImageSharp.fluid},
          {title: "Branding & Graphics", icon: brandingGraphics, url: '/branding-and-graphics', image: data.graphics.childImageSharp.fluid},
        ],
        link: {
          url: "/services",
          text: "find out more"
        }
      },
      caseStudiesSection: {
        subTitle: "our work",
        title: "client success stories",
        caseStudies: data.caseStudies.nodes,
        button: {
          text: "view all",
          url: "/case-studies",
          color: "secondary"
        }
      },
      blogSection: {
        title: "Featured posts", 
        blogPosts: data.posts.nodes,
        button:  {
          text: "view all",
          url: "/news",
          color: "primary"
        }
      }
    }
    
    return (
      <Layout>
        <SEO
          keywords={[`Website Design`, `Web Design`, `Web Apps`, `Digtial Marketing`]}
          title="Home"
        />
        <Hero 
          title="Websites that are built for results."
          text="Convert more visitors into sales, market to the right people and get real results."
          image={data.vimage.childImageSharp.fluid}
          link={{
            text: 'show me how',
            url: '/websites'
          }}
        />
        <LogosList logos={[logo1, logo2, logo3, logo4, logo5]} />
        <Intro 
          image={data.introImg.childImageSharp.fluid}
          subTitle={`we are <em class="heading-font font-bold text-secondary-default">volley digital.</em>`}
          title="A digital agency for local businesses"
          text="We're a full service digital agency that delivers personal digital experiences to connect and engage with audiences all across the UK. We work together with our clients. Learning their business goals and needs, how to make personal connections with their audience to gain trust. This leads to more conversions and sales across all digital platforms, giving the edge over their competitors."
          link={{
            text: "contact",
            url: "/contact",
            color: "secondary"
          }}
          icons={content.intro}
        />
        <CaseStudiesIntro {...content.caseStudiesSection} />

        {/* <Services 
          {...content.serviceSection}
        /> */}
        <Testimonials />
        <BlogIntro showIcon {...content.blogSection} />
        <Banner 
          title="Captivate you audience and gain new customers" 
          text="Generating more sales, enquiries and prospects by breaking down your target audience and goals, establishing what information your audience wants to see, how best to display that information to them and ways to gain the users trust."
          link1={{
            text: "book a meeting",
            url: "/meeting",
            color: "secondary"
          }}
          link2={{
            text: "find out more",
            url: "/websites",
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

export default IndexPage;

const query = graphql`
  query {
    vimage: file(relativePath: { eq: "Website/v-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    introImg: file(relativePath: { eq: "Website/local-agency.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    web: file(relativePath: { eq: "Website/services/webs-design.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    digital: file(relativePath: { eq: "Website/services/digital-marketing.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    social: file(relativePath: { eq: "Website/services/social-media-management.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    graphics: file(relativePath: { eq: "Website/services/branding-and-graphics.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pure: file(relativePath: { eq: "Website/clients/pureely-thumbnail.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sid: file(relativePath: { eq: "Website/clients/sid-bibby-thumbnail.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    yorwarths: file(relativePath: { eq: "Website/clients/yorwarth-thumbnail.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    caseStudies: allContentfulCaseStudies(limit: 3) {
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
    posts: allContentfulBlogPost(limit: 3) {
      nodes {
        title
        categories {
          title
        }
        slug
        createdAt
        featuredImage {
          localFile {
            childImageSharp {
              fluid(fit: CONTAIN, maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`