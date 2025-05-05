import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../pages/Cart';

const renderCart = (cartList = [], setCartList = vi.fn()) => {
	return render(
		<BrowserRouter>
			<Cart
				cartList={cartList}
				setCartList={setCartList}
			/>
		</BrowserRouter>
	);
};

describe('Cart Component', () => {
	it('shows empty cart message when cart is empty', () => {
		renderCart();
		expect(screen.getByText(/no items have been added/i)).toBeInTheDocument();
		expect(screen.getByText(/continue shopping/i)).toBeInTheDocument();
	});

	it('displays order summary when cart has items', () => {
		const cartList = [
			{ id: 1, title: 'Product 1', price: 100, quantity: 2, image: 'img.png' },
			{ id: 2, title: 'Product 2', price: 50, quantity: 1, image: 'img.png' },
		];

		renderCart(cartList);

		expect(screen.getByText(/review your order/i)).toBeInTheDocument();
		expect(screen.getByText(/order summary/i)).toBeInTheDocument();
		expect(screen.getByText('SubTotal')).toBeInTheDocument();
		expect(screen.getByText('VAT(25%)')).toBeInTheDocument();
		expect(screen.getByText('Total')).toBeInTheDocument();
		expect(screen.getByText('Checkout')).toBeInTheDocument();
	});
});
