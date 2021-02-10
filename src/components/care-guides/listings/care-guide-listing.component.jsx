import React from 'react';
import CareGuidePreview from './care-guide-preview.component';


const CareGuideListings = ({careGudies}) => (
    <section className="max-w-screen-2xl mx-auto relative z-10 px-4 md:px-6 mb-5">
        {careGudies && <div className="flex flex-wrap">
            {careGudies.map(guide => <article className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4" key={guide.slug}>
                <CareGuidePreview {...guide} />
            </article>)}
        </div>}
    </section>
);

export default CareGuideListings;