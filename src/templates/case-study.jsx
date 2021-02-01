import React from 'react'
import {graphql} from 'gatsby'

import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleImageBanner from "../components/elements/title-banner/title-banner-image.component";
import TitleAndText from "../components/elements/title-and-text.component";
import Testimonial from "../components/elements/testimonials/testimonial.component";
import ImageSlider from "../components/elements/image-slider.component";
import OutcomesList from '../components/elements/outcomes/outcomes-list.component';
import RelatedCaseStudies from "../components/elements/case-studies/related-case-studies.component"
import Banner from '../components/elements/banner/banner.component';
import Contact from '../components/pages/home/contact.component';

export default ({data}) => {
    const {page} = data
    return (
        <Layout noOverlayHeader>
            <SEO
            keywords={[`Website Design`, `Web Design`, `Web Apps`, `Digtial Marketing`]}
            title={page.title}
            />
            <TitleImageBanner 
                title={page.title}
                subTitle="Case Study"
                stars={page.rating}
                image={page.mainImage.localFile.childImageSharp.fluid}
                parent="case-studies"
                website={page.website}
            />
            {page.overview &&
                <div className="max-w-screen-xl mx-auto px-6 md:px-8 mb-10 md:mb-12 lg:mb-16">
                    {page.overview.overview && <p className="text-xl md:text-3xl leading-normal">{page.overview.overview}</p> }
                </div>
            }
            <div className="max-w-screen-xl mx-auto flex flex-wrap mb-10 md:mb-12 lg:mb-16">
                 {page.testimonial &&
                    <div className="w-full md:flex-1 md:px-8 text-center">
                        <div className="bg-white-100 py-10 md:py-12 px-6 md:px-8">
                            <svg opacity="0.5" className="mx-auto" width="50px" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 512 512" >
                            <g>
                                <g>
                                    <path fill="#443E8A" d="M477.626,230.931c-21.458-21.851-49.904-34.501-80.375-35.812C397.107,193.215,397,190.591,397,187
                                        c0-14.712,11.188-59.665,18.241-84.544L422.458,77h-87.584l-5.867,9.453C326.68,90.203,272,179.852,272,315
                                        c0,66.168,53.832,120,120,120s120-53.832,120-120C512,283.359,499.792,253.503,477.626,230.931z M392,395
                                        c-44.112,0-80-35.888-80-80c0-99.32,32.836-172.834,45.812-198h12.129C364.194,139.584,357,171.041,357,187
                                        c0,12.664,0.94,22.838,5.531,31.33c4.089,7.564,12.641,16.573,30.183,16.669l0.873,0.022C436.824,235.859,472,271.737,472,315
                                        C472,359.112,436.112,395,392,395z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#443E8A" d="M205.626,230.931c-21.458-21.851-49.904-34.501-80.375-35.812C125.107,193.215,125,190.591,125,187
                                        c0-14.712,11.188-59.665,18.241-84.544L150.458,77H62.874l-5.867,9.453C54.68,90.203,0,179.852,0,315c0,66.168,53.832,120,120,120
                                        s120-53.832,120-120C240,283.359,227.792,253.503,205.626,230.931z M120,395c-44.112,0-80-35.888-80-80
                                        c0-99.32,32.836-172.834,45.812-198h12.129C92.194,139.584,85,171.041,85,187c0,12.664,0.94,22.838,5.531,31.33
                                        c4.089,7.564,12.641,16.573,30.183,16.669l0.873,0.022C164.824,235.859,200,271.737,200,315C200,359.112,164.112,395,120,395z"/>
                                </g>
                            </g>
                            </svg>

                            <span className="text-primary-default text-3xl block font-semibold heading-font">{page.testimonial.name}</span>
                            <span className="text-xl block mb-4">{page.testimonial.company}</span>
                            <p className="max-w-2xl md:text-lg mx-auto">{page.testimonial.text.text}</p>
                        </div>
                    </div>
                }
            </div>
            <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                {page.imageGallery && <ImageSlider shadow images={page.imageGallery} />}
            </div>
            <div className="mb-10 md:mb-20 lg:mb-28">
                {page.goals && 
                    <div className="max-w-screen-xl mx-auto">
                        <TitleAndText title="Goals of the project" text={page.goals.goals}/>
                    </div>
                }
                {page.challenges &&
                    <div className="max-w-screen-xl mx-auto">
                        <TitleAndText title="Challenges" text={page.challenges.challenges}/>
                    </div>
                }
                {page.solutions &&
                    <div className="max-w-screen-xl mx-auto mb-10 md:mb-20 lg:mb-28">
                        <TitleAndText title="Solutions" text={page.solutions.solutions}/>
                    </div>
                }
            </div>
            <div className={`${page.proofImages ? 'bg-grey-cut' : 'bg-white-100 pb-5 md:pb-10 md:pt-20 mb-10 md:mb-20 lg:mb-28'} pt-10 md:pt-20`}>
                {page.outcomes && <OutcomesList title="Outcomes" outcomes={page.outcomes}/>}
                <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    {page.proofImages && <ImageSlider shadow images={page.proofImages} /> }
                </div>
            </div>
            <RelatedCaseStudies title="See more projects" caseStudies={page.relatedProjects} />
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
}

export const query = graphql`
    query($id: String!) {
        website: file(relativePath: { eq: "Website/need-a-new.jpg" }) {
            childImageSharp {
              fluid(quality: 50, maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
        page: contentfulCaseStudies(id: {eq: $id}) {
            title
            rating
            overview {
                overview
            }
            about {
                about
            }
            website
            goals {
                goals
            }
            challenges {
                challenges
            }
            solutions {
                solutions
            }
            testimonial {
                name
                company
                rating
                text {
                  text
                }
                icon {
                    file {
                      url
                    }
                  }
            }
            outcomes {
                title
                value
                description
            }
            relatedProjects {
                title
                slug
                rating
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
            imageGallery {
                title
                localFile {
                    childImageSharp {
                        fluid(fit: CONTAIN, maxWidth: 1100, quality: 80) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            proofImages {
                title
                localFile {
                    childImageSharp {
                        fluid(fit: CONTAIN, maxWidth: 1100, quality: 80) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            mainImage {
                localFile {
                    childImageSharp {
                        fluid(fit: CONTAIN, maxWidth: 1920, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`