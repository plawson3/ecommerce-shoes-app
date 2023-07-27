import { defineType, defineField } from "sanity"


export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'categoryname',
            title: 'Category Name',
            type: 'string'
        }),
        defineField({
            name: 'categoryslug',
            title: 'Category Slug',
            type: 'slug',
            options: {
                source: 'categoryname',
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }),
    ]
})