import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import CardContainer from '../components/CardContainer';
import JSONDATA from './MOCKDATA.json';

describe('App test', () => {
	it('should display <SearchBar /> component', () => {
		render(<App />);
		const searchBar = screen.getByRole('textbox', {
			name: /search/i,
		});
		expect(searchBar).toBeInTheDocument();
		const searchButton = screen.getByRole('button', {
			name: /search/i,
		});
		expect(searchButton).toBeInTheDocument();
	});

	it('should display a list of cards', () => {
		render(<CardContainer data={JSONDATA} />);
		const charList = JSONDATA.map((char) => char.name);
		const characters = screen.getAllByTestId('dog-card');
		expect(charList.length === characters.length).toBeTruthy();
	});
});
