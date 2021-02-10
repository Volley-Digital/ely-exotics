import React from 'react';

const InStock = ({inStock}) => {
    const stock = inStock ? 'In stock' : 'Out of stock'

    const stockClasses = inStock ? 'bg-gradient-to-b from-primary-light to-primary-dark' : 'bg-red-default'
    return (
        <div className={`${stockClasses} px-4 py-2 text-white-0 z-10 font-black italic heading-font text-lg`}>
            {stock}
        </div>
    )
}

export default InStock;