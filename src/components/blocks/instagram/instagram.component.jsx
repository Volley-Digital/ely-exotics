import React, {useEffect, useState} from 'react';

import InstaImage from './insta-image.component';

import './insta-feed.styles.scss';

const Instagram = ({token, title, marginBottom}) => {
    let [gallery, setGallery] = useState(null);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
      if(!token) return
      fetch(`https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,images,media_type,thumbnail_url&access_token=${token}&limit=6`)
      .then(response => response.json())
      .then(data => 
        {
          setGallery(data.data)
          setLoading(false)
        })
      .catch(error => console.log(error))
    }, [token]);

  return (
    <div className={`${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}>
      <div className="flex flex-wrap justify-between items-center mb-5 px-6 md:px-8 max-w-screen-2xl mx-auto">
        {(gallery && title) && <h3 className="text-2xl md:text-3xl font-black leading-tight italic mb-2">{title}</h3>}
      </div>
      <div className="w-full text-center text-white text-3xl flex flex-wrap items-center justify-center">
        {!loading && 
          gallery && gallery.map(image => 
            <InstaImage 
              key={image.id} 
              link={image.permalink} 
              caption={image.caption}
              isVideo={image.media_type}
              videoTumbnail={image.thumbnail_url}
              imageUrl={image.media_url}
              />
          )          
          }
      </div>
    </div>
  )
};

export default Instagram;