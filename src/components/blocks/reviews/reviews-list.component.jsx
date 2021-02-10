import React, {useState, useEffect, useRef} from 'react';
import Img from "gatsby-image";
import Glide from "@glidejs/glide";

import generateStars from '../../../utils/stars';

import Review from './review.component';

import './reviews.style.scss';

const ReviewsList = ({reviews, amountOfReviews, marginBottom, stars, image, colour = '272D3D', url}) => {
    let slider = useRef(null)

    let [testimonialSlider, setTestimonialSlider] = useState(null)

    useEffect(() => {
        if (slider.current) {
            setTestimonialSlider(new Glide(slider.current,  { 
            type: 'carousel',
            startAt: 0,
            autoplay: 6000,
            perView: 3,
            animationTimingFunc: 'ease-in-out',
            breakpoints: {
                1200: {
                    perView: 2,
                },
                600: {
                    perView: 1,
                },
            }
            }).mount())
        }
    }, [])

    let handleArrowClick = (e) => {
        testimonialSlider.go(e.currentTarget.dataset.glideDir)
    }

    return (
    <div style={{backgroundColor: `#${colour}`}} >
        <section className={`px-6 ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'} md:px-8 max-w-screen-2xl mx-auto py-10 md:py-16 lg:py-20 relative z-10 flex flex-wrap justify-center`}>
            <div className="flex flex-col flex-wrap items-center mx-auto mb-10 md:mb-0">
                {stars && <div className="flex flex-wrap mb-2">
                    {generateStars(stars)}
                </div>}
                <div className="text-2xl heading-font text-white-0">Rated <span className="font-black heading-font text-2xl">{stars}</span> stars on</div>
                {image && <Img className="mb-2" fixed={image} />}
                {(url && amountOfReviews) && <span className="text-sm heading-font text-white-0">Based on <a className="font-black underline" href={url} >{amountOfReviews} reviews</a></span>}
            </div>
            <div className="w-full md:flex-1 md:pl-10 lg:pl-20 text-center md:text-left overflow-hidden flex flex-wrap items-center">
                <div ref={slider} className="glide felx-1 overflow-hidden">
                    <div data-glide-el="track" className="glide__track flex-1">
                        <ul className="glide__slides flex flex-wrap items-start flex-1">
                            {reviews.map((review, i) => <li key={i} className="glide__slide mb-0 text-white-0 flex flex-wrap">
                                <Review title={review.title} name={review.name} rating={review.rating} text={review.text.text} />
                            </li> )} 
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-10 md:mt-0 flex flex-wrap w-48 max-w-xs md:w-10 justify-between" data-glide-el="controls">
                <svg onClick={handleArrowClick} className="transform rotate-90 cursor-pointer duration-300 hover:opacity-50 scale-105" data-glide-dir="<" width="17.46" height="9.953" viewBox="0 0 17.46 9.953">
                    <path id="Path_24" data-name="Path 24" d="M8.73,9.953a1.219,1.219,0,0,1-.864-.358L.358,2.087A1.223,1.223,0,0,1,2.087.358L8.73,7,15.373.358A1.223,1.223,0,0,1,17.1,2.088L9.594,9.6A1.219,1.219,0,0,1,8.73,9.953Z" transform="translate(0 0)" fill="#fff"/>
                </svg>
                <svg onClick={handleArrowClick} className="transform -rotate-90 cursor-pointer duration-300 hover:opacity-50 scale-105" data-glide-dir=">" width="17.46" height="9.953" viewBox="0 0 17.46 9.953">
                    <path id="Path_24" data-name="Path 24" d="M8.73,9.953a1.219,1.219,0,0,1-.864-.358L.358,2.087A1.223,1.223,0,0,1,2.087.358L8.73,7,15.373.358A1.223,1.223,0,0,1,17.1,2.088L9.594,9.6A1.219,1.219,0,0,1,8.73,9.953Z" transform="translate(0 0)" fill="#fff"/>
                </svg>
            </div>
        </section>
    </div>
    )
};

export default ReviewsList;