import React from 'react';

import diet from '../../../images/Icons/overview/diet.svg';
import heating from '../../../images/Icons/overview/heating.svg';
import hotSpot from '../../../images/Icons/overview/hot-spot.svg';
import housing from '../../../images/Icons/overview/housing.svg';
import humidity from '../../../images/Icons/overview/humidity.svg';
import lifeSpan from '../../../images/Icons/overview/life-span.svg';
import lighting from '../../../images/Icons/overview/lighting.svg';
import size from '../../../images/Icons/overview/size.svg';
import substrate from '../../../images/Icons/overview/substrate.svg';
import temp from '../../../images/Icons/overview/temp.svg';
import temperament from '../../../images/Icons/overview/temperament.svg';
import difficulty from '../../../images/Icons/overview/difficulty.svg';
import water from '../../../images/Icons/overview/water.svg';

import infoIcon from '../../../images/Icons/info-icon.svg'

import './overview-item.style.scss';

const icons = {
    diet,
    heating,
    'hot-spot': hotSpot,
    housing,
    humidity,
    'life-span': lifeSpan,
    lighting,
    size,
    substrate,
    temp,
    temperament,
    difficulty,
    water
}

const OverviewItem = ({title, text, size}) => {

    let icon = icons[title.replace(/\s+/g, '-').toLowerCase()] ? icons[title.replace(/\s+/g, '-').toLowerCase()] : infoIcon
    let iconClasses = (icon === infoIcon) ? 'mx-auto mb-2 w-5' : 'mx-auto mb-2 '

    return (
        <header className={`overview-item overview-item--${size} text-center px-2`}>
            <img className={iconClasses} src={icon} alt={`${title} Icon`} />
            <h4 className="text-lg font-bold italic mb-2 leading-none">{title}</h4>
            <p className="leading-none">{text}</p>
        </header>
    );
}

export default OverviewItem;