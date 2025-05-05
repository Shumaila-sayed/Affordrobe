import { NavLink } from "react-router";

const Navbar = ({cartList}) => {
    return (
			<header>
				<NavLink
					to='/'
				>
					Logo
				</NavLink>
				<nav>
					<ul>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive
										? 'text-blue-600 font-semibold border-b-2 border-blue-600'
										: 'text-gray-600 hover:text-blue-500'
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/products'
								className={({ isActive }) =>
									isActive
										? 'text-blue-600 font-semibold border-b-2 border-blue-600'
										: 'text-gray-600 hover:text-blue-500'
								}
							>
								Shop
							</NavLink>
						</li>
					</ul>
				</nav>
				<ul>
					<li>
						<NavLink
							to='/cart'
							className={({ isActive }) =>
								isActive
									? 'text-blue-600 font-semibold border-b-2 border-blue-600'
									: 'text-gray-600 hover:text-blue-500'
							}
						>
						{`Cart ${cartList.reduce((acc, product) => {
							const qty = Number(product.quantity);
							return acc + qty;
						}, 0)}`}
						</NavLink>
					</li>
				</ul>
			</header>
		);
} 

export default Navbar;
