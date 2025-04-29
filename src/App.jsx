import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";


const App = () => {
	return (
		<>
			<Navbar />
			<div>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/products'
						element={<Products />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
				</Routes>
			</div>
		</>
	);
};

export default App;
