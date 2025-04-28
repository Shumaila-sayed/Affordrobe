import { Link } from "react-router-dom";

const App = () => {
	return (
		<div>
			<h1>Hello this is the main page of the app</h1>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='products'>Shop</Link>
					</li>
					<li>
						<Link to='cart'>Cart</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default App;
