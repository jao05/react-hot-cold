import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';


describe('<GuessForm />', () => {

	it('Renders without crashing', () => {

		shallow(<GuessForm />);
	});

	it('Should fire the callback function', () => {

		const callback = jest.fn();
		const wrapper = mount(<GuessForm onSubmit={callback} />);
		const value = 21;
		wrapper.instance().setEditing(true);
    	wrapper.update();
		wrapper.find('input[type="number"]').instance().value = value;
		wrapper.simulate('submit');
    	expect(callback).toHaveBeenCalledWith(value);

	});
});