// "use client";

import { getProducts } from '@/helpers';
import React from 'react'
import ProductCard from './ProductCard';
import Container from './Container';

async function Products() {

    const {ProductsData : products} = await getProducts();

  return (
    <Container className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
        {products?.map((product) => {
            return (
                <ProductCard key={product._id} product={product} />
            )
        })}
    </Container>
  )
}

export default Products