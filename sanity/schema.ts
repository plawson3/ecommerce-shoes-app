import { type SchemaTypeDefinition } from 'sanity'
import { product } from './productSchema'
import { category } from './categorySchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
}
 