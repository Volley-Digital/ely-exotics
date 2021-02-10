import React from 'react';
import PropTypes from 'prop-types';

const InstaImage = ({ link, caption, isVideo, videoTumbnail, imageUrl}) => {
    const imageRef = isVideo === "VIDEO" ? videoTumbnail : imageUrl
    const trimmedString = caption.substr(0, 100)
    const excerpt = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + ' .... Read More'
    return (
        <div className="w-1/2 md:w-1/6">
            <a  rel="noreferrer" target="_blank" href={link}>
                <div className="instaimage relative flex flex-wrap items-center text-white-0">
                    <div style={{backgroundImage: `url(${imageRef})`}} className="absolute inset-0 bg-cover bg-no-repeat bg-center"/>
                    <div className="instaimage__bg absolute inset-0 bg-primary-dark  opacity-0 duration-300"/>
                    <p className="instaimage__text relative text-sm px-4 opacity-0 duration-300">{excerpt}</p>
                </div>   
            </a>
        </div>
    );
}


InstaImage.propTypes = {
    link: PropTypes.string,
    caption: PropTypes.string,
    isVideo: PropTypes.string,
    videoTumbnail: PropTypes.string,
    imageUrl: PropTypes.string
}

export default InstaImage;