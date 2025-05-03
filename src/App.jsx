import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";


const App = () => {
	const [cartList, setCartList] = useState([]);

	return (
		<>
			<Navbar cartList={cartList} />
			<div>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/products'
						element={
							<Products
								setCartList={setCartList}
							/>
						}
					/>
					<Route
						path='/cart'
						element={
							<Cart
								cartList={cartList}
								setCartList={setCartList}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	);
};

export default App;
