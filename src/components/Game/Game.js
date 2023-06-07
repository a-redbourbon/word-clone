import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';
import ResetButton from '../ResetButton/ResetButton';

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('running');

	function handleGuess(label) {
		const newGuess = {
			label,
			id: crypto.randomUUID(),
			letters: label.split(''),
		};
		const nextGuesses = [...guesses, newGuess];
		setGuesses(nextGuesses);
		//check game status
		const numOfTries = nextGuesses.length;
		if (label === answer) {
			const newGameStatus = 'win';
			setGameStatus(newGameStatus);
		}
		if (numOfTries >= NUM_OF_GUESSES_ALLOWED) {
			const newGameStatus = 'lose';
			setGameStatus(newGameStatus);
		}
	}

	function resetGame() {
		setGuesses([]);
		const newGameStatus = 'running';
		setGameStatus(newGameStatus);
		answer = sample(WORDS);
		console.info({ answer });
	}

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			{gameStatus !== 'running' && (
				<ResetButton resetGame={resetGame} />
			)}
			<GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
			{gameStatus === 'win' && (
				<WinBanner numOfTries={guesses.length} />
			)}
			{gameStatus === 'lose' && <LoseBanner answer={answer} />}
		</>
	);
}

export default Game;
