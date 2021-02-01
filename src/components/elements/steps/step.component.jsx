import React from 'react';

import './steps.style.scss';

const Step = ({title, text, number}) => (
    <div className="step mb-5 md:mb-10 pl-6 md:pl-8 relative">
        {title && <h4 className="text-lg md:text-2xl max-w-3xl mb-2 md:mb-4 text-primary-default text-font font-medium">{title}</h4>}
        {text && <p dangerouslySetInnerHTML={{__html: text}}/>}
        <div className="step__circle text-white-default text-center font-bold heading-font">{number}</div>
    </div>
);

export default Step;