import React, {useState} from 'react';

import marker from '../../../images/Icons/marker.svg'

const GetDirections = ({address = "Sedgeway Business Park, Common Road,Witchford, Ely, CB6 2HY", helperBottom}) => {

    const defaultText = 'Get directions'
    const [text, setText] = useState(defaultText)
    const [isDefault, setIsDefault] = useState(true)

    const handleOnClick = (e) => {
        const {value} = e.target
        if (value === defaultText) {
            setText('')
        }
        setIsDefault(false)
    }

    const handleOnBlur = (e) => {
        const {value} = e.target
        if (value === "") setText(defaultText)
        setIsDefault(true)
    }

    const handleOnChange = (e) => {
        const {value} = e.target
        console.log(value)
        setText(value)
    }

    return (
        <form className="relative flex items-center font-black heading-font italic" action="https://maps.google.com/maps" method="get" target="_blank" _lpchecked="1">
            <button className="outline-none" type="submit"><img className="mr-4" src={marker} alt="Map Marker" /></button>
            <input autoComplete="off" onBlur={handleOnBlur} onFocus={handleOnClick} onChange={handleOnChange} placeholder="Enter Your Postcode" type="text" className="outline-none placeholder-opacity-80	placeholder-white-0 pl-2 md:pl-0 bg-transparent text-base heading-font font-black italic" value={text} name="saddr"/>
            <input type="hidden" name="daddr" value={address}/>
            {helperBottom ?
                <div className={`absolute block text-xs duration-300 ${!isDefault ? 'opacity-100 -bottom-5' : ' opacity-0 -bottom-6'}`}>Hit Enter or Click the Marker</div>
            :
                <div className={`absolute block text-xs duration-300 ${!isDefault ? 'opacity-100 -top-10' : ' opacity-0 -top-12'}`}>Hit Enter or Click the Marker</div>
            }
        </form>
    )
}

export default GetDirections;