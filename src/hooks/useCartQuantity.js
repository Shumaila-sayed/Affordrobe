import { useState } from 'react';

const useCartQuantity = (product, cartList, setCartList) => {
	const [quantity, setQuantity] = useState(product.quantity || 1);

	const updateQuantity = (newQuantity) => {
		setQuantity(newQuantity);
		const updatedCart = cartList.map((item) =>
			item.id === product.id ? { ...item, quantity: newQuantity } : item
		);
		setCartList(updatedCart);
	};

	const incrementQuantity = (e) => {
		e.preventDefault();
		updateQuantity(quantity + 1);
	};

	const decrementQuantity = (e) => {
		e.preventDefault();
		if (quantity > 1) {
			updateQuantity(quantity - 1);
		}
	};

	return {
		quantity,
		setQuantity,
		updateQuantity,
		incrementQuantity,
		decrementQuantity,
	};
};

export default useCartQuantity;
