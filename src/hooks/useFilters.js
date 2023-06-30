import { useState } from "react";

export function useFilters() {
    const [filters, setFilters] = useState({ minPrice: 0, category: 'all' });

    const filterProducts = ({ products }) => 
        products.filter(product => 
            product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
    );

    return { setFilters, filterProducts };
}
