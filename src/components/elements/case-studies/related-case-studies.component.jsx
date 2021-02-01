import React from 'react';

import CaseStudyPreview from './case-study-preview.component';

const RelatedCaseStudies = ({caseStudies, title}) => (
    <section className="max-w-screen-xl mx-auto mb-10 md:mb-20 lg:mb-28">
        {title && <h3 className="px-6 md:px-8 text-3xl md:text-4xl text-primary-default font-semibold max-w-sm mb-5 md:mb-6 leading-none">{title}</h3>}
        {caseStudies && <div className="flex flex-wrap px-6 md:px-8 mb-8 md:mb-12">
            {caseStudies.map(casestudy => <div className="w-full md:w-1/2 md:px-1" key={casestudy.title}>
                <CaseStudyPreview 
                    title={casestudy.title} 
                    image={casestudy.thumbnail.localFile.childImageSharp.fluid} 
                    link={casestudy.slug}
                    stars={casestudy.rating}
                    height="h-96" 
                />
            </div>)}
        </div>}
    </section>
);

export default RelatedCaseStudies;