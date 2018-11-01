import React from 'react';
import {shallow, mount} from 'enzyme';
import Feedback from './feedback';


describe('<Feedback />', () => {

	it('Renders without crashing', () => {

		shallow(<Feedback />);
	});

	it('Renders some feedback', () => {

		let TEST_FEEDBACK = 'Testing.....'

		let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
		expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
	});
});