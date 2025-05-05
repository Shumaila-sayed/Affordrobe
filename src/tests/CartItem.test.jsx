import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import CartItem from '../Components/CartItem';

describe('CartItem Component', () => {
	const mockSetCartList = vi.fn();
	const mockProduct = {
		id: 1,
		title: 'Black T-shirt',
		price: 50,
		image: 'mock.jpg',
	};
	const mockCartList = [];

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('renders product information correctly', () => {
		render(
			<CartItem
				product={mockProduct}
                cartList={mockCartList}
                setCartList={mockSetCartList}
			/>
        );

        expect(screen.getByText(/Black T-shirt/i)).toBeInTheDocument();
        expect(screen.getByText(/\$ 50/i)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', 'mock.jpg');
    });
    
    it('calls handleDeleteItem when button is clicked', async () => {
        render(
            <CartItem
                product={mockProduct}
                cartList={mockCartList}
                setCartList={mockSetCartList}
            />
        );

        const button = screen.getByText(/delete/i);
        await userEvent.click(button);

        expect(mockSetCartList).toHaveBeenCalledWith(
            expect.not.arrayContaining([expect.objectContaining({ id: 1 })])
        );
    });

});
