import { useState } from 'react';

const ProductCard = ({ product, cartList, setCartList }) => {
	const [quantity, setQuantity] = useState(0);
	const [inCart, setInCart] = useState(false);

	const incrementQuantity = (e) => {
		e.preventDefault();
		setQuantity(quantity + 1);
	};

	const decrementQuantity = (e) => {
		e.preventDefault();
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	};

	const handleAddToCart = () => {
		const alreadyInCart = cartList.some((item) => item.id === product.id);
		if (!alreadyInCart && quantity !== 0) {
            setCartList([...cartList, { ...product, quantity: quantity  }]);
            setInCart(true)
		}
    };
    
    const handleRemoveFromCart = () => {
        const newCart = cartList.filter((item) => item.id !== product.id);
        setCartList(newCart);
        setQuantity(0)
        setInCart(false);
    }

	return (
		<div>
			<img
				src={product.image}
				alt={product.title}
			/>
			<h3>{product.title}</h3>
			<p>{`$ ${product.price}`}</p>
			<div>
				<button onClick={decrementQuantity}>-</button>
				<input
					type='number'
					value={quantity}
					onChange={(e) => setQuantity(e.target.valueAsNumber)}
				/>
				<button onClick={incrementQuantity}>+</button>
			</div>
			{inCart ? (
				<button onClick={handleRemoveFromCart}>Remove from Cart</button>
			) : (
				<button onClick={handleAddToCart}>Add to cart</button>
			)}
		</div>
	);
};

export default ProductCard;
