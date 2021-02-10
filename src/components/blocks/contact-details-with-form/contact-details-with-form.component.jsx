import React from 'react';

import Form from '../../elements/form/form.component';


import emailIcon from '../../../images/Icons/email.svg';
import phoneIcon from '../../../images/Icons/phone.svg';

const ContactDetailsWithForm = ({text, address, email, phone, openingHours, marginBottom}) => (
    <section className={`max-w-screen-2xl mx-auto flex flex-wrap px-6 md:px-8 ${marginBottom && 'mb-10 md:mb-16 lg:mb-20'} `}>
        <div className="w-full md:w-2/3 lg:w-3/4 md:pr-8 lg:pr-16 mb-10 md:mb-0">
            <Form />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="font-black italic text-2xl md:text-3xl leading-none mb-4">Contact us</h3>
            {text && <p className="font-light mb-5">{text}</p>}
            {address && <p className="font-black italic heading-font mb-5" dangerouslySetInnerHTML={{__html: address}}/>}
            {(email || phone) && <div className="mb-6">
                {email && <a className="hover:opacity-75 duration-300 hover:text-primary-default flex items-center justify-start font-black italic heading-font" href={`mailto:${email}`}><img className="mr-2" src={emailIcon} alt="Email" />{email}</a>}
                {phone && <a className="hover:opacity-75 duration-300 hover:text-primary-default flex items-center justify-start font-black italic heading-font" href={`tel:${phone}`}><img className="mr-2" src={phoneIcon} alt="Phone" />{phone}</a>}
            </div>}
            {openingHours && <div>
                <h3 className="font-black italic text-2xl md:text-3xl leading-none mb-4">Opening Hours</h3>
                {openingHours.map((item, i) => <p key={i} className="font-black italic heading-font" dangerouslySetInnerHTML={{__html: item}}/>)}
            </div>}
        </div>
    </section>
);

export default ContactDetailsWithForm;