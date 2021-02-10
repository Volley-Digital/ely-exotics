
import React from 'react'

import star from '../images/Icons/star.svg';

export default (stars) => {
    let starList = []

    for(let i = 0; i < stars; i++) {
        starList.push(<img className="pr-1.5 mb-0 w-6" src={star} />)
    }

    return starList && starList.map((star, i) => <span className="flex-none" key={i}>{star}</span>);
}