import React from 'react';

function GuessInput({ handleGuess, gameStatus }) {
	const [formInput, setFormInput] = React.useState('');

	const gameOver = gameStatus === 'win' || gameStatus === 'lose';

	return (
		<>
			<form
				className='guess-input-wrapper'
				onSubmit={(event) => {
					event.preventDefault();
					setFormInput('');
					handleGuess(formInput);
				}}
			>
				<label htmlFor='guess-input'>Enter guess:</label>
				<input
					id='guess-input'
					type='text'
					value={formInput}
					pattern='[A-Za-z]{5}'
					disabled={gameOver}
					onChange={(event) => {
						setFormInput(event.target.value.toUpperCase());
					}}
				/>
			</form>
		</>
	);
}

export default GuessInput;
