import { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';

import CardContainer from './components/CardContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

import { fetchCharacter, fetchAllCharacters } from './api';

function App() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');

	const fetchQuery = (userQuery) => {
		setQuery(userQuery);
	};

	const [showError, setShowError] = useState(false);

	useEffect(() => {
		const getCharData = async () => {
			try {
				if (!query) {
					const charData = await fetchAllCharacters();
					setData(charData);
				} else {
					const CharQuery = await fetchCharacter(query);
					setData(CharQuery);
				}
			} catch (error) {
				setShowError(true);
			}
		};
		getCharData();
	}, [query]);

	return (
		<div className="App">
			<Header />
			<SearchBar fetchQuery={fetchQuery} />
			{showError && (
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					Something went wrong
				</Alert>
			)}
			<CardContainer data={data} />
			<Footer />
		</div>
	);
}

export default App;
