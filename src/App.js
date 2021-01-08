import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext } from './contexts/ProductContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		
		setCart([
			...cart, 
			item
		])

	};

	const removeItem = (itemId) => {

		setCart(
			cart.filter((item) => {

				if(item.id !== itemId){
					console.log(item);
					console.log(item.id);
					console.log(itemId);
					return item;

				} else {

				console.log(item);
				console.log(item.id);
				console.log(itemId);
			}

		}));

	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
