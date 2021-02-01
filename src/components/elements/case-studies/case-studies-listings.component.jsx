import React from 'react';

import CaseStudyPreview from './case-study-preview.component';

const CaseStudiesListing = ({caseStudies}) => (
    <section className="max-w-screen-2xl mx-auto mb-10 md:mb-20 lg:mb-28">
        {caseStudies && <div className="flex flex-wrap px-6 md:px-8 mb-8 md:mb-12">
            {caseStudies.map(casestudy => <div className="w-full md:w-1/3 md:px-1 mb-2" key={casestudy.title}>
                <CaseStudyPreview 
                    title={casestudy.title} 
                    image={casestudy.thumbnail.localFile.childImageSharp.fluid} 
                    link={casestudy.slug}
                    stars={casestudy.rating}
                    height="h-72" 
                />
            </div>)}
        </div>}
    </section>
);

export default CaseStudiesListing;