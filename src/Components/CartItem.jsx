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
		<div className='flex justify-between font-cal [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-grey'>
			<div className='flex lg:p-8 p-4 px-4'>
				<div className='w-[100px]'>
					<img
						className='h-[100px] w-[full] object-contain'
						src={product.image}
						alt={product.title}
					/>
				</div>

				<div className='text-left pt-3 pl-3'>
					<h2 className='lg:text-[1.2em] text-[17px]'>{product.title}</h2>

					<div>
						<button
							className='cursor-pointer text-coral-red opacity-75'
							onClick={handleDeleteItem}
						>
							Delete
						</button>
						<button
							className='hover:text-peach cursor-pointer mx-2'
							onClick={decrementQuantity}
						>
							-
						</button>
						<input
							className='w-22 text-center no-arrow hover:text-peach border-2 rounded-2xl border-peach '
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
							className='hover:text-peach cursor-pointer mx-2'
							onClick={incrementQuantity}
						>
							+
						</button>
					</div>
				</div>
			</div>
			<p className='pr-6 pt-8 lg:pt-12 text-coral-red'>{`${product.price}`}</p>
		</div>
	);
};

export default CartItem;
