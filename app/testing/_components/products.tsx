import { ProductType } from '@/app/training/_type/product.responce.type'
import React from 'react'
import { Productstype } from '../_types/products.type';

 export const Products = (props: Productstype) => {
   return (
     <div>
       <p>{props.title}</p>
       <p>{props.description}</p>
       <p>{props.price}</p>
       <p>{props.rating}</p>
     </div>
   );
 };

export default Products;