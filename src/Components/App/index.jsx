import { Cart, Header, Products } from '../';

import { CartProvider } from './../../contexts/cart';

import { useFilters } from './../../hooks/useFilters';

import { products } from '../../mocks/products.json';

import './App.css';

export function App() {
    const { filterProducts } = useFilters();

    const filtedProducts = filterProducts({ products });

    return (
        <CartProvider>
            <Header/>
            <Cart />
            <Products products={filtedProducts} />
        </CartProvider>
    )
}
