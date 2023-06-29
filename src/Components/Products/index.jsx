import './Products.css';

export function Products({ products }) {
    return (
        <main className='Products'>
            <ul className='Products-list'>
                {products.map(product => 
                    <li className='Products-item' key={product.id}>
                        <img
                            className='Products-item-img' 
                            src={product.thumbnail} 
                            alt={product.title} 
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                    </li>
                )}
            </ul>
        </main>
    );
}
