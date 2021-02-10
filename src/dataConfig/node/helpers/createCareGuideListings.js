const path = require(`path`)

module.exports.createCareGuideListings = (createPage, guides, postsPerPage) => {
    // Create Archive Pages for categories
    const numPages = Math.ceil(guides.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/care-guides` : `/care-guides/${i + 1}`,
            component: path.resolve("./src/templates/care-guide/listings.jsx"),
            context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            },
        })
    })
};
