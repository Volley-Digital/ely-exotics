import React, {useEffect, useState} from 'react';

import BlogPreview from './blog-preview.component';

const BlogIntro = ({blogPosts, categories}) => {
     
    const [filteredPosts, setFilteredPosts] = useState(blogPosts)
    const [activeCategoryID, setActiveCategoryID] = useState('all')
    const [activeCategory, setActiveCategory] = useState(blogPosts)
    const [search, setSearch] = useState('')

    useEffect(() => {
        activeCategoryID === 'all' ? setActiveCategory(blogPosts) : setActiveCategory(blogPosts.filter(post => post.categories.find(category => category.id === activeCategoryID)))
    }, [activeCategoryID])

    useEffect(() => {
        setFilteredPosts(filterText(activeCategory))
    }, [activeCategory])

    useEffect(() => {
        setFilteredPosts(filterText(activeCategory))
    }, [search])

    const filterText = (posts) => posts.filter(post => post.title.toLowerCase().includes(search.toLocaleLowerCase()))

    const resetFilters = () => {
        setFilteredPosts(blogPosts);
        setActiveCategory(blogPosts);
        setSearch("");
        setActiveCategoryID('all');
    }

    return (
        <section className="max-w-screen-2xl mx-auto md:mb-20 relative z-10">
            <div className="flex flex-wrap px-6 md:px-4">
                <div className="w-full md:w-9/12 order-last md:order-first">
                    <div className="flex flex-wrap justify-between items-center mb-8 md:px-4">
                        <h3 className="text-xl md:text-3xl leading-none text-primary-default font-semibold">{activeCategoryID === 'all' ? 'All' : categories[categories.findIndex(category => category.id === activeCategoryID)].title}</h3>
                        <div onClick={resetFilters} className={`button__grad cursor-pointer text-center bg-gradient-to-b from-secondary-default to-secondary-dark relative text-sm px-6 py-3 rounded-full leading-none inline-block min-w-sm`}>
                            <span className={`inline-block pb-px text-white-default z-10 relative font-medium`}>Clear</span>
                        </div>
                    </div>
                    {(filteredPosts && filteredPosts.length > 0) ? 
                        <div className="flex flex-wrap">
                            {filteredPosts.map(blog => <div className="w-full md:px-4 md:w-1/2 mb-10 md:mb-12" key={blog.title}>
                                <BlogPreview 
                                    title={blog.title}
                                    image={blog.featuredImage.localFile.childImageSharp.fluid}
                                    link={blog.slug}
                                    category={blog.categories[0].title}
                                    height="h-80 md:h-64 lg:h-80" 
                                />
                            </div>)}
                        </div>
                    :
                        <span className="block text-xl md:px-4 mb-10">Sorry no posts where found using the search "{search}"</span>
                    }
                </div>
                <div className="w-full md:w-3/12 md:px-4 mb-10 md:mb-0">
                    <div className="mb-5 md:mb-8 relative">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} className="md:text-sm lg:text-xl border-b border-b-solid w-full pb-4 outline-none text-primary-default" placeholder="Whatcha looking for?" type="text" />
                        <svg className="absolute right-0 top-1" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                            <g id="loupe_1_" data-name="loupe (1)" transform="translate(0 0.997)">
                                <g id="Group_1373" data-name="Group 1373" transform="translate(0 -0.997)">
                                <path id="Path_602" data-name="Path 602" d="M22.719,21.367l-6.541-6.541a9.121,9.121,0,1,0-1.355,1.355l6.541,6.541a.958.958,0,1,0,1.355-1.355ZM9.1,16.294a7.187,7.187,0,1,1,7.187-7.187A7.195,7.195,0,0,1,9.1,16.294Z" transform="translate(0 -0.003)" fill="#3f2e7f"/>
                                </g>
                            </g>
                        </svg>

                    </div>
                    {categories && <div>
                        <h4 className="font-bold text-xl text-primary-default mb-2">Categories</h4>
                        <span onClick={(e) => setActiveCategoryID(e.currentTarget.id)} id="all" className={`${(activeCategoryID === 'all') && 'text-primary-default'} block mb-1 cursor-pointer duration-300 hover:text-primary-default`}>All ({blogPosts.length})</span>
                        {categories && 
                            categories.filter(category => category.blog_post)
                            .map(category => 
                                <span key={category.id} onClick={(e) => setActiveCategoryID(e.currentTarget.id)} id={category.id} className={`${(activeCategoryID === category.id) && 'text-primary-default'} block mb-1 cursor-pointer duration-300 hover:text-primary-default`}> 
                                    {category.title} ({category.blog_post.length})
                                </span>
                            )
                        }
                    </div>}
                </div>
            </div>
        </section>
    );
}

export default BlogIntro;