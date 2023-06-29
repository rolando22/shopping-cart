import { useState } from 'react';

import './Filters.css';

const categories = [
    { id: 0, value: 'all', text: 'Todas' },
    { id: 1, value: 'laptops', text: 'Pórtatiles' },
    { id: 2, value: 'smartphones', text: 'Celulares' },
];

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0);

    const handleOnChangePrice = (event) => {
        const newMinPrice = event.target.value;
        setMinPrice(newMinPrice);
        onChange(prevState => ({ ...prevState, minPrice: newMinPrice }));
    };

    const handleOnChangeCategory = (event) => {
        const newCategory = event.target.value;
        onChange(prevState => ({ ...prevState, category: newCategory }));
    };

    return (
        <section className='Filters'>
            <div className='Filters-item'>
                <label htmlFor='price'>Precio a partir de:</label>
                <input 
                    type='range' 
                    id='price'
                    min='0'
                    max='1000'
                    value={minPrice}
                    onChange={handleOnChangePrice}
                />
                <span>${minPrice}</span>
            </div>
            <div className='Filters-item'>
                <label htmlFor='category'>Categoría</label>
                <select id='category' onChange={handleOnChangeCategory}>
                    {categories.map(category => 
                        <option key={category.id} value={category.value}>{category.text}</option>
                    )}
                </select>
            </div>
        </section>
    );
}
