import { useState } from 'react';
import useCartQuantity from '../hooks/useCartQuantity';

const ProductCard = ({ product, cartList, setCartList }) => {
	const [inCart, setInCart] = useState(false);
	const {
		quantity,
		setQuantity,
		updateQuantity,
		incrementQuantity,
		decrementQuantity,
	} = useCartQuantity(product, cartList, setCartList);

	   
    // TODO: A pop-up which says "Successfully Added to cart!!"
    
	const handleAddToCart = () => {
		const alreadyInCart = cartList.some((item) => item.id === product.id);
		if (!alreadyInCart && quantity !== 0) {
            setCartList([...cartList, { ...product, quantity: quantity  }]);
			setInCart(true);
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
					onChange={(e) => {
						const newQuantity = e.target.valueAsNumber;
						if (newQuantity >= 1) {
							updateQuantity(newQuantity);
						}
					}}
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
