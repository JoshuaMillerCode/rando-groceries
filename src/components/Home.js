import React, { useState } from 'react';

export default function Home(props) {
	const [cardText, updateCardText] = useState('');

	const addACard = element => {
		let promptCardText = window.prompt('Enter Your Text', 'enter text here');
		const list = document.getElementById(element);
		const card = document.createElement('li');
		card.innerText = promptCardText;
		list.appendChild(card);
		return;
	};
	const addGerman = event => {
		return addACard('german-list');
	};
	const addKellie = event => {
		return addACard('kellie-list');
	};
	const addAllegra = event => {
		return addACard('allegra-list');
	};
	const addNicole = event => {
		return addACard('nicole-list');
	};
	return (
		<div className="Page">
			<div className="column">
				<h2 className="heading german">German</h2>
				<ul id="german-list">
					<li>1 Card</li>
					<li>43 Card</li>
				</ul>
				<button onClick={addGerman}>Add A Card</button>
			</div>
			<div className="column">
				<h2 className="heading kellie">Kellie</h2>
				<ul id="kellie-list">
					<li>1 Card</li>
					<li>3 Card</li>
				</ul>
				<button onClick={addKellie}>Add A Card</button>
			</div>
			<div className="column">
				<h2 className="heading allegra">Allegra</h2>
				<ul id="allegra-list">
					<li>1 Card</li>
					<li>2 Card</li>
				</ul>
				<button onClick={addAllegra}>Add A Card</button>
			</div>
			<div className="column">
				<h2 className="heading nicole">Nicole</h2>
				<ul id="nicole-list">
					<li>1 Card</li>
					<li>2 Card</li>
				</ul>
				<button onClick={addNicole}>Add A Card</button>
			</div>
		</div>
	);
}
