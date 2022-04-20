module.exports.data =  `{
  pages: allContentfulPage(filter: {dummyContent: {ne: true}}) {
    nodes {
      id
      slug
    }
  }
  animals: allContentfulAnimal(filter: {dummyContent: {ne: true}}) {
    nodes {
      id
      slug
      parentCategory {
        slug
        parents {
          slug
          parents {
            slug
            parents {
              slug
            }
          }
        }
      }
    }
  }
  categories: allContentfulCategories(filter: {dummyContent: {ne: true}}, sort: {order: ASC, fields: title}) {
    nodes {
      id
      slug
      template
      parents {
        slug
        parents {
          slug
        }
      }
    }
  }
  taxonomies: allContentfulTaxonomy(filter: {dummyContent: {ne: true}}) {
    nodes {
      slug
      id
      posts {
        id
      }
    }
  }
  careGuides: allContentfulCareGuides(filter: {dummyContent: {ne: true}}) {
    nodes {
      slug
      id
    }
  }
  posts: allContentfulPosts(filter: {dummyContent: {ne: true}}) {
    nodes {
      id
      slug
      categories {
        slug
      }
    }
  }
}`

