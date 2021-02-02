import React, { useState } from 'react';

export default function Form(props) {
	const handleSubmit = evt => {
		evt.preventDefault();

		props.setQuery({
			...props.query,

			searchURL:
				props.query.baseURL +
				props.query.optionQuery +
				props.query.num +
				props.query.optionNum +
				props.query.apiKey
		});
	};
	const handleChange = evt => {
		props.setQuery({
			...props.query,
			...{ [evt.target.id]: evt.target.value.toLowerCase() }
		});
	};

	const handleOptionChange = evt => {
		props.setQuery({
			...props.query,
			...{ [evt.target.id]: evt.target.value }
		});
	};

	const generateOptions = amount => {
		const arr = [];
		for (let i = 1; i <= amount; i++) {
			arr.push(i);
		}
		return arr.map(num => {
			return (
				<option
					key={num}
					value={num}
					id="optionNum"
					onSelect={handleOptionChange}
				>
					{num}
				</option>
			);
		});
	};

	return (
		<div key={'search-form'} className="header-container">
			<div className="title">
				<h1>RandoGroceries</h1>
				<h4>Search, Browse, Select, and Buy! Its that Easy.</h4>
			</div>
			<div className="search-form">
				<h3>Search</h3>
				<form onSubmit={handleSubmit}>
					<input type="text" id="optionQuery" onChange={handleChange}></input>
					<select>{generateOptions(50)}</select> <br />
					<input className="submit" type="submit"></input>
				</form>
			</div>
		</div>
	);
}
