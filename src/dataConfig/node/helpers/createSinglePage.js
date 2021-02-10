
const path = require(`path`)

module.exports.createSinglePage = (createPage, page) => {
    createPage({
        path: `${page.slug}`,
        component: path.resolve(`./src/templates/single-page/index.jsx`),
        context: {
          id: page.id,
        },
    })
};
