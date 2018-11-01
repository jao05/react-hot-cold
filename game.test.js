import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';


describe('<Game />', () => {

	it('Renders without crashing', () => {

		shallow(<Game />);
	});

	it('Renders all of its child components', () => {

		const wrapper = shallow(<Game />);
		expect(wrapper.containsAllMatchingElements([<Header />, <GuessSection />, <StatusSection />, <InfoSection /> ])).toEqual(true);
	});
});