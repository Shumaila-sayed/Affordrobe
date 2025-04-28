import App from "./App";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const routes = [
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'products',
		element: <Products />,
	},
	{
		path: 'cart',
		element: <Cart />,
	},
];

export default routes;
