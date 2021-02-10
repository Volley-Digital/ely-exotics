module.exports.data =  `{
  pages: allContentfulPage {
    nodes {
      id
      slug
    }
  }
  animals: allContentfulAnimal {
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
  categories: allContentfulCategories(sort: {order: ASC, fields: title}) {
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
  taxonomies: allContentfulTaxonomy {
    nodes {
      slug
      id
      posts {
        id
      }
    }
  }
  careGuides: allContentfulCareGuides {
    nodes {
      slug
      id
    }
  }
  posts: allContentfulPosts {
    nodes {
      id
      slug
      categories {
        slug
      }
    }
  }
}`

