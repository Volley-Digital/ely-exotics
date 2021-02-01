import React from "react";
import { graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleBanner from "../components/elements/title-banner/title-banner.component";
import Values from "../components/pages/about/values.component";
import TestimonialsWithText from "../components/elements/testimonials/testimonials-and-text.component";
import StandoutsListings from "../components/elements/standouts/standouts-listings.component";

import Banner from '../components/elements/banner/banner.component';
import Contact from '../components/pages/home/contact.component';

import tech from '../images/Website/icons/tech.svg'
import passion from '../images/Website/icons/passion.svg'
import affordable from '../images/Website/icons/affordable.svg'


const AboutPage = () => (
  <StaticQuery  
    query={query}
    render={data => {
    
    let content = {
      values: {
        title: "Our values",
        text: " We pride ourselves on our results and love helping our clients achieve their digital goals. Our personal team loves getting to know each and every one of our clients and their businesses. We feel that the connection we create with our clients is what makes us so effective at delivering great results and long term success.",
        values: [
          {number: 1, title: "Communication", text: "We always keep constant communication"},
          {number: 2, title: "Honesty", text: "We're always honest about what we can do"},
          {number: 3, title: "Passion", text: "We always put our all into every single project"},
          {number: 4, title: "Results", text: "We always deliver real tracked results"},
        ]
      },
      standouts: {
        title: "Why we stand out",
        standouts: [
          {icon: tech, title: "Cutting edge technology & approach", text: "We're leading the way creating modern and effective websites. Delivering on the results and untimatly giving you more business."},
          {icon: passion, title: "Passion for our clients", text: "We absolutely love each and every one of our clients. You'll get a specialised approach no matter how big or small the project."},
          {icon: affordable, title: "Affordable", text: "A great websites shouldn't cost you the world. We've create the perfect strategy for creating cost effective websites."},
        ],
        link: {
          url: "/contact",
          text: "contact us",
          colour: "secondary"
        }
      }
    }

    return (
      <Layout noOverlayHeader>
        <SEO
          keywords={[`About Volley Digital`,]}
          title="About"
        />
        <TitleBanner 
          title="A small digital agency making a big impression"
          subTitle="About us"
          colour="primary"
        />
        <section className="md:px-6 lg:px-0 max-w-screen-xl mx-auto flex flex-wrap mb-10 md:mb-20 lg:mb-28">
          <div className="w-full md:w-1/2 px-6 md:px-3 lg:px-8 mb-5 md:mb-0">
            <Img className="rounded-3xl" fluid={data.about.childImageSharp.fluid} alt="Volley Digital Website on Laptop" />
          </div>
          <div className="w-full md:w-1/2 px-6 md:px-3 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-primary-default font-semibold max-w-sm mb-4 md:mb-6">Who are we?</h2>
            <p>
              We're <strong>Volley Digital</strong>, a small, all purpose digital design startup based in Ely, Cambridgeshire. We're industry experts in technology and digital marketing to small/medium size businesses.
              <br/><br/>
              After working within the industry for over 7 years Dan (Our Director) gained a lot of insight and knowledge. He's ambition was to always start his own web agency. Initially working weekends and long nights before finally deciding to go full time in May, 2020.
            </p>
          </div>
        </section>
        <Values {...content.values} />
        <TestimonialsWithText 
          title="Our clients love us"
          text="We love getting to know our clients. Our business is all about forming great, long lasting relationships, being part of the team & growing alongside you. We truly feel that we’re not just another digital agency but an extension of your business.<br/>
          You won't have to worry about being left in the dark for weeks, struggling to speak to someone. We’ll constantly keep you updated and always love to hear your feedback.<br/> 
          We want happy clients that can put their trust and faith in what we do. We want you to feel confident, knowing that if you give us a project, you don't have to worry, we’ll deliver. That’s what we’re all about."
          colour="secondary"
        />
        <StandoutsListings {...content.standouts} />
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

export default AboutPage;

const query = graphql`
  query {
    website: file(relativePath: { eq: "Website/need-a-new.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about: file(relativePath: { eq: "Website/about.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`