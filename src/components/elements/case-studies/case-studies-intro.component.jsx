import React from 'react';

import CaseStudyPreview from './case-study-preview.component';
import GradButton from '../button/gradbutton.component';

const CaseStudiesIntro = ({subTitle, title, button, caseStudies}) => (
    <section className="max-w-screen-2xl mx-auto mb-10 md:mb-20 lg:mb-28">
        {(subTitle || title) && <header className="px-6 md:px-8 mb-8 md:mb-12 text-center">
            {subTitle && <span className="text-sm md:text-xl block mb-1" dangerouslySetInnerHTML={{__html: subTitle}} />}
            {title && <h2 className="text-3xl md:text-4xl text-primary-default font-semibold leading-none">{title}</h2>}
        </header>}
        {caseStudies && <div className="flex flex-wrap px-6 md:px-8 mb-8 md:mb-12">
            {caseStudies.map(casestudy => <div className="w-full md:flex-1 md:px-1" key={casestudy.title}>
                <CaseStudyPreview 
                    title={casestudy.title} 
                    image={casestudy.thumbnail.localFile.childImageSharp.fluid} 
                    link={casestudy.slug}
                    stars={casestudy.rating}
                    height="h-72" 
                />
            </div>)}
        </div>}
        {button && <div className="text-center">
            <GradButton {...button} />
        </div>}
    </section>
);

export default CaseStudiesIntro;