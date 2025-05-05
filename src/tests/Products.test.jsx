import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import Products from '../pages/Products';

// Mock ProductCard
vi.mock('../Components/ProductCard', () => ({
	default: ({ product }) => (
		<div data-testid='product-card'>{product.title}</div>
	),
}));

// Mock fetch
const mockProducts = [
	{ id: 1, title: 'Product 1' },
	{ id: 2, title: 'Product 2' },
];

describe('Products Component', () => {
	beforeEach(() => {
		window.fetch = vi.fn(() =>
			Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockProducts),
			})
		);
	});

	afterEach(() => {
		vi.resetAllMocks();
	});

	it('renders loading initially and then shows products', async () => {
		render(
			<Products
				cartList={[]}
				setCartList={() => {}}
			/>
		);

		expect(screen.getByText(/loading/i)).toBeInTheDocument();

		// Wait for products to render
		await waitFor(() => {
			expect(screen.getAllByTestId('product-card').length).toBe(2);
		});
	});

	it('shows error if fetch fails', async () => {
		window.fetch = vi.fn(() => Promise.reject('API is down'));

		render(
			<Products
				cartList={[]}
				setCartList={() => {}}
			/>
		);

		await waitFor(() =>
			expect(screen.getByText(/error fetching products/i)).toBeInTheDocument()
		);
	});
});
