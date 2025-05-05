import { renderHook, act } from '@testing-library/react';
import useCartQuantity from '../hooks/useCartQuantity';
import { vi, describe, it, expect } from 'vitest';

describe('useCartQuantity Hook', () => {
	const mockProduct = { id: 1, title: 'Mock', price: 10 };
	const initialCart = [{ id: 1, title: 'Mock', price: 10, quantity: 1 }];
	let cart = [...initialCart];
	const setCartList = vi.fn((newCart) => {
		cart = newCart;
	});

	it('initializes quantity correctly', () => {
		const { result } = renderHook(() =>
			useCartQuantity(mockProduct, cart, setCartList)
		);
		expect(result.current.quantity).toBe(1);
	});

	it('updates quantity with updateQuantity', () => {
		const { result } = renderHook(() =>
			useCartQuantity(mockProduct, cart, setCartList)
		);

		act(() => {
			result.current.updateQuantity(5);
		});

		expect(result.current.quantity).toBe(5);
		expect(setCartList).toHaveBeenCalledWith([{ ...mockProduct, quantity: 5 }]);
	});

	it('increments quantity correctly', () => {
		const { result } = renderHook(() =>
			useCartQuantity(mockProduct, cart, setCartList)
		);

		act(() => {
			result.current.incrementQuantity({ preventDefault: () => {} });
		});

		expect(result.current.quantity).toBe(2);
	});

	it('decrements quantity correctly but not below 1', () => {
		const { result } = renderHook(() =>
			useCartQuantity(mockProduct, cart, setCartList)
		);

		act(() => {
			result.current.decrementQuantity({ preventDefault: () => {} });
		});

		// Should still be 1
		expect(result.current.quantity).toBe(1);
	});
});
