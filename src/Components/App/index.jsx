import { useState } from 'react';

import { Products } from '../';

import { products as initialProducts } from '../../mocks/products.json';

import './App.css';

export function App() {
    const [products, setProducts] = useState(initialProducts);

    return (
        <>
            <h1>Shopping Cart</h1>
            <Products products={products} />
        </>
    )
}
