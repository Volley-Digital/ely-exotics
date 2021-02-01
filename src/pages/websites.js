import React from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/pages/website/hero.component';
import Testimonials from '../components/elements/testimonials/testimonials.component';
import BenefitsListings from '../components/elements/benefits/benefits-listing.component';
import Intro from '../components/pages/website/intro.component';
import StepsList from '../components/elements/steps/steps-list.component';
import PackagesListings from '../components/elements/packages/packages-listings.component';
import Banner from '../components/elements/banner/banner.component';
import Contact from '../components/pages/home/contact.component';

import search from '../images/Website/services/web/SearchResults.svg'
import speed from '../images/Website/services/web/Speed.svg'
import contentManagment from '../images/Website/services/web/Content.svg'
import responsive from '../images/Website/services/web/Responsive.svg'
import unique from '../images/Website/services/web/Unique.svg'
import awareness from '../images/Website/services/web/Awareness.svg'
import experts from '../images/Website/services/web/Experts.svg'
import sales from '../images/Website/services/web/Sales.svg'

import standard from '../images/Website/icons/standard.svg'
import unlimited from '../images/Website/icons/unlimited.svg'
import business from '../images/Website/icons/business.svg'


const WebPage = () => (
  <StaticQuery  
    query={query}
    render={data => {
    
    let content = {
      benefits: [
        {title: "Increase in Search Results", icon: search},
        {title: "Increase in Speed", icon: speed},
        {title: "Manage Content", icon: contentManagment},
        {title: "Responsive on all devices", icon: responsive},
        {title: "Unique to your business", icon: unique},
        {title: "Increase in Awareness", icon: awareness},
        {title: "Industry experts", icon: experts},
        {title: "Increase in Sales", icon: sales},
      ],
      steps: {
        title: "How we work",
        subTitle: "Tailored to you.",
        steps: [ 
          {title: "Hello", text: "Emails are fine, and so are calls but we believe that nothing gets a project going more than meeting in person, getting together helps give us a real understanding of your goals & ideas. We want to get to know you and your customers, helping us come together and get the creative juices flowing and start to transform your ideas into a functioning digital experience."},
          {title: "Getting creative", text: "We’ll start off gathering research on your industry and customers, we’ll get to know your company and once we’re confident we understand it, we’ll then get to work mapping out the best route for your website. We’ll create a user journey to feed the user key information at crucial moments and design a site that's “on brand” and stands out . Whether it's generating more orders, more enquiries or simply brand awareness, rest assured will make the right decisions in getting the most out of your website."},
          {title: "Let's develop", text: "Now things get serious! This is when you’ll really start to see the project come to life. We understand you're busy, and you’ll want to focus on your business so we'll take it from here but don’t worry we’ll still keep you regularly updated to give you peace of mind that everything is on track.<br/><br/>Our websites are built with all the best practices and fully search engine optimised and once built, we’ll work with you to optimise your content too. This will help with search rankings and gain conversions on the website, all the good stuff!"},
          {title: "Deployment", text: "You’ve got the perfect website now and it’s time to go live, we’ll do whatever we can to assist you, need to transfer the domain from an old agency? We’ll handle that. Setting up a new domain? We’ve got you covered. we know you don't want to be doing this stuff, leave it with us and we’ll get your site live in no time."},
        ]
      },
      packages: {
        title: "Maintenance packages",
        text: "We also offer hosting and maintenance packages for your ongoing requirements to help keep your website thriving after launch",
        packages: [
          {
            title: "Standard Plan", 
            icon: standard, 
            price: 30, 
            list: [
              "Maintence",
              "Managed Updates",
              "Daily Backups",
              "Hardened Security",
            ],
            colour: 'primary'
          },
          {
            title: "Unlimited Plan", 
            icon: unlimited, 
            price: 80, 
            list: [
              "Unlimited one-off updates",
              "Maintence", 
              "Managed Updates",
              "Daily Backups",
              "Hardened Security", 
              "Reporting",
            ],
            colour: 'secondary'
          },
          {
            title: "Business Plan", 
            icon: business, 
            price: 50, 
            list: [
              "3 one-off updates",
              "Maintence",
              "Managed Updates",
              "Daily Backups",
              "Hardened Security",
              "Reporting",
            ],
            colour: 'primary'
          }
        ]
      }
    }

    return (
      <Layout noOverlayHeader>
        <SEO
          keywords={[`Website Design`, `Web Design`, `Web Apps`, `Digtial Marketing`]}
          title="Websites"
        />
        <Hero 
          title="Jaw dropping websites that get results."
          text="We build website that will help you convert more visitors into sales."
          image={data.tablet.childImageSharp.fluid}
        />
        <section className="max-w-screen-xl mx-auto mb-10 md:mb-20 lg:mb-28 flex flex-wrap px-6 md:px-8 ">
          <div className="w-full md:w-5/12 md:pr-4 lg:pr-6 mb-5 md:mb-0">
            <h2 className="text-3xl md:text-4xl text-primary-default font-semibold mb-2 md:mb-4">Web Design Based in Ely, Cambridgeshire</h2>
            <p className="text-lg md:text-2xl text-black-default max-w-3xl font-light">It's what we do best.</p>
          </div>
          <div className="w-full md:w-7/12">
            <p className="font-light">
              We don't just design websites, we design great customer experiences. we focus on converting your website visitors into actual leads and sales, giving you real tracked and targeted results. 
              <br/><br/>
              We'll get to know your business, tailoring a unique web experience that focuses on goals and sales that will help you convert your visitors into sales and conversions, adding real value the website and your business. 
            </p>
          </div>
        </section>
        <BenefitsListings 
          title="Benefits to you"
          text="Our websites are built for results. We’ll keep people on your website for longer, engaging and guiding them, telling a story, feeding them critical information at key moments and ultimately getting more sales and conversions as a result."
          benefits={content.benefits}
        />
        <Intro 
          title="Why Choose Us?"
          subTitle="We’re a no-nonsense agency that focuses on results."
          text="Many other web agencies get too focused on the technical aspects of  building a website, how fast it is and how beautiful it looks. And Yes, while these things should be taken seriously (and we do take them very seriously) we focus our efforts on getting results. Generating more sales, enquiries and prospects by breaking down your target audience and goals, establishing what information your audience wants to see and how best to display that information to them and ways to gain the users trust."
          link={{
            text: 'Lets get started',
            url: "/contact",
            color: "secondary"
          }}
          image={data.choose.childImageSharp.fluid}
        />
        <Testimonials />
        <StepsList {...content.steps} />
        <PackagesListings {...content.packages} />
        <Banner 
          title="Need help with content writing?" 
          text="Our strategy session will help your understand you audience's needs and problems, from there you can either write the content yourself or we can do it!"
          image={{
            alt: "Need help with content and marketing?",
            src: data.social.childImageSharp.fluid
          }}
          link1={{
            text: "Get in touch",
            url: "/contact",
            color: "secondary"
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

export default WebPage;

const query = graphql`
  query {
    tablet: file(relativePath: { eq: "Website/services/web/tablet-and-mobile-mock2.png" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    choose: file(relativePath: { eq: "Website/services/web/why-choose.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    social: file(relativePath: { eq: "Website/services/web/socialmedia.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`