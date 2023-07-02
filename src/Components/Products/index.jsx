import { CartButton } from '../CartButton';

import { useCart } from '../../hooks/useCart';

import './Products.css';

export function Products({ products }) {
    const { cart, addToCart, removeFromCart } = useCart();

    const handleAddToCart = (product) => () => addToCart(product);
    const handleRemoveFromCart = (productId) => () => removeFromCart(productId);

    const checkProductInCart = (productId) => cart.some(item => item.id === productId);

    return (
        <main className='Products'>
            <ul className='Products-list'>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product.id); 

                    return (
                        <li className='Products-item' key={product.id}>
                            <img
                                className='Products-item-img' 
                                src={product.thumbnail} 
                                alt={product.title} 
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <CartButton 
                                    isProductInCart={isProductInCart} 
                                    addToCart={handleAddToCart(product)}
                                    removeFromCart={handleRemoveFromCart(product.id)}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
