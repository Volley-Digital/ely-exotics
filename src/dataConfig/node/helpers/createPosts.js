
const path = require(`path`)

module.exports.createPosts = (createPage, post) => {
    createPage({
        path: `news/${post.slug}/`,
        component: path.resolve(`./src/templates/single-post.jsx`),
        context: {
          id: post.id,
        },
    })
};
