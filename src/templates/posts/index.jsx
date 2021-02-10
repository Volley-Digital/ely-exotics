import React, {useState, useEffect} from 'react'
import {graphql, Link} from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import Img from 'gatsby-image';
import Sticky from 'react-stickynode';

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/blocks/hero/hero.component";
import CategoryItem from '../../components/categories/category-item.component';
import Newsletter from '../../components/blocks/newsletter/newsletter.component';
import RelatedPosts from '../../components/posts/related-posts/related-posts.component';
import YoutubePopUp from '../../components/elements/youtube-popup/youtube-popup.component';

export default ({data}) => {
  let [isMobile, setIsMobile] = useState(true)

  const checkMobile = () => {
    if (window.innerWidth <= 767) {
        setIsMobile(false)
    } else {
        setIsMobile(true)
    }
  }

  useEffect(() => {
    if(typeof window !== undefined){
      if (window.innerWidth <= 767) setIsMobile(false)
      window.addEventListener("resize", checkMobile);
    }

    return () => {
      if(typeof window !== undefined){
        window.removeEventListener("resize", checkMobile);
      }
    }
  }, [])
  
  const {post} = data
  const date = new Date(post.date)
  return (
    <Layout noOverlayHeader>
      <SEO
      title={post.title}
      />
      <Hero 
        subTitle={`News - ${post.taxonomyParent.title}`}
        title={post.title} 
        image={post.image.localFile.childImageSharp.fluid} 
      />
      <div  style={{backgroundColor: `#${post.taxonomyParent.colour.colour}`}}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 py-4 text-white-0 md:text-lg flex flex-wrap items-center mb-10 md:mb-16 lg:mb-20">
          {post.date && <div className="pr-4">
            <span className="font-bold">Date:</span> {date.toLocaleDateString()}
          </div>}
          {post.taxonomyParent && <div className="pr-4">
            <span className="font-bold">Categories:</span> <Link className="duration-300 hover:opacity-50" to={`/news/${post.taxonomyParent.slug}`}>{post.taxonomyParent.title}</Link>
          </div>}
        </div>
      </div>
      <div className="flex flex-wrap items-start max-w-screen-2xl mx-auto px-4 md:px-6 mb-10 md:mb-16 lg:mb-20">
        {post.content && <section id="content" className="w-full md:w-3/4 md:pr-8 lg:pr-16">
          <article className="blog mb-10 px-2">
          {post.youTubeId && <YoutubePopUp image={post.image.localFile.childImageSharp.fluid} videoID={post.youTubeId}/>}
          {renderRichText(post.content, options)}
          </article>
          <Link className="font-bold text-black-default flex flex-wrap items-center duration-300 hover:opacity-50 transform hover:-translate-x-4 mb-10 md:mb-16 lg:mb-20 px-2" to="/news">
            <svg className="transform rotate-90 cursor-pointer duration-300 hover:opacity-50 scale-105 mr-4" width="17.46" height="9.953" viewBox="0 0 17.46 9.953">
              <path id="Path_24" data-name="Path 24" d="M8.73,9.953a1.219,1.219,0,0,1-.864-.358L.358,2.087A1.223,1.223,0,0,1,2.087.358L8.73,7,15.373.358A1.223,1.223,0,0,1,17.1,2.088L9.594,9.6A1.219,1.219,0,0,1,8.73,9.953Z" transform="translate(0 0)" fill="#272D3D"/>
            </svg>
            Back to news
          </Link>
          {post.relatedPosts && <RelatedPosts title="Related Articles" related={post.relatedPosts} /> }
        </section>}
        <Sticky className="w-full md:w-1/4 px-2"  enabled={isMobile} top={100} bottomBoundary="#content">
          {post.taxonomyParent && <CategoryItem colour={post.categories[0].colour.colour} image={post.categories[0].featuredImage.localFile.childImageSharp.fluid} title={post.categories[0].title}  slug={post.categories[0].slug} />}
        </Sticky>
      </div>
      <Newsletter 
          title={post.newsletter.heading} 
          text={post.newsletter.text}
          image={post.newsletter.image.localFile.childImageSharp.fluid} 
          bgColour={post.taxonomyParent.colour.colour}
      />
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-602140e286141d63"/>
    </Layout>
  )
}

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const {
          localFile: { childImageSharp },
        title,
      } = node.data.target
    
      return <Img fluid={childImageSharp.fluid} alt={title} />
    },
  },
}

export const query = graphql`
query($id: String!) {
  post: contentfulPosts(id: {eq: $id}) {
    title
    date
    youTubeId
    content {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          __typename
          title
          localFile {
            childImageSharp {
              fluid(fit: CONTAIN, maxWidth: 950, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    categories {
      title
      slug
      featuredImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 430, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      colour {
        colour
      }
    }
    taxonomyParent {
      title
      colour {
        colour
      }
      slug
    }
    relatedPosts {
      title
      slug
      date
      categories {
        slug
        title
      }
      image {
        localFile {
          childImageSharp {
              fluid(fit: CONTAIN, maxWidth: 550, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
              }
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
    }
    image {
      localFile {
        childImageSharp {
            fluid(fit: CONTAIN, maxWidth: 1920, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
  }
}`