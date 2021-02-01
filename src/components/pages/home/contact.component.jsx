import React from 'react';


const Contact = ({title,text, openingHours, phone, email}) => (
    <section className="max-w-screen-xl mx-auto mb-10 md:mb-20 lg:mb-24 flex flex-wrap">
        <div className="w-full lg:w-1/3 px-6 md:px-8 mb-10 lg:mb-0">
            {title && <h2 className="text-4xl md:text-5xl text-primary-default font-semibold leading-none mb-4 md:mb-12">{title}</h2>}
            {text && <p className="text-black-default text-lg md:text-2xl max-w-3xl mb-2 md:mb-4 font-light">{text}</p>}
            {openingHours && <p className="text-black-default mb-4 md:mb-12 font-light leading-none">{openingHours}</p>}
            {phone && <a className="underline text-2xl md:text-3xl text-secondary-default heading-font font-semibold block" href={`tel:${phone}`}>{phone}</a>}
            {email && <a className="underline text-2xl md:text-3xl text-secondary-default heading-font font-semibold" href={`tel:${email}`}>{email}</a>}
        </div>
        <div className="w-full lg:w-2/3 lg:pl-8">
            <form className="mb-0" name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 px-6 md:px-8">
                        <label className="text-black-default heading-font">
                            Name * 
                            <input placeholder="E.G John Smith…" className="outline-none focus:border-secondary-default w-full py-4 mb-8 heading-font text-lg md:text-2xl border-b-2" type="text" name="name" />
                        </label>
                    </div>
                    <div className="w-full md:w-1/2 px-6 md:px-8">
                        <label className="text-black-default heading-font">
                            Email * 
                            <input placeholder="E.G Johnsmith@gmail…" className="outline-none focus:border-secondary-default w-full py-4 mb-8 heading-font text-lg md:text-2xl border-b-2" type="email" name="email" />
                        </label>
                    </div>
                    <div className="w-full md:w-1/2 px-6 md:px-8">
                        <label className="text-black-default heading-font">
                            Phone 
                            <input placeholder="E.G 01234 556 677" className="outline-none focus:border-secondary-default w-full py-4 mb-8 heading-font text-lg md:text-2xl border-b-2" type="number" name="phone" />
                        </label>
                    </div>
                    <div className="w-full md:w-1/2 px-6 md:px-8">
                        <label className="text-black-default heading-font">
                            Company
                            <input placeholder="E.G Facebook" className="outline-none focus:border-secondary-default w-full py-4 mb-8 heading-font text-lg md:text-2xl border-b-2" type="text" name="company" />
                        </label>
                    </div>
                    <div className="w-full px-6 md:px-8">
                        <label className="text-black-default heading-font">
                            Message *
                            <textarea placeholder="Tell us about your project..." className="outline-none focus:border-secondary-default w-full py-4 mb-8 heading-font text-lg md:text-2xl border-b-2" rows="1" name="message"></textarea>
                        </label>
                    </div>
                </div>
                <div className="px-6 md:px-8">
                    <button className="button__grad bg-gradient-to-b from-secondary-default to-secondary-dark relative text-sm px-6 py-3 rounded-full leading-none inline-block min-w-sm text-white-default" type="submit">submit</button>
                </div>
            </form>
        </div>
    </section>
);

export default Contact;