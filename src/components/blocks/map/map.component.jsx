import React from 'react';
import GetDirections from '../../elements/get-directions/get-directions.component';

const Map = ({embedLink, showGetDirections, marginBottom}) => (
    <section className={`max-w-screen-2xl mx-auto px-6 md:px-8 ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'} `}>    
        <iframe 
            className="shadow-2xl"
            src={embedLink} 
            width="100%" 
            height="650" 
            frameBorder="0" 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0">
        
        </iframe>
        {showGetDirections && <div className=" bg-secondary-default px-6 md:px-8 py-2 md:py-4 text-white-0 inline-block">
            <GetDirections helperBottom />
        </div>}
    </section>
); 

export default Map