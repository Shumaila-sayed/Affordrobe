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
			<h2>Order Summary</h2>
		</>
	);
};

export default Cart;
