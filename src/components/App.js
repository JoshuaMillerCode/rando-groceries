import React, { useState, useEffect } from 'react';
import Form from './Form';
import ShoppingCart from './ShoppingCart';

export default function App(props) {
	const [products, setProducts] = useState([]);
	const [cart, updateCart] = useState([]);
	const [query, setQuery] = useState({
		baseURL: 'https://api.spoonacular.com/food/products/search?query=',
		optionQuery: '',
		num: '&number=',
		optionNum: '',
		apiKey: `&apiKey=01a57e9d2455402581f4857b23c62e43`,
		searchURL: ''
	});

	useEffect(() => {
		if (query.searchURL) {
			(async () => {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setProducts(
						data.products.map(product => {
							return {
								...product,
								isPurchased: false
							};
						})
					);
				} catch (error) {
					console.error(error);
				}
			})();
		}
	}, [query]);

	return (
		<div className="Page-wrapper">
			<div className="search-bar">
				<Form key={'search-form'} query={query} setQuery={setQuery} />
			</div>

			<main>
				<div className="product-container">
					{Object.keys(products).length
						? products.map((product, index) => {
								return (
									<div
										key={index}
										id={product.id}
										className="card"
										onClick={evt => {
											const selectedItem = products.splice(index, 1);
											updateCart([...cart, ...selectedItem]);
											const newProducts = products.filter(
												product => product != selectedItem
											);

											setProducts(newProducts);
										}}
									>
										<img src={product.image} />
										<h2>{product.title}</h2>
									</div>
								);
						  })
						: ''}
				</div>
				<aside>
					<ShoppingCart
						products={products}
						setProducts={setProducts}
						cart={cart}
						updateCart={updateCart}
					/>
				</aside>
			</main>
		</div>
	);
}
