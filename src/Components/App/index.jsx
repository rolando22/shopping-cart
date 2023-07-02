import { useState } from 'react';

import { Cart, Header, Products } from '../';

import { useFilters } from './../../hooks/useFilters';

import { products as initialProducts } from '../../mocks/products.json';

import './App.css';

export function App() {
    const [products, setProducts] = useState(initialProducts);
    const { filterProducts } = useFilters();

    const filtedProducts = filterProducts({ products });

    return (
        <>
            <Header/>
            <Cart />
            <Products products={filtedProducts} />
        </>
    )
}
