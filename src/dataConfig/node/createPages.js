const query = require('../data/query')

const {createSinglePage} = require(`./helpers/createSinglePage`)
const {createCategoryPage} = require(`./helpers/createCategoryPage`)
const {createCareGuidePage} = require(`./helpers/createCareGuidePage`)
const {createCareGuideListings} = require(`./helpers/createCareGuideListings`)
const {createSinglePost} = require(`./helpers/createSinglePost`)
const {createPostListings} = require(`./helpers/createPostListings`)
const { createTaxonomyListings } = require('./helpers/createTaxonomyListing')

module.exports = async ({ graphql, actions }) => {
    const {createPage} = actions; // actions is undefined

    // Get data from query
    const result = await graphql(query.data)

    const {pages, categories, careGuides, posts, taxonomies, animals} = result.data

    // Create a page for each "page"
    pages.nodes.forEach(page => createSinglePage(createPage, page));

    // Create a page for each "care guide"
    careGuides.nodes.forEach(page => createCareGuidePage(createPage, page));

    // Create the listing pages for "care guides"
    createCareGuideListings(createPage, careGuides.nodes, 15)

    // Create a page for each "post"
    posts.nodes.forEach(post => createSinglePost(createPage, post));

    // Create the listing pages for "posts"
    createPostListings(createPage, posts.nodes, 8)
    
    // Create a taxonomy page for each "Taxonomy"
    taxonomies.nodes.forEach(taxonomy => createTaxonomyListings(createPage, taxonomy, taxonomy.posts, 8))

    //Create Categories List
    categories.nodes.forEach(category => {

        // Create Slug Trail
        let slug; 
        if(category.parents && category.parents[0].parents) {
            slug = `${category.parents[0].parents[0].slug}/${category.parents[0].slug}/${category.slug}`
        } else if (category.parents) {
            slug = `${category.parents[0].slug}/${category.slug}`
        } else {
            slug = category.slug
        }

        // Format template and use the direct string as ref to the template file
        let template = category.template.replace(/\s+/g, '-').toLowerCase()
        
        createCategoryPage(createPage, category.id, template, slug)
    });

}

