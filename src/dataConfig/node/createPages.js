const query = require('../data/query')

const {createPosts} = require(`./helpers/createPosts`)
const {createCaseStudy} = require(`./helpers/createCaseStudies`)

module.exports = async ({ graphql, actions }) => {
    const {createPage} = actions; // actions is undefined

    // Get data from query
    const result = await graphql(query.data)

    const {caseStudies, posts} = result.data

    // Create a page for each "post"
    posts.nodes.forEach(post => createPosts(createPage, post));

    // Create a page for each "case study"
    caseStudies.nodes.forEach(caseStudy => createCaseStudy(createPage, caseStudy));

}

