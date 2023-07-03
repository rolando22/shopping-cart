import { useId } from 'react';

import { useFilters } from '../../hooks/useFilters';

import './Filters.css';

const categories = [
    { id: 0, value: 'all', text: 'Todas' },
    { id: 1, value: 'laptops', text: 'Pórtatiles' },
    { id: 2, value: 'smartphones', text: 'Celulares' },
    { id: 3, value: 'home-decoration', text: 'Decoración Hogareña' },
    { id: 4, value: 'fragrances', text: 'Fragancias' },
    { id: 5, value: 'skincare', text: 'Protector de Piel' },
    { id: 6, value: 'groceries', text: 'Comestibles' },
];

export function Filters() {
    const { filters, setFilters } = useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleOnChangePrice = (event) => {
        const newMinPrice = event.target.value;
        setFilters(prevState => ({ ...prevState, minPrice: newMinPrice }));
    };

    const handleOnChangeCategory = (event) => {
        const newCategory = event.target.value;
        setFilters(prevState => ({ ...prevState, category: newCategory }));
    };

    return (
        <section className='Filters'>
            <div className='Filters-item'>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input 
                    type='range' 
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    value={filters.minPrice}
                    onChange={handleOnChangePrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div className='Filters-item'>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleOnChangeCategory}>
                    {categories.map(category => 
                        <option key={category.id} value={category.value}>{category.text}</option>
                    )}
                </select>
            </div>
        </section>
    );
}
