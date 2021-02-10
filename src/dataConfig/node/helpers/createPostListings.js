

const path = require(`path`)

module.exports.createPostListings = (createPage, posts, postsPerPage) => {
    // Create Archive Pages for categories
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/news` : `/news/${i + 1}`,
            component: path.resolve("./src/templates/posts/listings.jsx"),
            context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            },
        })
    })
};
