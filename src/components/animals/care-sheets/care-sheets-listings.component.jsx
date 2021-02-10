import React from 'react';
import CareGuidePreview from '../../care-guides/listings/care-guide-preview.component';

const CareSheetsListings = ({careSheets}) => (
    <div className="relative overflow-hidden">
        <section className="max-w-screen-2xl mx-auto px-4 md:px-6 pt-10 md:pt-16 lg:pt-20 pb-6 md:pb-10 lg:pb-16 flex flex-wrap relative z-10">
            {careSheets && careSheets.map((item, i) => <article className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4" key={i}>
                <CareGuidePreview {...item} />
            </article>)}
        </section>
        <div className="absolute bg-black-default -top-24 -left-10 -right-10 bottom-14 md:bottom-24 transform rotate-1" />
    </div>
);

export default CareSheetsListings;