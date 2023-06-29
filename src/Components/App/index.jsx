import { useState } from 'react';

import { Header, Products } from '../';

import { products as initialProducts } from '../../mocks/products.json';

import './App.css';

export function App() {
    const [products, setProducts] = useState(initialProducts);

    return (
        <>
            <Header />
            <Products products={products} />
        </>
    )
}
