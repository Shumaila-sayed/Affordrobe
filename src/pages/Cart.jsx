import { NavLink } from 'react-router';
import CartItem from '../Components/CartItem';

const Cart = ({ cartList, setCartList }) => {
	return (
		<div>
			{cartList.length === 0 ? (
				<>
					<h1>No items have been added to your cart yet🛒</h1>
					<NavLink to='/products'>Continue Shopping</NavLink>
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

	const subTotal = cartList.reduce((acc, product) => {
		const qty = Number(product.quantity);
		const price = Number(product.price);
		return Math.round(acc + qty * price) ;
	}, 0);

	const vat = (subTotal * 25) / 100;	

	return (
		<>
			<h1>Review Your Order</h1>
			<div>
				{cartList.map((product) => (
					<CartItem
						product={product}
						cartList={cartList}
						setCartList={setCartList}
						key={product.id}
					/>
				))}
			</div>
			<div>
				<h2>Order Summary</h2>
				<div><p>SubTotal</p><p>{subTotal}</p></div>
				<div><p>VAT(25%)</p><p>{vat}</p></div>
				<div><p>Total</p><p>{subTotal + vat}</p></div>
				<button>Checkout</button>
			</div>
			
		</>
	);
};

export default Cart;
