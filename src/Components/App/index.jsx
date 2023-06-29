import { useState } from 'react';

import { Header, Products } from '../';

import { products as initialProducts } from '../../mocks/products.json';

import './App.css';

export function App() {
    const [products, setProducts] = useState(initialProducts);
    const [filters, setFilters] = useState({ minPrice: 0, category: 'all' });

    const filtedProducts = products.filter(product => 
        product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
    );

    return (
        <>
            <Header changeFilters={setFilters}/>
            <Products products={filtedProducts} />
        </>
    )
}
