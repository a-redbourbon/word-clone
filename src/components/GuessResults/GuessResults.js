import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import Guess from '../Guess/Guess';

function GuessResults({ guesses, answer }) {
	return (
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
				<Guess key={num} value={guesses[num]} answer={answer} />
			))}
		</div>
	);
}

export default GuessResults;
