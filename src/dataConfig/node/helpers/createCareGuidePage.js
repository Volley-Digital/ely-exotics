
const path = require(`path`)

module.exports.createCareGuidePage = (createPage, page) => {
  createPage({
    path: `care-guides/${page.slug}`,
    component: path.resolve(`./src/templates/care-guide/index.jsx`),
    context: {
      id: page.id,
    },
  })
};
