export default (endSlug, base) => {
    let slug;
    if (base.parentCategory) {
        if(base.parentCategory.parents && base.parentCategory.parents[0].parents) {
            slug = `/${base.parentCategory.parents[0].parents[0].slug}/${base.parentCategory.parents[0].slug}/${base.parentCategory.slug}/${endSlug}`
        } else if (base.parentCategory.parents) {
            slug = `/${base.parentCategory.parents[0].slug}/${base.parentCategory.slug}/${endSlug}`
        } else if (base.parentCategory) {
            slug = `/${base.parentCategory.slug}/${endSlug}`
        } else {
            slug = `/${endSlug}`
        }
    } else {
        if (base && base.parents && base.parents[0].parents) {
            slug = `/${base.parents[0].parents[0].slug}/${base.parents[0].slug}/${base.slug}`
        }
        else if (base && base.parents) {
            slug = `/${base.parents[0].slug}/${base.slug}`
        } else {
            slug = `/${endSlug}`
        }
    }

    return slug
}