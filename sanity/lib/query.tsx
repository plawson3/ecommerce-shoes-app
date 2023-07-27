export const categoryQuery = `*[_type == "product"]
{
  "category":category->categoryname,
  "slug":category->categoryslug.current    
} | 
order(productname asc)`

export const getCategoryProductQuery = `*[_type == "product"]{
    _id,
    productname,
    'category':category->categoryname,
    'categoryslug':category->categoryslug.current,
    'slug':productslug.current,
    productimage,
    price,
    discount
  } |
  order(productname asc)`

export const getAllProducts = `*[_type == "product"]
{
    _id,
    productname,
    'category':category->categoryname,
    'slug':productslug.current,
    price,
    discount,
    productimage
    
} | order(productname asc)`

export const getSingleProductQuery = `*[_type == 'product']
{
    _id,
    productname,
    price,
    discount,
    productimage,
    'slug':productslug.current,
    category->{categoryname}
} | order(productname asc)`