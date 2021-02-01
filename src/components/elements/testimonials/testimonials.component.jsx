import React, {useRef,useEffect, useState} from 'react';
import Glide from '@glidejs/glide'

import reviews from './data.reviews';

import Testimonial from './testimonial.component';

import quote from '../../../images/Website/icons/left-quote.svg';
import './testimonials.style.scss';

const Testimonials = ({reviews, noMargin}) => {
    let slider = useRef(null)

    let [testimonialSlider, setTestimonialSlider] = useState(null)

    useEffect(() => {
        if (slider.current) {
            setTestimonialSlider(new Glide(slider.current,  { 
            type: 'carousel',
            startAt: 0,
            autoplay: 6000,
            perView: 2,
            peek: {
                before: 0,
                after: 300
            },
            breakpoints: {
                1800: {
                    peek: {
                      before: 0,
                      after: 200
                    },
                },
                1200: {
                  peek: {
                    before: 0,
                    after: 300
                  },
                  perView: 1,
                },
                900: {
                    peek: {
                        before: 0,
                        after: 150
                    },
                    perView: 1,
                },
                767: {
                    peek: {
                        before: 0,
                        after: 100
                    },
                    perView: 1,
                },
                500: {
                    peek: {
                        before: 0,
                        after: 0
                    },
                    perView: 1,
                },
            },
            animationTimingFunc: 'ease-in-out',
            }).mount())
        }
    }, [])

    let handleArrowClick = (e) => {
        testimonialSlider.go(e.currentTarget.dataset.glideDir)
    }

   return (
    <section className={`flex flex-wrap ${!noMargin && 'mb-10 md:mb-20 lg:mb-28'}`}>
        <div className="relative px-6 md:pl-8 pt-10 pb-5 md:py-0 w-full md:w-auto xl:w-4/12 bg-white-100 flex flex-wrap flex-col md:items-end justify-center md:pr-12">
            <img className="select-none absolute w-24 lg:w-32 top-10 right-6 md:left-8 md:top-8 xl:left-16 xl:top-16 xl:w-auto" alt="Quotation Mark" src={quote} />
            <div>
                <h3 className="text-4xl text-primary-default font-semibold leading-tight mb-2">Client <span className="block text-primary-light heading-font font-light">Reviews</span></h3>
                <div className="flex justify-between w-20" data-glide-el="controls">
                    <div onClick={(e) => handleArrowClick(e)} className="cursor-pointer duration-300 hover:opacity-50 py-3 px-1" data-glide-dir="<">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.368" height="14.225" viewBox="0 0 29.368 14.225">
                            <g id="left-arrow" opacity="0.6">
                                <g id="Group_880" data-name="Group 880" transform="translate(0 0)">
                                <path id="Path_388" data-name="Path 388" d="M.336,138.3h0l5.994-5.965A1.147,1.147,0,0,1,7.95,133.96l-4.025,4.005h24.3a1.147,1.147,0,1,1,0,2.294H3.926l4.025,4.005a1.147,1.147,0,0,1-1.619,1.626L.337,139.926h0A1.148,1.148,0,0,1,.336,138.3Z" transform="translate(0 -132)" fill="#705ca4"/>
                                </g>
                            </g>
                        </svg>

                    </div>
                    <div onClick={(e) => handleArrowClick(e)} className="cursor-pointer duration-300 hover:opacity-50 py-3 px-1" data-glide-dir=">">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.368" height="14.225" viewBox="0 0 29.368 14.225">
                            <g id="right-arrow" opacity="0.6">
                                <g id="Group_880" data-name="Group 880" transform="translate(0 0)">
                                <path id="Path_388" data-name="Path 388" d="M29.032,138.3h0l-5.994-5.965a1.147,1.147,0,0,0-1.619,1.626l4.025,4.005H1.147a1.147,1.147,0,1,0,0,2.294h24.3l-4.025,4.005a1.147,1.147,0,0,0,1.619,1.626l5.994-5.965h0A1.148,1.148,0,0,0,29.032,138.3Z" transform="translate(0 -132)" fill="#705ca4"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <aside className="w-full md:flex-1 overflow-hidden py-5 md:py-24 lg:py-32 testimonials">
            <div ref={slider} className="glide">
                <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides flex flex-wrap items-center">
                        {reviews.map(review => <li key={review.name} className="glide__slide mb-0">
                            <Testimonial {...review}/>
                        </li>  )} 
                    </ul>
                </div>
            </div>
        </aside>
    </section>
   )
}

Testimonials.defaultProps = {
    reviews
}


export default Testimonials;