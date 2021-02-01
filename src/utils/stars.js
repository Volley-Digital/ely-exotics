
import React from 'react'

import star from '../images/Website/icons/star-single.svg';

export default (stars) => {
    let starList = []

    for(let i = 0; i < stars; i++) {
        starList.push(<img className="pr-1 mb-0" src={star} />)
    }

    return starList && starList.map((star, i) => <span className="flex-none" key={i}>{star}</span>);
}