import { NavLink } from 'react-router';

const Navbar = ({ cartList }) => {
	return (
		<header className='flex justify-between mt-3 px-3 pb-1.5 border-b-peach/60 border-b-3 shadow bg-amber-50/50 lg:px-6 font-cal'>
			<NavLink
				to='/'
				className='font-cal text-peach  text-2xl'
			>
				AFFORDROBE
			</NavLink>
			<nav>
				<ul className='flex gap-12 mr-28'>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? 'text-peach font-semibold border-b-2 border-peach hidden lg:block'
									: 'text-gray-600 hover:text-peach hidden lg:block'
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
									? 'text-peach font-semibold border-b-2 border-peach hidden lg:block'
									: 'text-gray-600 hover:text-peach hidden lg:block'
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
								? 'text-peach font-semibold border-b-2 border-peach'
								: 'text-gray-600 hover:text-peach'
						}
					>
						<div className='flex'>
							{' '}
							<img
								src='shopping_cart.png'
								alt='Cart'
							/>
							<p
								className={`mb-2 text-[0.8em] bg-coral-red rounded-[100%] px-2 text-amber-50 ${
									cartList.length > 0 ? 'animate-bounce' : ''
								}`}
							>
								{cartList.reduce((acc, product) => {
									const qty = Number(product.quantity);
									return acc + qty;
								}, 0)}
							</p>
						</div>
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
