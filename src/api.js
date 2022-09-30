import axios from 'axios';

export const URL = `https://rickandmortyapi.com/api/character`;

export const fetchAllCharacters = async () => {
	try {
		const { results } = await axios.get(URL).then((value) => value.data);
		return results;
	} catch (error) {
		console.error(error);
	}
};

export const fetchCharacter = async (query) => {
	try {
		const url = `https://rickandmortyapi.com/api/character/?name=${query}`;
		const { data } = await axios.get(url);
		return data.results;
	} catch (error) {
		console.log(error);
	}
};
