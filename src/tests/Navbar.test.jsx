import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';

describe('Navbar Component', () => {
	it('renders navigation links correctly', () => {
		render(
			<MemoryRouter>
				<Navbar cartList={[]} />
			</MemoryRouter>
		);

		expect(screen.getByText(/Affordrobe/i)).toBeInTheDocument();
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Shop')).toBeInTheDocument();
		expect(screen.getByText('0')).toBeInTheDocument();
	});

	it('calculates and displays correct cart quantity', () => {
		const mockCartList = [
			{ id: 1, title: 'Product 1', quantity: 2 },
			{ id: 2, title: 'Product 2', quantity: 3 },
		];

		render(
			<MemoryRouter>
				<Navbar cartList={mockCartList} />
			</MemoryRouter>
		);

		expect(screen.getByText('5')).toBeInTheDocument();
	});

	it('applies active class to current route link', () => {
		render(
			<MemoryRouter initialEntries={['/products']}>
				<Navbar cartList={[]} />
			</MemoryRouter>
		);
		
		const shopLink = screen.getByText('Shop');
		expect(shopLink).toHaveClass('text-peach');
	});
});
