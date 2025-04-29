import { NavLink } from "react-router";

const Navbar = () => {
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
							Cart
						</NavLink>
					</li>
				</ul>
			</header>
		);
} 

export default Navbar;

/* 
something about how to share product information between shop and cart

 Passing data
import { Link } from 'react-router-dom';

<Link to={{ pathname: "/newPage", state: { myValue: "example" } }}>
  Go to New Page
</Link>


// Receiving data
import { useLocation } from 'react-router-dom';

const NewPage = () => {
  const location = useLocation();
  const value = location.state.myValue;

  return <div>{value}</div>;
};  */