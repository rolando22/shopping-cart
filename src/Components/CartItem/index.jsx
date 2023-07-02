import './CartItem.css';

export function CartItem({ thumbnail, price, title, quantity, addToCart, removeFromCart }) {
    return (
        <li className='CartItem'>
            <img 
                className='CartItem-img'
                src={thumbnail} 
                alt={title} 
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer className='CartItem-footer'>
                <small>Qty: {quantity}</small>
                <button 
                    className='CartItem-footer-add'
                    onClick={addToCart}
                >
                    +
                </button>
                <button 
                    className='CartItem-footer-remove'
                    onClick={removeFromCart}
                >
                    -
                </button>
            </footer>
        </li>
    );
}
