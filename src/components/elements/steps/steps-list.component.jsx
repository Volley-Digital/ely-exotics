import React, {useState, useEffect} from 'react';
import Sticky from 'react-stickynode';

import Step from './step.component';

const StepsList = ({title, subTitle, steps,}) => {
    
    let [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        if(typeof window !== undefined){
            if (window.innerWidth <= 767) setIsMobile(false)
            window.addEventListener("resize", () => {
                if (window.innerWidth <= 767) {
                    setIsMobile(false)
                } else {
                    setIsMobile(true)
                }
            });
        }
    }, [])

    return (
        <section className="max-w-screen-xl mx-auto mb-10 md:mb-20 lg:mb-28 px-6 md:px-8 flex flex-wrap items-start">
            <Sticky enabled={isMobile} top={50} bottomBoundary="#content" className="w-full md:w-2/5">
            <header className="md:pr-8 mb-5 md:mb-0">
                {title && <h2 className="text-3xl md:text-4xl text-primary-default font-semibold max-w-xs mb-2 md:mb-4 leading-none">{title}</h2>} 
                {subTitle && <span className="text-lg md:text-2xl max-w-3xl text-black-default font-light leading-none" dangerouslySetInnerHTML={{__html: subTitle}} />}
            </header>
            </Sticky>
            {steps && <div id="content" className="w-full ml-4 md:ml-0 md:w-3/5 step__wrapper">
                {steps.map((step, i) => <Step key={i} {...step} number={i + 1} />)}
            </div>}
        </section>
    );
}

export default StepsList;