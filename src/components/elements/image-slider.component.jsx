import React, {useRef,useEffect, useState} from 'react';
import Img from 'gatsby-image'
import Glide from '@glidejs/glide'


const autoHeight = () => {
    const slideHeight = document.querySelector('.glide__slide--active').offsetHeight;
    const glideTrack =  document.querySelector('.glide__track').offsetHeight;
    if (slideHeight != glideTrack) {
        document.querySelector('.glide__track').style.transition = 'height 0.2s ease-in-out'
        document.querySelector('.glide__track').style.height = slideHeight + 'px';
    }
}


const ImageSlider = ({images, peek, shadow}) => {
    const  slider = useRef(null)

    const  [sliderStarted, setSliderStarted] = useState(false)
    const  [imageSlider, setImageSlider] = useState(null)

    useEffect(() => {
        if (slider.current && !sliderStarted) {
            const glide = new Glide(slider.current,  { 
            startAt: 0,
            autoplay: false,
            perView: 1,
            peek: {
                before: peek ? 400 : 0,
                after: peek ? 400 : 0
            },
            breakpoints: {
                1600: {
                  peek: {
                    before: peek ? 200 : 0,
                    after: peek ? 200 : 0
                  },
                },
                1100: {
                    peek: {
                        before: peek ? 50 : 0,
                        after: peek ? 50 : 0
                    },
                },
                500: {
                    peek: {
                        before: peek ? 30 : 0,
                        after: peek ? 30 : 0
                    },
                },
            },
            animationTimingFunc: 'ease-in-out',
            })
            glide.on('build.after', autoHeight);
            glide.on('run.after', autoHeight);   
            glide.mount()
            setImageSlider(glide)
            setSliderStarted(true)
        }
        return () => {
            if (imageSlider) imageSlider.destroy()
        }
    }, [sliderStarted])

    if (imageSlider && images.length <= 1) imageSlider.disable()

    return (
        <div className={`mb-10 md:mb-20 lg:mb-28 ${shadow && 'shadow-2xl'}`}>
            <div ref={slider} className={`glide ${images.length > 1 && 'cursor-move'}`}>
                <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides flex flex-wrap items-start">
                        {images && images.map((image, i) => <li key={i} className="glide__slide mb-0">
                            {<Img alt={image.title} className="mb-0" fluid={image.localFile.childImageSharp.fluid} />}
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ImageSlider;