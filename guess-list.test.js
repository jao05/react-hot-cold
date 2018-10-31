import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from './guess-list';


describe('<GuessList />', () => {

	it('Renders without crashing', () => {

		// The component uses an array, so the test should also
		// That's why I create one here
		let guess = [1, 2, 3];

		shallow(<GuessList guesses={guess}/>);
	});

	it("Renders it's child elements", () => {

		let guess = [1, 2, 3];
		let index = [0, 1, 2];
		const wrapper = shallow(<GuessList guesses={guess}/>);

		expect(wrapper.contains(<ul id="guessList" className="guessBox clearfix">{guesses}</ul>))to.equal.true;
	});
});