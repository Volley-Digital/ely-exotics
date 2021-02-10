import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from "gatsby";

import GetDirections from '../../elements/get-directions/get-directions.component';
import Socials from '../../elements/socials/socials.compomemt.jsx';
import PrimaryButton from '../../elements/buttons/primary-button.component';
import LightDropdownLinks from '../../elements/dropdowns/light-dropdown-links.component';

import './hero.style.scss'

const Hero = ({title, subTitle, image, showSocial, fullHeight, getDirections, marginBottom, primaryButtonText, primaryButtonTo, showDropdown}) => {
    const { categories } = useStaticQuery(graphql`
    query {
        categories: allContentfulCategories(filter: {template: {eq: "Category Listings"}}, sort: {fields: title, order: ASC}) {
            nodes {
              slug
              title
            }
        }
    }
  `);

    return (
        <BackgroundImage
            tag="section"
            className={`hero ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'} relative z-10 text-white-0 flex ${fullHeight ? 'hero--large items-center justify-center text-center' : 'items-bottom justify-start'}`}
            fluid={image}
        >   
            <div className={`${fullHeight ? 'pt-24 pb-24 md:pb-6 md:pt-16' : 'pb-10 md:pb-20 pt-56 md:pt-96 max-w-screen-2xl mx-auto w-full'} px-6 md:px-8 relative z-10`}>
                {subTitle && <span className="text-3xl heading-font italic font-light block mb-2">{subTitle}</span>}
                  {(showSocial && !fullHeight) && <div className="z-10 w-full py-4 hidden md:block">
                    <Socials yt="#" instagram="#" facebook="#"/>
                </div>}
                {title && <h1 className={`${fullHeight ? 'mx-auto max-w-3xl' : 'max-w-4xl' } leading-none text-3xl sm:text-4xl lg:text-5xl font-black italic text-white-default`}>{title}</h1>}
                {(primaryButtonText || showDropdown) && <div className="mt-5 lg:mt-10 flex flex-wrap items-center justify-center">
                    {primaryButtonText && <PrimaryButton 
                        to={primaryButtonTo}
                        text={primaryButtonText}
                    />}
                    {showDropdown && <span className="block sm:hidden pb-3 w-full" /> }
                    {showDropdown && <LightDropdownLinks categories={categories.nodes} title="find an species" />}
                   
                </div>     
                }      
            </div>
            {(showSocial && fullHeight) && <div className="z-10 w-full max-w-screen-3xl mx-auto bottom-4 absolute px-6 md:px-8 py-4 hidden md:block">
                <Socials yt="#" instagram="#" facebook="#"/>
            </div>
            }
            {getDirections && <div className="z-10 right-0 bottom-0 absolute bg-secondary-default px-6 md:px-8 py-2 md:py-4">
                <GetDirections address="Sedgeway Business Park, Common Road,Witchford, Ely, CB6 2HY" />
            </div>
            }

            <div className="inset-0 absolute bg-black-default opacity-50" />
        </BackgroundImage>
    );
}

export default Hero;