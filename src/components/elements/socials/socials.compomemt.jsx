import React from 'react';

import ytIcon from '../../../images/Icons/youtube.svg';
import facebookIcon from '../../../images/Icons/facebook.svg';
import instagramIcon from '../../../images/Icons/instagram-logo.svg';

import './socials.style.scss';

const Socials = ({yt, facebook, instagram}) => (
  <div className="flex flex-wrap items-center">
    {instagram &&
      <a target="_blank" href={instagram}><img className="duration-300 social-link" src={instagramIcon} alt="Instagram Account" /></a>}
    {facebook &&
      <a className="mx-5" href={facebook} target="_blank"><img className="duration-300 social-link" src={facebookIcon} alt="Facebook Account" /></a>}
    {yt &&
      <a href={yt} target="_blank"><img className="duration-300 social-link" src={ytIcon} alt="Youtube Account" /></a>}
  </div>
);

export default Socials;