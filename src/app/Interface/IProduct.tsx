import { Image } from "sanity"

export interface ICategory extends IProduct {
  categoryslug: 'string'
}

export interface IProduct {
  _id: string
  productname: string
  slug: string
  category: Category
  price: number
  discount: number
  productimage: Image
}

export interface Productslug {
  current: string
  _type: string
}

export interface Category {
  categoryname: string
}

export interface Productimage {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}
