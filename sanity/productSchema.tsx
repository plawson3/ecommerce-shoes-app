import { defineType, defineField } from "sanity"


export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'productname',
            title: 'Product Name',
            type: 'string'
        }),
        defineField({
            name: 'price',
            title: 'Original Price',
            type: 'number'
        }),
        defineField({
            name: 'discount',
            title: 'Discount in %',
            type: 'number'
        }),
        defineField({
            name: 'productimage',
            title: 'Product Image',
            type: 'image'
        }),
        defineField({
            name: 'productslug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'productname',
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(',', '-')
                    .replace("'", '')
                    .slice(0, 200)
            }
        }),
        defineField({
            name: 'category',
            title: 'Select Category',
            type: 'reference',
            to: [{ type: 'category' }]
        }),
    ]
})