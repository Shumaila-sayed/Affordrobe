import { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import Spinner from '../Components/Spinner';

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
		<div className='bg-grey min-h-screen'>
			<h1 className='text-center text-coral-red text-2xl pt-8 font-bold font-cal tracking-wider '>
				Discover Your Style
			</h1>

			{isLoading ? (
				<Spinner />
			) : errorMessage ? (
				<p className='text-red-800 text-center mt-15 text-2xl'>
					{errorMessage}
				</p>
			) : (
				<div
					className=' grid grid-cols-[repeat(auto-fit,minmax(12em,0.6fr))] gap-y-8 gap-x-8 py-8 place-items-center 
                 lg:grid-cols-[repeat(auto-fit,minmax(22em,1fr))] lg:mx-16'
				>
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
		</div>
	);
};

export default Products;
