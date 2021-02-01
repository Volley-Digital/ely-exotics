import React from 'react';

const BgEl = ({type, colour, opacity, classes}) => {
    let el 
    switch(type) {
        case "circle" :
            el = <svg className={`${classes} ${opacity}`} xmlns="http://www.w3.org/2000/svg" width="107.948" height="107.948" viewBox="0 0 107.948 107.948">
                <circle id="Ellipse_29" data-name="Ellipse 29" cx="53.974" cy="53.974" r="53.974" fill={colour}/>
            </svg>
            break;
        case "rectangle" :
            el = <svg className={`${classes} ${opacity}`} xmlns="http://www.w3.org/2000/svg" width="509.681" height="377.944" viewBox="0 0 509.681 377.944">
                <rect id="Rectangle_30" data-name="Rectangle 30" width="130.906" height="515.955" rx="65.453" transform="translate(509.681 265.736) rotate(121)" fill={colour}/>
            </svg>
            break;
        default :
            el = <div></div>
            break;
    }
    return el
}

export default BgEl