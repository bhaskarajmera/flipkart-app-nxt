import React from 'react'
import ProductsItemMain from './productsItemMain'
import ProductsFilter from './productsFilterMain'

const ProductsMain = () => {
    return (
        <div className='productsMain p-2'>
            <div className='productsFilter'>
                <ProductsFilter />
            </div>
            <div className='productsItemMain'>
                <ProductsItemMain />
            </div>
        </div>
    )
}

export default ProductsMain