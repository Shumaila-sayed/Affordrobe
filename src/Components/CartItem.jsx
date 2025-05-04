import { useState } from 'react';

const CartItem = ({ product, cartList, setCartList }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const incrementQuantity = (e) => {
			e.preventDefault();
			setQuantity(quantity + 1);
		};

		const decrementQuantity = (e) => {
			e.preventDefault();
			if (quantity > 1) {
				setQuantity(quantity - 1);
            }
		};
    
    const handleDeleteItem = () => {
        const newCart = cartList.filter((item) => item.id !== product.id);
        setCartList(newCart);
        setQuantity(0);
    }

	return (
		<div>
			<img
				src={product.image}
				alt={product.title}
			/>
			<div>
				<h2>{product.title}</h2>
				<div>
					<button onClick={handleDeleteItem} >Delete</button>
					<div>
						<button onClick={decrementQuantity} >-</button>
						<input
							type='number'
							value={quantity}
							onChange={(e) => setQuantity(e.target.valueAsNumber)}
						/>
						<button onClick={incrementQuantity}>+</button>
					</div>
				</div>
			</div>
			<p>{`$ ${product.price}`}</p>
		</div>
	);
};

export default CartItem;
