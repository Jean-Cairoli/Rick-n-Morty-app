import { URL } from '../api';

describe('The Rick & Morty api', () => {
	test('get request to Api', () => {
		expect(URL).toBe('https://rickandmortyapi.com/api/character');
	});
});
