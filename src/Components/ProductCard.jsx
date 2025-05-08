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

	const [isVisible, setIsVisible] = useState(false);

	const handleAddToCart = () => {
		const alreadyInCart = cartList.some((item) => item.id === product.id);
		if (!alreadyInCart && quantity !== 0) {
			setCartList([...cartList, { ...product, quantity: quantity }]);
			setInCart(true);
			setIsVisible(true);
			setTimeout(() => {
				setIsVisible(false);
			}, 3000);
		}
	};

	const handleRemoveFromCart = () => {
		const newCart = cartList.filter((item) => item.id !== product.id);
		setCartList(newCart);
		setQuantity(1);
		setInCart(false);
	};

	return (
		<div className='bg-white inset-0 flex flex-col items-center justify-center rounded-xl shadow-md cursor-pointer  h-[400px] w-[250px] overflow-hidden hover:shadow-[0_0_20px_rgba(241,218,82,0.7)]'>
			<img
				className='h-48 w-full object-contain rounded-t-xl p-1'
				src={product.image}
				alt={product.title}
			/>
			<h3 className='px-4 pt-2 font-cal font-light'>{product.title}</h3>
			<p className='place-self-start px-4 text-coral-red font-bold'>{`$ ${product.price}`}</p>
			<div className='flex gap-4 font-cal'>
				<button
					className='hover:text-peach'
					onClick={decrementQuantity}
				>
					-
				</button>
				<input
					className='w-18 text-center no-arrow hover:text-peach'
					type='number'
					value={quantity}
					onChange={(e) => {
						const newQuantity = e.target.valueAsNumber;
						if (newQuantity >= 1) {
							updateQuantity(newQuantity);
						}
					}}
				/>
				<button
					className='hover:text-peach '
					onClick={incrementQuantity}
				>
					+
				</button>
			</div>
			{inCart ? (
				<button
					className='bg-peach p-2 w-44 rounded-full mt-1.5 text-white font-cal tracking-wider hover:bg-coral-red'
					onClick={handleRemoveFromCart}
				>
					Remove from Cart
				</button>
			) : (
				<button
					className='bg-peach  border-b-6  border-coral-red hover:bg-coral-red hover:border-peach  p-2 w-44 cursor-pointer rounded-full mt-1.5 text-white font-cal tracking-wider '
					onClick={handleAddToCart}
				>
					Add to cart
				</button>
			)}
			{isVisible && (
				<p className='fixed bottom-8 right-4 z-50 w-60 pt-3 text-center bg-amber-100 text-coral-red font-cal shadow-md overflow-hidden'>
					Added to the Cart!!
					<span
						className='block h-1 bg-amber-100 mt-2 transition-all duration-3000 ease-in-out'
						style={{ animation: 'progress 3s forwards' }}
					></span>
				</p>
			)}
		</div>
	);
};

export default ProductCard;
