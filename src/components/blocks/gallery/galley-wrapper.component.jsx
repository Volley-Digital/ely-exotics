import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";

const GalleryWrapper = ({images, marginBottom}) => {


    return (
        <SimpleReactLightbox>
            <section className={`max-w-screen-2xl mx-auto px-6 md:px-8 ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}>
                <SRLWrapper>
                    <div className="flex flex-wrap">
                        {images.map((image, i) => <div className="w-full md:w-1/3">
                            <BackgroundImage
                                tag="div"
                                fluid={image.localFile.childImageSharp.fluid}
                                className="h-64 lg:h-96 cursor-pointer"
                            >
                            <img className="h-full w-full opacity-0" srl_elementid={i} src={image.localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
                            </BackgroundImage>
                        </div>)}
                   </div>
                </SRLWrapper>
            </section>
        </SimpleReactLightbox>
    );
}

export default GalleryWrapper;