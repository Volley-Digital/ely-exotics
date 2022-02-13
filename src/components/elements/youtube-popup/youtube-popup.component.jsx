import React,{useState} from 'react';
import Img from 'gatsby-image';
import ModalVideo from 'react-modal-video'

import play from '../../../images/Icons/play.svg';


const YoutubePopUp = ({videoID, image}) => {
    const [isOpen, setOpen] = useState(false)
    let modal = <></>
    if (typeof(window) !== 'undefined') {
      modal = <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoID} onClose={() => setOpen(false)} />
    }

    return (
        <div>
            {modal}
            <div className="mb-5 md:mb-10 relative cursor-pointer duration-300 transform hover:-translate-y-4 hover:shadow-2xl" onClick={()=> setOpen(true)}>
                <Img fluid={image} />
                <img src={play} alt="Play Icon" className="absolute left-2/4 top-2/4 transform -translate-y-2/4 -translate-x-2/4"/>
            </div>
        </div>
    )
}

export default YoutubePopUp;