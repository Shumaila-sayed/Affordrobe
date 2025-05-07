import { NavLink } from 'react-router';
import CartItem from '../Components/CartItem';

const Cart = ({ cartList, setCartList }) => {
	return (
		<div className='text-center'>
			{cartList.length === 0 ? (
				<>
					<h1 className='text-3xl font-cal text-center mt-22'>
						No items have been added to your cart yet🛒
					</h1>
					<NavLink to='/products'>
						<button className='cursor-pointer font-cal bg-peach text-white w-[18em] rounded-full py-2  mt-5 hover:bg-coral-red  border-b-6  border-coral-red  hover:border-peach  '>
							Continue Shopping
						</button>{' '}
					</NavLink>
				</>
			) : (
				<Order
					cartList={cartList}
					setCartList={setCartList}
				/>
			)}
		</div>
	);
};

const Order = ({ cartList, setCartList }) => {
	const handleCheckout = (e) => {
		e.preventDefault();
		setCartList([]);
		window.open('https://www.youtube.com/watch?v=FzG4uDgje3M', '_blank');
	};

	const subTotal = cartList.reduce((acc, product) => {
		const qty = Number(product.quantity);
		const price = Number(product.price);
		return Math.round(acc + qty * price);
	}, 0);

	const vat = (subTotal * 25) / 100;

	return (
		<>
			<h1 className='font-cal text-3xl my-5 text-peach'>Review Your Order</h1>
			<div className='flex flex-col border-1 border-grey gap-4 lg:mx-50 rounded-3xl m-6'>
				{cartList.map((product) => (
					<CartItem
						product={product}
						cartList={cartList}
						setCartList={setCartList}
						key={product.id}
					/>
				))}
			</div>
			<div className='border-2 border-grey rounded-3xl m-6 font-cal lg:mx-50 p-6'>
				<h2 className='text-left text-[22px] '>Order Summary</h2>
				<div className='flex justify-between pt-3'>
					<p className='opacity-80'>SubTotal</p>
					<p> $ {subTotal}</p>
				</div>
				<div className='flex justify-between pt-3'>
					<p className='opacity-80'>VAT(25%)</p>
					<p>$ {vat}</p>
				</div>
				<div className='flex justify-between pt-3 mt-2 border-t-2 border-grey'>
					<p>Total</p>
					<p className='text-coral-red'>$ {subTotal + vat}</p>
				</div>

				<button
					className='w-full rounded-full mt-4 text-white hover:bg-peach cursor-pointer p-3 bg-coral-red  border-b-6  border-peach hover:border-coral-red '
					onClick={handleCheckout}
				>
					Checkout
				</button>
			</div>
		</>
	);
};

export default Cart;
