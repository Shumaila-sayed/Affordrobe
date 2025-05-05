import useCartQuantity from '../hooks/useCartQuantity';

const CartItem = ({ product, cartList, setCartList }) => {
	const {
		quantity,
		setQuantity,
		updateQuantity,
		incrementQuantity,
		decrementQuantity,
	} = useCartQuantity(product, cartList, setCartList);

	const handleDeleteItem = () => {
		const newCart = cartList.filter((item) => item.id !== product.id);
		setCartList(newCart);
		setQuantity(0);
	};

	return (
		<div>
			<img
				src={product.image}
				alt={product.title}
			/>
			<div>
				<h2>{product.title}</h2>
				<div>
					<button onClick={handleDeleteItem}>Delete</button>
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
				</div>
			</div>
			<p>{`$ ${product.price}`}</p>
		</div>
	);
};

export default CartItem;
