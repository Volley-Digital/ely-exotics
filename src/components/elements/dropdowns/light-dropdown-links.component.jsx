import React from 'react';
import {Link} from 'gatsby'
import './dropdowns.style.scss'

const LightDropdownLinks = ({title, categories}) => (
    <div className="dropdown-light cursor-pointer relative text-center px-6 md:px-8 py-1.5 inline-flex border-2 border-white-0 rounded-md items-center mx-6 md:mx-4">
        <svg className="dropdown-light__icon duration-300" width="12" height="10" viewBox="0 0 12 10">
            <path id="Polygon_2" data-name="Polygon 2" d="M6,0l6,10H0Z" transform="translate(12 10) rotate(180)" fill="#fff"/>
        </svg>
        {title && <span className="dropdown-light__titles duration-300 pl-4 text-lg md:text-xl">{title}</span>}
        <ul className="dropdown-light__list duration-300 absolute text-left left-0 w-full py-4 px-6 md:px-8 rounded-md ">
            {categories && categories.map(category => <li key={category.slug}>
                <Link className="text-lg md:text-xl duration-300 hover:opacity-50" to={category.slug}>
                    {category.title}
                </Link>
            </li>)}
        </ul>
    </div>
)

export default LightDropdownLinks;