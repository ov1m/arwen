import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Arwen from './Arwen';

test('renders correctly', () => {
	const tree = renderer.create(
		<Arwen />
	).toJSON();
	expect(tree).toMatchSnapshot();
});
