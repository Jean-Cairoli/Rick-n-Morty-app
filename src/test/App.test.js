import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import JSONDATA from './MOCKDATA.json';

describe('App test', () => {
	it('should display the <Header /> component', () => {
		render(<Header />);
		const header = screen.getByRole('heading', {
			name: /fandom wiki/i,
		});
		expect(header).toBeInTheDocument();
		expect(header).toHaveTextContent(/fandom wiki/i);
	});

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
