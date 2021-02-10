
const path = require(`path`)

module.exports.createCategoryPage = (createPage, id, template, slug) => {
    createPage({
        path: `${slug}`,
        component: path.resolve(`./src/templates/categories/${template}.jsx`),
        context: {
          id,
        },
    })
};
