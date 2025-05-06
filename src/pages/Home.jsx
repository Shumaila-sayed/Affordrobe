import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div>
			<h1>Find Products That Matches Your Style</h1>
			<p>
				Browse through our diverse range of meticulously crafted garments,
				designed to bring out your individuality and cater to your sense of
				style.
			</p>

			<NavLink to='/products'>
				<button>Shop Now</button>
			</NavLink>

			<div>
				<p>200+</p>
				<p>International Brands</p>
			</div>
			<div>
				<p>2,000+</p>
				<p>High-Quality Products</p>
			</div>
			<div>
				<p>35,000+</p>
				<p>Happy Customers</p>
			</div>
			</div>
			<div>
				<img src="" alt="" />
			</div>
		</>
		
	);
};

export default Home;
