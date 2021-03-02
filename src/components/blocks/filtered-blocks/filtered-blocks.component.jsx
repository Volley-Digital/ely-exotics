import React from 'react';

import ReviewsList from '../reviews/reviews-list.component';
import BgImageTextWithImage from '../bg-image-text-with-image/bg-image-text-with-image.component';
import CategoryListing from '../categories/category-listing.component';
import Newsletter from '../newsletter/newsletter.component';
import LinkSection from '../link-section/link-section.component';
import Instagram from '../instagram/instagram.component';
import GalleryWrapper from '../gallery/galley-wrapper.component';
import Map from '../map/map.component';
import ContactDetailsWithForm from '../contact-details-with-form/contact-details-with-form.component';

const FilteredBlocks = ({blocks}) => {
    let styledItems = [];

    if (blocks) blocks.forEach(block => {
        switch(block.internal.type) {
            case 'ContentfulReviewShowcaseBlock' :
                styledItems.push(
                    <ReviewsList 
                        image={block.reviewPlatform.localFile.childImageSharp.fixed} 
                        reviews={block.reviews} 
                        amountOfReviews={block.amountOfReviews} 
                        stars={block.stars}
                        marginBottom={block.spacingBottom}
                        url={block.url}
                    />
                )
            break; 

            case 'ContentfulBgImageWithTextAndImageBlock' :
                styledItems.push(
                    <BgImageTextWithImage 
                        title={block.title} 
                        bgImage={block.backgroundImage.localFile.childImageSharp.fluid} 
                        image={block.image.localFile.childImageSharp.fluid} 
                        text1={block.firstCol} 
                        text2={block.secondCol} 
                        marginBottom={block.spacingBottom} 
                    />
                )
            break; 

            case 'ContentfulCategoriesShowcaseBlock' :
                styledItems.push(
                    <CategoryListing 
                        title={block.websiteTitle} 
                        categories={block.categories}
                        marginBottom={block.spacingBottom} 
                    />
                )
            break; 
            
            case 'ContentfulNewsletterBlock' :
                styledItems.push(
                    <Newsletter 
                        title={block.heading} 
                        text={block.text}
                        image={block.image.localFile.childImageSharp.fluid} 
                        marginBottom={block.spacingBottom}
                    />
                )
            break; 

            case 'ContentfulPageLinksBlock' :
                styledItems.push(
                    <LinkSection 
                        marginBottom={block.spacingBottom}
                        links={block.links}
                    />
                )
            break; 

            case 'ContentfulInstagramBlock' :
                styledItems.push(
                    <Instagram 
                        title={block.title}
                        token={block.apiKey}
                        marginBottom={block.spacingBottom}
                    />
                )
            break; 
            case 'ContentfulGalleryBlock' :
                styledItems.push(
                    <GalleryWrapper images={block.images} marginBottom={block.spacingBottom} />
                )
            break; 

            case 'ContentfulMapBlock' :
                styledItems.push(
                    <Map embedLink={block.embedLink.embedLink} showGetDirections={block.showGetDirections} marginBottom={block.spacingBottom} />
                )
            break; 
            case 'ContentfulContactDetailsAndFormBlock' :
                styledItems.push(
                    <ContactDetailsWithForm 
                        text={block.textBlock.textBlock} 
                        address={block.address.address}
                        phone={block.phone}
                        email={block.email}
                        openingHours={block.openingHours}
                        marginBottom={block.spacingBottom}
                    />
                )
            break; 

            default:
                styledItems.push(<section>{block.title}</section>)
            break;
        }
    })
    
    return (
        <main id="content">
           {styledItems && styledItems.map((item, i) => (
               <div key={i}>{item}</div>
           ))}
        </main>
    )
};

export default FilteredBlocks;