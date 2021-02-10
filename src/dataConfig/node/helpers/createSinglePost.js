
const path = require(`path`)

module.exports.createSinglePost = (createPage, post) => {
    createPage({
        path: `${post.categories[0].slug}/news/${post.slug}`,
        component: path.resolve(`./src/templates/posts/index.jsx`),
        context: {
          id: post.id,
        },
    })
};
