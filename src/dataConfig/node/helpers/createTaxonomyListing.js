const path = require(`path`)

module.exports.createTaxonomyListings = (createPage, taxonomy, posts, postsPerPage) => {
    // Create Archive Pages for categories
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/news/${taxonomy.slug}` : `/news/${taxonomy.slug}/${i + 1}`,
            component: path.resolve("./src/templates/posts/taxonomy.jsx"),
            context: {
                id: taxonomy.id,
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })
};
