const path = require(`path`)

module.exports.createCaseStudy = (createPage, caseStudy) => {
  createPage({
      path: `case-studies/${caseStudy.slug}/`,
      component: path.resolve(`./src/templates/case-study.jsx`),
      context: {
        id: caseStudy.id,
      },
  })
};
