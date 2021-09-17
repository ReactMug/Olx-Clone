import React from 'react'
import Product from './product/Product';
import './Products.css'

function Products() {
    return (
        <div className='products'>
            <div className='products__first'>
            <Product />
            <Product />
            <Product />
            </div>
            <div className='products__sec'>
            <Product />
            <Product />
            <Product />
            </div>
        </div>
    )
}

export default Products
