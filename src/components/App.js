import React, { useState } from 'react';
import Home from './Home';
export default function App(props) {
	const [name, updateName] = useState('Arthur');
	return (
		<div className="Page-wrapper">
			<h2>Ruth App</h2>
			<button onClick={e => updateName(e.target.value)} value={name + 's'}>
				Change
			</button>
			<h2>{name}</h2>
			<Home />
		</div>
	);
}
