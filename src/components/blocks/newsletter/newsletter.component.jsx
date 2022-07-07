import React, { useState } from 'react';
import BackgroundImage from 'gatsby-background-image';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Newsletter = ({title, text, image, bgColour = '272D3D', marginBottom, light}) => {

  const [emailValue, setEmailValue] = useState('');
  const [responseMsg, setResponseMsg]  = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(emailValue)
      .then((data) => {
        setResponseMsg(data.msg)
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
        console.log(error)
      });
  };
  

    return (
        <div style={{backgroundColor: `#${bgColour}`}} className={`relative ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'}`}>
            <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-10 md:py-32 lg:py-40">
                <div className={`${light ? 'text-black-default' : 'text-white-0'} md:max-w-xs lg:max-w-md xl:max-w-lg`}>
                    {title && <h4 className="text-4xl lg:text-5xl font-black italic leading-none mb-5">{title}</h4>}
                    {text && <p className="text-lg md:text-xl font-light mb-8">{text}</p>}
                </div>
                <form onSubmit={handleSubmit} className="md:bg-white-0 relative z-10 md:flex flex-wrap justify-between max-w-2xl lg:max-w-3xl md:shadow-2xl">
                    <div className="hidden md:block relative bg-gradient-to-b from-primary-light to-primary-dark w-2"></div>
                    <div className="relative bg-white-0 py-6 pl-8 pr-6 md:px-6 md:flex items-center">
                        <div className="absolute md:hidden left-0 top-0 bottom-0 md:relative bg-gradient-to-b from-primary-light to-primary-dark w-2"></div>
                        <label className="md:flex items-center block mb-4 md:mb-0">
                            <span className="text-black-default heading-font font-extrabold text-lg lg:text-xl md:mr-4 italic mb-4 md:mb-0 block">Subscribe now:</span>
                            <input name="EMAIL" type="email" required className="outline-none border-b w-full md:w-64 border-black-0 pb-2 lg:text-lg md:mx-4 mb-2 md:mb-0" onChange={(e) => setEmailValue(e.target.value)} value={emailValue} placeholder="Email (Required)" />
                        </label>
                    </div>
                    {responseMsg && <div className="absolute -top-1/2 md:top-full w-full p-4 bg-white-default">
                      <p dangerouslySetInnerHTML={{__html: responseMsg}} />
                    </div>}
                    <button type="submit" className="bg-gradient-to-b from-primary-light to-primary-dark flex justify-center items-center py-4 md:py-0 px-8 cursor-pointer w-32 ml-auto duration-300 transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-lg">
                        <svg className="w-4 md:w-auto h-auto" width="20.224" height="35.479" viewBox="0 0 20.224 35.479">
                            <g id="arrow-down-sign-to-navigate" transform="translate(20.224) rotate(90)">
                                <path id="Path_24" data-name="Path 24" d="M17.74,0a2.477,2.477,0,0,0-1.756.727L.728,15.983A2.485,2.485,0,0,0,4.241,19.5L17.74,6l13.5,13.5a2.484,2.484,0,0,0,3.513-3.514L19.5.727A2.477,2.477,0,0,0,17.74,0Z" transform="translate(0)" fill="#fff"/>
                            </g>
                        </svg>
                    </button>
                </form>
                <p className={`${light ? 'text-black-default' : 'text-white-0'} md:max-w-xs lg:max-w-md xl:max-w-lg mt-5 text-xs font-light`}>By subscribing to our newsletter you are agreeing to receive marketing emails from us. We do not share you data with 3rd parties as laid out in our privacy policy</p>
            </section>
            {image && <figure className="w-full md:w-1/2 relative md:absolute h-64 md:h-full md:w-1/2 right-0 top-0">
                <BackgroundImage tag="div" fluid={image} className="w-full h-full" />
            </figure>}
        </div>
    )
};

export default Newsletter;
