import React from 'react';
import Banner from '../Banner/Banner';

function WinBanner({ numOfTries }) {
	return (
		<Banner status='happy'>
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong> {numOfTries} guesses</strong>.
			</p>
		</Banner>
	);
}

export default WinBanner;
