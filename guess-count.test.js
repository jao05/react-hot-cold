import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessCount from './guess-count';


describe('<GuessCount />', () => {

	it('Renders without crashing', () => {

		shallow(<GuessCount />);
	});

	it('Should render the number of guesses made thus far', () => {

		let TEST_COUNT = 5;

		let wrapper = shallow(<GuessCount guessCount={TEST_COUNT}/>);
		expect(wrapper.contains(TEST_COUNT)).toBe(true);
	});

});