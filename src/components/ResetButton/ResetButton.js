import React from 'react';

function ResetButton({ resetGame }) {
	return (
		<button className='reset' id='reset' onClick={resetGame}>
			New Game
		</button>
	);
}

export default ResetButton;
