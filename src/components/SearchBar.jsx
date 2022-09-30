import { Box, Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';

const SearchBar = ({ fetchQuery }) => {
	const [character, setCharacter] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchQuery(character);
		if (character.length > 0) {
			setCharacter('');
		}
	};

	const handleInputchange = (e) => {
		setCharacter(e.target.value);
	};

	return (
		<Container
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Box>
				<TextField
					id="outlined-basic"
					label="Search by Name"
					variant="outlined"
					onChange={(e) => handleInputchange(e)}
					value={character}
				/>
			</Box>
			<Box sx={{ margin: 2 }}>
				<Button type="submit" variant="contained" onClick={handleSubmit}>
					Search
				</Button>
			</Box>
		</Container>
	);
};

export default SearchBar;
