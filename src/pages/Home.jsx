import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>This is home</h1>

			<NavLink to='/products'>
				<button>Discover Your Style</button>
			</NavLink>
		</div>
	);
};

export default Home;
