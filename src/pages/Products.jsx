import { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';

const Products = ({ cartList, setCartList }) => {
	const [productList, setProductList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const fetchProducts = async () => {
		setIsLoading(true);
		setErrorMessage('');

		try {
			const response = await fetch('https://fakestoreapi.com/products');

			if (!response.ok) {
				throw new Error('Failed to fetch products');
			}

			const data = await response.json();
			if (data.Response === 'False') {
				setErrorMessage(data.Error || 'Failed to fetch products.');
				setProductList([]);
				return;
			}

			if (data) {
				setProductList(data);
				setIsLoading(false);
			}
		} catch (error) {
			console.error(`Error fetching products: ${error}`);
			setErrorMessage('Error fetching products. Please try again later.');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<h1>Find Your Style</h1>

			{isLoading ? (
				<h1>Loading...</h1>
			) : errorMessage ? (
				<p className='text-red-800 text-center mt-15 text-2xl'>
					{errorMessage}
				</p>
			) : (
				<div>
					{productList.map((product) => (
						<ProductCard
							product={product}
							cartList={cartList}
							setCartList={setCartList}
							key={product.id}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default Products;
