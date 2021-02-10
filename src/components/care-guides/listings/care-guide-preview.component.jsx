import React from 'react';
import {Link} from 'gatsby';

import careGuideIcon from '../../../images/Icons/care-guide.svg'

const CareGuidePreview = ({animalTitle, slug}) => (
    <Link className="flex items-start md:items-center justify-between bg-white-default px-6 py-4 duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full" to={`/care-guides/${slug}`} >
        <div>
            <h4 className="heading-font md:text-lg font-extrabold italic leading-tight mb-0.5">{animalTitle} Care Guide</h4>
            <span className="underline text-xs md:text-base font-sm font-light">Read the guide</span>
        </div>
        <img className="ml-4 w-8 md:w-10" src={careGuideIcon} alt={`Care Guide Icon for ${animalTitle}`} />
    </Link>
);

export default CareGuidePreview;