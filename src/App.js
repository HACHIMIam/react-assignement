import React, { Component } from 'react';
import Header from './components/header';
import { ThemeProvider } from 'styled-components';
import Stepper from './components/stepper';
import Title from './components/title';
import Form from './components/form';
import './App.css';

const theme = {
	font: 'Calibri',
	flexboxgrid: {
		// Defaults
		gridSize: 12, // columns
		gutterWidth: 0, // rem
		outerMargin: 0, // rem
		mediaQuery: 'only screen',
		container: {
			sm: 46, // rem
			md: 61, // rem
			lg: 76 // rem
		},
		breakpoints: {
			xs: 0, // em
			sm: 48, // em
			md: 64, // em
			lg: 75 // em
		}
	}
};

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div>
					<Header />
					<Stepper />
					<Title />
					<Form />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
