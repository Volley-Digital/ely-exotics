
const path = require(`path`)

module.exports.createAnimalPage = (createPage, animal) => {

    let formattedSlug;
    if(animal.parentCategory.parents && animal.parentCategory.parents[0].parents) {
        formattedSlug = `/${animal.parentCategory.parents[0].parents[0].slug}/${animal.parentCategory.parents[0].slug}/${animal.parentCategory.slug}/${animal.slug}`
    } else if(animal.parentCategory.parents && animal.parentCategory.parents[0].parents) {
        formattedSlug = `/${animal.parentCategory.parents[0].parents[0].slug}/${animal.parentCategory.parents[0].slug}/${animal.parentCategory.slug}/${animal.slug}`
    } else if (animal.parentCategory.parents) {
        formattedSlug = `/${animal.parentCategory.parents[0].slug}/${animal.parentCategory.slug}/${animal.slug}`
    } else {
        formattedSlug = `/${animal.slug}`
    }

    createPage({
        path: `${formattedSlug}`,
        component: path.resolve(`./src/templates/animal/index.jsx`),
        context: {
          id: animal.id,
        },
    })
};
