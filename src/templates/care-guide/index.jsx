import React from 'react'
import {graphql} from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import Img from 'gatsby-image';

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import HeroCare from "../../components/care-guides/hero-care/hero-care.component";
import Newsletter from '../../components/blocks/newsletter/newsletter.component';
import Overview from '../../components/care-guides/overview/overview.component';
import OverviewItem from '../../components/care-guides/overview/overview-item.component';
import TipsList from '../../components/care-guides/tips/tips-list.component';
import Accordian from '../../components/elements/accordian/accordian.component';
import Table from '../../components/elements/table/table.component';

import setSlug from '../../utils/setSlug';

export default ({data}) => {
  const {page} = data

  return (
    <Layout noOverlayHeader>
        <SEO
        title={`Care Guide: ${page.animalTitle}`}
        />
        <HeroCare 
          subTitle="Care Guide For"
          title={page.animalTitle} 
          image={page.backgroundImage.localFile.childImageSharp.fluid} 
          colour={page.relatedCategory.colour.colour}
          relatedAnimal={setSlug(page.productPage.slug, page.productPage)}
        />
        <Overview items={page.overviewItems} />
        {(page.intro || page.equipmentItemsNeeded) && <div className="bg-black-default mb-10 md:mb-16 md:mb-20">
          <section className="max-w-screen-2xl mx-auto relative z-10 text-white-0 px-6 md:px-8 pt-10 pb-4 md:py-16 lg:pt-20 flex flex-wrap">
            {page.intro && <div className="w-full md:w-1/2 md:pr-4 lg:pr-8 mb-5">
              <h4 className="text-2xl md:text-3xl font-black italic mb-5 leading-tight">Introduction</h4>
              <div className="blog">
                {renderRichText(page.intro)}
              </div>
            </div>}
            {page.equipmentItemsNeeded && <div className="w-full md:w-1/2 md:pl-4 lg:pl-8">
              <h4 className="text-2xl md:text-3xl font-black italic mb-5 leading-tight">Equipment Needed</h4>
              <div className="flex flex-wrap justify-center md:justify-start">
                {page.equipmentItemsNeeded.map((item, i) => <div key={i} className="md:w-1/3 mb-10">
                    <OverviewItem {...item} size="large" />
                  </div>
                )}
              </div>
            </div>}
          </section>
        </div>}
        {(page.types || page.beforeBuying || page.healthCheckPoints) && <section className="max-w-screen-2xl mx-auto relative z-10 px-5 md:px-7 mb-10 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-4 lg:pr-8">
            {page.types && <h4 className="text-2xl md:text-3xl font-black italic mb-5 leading-tight px-1">Types</h4>}
            <div className="blog flex flex-wrap">
              {page.types && renderRichText(page.types, typeOptions)}
            </div>
          </div>
          {(page.beforeBuying || page.healthCheckPoints) && <div className="w-full md:w-1/2 md:pl-4 lg:pl-8">
            <h4 className="text-2xl md:text-3xl font-black italic mb-5 leading-tight  px-1">Buying {page.animalTitle}</h4>
            {page.beforeBuying && <ol className="list-alpha mb-5  px-1">
              <span className="block text-xl font-bold">Check before buying:</span>
              {page.beforeBuying.map(item => <li className="ml-5" key={item}>{item}</li>)}
            </ol>}
            {page.healthCheckPoints && <ul className="list-numbers  px-1">
              <span className="block text-xl font-bold">{page.healthCheckPoints.length} point animal health check:</span>
              {page.healthCheckPoints.map(item => <li className="ml-5" key={item}>{item}</li>)}
            </ul>}
          </div>}
        </section>}
        {page.topTips && <TipsList title="Top tips" tips={page.topTips} />}
        {page.information && <section className="blog max-w-screen-2xl mx-auto relative z-10 px-6 md:px-8 mb-10">
          {renderRichText(page.information)}
        </section>}
        {page.table && <section className="max-w-screen-2xl mx-auto relative z-10 px-6 md:px-8 mb-10 overflow-x-scroll md:overflow-x-auto">
          {page.table.tableData && <Table rows={page.table.tableData} />}
        </section>}
        {page.additionalInformation && <section className="blog max-w-screen-2xl mx-auto relative z-10 px-6 md:px-8 mb-10 mb:mb-16 lg:mb-20">
          {renderRichText(page.additionalInformation)}
        </section>}
        {page.faqs && <div className="bg-black-default text-white-0 relative z-10">
          <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-10 md:py-16 lg:py-20">
          <Accordian title="FAQs" questions={page.faqs} />
          </section>
        </div>}
        <Newsletter 
            title={page.newsletter.heading} 
            text={page.newsletter.text}
            image={page.newsletter.image.localFile.childImageSharp.fluid} 
            bgColour={page.relatedCategory.colour.colour}
        />
    </Layout>
  )
}

const typeOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="w-full px-1">{children}</p>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      console.log(node)
      const {
          localFile: { childImageSharp },
        title,
      } = node.data.target
    
      return <div className="w-full md:w-1/2 flex-grow text-white-0 mb-2 px-1">
        <Img fluid={childImageSharp.fluid} alt={title} />
        <span className="block p-3 bg-black-default heading-font font-black italic ">{title}</span>
      </div>
    },
  },
}

export const query = graphql`
query($id: String!) {
  page: contentfulCareGuides(id: {eq: $id}) {
      animalTitle
      overviewItems {
        title
        text
      }
      relatedCategory {
        colour {
          colour
        }
      }
      productPage {
        ... on ContentfulAnimal {
          slug
          parentCategory {
            slug
            parents {
              slug
              parents {
                slug
                parents {
                  slug
                }
              }
            }
          }
        }
        ... on ContentfulCategories {
          slug
          parents {
            slug
            parents {
              slug
              parents {
                slug
              }
            }
          }
        }
      }
      intro {
        raw
        
      }
      equipmentItemsNeeded {
        title
        text
      }
      types {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            localFile {
              childImageSharp {
                      fluid(fit: CONTAIN, maxWidth: 1100, quality: 80) {
                          ...GatsbyImageSharpFluid_withWebp
                      }
                  }
              }
          }
      }
      }
      beforeBuying
      healthCheckPoints
      topTips
      information {
        raw
      }
      table {
        tableData
      }
      additionalInformation {
        raw
      }
      faqs {
        title
        text {
          text
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
        internal {
          type
        }
      }
    }
}`