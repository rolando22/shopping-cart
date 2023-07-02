import { useId } from 'react';

import { CartIcon, ClearCartIcon } from './../';

import './Cart.css';

export function Cart() {
    const cartCheckboxId = useId();

    return (
        <>
            <label 
                htmlFor={cartCheckboxId} 
                className='Cart-button'
            >
                <CartIcon />
            </label>
            <input 
                type='checkbox' 
                id={cartCheckboxId} 
                hidden 
            />
            <aside className='Cart'>
                <ul>
                    <li className='Cart-item'>
                        <img 
                            className='Cart-item-img'
                            src='https://i.dummyjson.com/data/products/30/thumbnail.jpg' 
                            alt='Key' 
                        />
                    </li>
                    <div>
                        <strong>Key</strong> - $30
                    </div>
                    <footer className='Cart-footer'>
                        <small>Qty: 1</small>
                        <button className='Cart-footer-add'>+</button>
                    </footer>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
}
