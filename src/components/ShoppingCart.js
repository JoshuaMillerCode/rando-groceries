import React, { useState } from 'react';

export default function ShoppingCart(props) {
	return (
		<div className="shopping-cart">
			<h3>Shopping Cart</h3>
			<span></span>
			<div className="cart-container">
				{Object.keys(props.cart).length
					? props.cart.map((product, index) => {
							return (
								<div
									key={index}
									className="cart-card"
									onClick={evt => {
										const selectedItem = props.cart.splice(index, 1);
										props.setProducts([...props.products, ...selectedItem]);
										const newProducts = products.filter(
											product => product != selectedItem
										);
										props.updateCart(newProducts);
									}}
								>
									<img src={product.image} />
									<h4>{product.title}</h4>
								</div>
							);
					  })
					: ''}
			</div>
			<button
				onClick={() => {
					props.updateCart([]);
				}}
			>
				Buy Cart
			</button>
		</div>
	);
}
