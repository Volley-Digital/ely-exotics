import React from 'react';

import BlogPreview from './blog-preview.component';
import GradButton from '../button/gradbutton.component';

import vlogo from '../../../images/Website/icons/v-icon-light.svg'

const BlogIntro = ({title, button, blogPosts, showIcon}) => (
    <div className="relative">
        <section className="max-w-screen-2xl mx-auto mb-10 md:mb-20 lg:mb-28 relative z-10">
            {title && <header className="px-6 md:px-8 mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl text-primary-default font-semibold leading-none">{title}</h2>
            </header>}
            {blogPosts && <div className="flex flex-wrap md:px-4 lg:px-0 md:mb-12">
                {blogPosts.map(blog => <div className="w-full md:flex-1 px-6 lg:px-8 mb-8 md:mb-0" key={blog.title}>
                    <BlogPreview 
                        title={blog.title}
                        image={blog.featuredImage.localFile.childImageSharp.fluid}
                        link={blog.slug}
                        category={blog.categories[0].title}
                        height="h-80 md:h-64 lg:h-80" 
                    />
                </div>)}
            </div>}
            {button && <div className="text-center">
                <GradButton {...button} />
            </div>}
        </section>
        {showIcon && <img alt="Volley Icon" className="select-none hidden md:block absolute -right-16 -top-12 md:-top-36" src={vlogo} />}
    </div>
);

export default BlogIntro;