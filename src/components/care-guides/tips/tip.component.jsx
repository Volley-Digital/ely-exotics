import React from 'react';

import tipIcon from '../../../images/Icons/tip.svg'

const Tip = ({tip}) => (
    <div className="flex items-start md:text-lg font-light mb-5">
        <img src={tipIcon} className="mt-1 mr-4 flex-shrink-0 w-5" alt="tip icon" />
        {tip}
    </div>
);

export default Tip;