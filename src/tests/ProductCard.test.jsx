import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import ProductCard from '../Components/ProductCard';

describe('ProductCard Component', () => {
	const mockSetCartList = vi.fn();
	const mockProduct = {
		id: 1,
		title: 'Mock Product',
		price: 100,
		image: 'mock.jpg',
	};
	const mockCartList = [];

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('renders product information correctly', () => {
		render(
			<ProductCard
				product={mockProduct}
				cartList={mockCartList}
				setCartList={mockSetCartList}
			/>
		);

		expect(screen.getByText(/mock product/i)).toBeInTheDocument();
		expect(screen.getByText(/\$ 100/i)).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('src', 'mock.jpg');
	});

	it('calls handleAddToCart when button is clicked', async () => {
		render(
			<ProductCard
				product={mockProduct}
				cartList={mockCartList}
				setCartList={mockSetCartList}
			/>
		);

		const button = screen.getByText(/add to cart/i);
		await userEvent.click(button);

		expect(mockSetCartList).toHaveBeenCalledWith([
			expect.objectContaining({
				id: 1,
				title: 'Mock Product',
				quantity: 1,
			}),
		]);
	});

	it('displays temporary message after adding to cart', async () => {
		render(
			<ProductCard
				product={mockProduct}
				cartList={mockCartList}
				setCartList={mockSetCartList}
			/>
		);

		await userEvent.click(screen.getByText(/add to cart/i));
		expect(
			screen.getByText(/this message is displayed for 3 seconds/i)
		).toBeInTheDocument();
	});
});
