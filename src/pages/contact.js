import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from '../components/pages/home/contact.component';
import Testimonials from '../components/elements/testimonials/testimonials.component';

const ContactPage = () => {
  return (
    <Layout noOverlayHeader>
      <SEO
        title="Contact"
      />
      <div className="mt-10 md:mt-20 lg:mt-24">
        <Contact 
          title="Lets talk"
          text="we would love to show you how we could help grow your business online."
          openingHours="Hours: Monday - Friday: 8:00am - 5:30pm"
          phone="07954 047 882"
          email="hello@volley.digital"
        />
        <Testimonials/>
      </div>
    </Layout>
  );
}

export default ContactPage;
