import { useState } from 'react';
import './App.css';

const data = [
	{
		title: 'title',
		description: 'description',
	},
	{
		title: 'One',
		description: 'description',
	},
	{
		title: 'Two',
		description: 'description',
	},
	{
		title: 'Three',
		description: 'description',
	},
	{
		title: 'Four',
		description: 'description',
	},
	{
		title: 'Five',
		description: 'description',
	},
	{
		title: 'Six',
		description: 'description',
	},
	{
		title: 'Seven',
		description: 'description',
	},
];
function App() {
	const [search, setSearch] = useState('');

	return (
		<>
			<form>
				<input
					type="search"
					placeholder="Search..."
					value={search ? search : ''}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
			<div className="container">
				{data
					.filter((item) => {
						if (search === '') return item;
						else if (item.title.toLowerCase().includes(search))
							return item;
					})
					.map((item, i) => (
						<Card key={i}>{item}</Card>
					))}
			</div>
		</>
	);
}

function Card({ children }) {
	return (
		<div className="card">
			<h2>{children.title}</h2>
			<p>{children.description}</p>
		</div>
	);
}

export default App;
