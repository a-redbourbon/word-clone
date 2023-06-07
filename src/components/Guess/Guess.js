import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ value, answer }) {
	const guessStatus = value && checkGuess(value.label, answer);
	return (
		<>
			<p className='guess'>
				{range(5).map((num) => {
					const cellClass = `cell ${
						value ? guessStatus[num].status : ''
					}`;
					return (
						<span className={cellClass} key={num}>
							{value ? value.letters[num] : undefined}
						</span>
					);
				})}
			</p>
		</>
	);
}

export default Guess;
